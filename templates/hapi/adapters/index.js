'use strict';

const someFeatureWrapper = require('./some-feature');

module.exports = (dependencies) => ({
  someFeature: someFeatureWrapper(dependencies),
});
