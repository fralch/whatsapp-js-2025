const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuración mejorada para Ubuntu
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
            '--window-size=1920x1080'
        ],
        // Asegúrate de que este path exista en tu sistema
        executablePath: '/usr/bin/google-chrome-stable'
    }
});

// Manejo de errores de inicialización
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR GENERADO. Escanea con tu teléfono.');
});

client.on('ready', () => {
    console.log('Cliente listo!');
});

client.on('authenticated', () => {
    console.log('Autenticado con éxito!');
});

client.on('auth_failure', (msg) => {
    console.error('Error de autenticación:', msg);
});

// Manejo específico de error de desconexión
client.on('disconnected', (reason) => {
    console.log('Cliente desconectado:', reason);
    // Reintentar conexión después de un tiempo
    setTimeout(() => {
        client.initialize();
    }, 10000);
});

client.on('message', async (msg) => {
    if (msg.body.toLowerCase() === 'confirmar') {
        await msg.reply('Cita confirmada');
    }
});

    client.initialize();

    app.get( '/', (req, res) => {
        res.send('¡Hola, mundo!');
    }
    );


    app.post('/send-message', async (req, res) => {
        const { numero, mensaje } = req.body;

        console.log('Enviando mensaje:', numero, mensaje);

        if (!numero || !mensaje) {
            return res.status(400).json({ error: 'Se requiere número y mensaje' });
        }

        try {
            await client.sendMessage(`51${numero}@c.us`, mensaje);
            res.status(200).json({ message: 'Mensaje enviado' });
        } catch (err) {
            console.error('Error al enviar el mensaje:', err);
            res.status(500).json({ error: 'Error al enviar el mensaje' });
        }
    });

    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
