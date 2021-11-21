// const { describe } = require('yargs');
// const adaptersWrapper = require('../../v1/adapters');

const servicesWrapper = require('../../src/services')

const fakeCache = {
  ping() { return true }
}

const fakeRepository = {
  ping() { return true }
}  

describe('On /healthcheck', () => {
  describe('When the route is called', () => {
    it('Should ensure that dependencies was checked', async () => {
      const dependencies = {
        adapters: {
          cache: fakeCache,
          repository: fakeRepository
        },
        domain: {},
        config: {
          app: {
            name: "appname",
            port: "appport"
          }
        }
      }

      const services = servicesWrapper(dependencies)

      const response = await services.healthCheck.get()

      expect(response).toBeInstanceOf(Object)
      expect(response.data.cache).toBe(true)
      expect(response.data.storage).toBe(true)
      expect(response.data.appName).toBe('appname')
      expect(response.data.appPort).toBe('appport')
    })
  })
})
