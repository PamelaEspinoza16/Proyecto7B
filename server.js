const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir la página de inicio de sesión
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validación básica de usuario y contraseña
    if (username === 'admin' && password === '1234') {
        res.send(`<h1>¡Bienvenido, ${username}!</h1>`);
    } else {
        res.send('<h1>Inicio de sesión fallido. Usuario o contraseña incorrectos.</h1>');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
