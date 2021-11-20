'use strict'

const healthCheckWrapper = require('./health-check')

module.exports = (dependencies) => ({
  healthCheck: healthCheckWrapper(dependencies)
})
