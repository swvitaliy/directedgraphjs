"use strict";

var E = require('../lib/edge');
var should = require('should');

describe('DirectedEdge', function () {

  it('create 3 ones', function () {
    [new E(null, null, 'first'),
      new E(null, null, 'second'),
      new E(null, null, 'third')].forEach(function (edge) {
        should(edge).be.ok;
        edge.should.have.property('name');
        edge.should.have.property('id');
      });

  });

});
