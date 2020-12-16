'use strict'

const adaptersWrapper = require('../adapters')
const healthCheckController = require('./health-check-controller')
const config = require('../../config')
const database = require('../database')
const queries = require('../queries')

const adapters = adaptersWrapper({
  config,
  database,
  queries
})

module.exports = {
  healthCheck: healthCheckController(adapters)
}
