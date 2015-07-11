"use strict";

var util = require('util');

function DictError() {}
util.inherits(DictError, Error);

function Dict(ItemCtor) {
  var items = {}, len = 0;

  this.size = function() {
    return len;
  };

  this.keys = function() {
    return Object.keys(items);
  };

  this.hasItem = function(entity) {
    return typeof items[entity.id] !== 'undefined';
  };

  this.getItem = function(id) {
    return items[id];
  };

  this.addItem = function(entity) {
    if (entity.constructor !== ItemCtor) {
      throw new DictError("expect item of " + ItemCtor.name + ", passed " + entity.constructor.name);
    }
    items[entity.id] = entity;
    len++;
    return items[entity.id];
  };

  this.deleteItem = function(entity) {
    items[entity.id] = undefined;
    len--;
  };
}

Dict.Error = DictError;
module.exports = Dict;
