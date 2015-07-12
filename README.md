# Directed Graph Implementation

## Basic API

    // require
    var Graph = require('directedgraphjs')();
    
    // Create graph
    var graph = new Graph('friendship');

    // Add vertex
    var v1 = graph.createVertex('John');
    var v2 = graph.createVertex('Lenny');
    var v3 = graph.createVertex('Marry');
    
    // Add edge
    var e1_2 = graph.createEdge(v1, v2, 'best friends');
    var e1_3 = graph.createEdge(v1, v3); // colleagues
    
    // Set weight (just object property)
    e1_2.weight = 100;
    
    // get some vertex by key
    graph.vertexes.getItem(v1.id);
    
    // get some edge by key
    graph.edges.getItem(e1_2.id);

    // number of vertexes
    graph.vertexes.size()
    
    // number of edges
    graph.edges.size()
    
    // Delete vertex
    graph.deleteVertex(v2)
    
    // Delete edge
    graph.deleteEdge(e1_3)
    
    // Get/has edge by a "from" and destination vertexes
    graph.getEdge(v1, v3);
    graph.hasEdge(v1, v3); // return true or false
    
    // Get a keys of adjacent edges by vertex
    graph.adj(v1)
     
     
## Extending Example

    var dg = require('directedgraphjs');
    var DirectedVertex = dg.Vertex;
    var util = rquire('util')
      , _ = require('lodash'); 
        
    function City(name, opt) {
        DirectedVertex.call(this, name);
        _.extend(this, {
            popularity: 0,
            tourRating: 0,
            numberOfMonuments: 0,
            numberOfChurch: 0,
            numberOfMuseums: 0,
            numberOfTheaters: 0,
            // something else
        }, opt);
    }
    
    util.inherits(City, DirectedVertex);
    
    var Graph = dg(City, dg.Edge);
    // fill the tourists places ...
    // ... and find your way by criteria

    
    
    
    
    
    
    
    
    
    
    
