
const applicationControlller = (models) => {
	const info = (req, res, next) => {
		const payload = {
			...req.query,
			...req.body,
			...req.params,
		};

		const headers = {
			...req.headers,
		};

		models.application.info({
			payload,
			headers,
			onSuccess: (responseData) => {
				res.status(responseData.statusCode || 200).send(responseData);
				res.end();
				return;
			},
			onError: (responseError) => {
				res.status(responseError.statusCode).send(responseError);
				return;
			},
		});
	};

	return {
		info
	};
};

module.exports = applicationControlller;
