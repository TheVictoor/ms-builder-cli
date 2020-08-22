
const applicationHandlerWrapper = require('./application-handler');

module.exports = (models) => ({
	application: applicationHandlerWrapper(models),
});
