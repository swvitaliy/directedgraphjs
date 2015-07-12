"use strict";

var util = require('util')
  , Entity = require('./entity');

function DirectedVertex(id) {
  Entity.call(this, id);
}

util.inherits(DirectedVertex, Entity);


module.exports = DirectedVertex;
