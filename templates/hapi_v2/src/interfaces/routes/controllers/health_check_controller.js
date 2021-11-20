'use strict'

const {serializeError} = require('serialize-error');

module.exports = (services) => ({
  get: async (request, res) => {
    try {
      const response = await services.healthCheck.get({
        payload: {
          ...request.params
        },
        metadata: {
          ...request.header
        },    
      })
      
      return res.response(response).code(200)
    } catch (error) {
      return res.response(serializeError(error)).code(500)
    }   
  }
})
