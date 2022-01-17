require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    //consultar registros
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    //crear nuevos registros
    res.json('post Usuario');
});

app.put('/usuario/:id', (req, res) => {
    //actualizar registros
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            mensaje: "El nombre es necesario"
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.delete('/usuario', (req, res) => {
    //eliminar registros (cambiar a inactivo)
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ', process.env.PORT);
});