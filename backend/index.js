const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
require('./db/conn')
app.use(bodyParser());

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})

