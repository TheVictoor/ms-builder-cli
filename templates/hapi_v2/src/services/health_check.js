'use strict'

// the services orchestrate all the logic as call the domain, make validations and etc

const healthCkeckWrapper = ({
  config,
  domain,
  adapters
}) => {
  const get = async (
    // {
    //   payload,
    //   metadata,
    // }  // if you need some parameters
  ) => {

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
