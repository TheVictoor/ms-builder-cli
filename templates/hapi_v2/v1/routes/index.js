'use strict'

const controllers = require('../controllers')

const routes = [
  {
    path: '/',
    method: ['GET'],
    options: {
      tags: ['api'],
      notes: 'HealthCheck API',
      description: 'Check if the api is running',
      handler: controllers.healthCheck.get
    }
  }
]

module.exports = routes
