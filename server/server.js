require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Conectado con base de datos');
});



app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT);
});