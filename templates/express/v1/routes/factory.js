
module.exports = ({ router, handlers, middlewares, schema }) => {

	/**
	 * @swagger
	 * /v1/application:
	 *   get:
	 *     description: some description
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: name
	 *         in: query
	 *         required: true
	 *         type: string
	 *     responses:
   *       deafult: 
   *         description: default
	 */
	router.get('/v1/application', 
		middlewares.validateSchema(schema.simpleSchema.query).query,
		middlewares.auth,
		handlers.application.info
	);

	return router;
}