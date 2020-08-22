const authWrapper = require('./auth');
const validateSchema = require('./validate-schema');

module.exports = dependencies => ({
	auth: authWrapper(dependencies),
	validateSchema,
});
