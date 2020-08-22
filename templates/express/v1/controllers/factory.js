const applicationControllerWrapper = require('./application-controller');

module.exports = (models) => ({
	application: applicationControllerWrapper(models),
});