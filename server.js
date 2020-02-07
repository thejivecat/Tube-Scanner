require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => console.log('Now listening on port 3000'));

