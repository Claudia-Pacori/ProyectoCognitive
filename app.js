const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const usuarios = require('./routes/usuarios');
const index = require('./routes/index');

const path = __dirname + '/views/';
const port = 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/usuarios', usuarios);
// Anadido https://www.youtube.com/watch?v=bab8b2Ix4K0&ab_channel=Bluuweb
app.use('/', index);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
