'use strict'

// import dependencies
const config = require('../../../../config')
const domain = require('../../../domain')
const adapters = require('../../../adapters')

// import services
const servicesWrapper = require('../../../services')

// import controllers
const healthCheckController = require('./health_check_controller')

// inject dependencies inside services
const services = servicesWrapper({
  domain,
  adapters,
  config,
})

// inject services inside controllers
const controllers = {
  healthCheck: healthCheckController(services)
}

// export controllers
module.exports = controllers
