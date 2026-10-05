const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// 1. Arahkan Express untuk menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// 2. Endpoint API kamu (tetap pertahankan rute API yang sudah ada)
app.post('/api/process', (req, res) => {
    // Logika pemrosesan video kamu
});

// 3. Ganti rute app.get('/') lama dengan ini agar mengirim file index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
