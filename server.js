const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));
app.set('x-powered-by', false);
console.log('escuchando en el puerto 3001');
app.listen(3001);