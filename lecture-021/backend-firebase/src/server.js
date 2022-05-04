const express = require('express');
const cors = require('cors');
const compression = require('compression');

const router = express.Router();
const routes = require('./routes/routes');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(compression());

app.use(routes(router));

module.exports = app;