'use strict'

const {
  APPLICATION_NAME = "no-name",
  PORT = 8000,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD
} = process.env

module.exports = {
  app: {
    name: APPLICATION_NAME,
    port: PORT
  },
  database: {
    connectionHost: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD
  }
}
