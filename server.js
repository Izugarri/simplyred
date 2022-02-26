const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log('escuchando en el puerto 15478, 15494 y 8080');
app.listen(15494)
app.listen(15478)
app.listen(8080);