
module.exports = ({ request, querystring }) => {
	const google = async (payload) => {
		return request.get('google.com/' + querystring.querystring(payload));
	};

	return {
		google,
	}
};
