const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

//const MONGO_USERNAME = 'userdemo';
//const MONGO_PASSWORD = 'Tecsup';
//const MONGO_HOSTNAME = '127.0.0.1';
//const MONGO_PORT = '27017';
//const MONGO_DB = 'lab05';

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

//mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

conn = new Mongo();
db = conn.getDB("dbproyecto");

db.usuarios.insert({
	nombre: "Claudia",
	apellido: "Pacori",
	email: "claudia.pacori@utec.edu.pe",
	password: "1234",
	funcion: '0'
});
