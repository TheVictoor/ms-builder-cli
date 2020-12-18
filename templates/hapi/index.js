require('dotenv').config()

const server = require('./server')
const config = require('./config')

const init = async () => {
  try {
    const serverInstance = await server
    await serverInstance.start()
    console.log(`API is running at ${config.app.port}`)
  } catch (error) {
    console.log({ message: `API failed to start ${error.message}` })
  }
}

module.exports = init()
