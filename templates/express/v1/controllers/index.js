
const factory = require('./factory');
const config = require('../../config');
const modelsWrapper = require('../models');

const dependencies = {
	config,
};

const models = modelsWrapper(dependencies);

module.exports = factory(models);
