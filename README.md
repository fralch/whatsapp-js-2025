# WhatsApp JS 2025

API para enviar mensajes a través de WhatsApp utilizando JavaScript.

## 📋 Descripción

Este proyecto proporciona una API para la automatización de mensajes de WhatsApp utilizando Node.js, Puppeteer y la biblioteca whatsapp-web.js.

## 🚀 Instalación

### Requisitos previos

#### Para sistemas Linux (Ubuntu/Debian)

**Dependencias para Chromium:**
```bash
sudo apt update
sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

### Instalar Google Chrome (si prefieres usar Chrome en lugar de Chromium)
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt-get install -f
```



```bash
executablePath: '/usr/bin/chromium-browser',
```
## Instalar Pupper 
```bash
npm install puppeteer@^19.7.0 --save
npm install express whatsapp-web.js qrcode-terminal body-parser --save
```

## Permisos de carpeta
```bash
mkdir -p ~/.wwebjs_auth
chmod 777 ~/.wwebjs_auth
```