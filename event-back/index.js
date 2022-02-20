const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
// connect to data base
require('./src/config/config')
const router = require('./src/router/router')

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json())
app.use('/Event',router);

app.listen(port,()=>{
    console.log(`server is listening on port: ${port}`)
});
