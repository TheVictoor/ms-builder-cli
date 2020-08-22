module.exports = {
	swaggerDefinition: {
		info: {
			description: "Application",
			version: "1.0.0",
			title: "Swagger",
		},
		basePath: "/",
	},
	apis: ['./**/routes/*.js']
};