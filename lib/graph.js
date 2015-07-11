"use strict";

var util = require('util');
var Entity = require('./entity');
var Edge = require('./edge');
var Vertex = require('./vertex');
var Dict = require('./dict');

function DirectedGraph(name) {
  Entity.call(this, name);

  this.vertexes = new Dict(Vertex);
  this.edges = new Dict(Edge);

  this._inputs = {
    /*

    '<key of vertex with come in edge>': {
      edges: {'<key of egde>': true, ... },
      from: {'<key of vertex with come OUT edge>': true, ... }
    }

    */
  };
  this._outputs = {};
}

util.inherits(DirectedGraph, Entity);

DirectedGraph.prototype.createVertex = function (name) {
  var vertex = new Vertex(name);
  this.vertexes.addItem(vertex);
  return vertex;
};

DirectedGraph.prototype.createEdge = function (from, to, name) {
  var edge = new Edge(from, to, name);
  this.edges.addItem(edge);

  (this._inputs[to.id] || (this._inputs[to.id] = {edges: {}, from: {}}));
  this._inputs[to.id].edges[edge.id] = true;
  this._inputs[to.id].from[from.id] = edge.id;

  (this._outputs[from.id] || (this._outputs[from.id] = {edges: {}, to: {}}));
  this._outputs[from.id].edges[edge.id] = true;
  this._outputs[from.id].to[to.id] = edge.id;

  return edge;
};

DirectedGraph.prototype.deleteEdge = function(edge) {
  this._inputs[edge.to.id].edges[edge.id] = undefined;
  this._inputs[edge.to.id].from[edge.from.id] = undefined;

  this._outputs[edge.from.id].edges[edge.id] = undefined;
  this._outputs[edge.from.id].to[edge.to.id] = undefined;

  this.edges.deleteItem(edge);
};

DirectedGraph.prototype.deleteVertex = function(vertex) {
  Object.keys((this._inputs[vertex.id] || {edges:{}}).edges).forEach(function(edgeId) {
    if (!edgeId) return ;
    var edge = this.edges.getItem(edgeId);
    edge && this.deleteEdge(edge);
  }.bind(this));

  Object.keys((this._outputs[vertex.id] || {edges:{}}).edges).forEach(function(edgeId) {
    if (!edgeId) return ;
    var edge = this.edges.getItem(edgeId);
    edge && this.deleteEdge(edge);
  }.bind(this));

  this._inputs[vertex.id] = undefined;
  this._outputs[vertex.id] = undefined;

  this.vertexes.deleteItem(vertex);
};

DirectedGraph.prototype.hasEdge = function(from, to) {
  var input = this._inputs[to.id];
  if (!input) return false;
  return typeof input.from[from.id] !== 'undefined';
};

DirectedGraph.prototype.getEdge = function(from, to) {
  var input = this._inputs[to.id];
  if (!input || typeof input.from[from.id] === 'undefined') return undefined;
  var edgeId = input.from[from.id];
  return this.edges.getItem(edgeId);
};

DirectedGraph.prototype.adj = function(vertex) {
  return Object.keys(this._output[vertex.id].edges);
};

module.exports = DirectedGraph;
