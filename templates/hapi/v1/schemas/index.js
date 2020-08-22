
const Joi = require('@hapi/joi');

module.exports = {
	urlTeste: Joi.object({
		name: joi.string().required()
	})
}