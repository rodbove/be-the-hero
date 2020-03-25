const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
let port = process.env.PORT || 8080

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);
