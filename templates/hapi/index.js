require('dotenv').config();

const server = require('./server');

const init = async () => {
  try {
    const serverInstance = await server;
    await serverInstance.start();
    console.log('API is running');
  } catch (error) {
    console.log({ message: `API failed to start ${error.message}` });
  }
};

module.exports = init();
