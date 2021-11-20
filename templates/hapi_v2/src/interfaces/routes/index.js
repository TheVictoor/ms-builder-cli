'use strict'

const controllers = require('./controllers')
const schemas = require('./schemas')

const routes = [
  {
    path: '/',
    method: ['GET'],
    options: {
      tags: ['api'],
      notes: 'HealthCheck API',
      description: 'Ensure the API is running',
      handler: controllers.healthCheck.get,
      // validate: {
      //   failAction: async (request, h, err) => {
      //     throw err
      //   },
      //   payload: schemas.user,
      //   query: schemas.xx,
      //   params: schemas.xx,
      //   headers: schemas.xx
      // }  // you can use the validate section along with schemas to ensure structure and datatypes
    }
  }
]

module.exports = routes
