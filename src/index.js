const express = require('express');
const axios = require('axios');
require('dotenv').config();

const server = express();

const PORT = process.env.PORT || 3000;


server.get('/', (req, res) => {
    res.send('Prueba TAs!');
});


server.get('/soyTA', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_URL);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Algo salió mal" });
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});