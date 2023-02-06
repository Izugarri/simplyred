const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/'));
app.set('x-powered-by', false);
app.listen(port, () => { console.log(`Escuchando en http://localhost:${port}`)
})