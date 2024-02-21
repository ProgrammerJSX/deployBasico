const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Puedes cambiarlo según sea necesario

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'srv1180.hostgtr.io',
    user: 'u491711087_superadmin',
    password: 'PdPbjBkJk1=',
    database: 'u491711087_deploy',
    port: '3306'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

app.post('/registrar', (req, res) => {
    let nombre = req.body.nombre;
    let query = "INSERT INTO visitantes (nombre) VALUES (?)";
    db.query(query, [nombre], (err, result) => {
        if (err) throw err;
        res.send('Nombre registrado con éxito');
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
