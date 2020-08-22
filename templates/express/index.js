require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('./plugins/swagger-options');

const config = require('./config');
const routesV1 = require('./v1/routes');

const server = express();
const router = express.Router();


server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(routesV1(router));

const swaggerDocs = swaggerJsdoc(swaggerOptions);
server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use((req, res, send) => {
	res.status(res.statusCode).send(res.bodyResponse);
});

server.listen(config.app.port);
