const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log('escuchando en el puerto 3001');
app.listen(3001);