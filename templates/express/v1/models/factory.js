
const applicationWrapper = require('./application');

module.exports = (dependencies) => ({
	application: applicationWrapper(dependencies),
});
