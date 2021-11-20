'use strict'

const healthCkeckWrapper = ({
  config,
  domain,
  adapters
}) => {
  const get = async ({
    payload,
    metadata,
  }) => {

    const cachePing = await adapters.cache.ping()
    const repositoryPing = await adapters.repository.ping()

    return {
      data: {
        cache: cachePing,
        storage: repositoryPing,
        appName: config.app.name,
        appPort: config.app.port 
      }
    }
  }

  return {
    get
  }
}

module.exports = healthCkeckWrapper
