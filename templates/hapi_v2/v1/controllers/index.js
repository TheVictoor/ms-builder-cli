'use strict'

const adaptersWrapper = require('../adapters')
const healthCheckController = require('./health-check-controller')
const config = require('../../config')
const queries = require('../queries')

const adapters = adaptersWrapper({
  config,
  queries
})

module.exports = {
  healthCheck: healthCheckController(adapters)
}
