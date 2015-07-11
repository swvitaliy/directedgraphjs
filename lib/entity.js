"use strict";

var uuid = require('uuid');
var uuid_method = 'v1';

function Entity(name) {
  this.id = uuid[uuid_method]();
  this.name = name;
}

module.exports = Entity;
