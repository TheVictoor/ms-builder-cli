'use strict';

const {
  APPLICATION_NAME,
  APPLICATION_PORT,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

module.exports = {
  app: {
    name: APPLICATION_NAME,
    port: APPLICATION_PORT,
  },
  database: {
    connectionHost: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD
  }
};
