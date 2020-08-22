const applicationWrapper = ({
	config,
}) => {
	const info = ({
		payload,
		headers,
		onSuccess,
		onError,
	}) => {
		try {
			return onSuccess({
				statusCode: 200,
				data: {
					name: config.app.name,
					port: config.app.port,
				}
			});
		} catch (error) {
			const retorno = {
				statusCode: 500,
				message: error.message,
			};

			return onError(retorno);
		}
	};

	return {
		info,
	}
};

module.exports = applicationWrapper;