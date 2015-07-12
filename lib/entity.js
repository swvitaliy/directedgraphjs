"use strict";

var uuid = require('uuid');
var uuid_method = 'v1';

function Entity(id) {
  this.id = id || uuid[uuid_method]();
}

module.exports = Entity;
