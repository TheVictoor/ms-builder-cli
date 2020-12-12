'use strict';

module.exports = (adapters) => ({
  get: (request, res) => adapters.healthCheck.get({
    payload: {
      ...request.params,
    },
    header: request.header,
    onSuccess: ({ data, statusCode }) => res.response(data).code(statusCode),
    onError: (error) => res.response(JSON.stringify(error)).code(error.statusCode),
  }),
});
