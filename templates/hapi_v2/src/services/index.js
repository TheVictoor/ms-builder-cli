'use strict'

const healthCheckWrapper = require('./health_check')

module.exports = (dependencies) => ({
  healthCheck: healthCheckWrapper(dependencies)
})
 