const axios = require('axios');
const querystring = require('querystring');
const v1Wrapper = require('./v1');

module.exports = {
	v1: v1Wrapper({ 
		request: axios,
		querystring,
	}),
}