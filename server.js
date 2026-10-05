const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

const tempDir = path.join(__dirname, 'temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Health check
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'YouTube Clipper Cloud Backend'
  });
});

// Trim YouTube video
app.post('/api/trim-youtube', (req, res) => {
  const { url, startSec, endSec, clipId } = req.body;

  // Validasi dasar
  if (
    typeof url !== 'string' ||
    !url.trim() ||
    startSec === undefined ||
    endSec === undefined
  ) {
    return res.status(400).json({
      error: 'URL, startSec, dan endSec wajib diisi.'
    });
  }

  const start = Number(startSec);
  const end = Number(endSec);

  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    start < 0 ||
    end <= start
  ) {
    return res.status(400).json({
      error: 'startSec dan endSec tidak valid.'
    });
  }

  // Batasi panjang clip maksimal 10 menit
  if (end - start > 600) {
    return res.status(400).json({
      error: 'Durasi clip maksimal 10 menit.'
    });
  }

  // ID hanya boleh berisi karakter aman
  const safeClipId = String(clipId || Date.now())
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .slice(0, 50) || String(Date.now());

  const outputFilename =
    `clip_${safeClipId}_${start}s-${end}s.mp4`;

  const outputPath = path.join(tempDir, outputFilename);

  console.log(
    `[Processing] ${url} (${start}s - ${end}s)`
  );

  /*
   * Menggunakan spawn(), bukan exec().
   * URL dikirim sebagai argument terpisah sehingga
   * tidak dieksekusi sebagai shell command.
   */
  const args = [
    '--download-sections',
    `*${start}-${end}`,

    '-f',
    'bestvideo[vcodec^=avc1][height<=1080]+bestaudio[acodec^=mp4a]/best[ext=mp4]/best',

    '--force-keyframes-at-cuts',

    '-o',
    outputPath,

    url.trim()
  ];

  const ytDlp = spawn('yt-dlp', args);

  let stderr = '';

  ytDlp.stderr.on('data', (data) => {
    stderr += data.toString();

    // Jangan memenuhi log server dengan output yang terlalu panjang
    if (stderr.length > 10000) {
      stderr = stderr.slice(-10000);
    }
  });

  ytDlp.stdout.on('data', (data) => {
    console.log(`[yt-dlp] ${data.toString().trim()}`);
  });

  ytDlp.on('error', (error) => {
    console.error('[yt-dlp spawn error]', error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: 'yt-dlp tidak dapat dijalankan di server.'
      });
    }
  });

  ytDlp.on('close', (code) => {
    if (code !== 0) {
      console.error('[yt-dlp failed]', stderr);

      if (!res.headersSent) {
        return res.status(500).json({
          error: 'Gagal memproses video YouTube.',
          details: stderr.slice(-2000)
        });
      }

      return;
    }

    if (!fs.existsSync(outputPath)) {
      console.error('[Error] Output file tidak ditemukan.');

      if (!res.headersSent) {
        return res.status(500).json({
          error: 'Video berhasil diproses tetapi file hasil tidak ditemukan.'
        });
      }

      return;
    }

    console.log(`[Success] ${outputFilename}`);

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${outputFilename}"`
    );

    const fileStream = fs.createReadStream(outputPath);

    fileStream.on('error', (error) => {
      console.error('[File stream error]', error);

      if (!res.headersSent) {
        res.status(500).json({
          error: 'Gagal membaca file hasil.'
        });
      }
    });

    fileStream.on('close', () => {
      fs.unlink(outputPath, (err) => {
        if (err && err.code !== 'ENOENT') {
          console.error('[Cleanup Error]', err);
        }
      });
    });

    fileStream.pipe(res);
  });
});

// Jalankan server
app.listen(PORT, HOST, () => {
  console.log(
    `🚀 Cloud Clip Engine running on ${HOST}:${PORT}`
  );
});
