"use strict";

var Entity = require('../lib/entity');
var should = require('should');

describe('Entity', function () {

  it("@ctor", function () {
    var entity = new Entity('A');
    should(entity).be.ok;
    entity.should.have.property('id', 'A');
  });

});
