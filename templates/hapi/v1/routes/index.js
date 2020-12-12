'use strict';

const controllers = require('../controllers');
const schemas = require('../schemas');

const routes = [
  {
    path: '/url/test',
    method: ['GET'],
    options: {
      tags: ['api'],
      notes: 'some feature with a get method',
      description: 'its a nice feature',
      handler: controllers.someFeature.get,
      validate: {
        query: schemas.urlTeste
      },
    },
  },
];

module.exports = routes;