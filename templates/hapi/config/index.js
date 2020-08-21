'use strict';

const {
  APPLICATION_NAME,
  APPLICATION_PORT,
  DATABASE_CONNECTION_STRING
} = process.env;

module.exports = {
  app: {
    name: APPLICATION_NAME,
    port: APPLICATION_PORT,
  },
  database: {
    connectionString: DATABASE_CONNECTION_STRING,
  }
};
