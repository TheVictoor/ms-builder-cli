'use strict'

const someFeatureWrapper = ({
  config
}) => {
  const get = async ({
    payload,
    headers,
    onSuccess,
    onError
  }) => {
    try {
      return onSuccess({
        data: {
          message: `app ${config.app.name} running at ${config.app.port}`
        },
        statusCode: 200
      })
    } catch (error) {
      return onError({
        statusCode: 500,
        message: error.message
      })
    }
  }

  return {
    get
  }
}

module.exports = someFeatureWrapper
