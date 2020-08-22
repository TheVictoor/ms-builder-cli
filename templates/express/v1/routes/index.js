
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const factory = require('./factory');

module.exports = router => factory({ 
	router,
	controllers,
	middlewares
});
