'use strict';

const adaptersWrapper = require('../adapters');
const healthCheckController = require('./health-check-controller');
const config = require('../../config');

const adapters = adaptersWrapper({
  config,
});

module.exports = {
  healthCheck: healthCheckController(adapters),
};
