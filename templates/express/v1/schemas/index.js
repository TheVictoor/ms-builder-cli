
const joi = require('joi');

const simpleSchema = {
	body: joi.object({
		name: joi.string().required(),
	}).unknown(),
	query: joi.object({
		name: joi.string().required(),
	}).unknown(),
	params: joi.object({
		name: joi.string().required(),
	}).unknown(),
};

module.exports = {
	simpleSchema,
};
