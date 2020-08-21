'use strict';

const { MongoClient } = require('mongodb');
const config = require('../config');

const connection = require('./connection')({
  client: MongoClient,
  config,
});

module.exports = connection.getDatabase('DATABASE-NAME');
