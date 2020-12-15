'use strict';

const adaptersWrapper = require('../adapters');
const healthCheckController = require('./health-check-controller');
const config = require('../../config');
const database = require('../database')

const adapters = adaptersWrapper({
  config,
  database,
});

module.exports = {
  healthCheck: healthCheckController(adapters),
};
