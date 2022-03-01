const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname+'/'));
app.set('x-powered-by', false);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
