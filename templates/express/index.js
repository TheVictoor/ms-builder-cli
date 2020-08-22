require('dotenv').config();

const express = require('express');
const v1Wrapper = require('./v1/routes');
const config = require('./config');

const router = express.Router();
const server = express();

server.use(v1Wrapper(router));

server.listen(config.app.port);
