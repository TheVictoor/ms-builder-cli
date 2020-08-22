const authWrapper = require('./auth');

module.exports = dependencies => ({
	auth: authWrapper(dependencies),
});
