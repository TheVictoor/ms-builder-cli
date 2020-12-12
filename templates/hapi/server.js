'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const config = require('./config');
const routes = require('./v1/routes');

const init = async () => {
  const server = Hapi.server({
    port: config.app.port || 8080,
  });

  const swaggerOptions = {
    info: {
      title: 'API <%= projectName %> Documentation',
      version: '1.0.0',
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route(routes);

  return server;
};

module.exports = init();
