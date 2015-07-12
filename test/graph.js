"use strict";

var should =require('should')
  , Graph = require('../lib/graph')();

describe('graph', function() {

  var graph;
  beforeEach(function() {
    graph = new Graph('A');
  });
  it('@instance of entity', function() {
    should(graph).be.ok();
    graph.should.have.property('id', 'A');
  });
  it('#createVertex', function() {
    should(graph).be.ok();
    var vertex = graph.createVertex('A');
    graph.vertexes.hasItem(vertex).should.be.true();
  });
  it('#createEdge', function() {
    should(graph).be.ok();
    var a = graph.createVertex('A');
    var b = graph.createVertex('B');
    var atob = graph.createEdge(a, b, 'atob');

    graph.edges.hasItem(atob).should.be.true();
  });
  it('#hasEdge / getEdge', function() {
    should(graph).be.ok();
    var a = graph.createVertex('A');
    var b = graph.createVertex('B');
    var atob = graph.createEdge(a, b, 'atob');

    graph.hasEdge(a, b).should.be.true();
    graph.getEdge(a, b).should.be.ok();
  });
  it('#deleteEdge', function() {
    should(graph).be.ok();
    var a = graph.createVertex('A');
    var b = graph.createVertex('B');
    var atob = graph.createEdge(a, b, 'atob');

    graph.deleteEdge(atob);

    graph.hasEdge(a, b).should.be.false();
    should(graph.getEdge(a, b)).be.equal(undefined);

  });
  it('#deleteVertex', function() {
    should(graph).be.ok();
    var a = graph.createVertex('A');
    var b = graph.createVertex('B');
    var atob = graph.createEdge(a, b, 'atob');

    graph.hasEdge(a, b).should.be.true();
    graph.getEdge(a, b).should.be.ok();

    graph.deleteVertex(b);

    graph.vertexes.hasItem(b).should.be.false();
    graph.hasEdge(a, b).should.be.false();
  });

});
