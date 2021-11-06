'use strict'

const {
  APPLICATION_NAME = "no-name",
  PORT = 8000,
} = process.env

module.exports = {
  app: {
    name: APPLICATION_NAME,
    port: PORT
  }
}
