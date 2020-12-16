'use strict'

const neo4j = require('neo4j-driver')
const config = require('../../config')
const commandWrapper = require('./command')
const connectionFactory = require('./connection')

const connection = connectionFactory({
  client: neo4j,
  config
})

module.exports = commandWrapper({
  connection: connection.getConnection()
})
