
const handlers = require('../handlers');
const middlewares = require('../middlewares');
const schema = require('../schemas');
const factory = require('./factory');

module.exports = router => factory({ 
	router,
	handlers,
	middlewares,
	schema,
});
