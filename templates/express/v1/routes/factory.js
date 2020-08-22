
module.exports = ({ router, controllers, middlewares}) => {
	router.get('/v1/application', middlewares.auth, controllers.application.info);
	return router;
}