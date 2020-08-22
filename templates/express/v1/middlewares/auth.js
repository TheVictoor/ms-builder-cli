
const authWrapper = ({
	config,
	jwt
}) => {
	const auth = (req, res, next) => {
		try {
			// write code here
			next();
		} catch (error) {
			res.status(500).send({});
		}
	};

	return auth;
}

module.exports = authWrapper;
