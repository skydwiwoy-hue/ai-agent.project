FROM node:20-bookworm-slim

# Install FFmpeg + Python
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       ffmpeg \
       python3 \
       python3-venv \
       ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Buat virtual environment Python
RUN python3 -m venv /opt/venv

# Install yt-dlp
RUN /opt/venv/bin/pip install --no-cache-dir --upgrade pip \
    && /opt/venv/bin/pip install --no-cache-dir yt-dlp

# Masukkan yt-dlp ke PATH
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

# Install dependency Node.js
COPY package*.json ./
RUN npm install --omit=dev

# Copy backend
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
