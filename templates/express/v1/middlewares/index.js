
const jwt = require('jsonwebtoken');

const config = require('../../config');
const factory = require('./factory');

module.exports = factory({
	jwt,
	config,
});
