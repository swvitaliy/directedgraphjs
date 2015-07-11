"use strict";

var util = require('util')
  , Entity = require('./entity');

function DirectedVertex(name) {
  Entity.call(this, name);
}

util.inherits(DirectedVertex, Entity);


module.exports = DirectedVertex;
