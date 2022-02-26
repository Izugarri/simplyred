const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));
console.log('escuchando en el puerto 15495 y 8080');
app.listen(8080)
app.listen(15495);