
module.exports = (schema) => {
	return {
		query: (req, res, next) => {
			try {
				const	queryIsValid = schema.validate(req.query);
				if (!queryIsValid.error) return next();
				res.status(400).send(queryIsValid.error.details);
			} catch (error) {
				res.status(500).send(error.message);
				res.end();
			}
		},
		params: (req, res, next) => {
			try {
				const paramsIsValid = schema.validate(req.params);
				if (!paramsIsValid.error) return next();
				res.status(400).send(paramsIsValid.error.details);
			} catch (error) {
				res.status(500).send(error.message);
				res.end();
			}
		},
		body: (req, res, next) => {
			try {
				const bodyIsValid = schema.validate(req.body);
				if (!bodyIsValid.error) return next();
				res.status(400).send(bodyIsValid.error.details);
			} catch (error) {
				res.status(500).send(error.message);
				res.end();
			}
		}
	}
};
