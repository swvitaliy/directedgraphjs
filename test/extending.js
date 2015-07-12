"use strict";

var should =require('should')
  , dg = require('../index')
  , util = require('util');

describe('extending', function() {
  it('default', function() {
    var Graph = dg(dg.Vertex, dg.Edge);
    var graph = new Graph('simple graph');
    should(graph.constructor === Graph).be.ok();
    var va = graph.createVertex('A');
    should(va).be.ok();
    va.should.have.property('name', 'A');
    should(va.constructor === dg.Vertex);
    var vb = graph.createVertex('B');
    var edgeAB = graph.createEdge(va, vb, 'A -> B');
    should(edgeAB).be.ok();
    edgeAB.should.have.property('name', 'A -> B');
    should(edgeAB.constructor === dg.Edge);
  });
  it('extend', function() {
    function VertexEx(name) {
      dg.Vertex.call(this, name);
      this.extra = 'vertex extra value';
    }

    util.inherits(EdgeEx, dg.Edge);

    function EdgeEx(from, to, name) {
      dg.Edge.call(this, from, to, name);
      this.extra = 'edge extra value';
    }

    util.inherits(VertexEx, dg.Vertex);

    var Graph = dg(VertexEx, EdgeEx);
    var graph = new Graph('simple graph');
    should(graph.constructor === Graph).be.ok();
    var va = graph.createVertex('A');
    should(va).be.ok();
    va.should.have.property('name', 'A');
    va.should.have.property('extra', 'vertex extra value');
    should(va.constructor === VertexEx);
    var vb = graph.createVertex('B');
    var edgeAB = graph.createEdge(va, vb, 'A -> B');
    should(edgeAB).be.ok();
    edgeAB.should.have.property('name', 'A -> B');
    edgeAB.should.have.property('extra', 'edge extra value');
    should(edgeAB.constructor === EdgeEx);
  });
});