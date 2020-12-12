'use strict';

const controllers = require('../controllers');
const schemas = require('../schemas');

const routes = [
  {
    path: '/',
    method: ['GET'],
    options: {
      tags: ['api'],
      notes: 'HealthCheck API',
      description: 'Check if the api is running',
      handler: controllers.healthCheck.get,
    },
  },
];

module.exports = routes;
