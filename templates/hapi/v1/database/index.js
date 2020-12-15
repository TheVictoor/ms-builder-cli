'use strict';

const neo4j = require('neo4j-driver');
const config = require('../../config');

const connection = require('./connection')({
  client: neo4j,
  config,
});

module.exports = connection.getConnection();
