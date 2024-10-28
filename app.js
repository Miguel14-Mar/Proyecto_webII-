const express = require('express');
const connection = require('./bd');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta para obtener todos los héroes
app.get('/heroes', (req, res) => {
    connection.query('SELECT * FROM heroes', (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
});

// Ruta para obtener un héroe por ID
app.get('/heroes/:id', (req, res) => {
    const heroId = req.params.id;
    connection.query('SELECT * FROM heroes WHERE id = ?', [heroId], (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        res.json(results[0]);
    });
});

// Ruta para obtener todos los equipos
app.get('/teams', (req, res) => {
    connection.query('SELECT * FROM teams', (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
});

// Ruta para obtener un equipo por ID
app.get('/teams/:id', (req, res) => {
    const teamId = req.params.id;
    connection.query('SELECT * FROM teams WHERE id = ?', [teamId], (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        if (results.length === 0) {
            return res.status(404).send('Equipo no encontrado');
        }
        res.json(results[0]);
    });
});

// Ruta para obtener todos los poderes
app.get('/powers', (req, res) => {
    connection.query('SELECT * FROM powers', (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
});

// Ruta para obtener un poder por ID
app.get('/powers/:id', (req, res) => {
    const powerId = req.params.id;
    connection.query('SELECT * FROM powers WHERE id = ?', [powerId], (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        if (results.length === 0) {
            return res.status(404).send('Poder no encontrado');
        }
        res.json(results[0]);
    });
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});