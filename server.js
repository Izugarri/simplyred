const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log('escuchando en el puerto 3000');
app.listen(3000);