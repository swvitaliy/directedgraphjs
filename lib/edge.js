"use strict";

var util = require('util');
var Entity = require('./entity');

/**
 *
 * @param {DirectedVertex} from
 * @param {DirectedVertex} to
 * @param {String} name
 * @constructor
 */
function DirectedEdge(from, to, name) {
  Entity.call(this, name);
  this.from = from;
  this.to = to;
}

util.inherits(DirectedEdge, Entity);

module.exports = DirectedEdge;
