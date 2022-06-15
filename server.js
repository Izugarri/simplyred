const express = require("express");
const path = require('path')
const port = process.env.PORT || 3001;

express()
  .set('x-powered-by', false) // hide x-powered-by header!
  .use(express.static(path.join(__dirname, '/')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))