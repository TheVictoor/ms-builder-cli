'use strict';

const adaptersWrapper = require('../adapters');
const someFeatureController = require('./some-feature-controller');
const config = require('../../config');

const adapters = adaptersWrapper({
  config,
});

module.exports = {
  someFeature: someFeatureController(adapters),
};
