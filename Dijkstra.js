/*
* Dijkstra algorithm :- The shortest path algorithm which will find the shortest path between 2 vertex;

GRAPH ADJACENT LIST 
 adjlist  {
  a: [ { node: 'b', weight: 4 }, { node: 'c', weight: 2 } ],
  b: [ { node: 'a', weight: 4 }, { node: 'e', weight: 3 } ],
  c: [
    { node: 'a', weight: 2 },
    { node: 'd', weight: 2 },
    { node: 'f', weight: 4 }
  ],
  d: [
    { node: 'c', weight: 2 },
    { node: 'e', weight: 3 },
    { node: 'f', weight: 1 }
  ],
  e: [
    { node: 'b', weight: 3 },
    { node: 'd', weight: 3 },
    { node: 'f', weight: 1 }
  ],
  f: [
    { node: 'c', weight: 4 },
    { node: 'd', weight: 1 },
    { node: 'e', weight: 1 }
  ]
}


 visited object 
  find the shortest from A to E 

  step : Every time pick a smallest node for known value.
  step : Once reach on a node then look for each neighbor  
  step : for each new node we will sum up previous one distance and go with smallest and will update previous updated path.

 note: We will need to create priority queue for managing shortest distance between 2 node.
*/

//priority queue for keep shortest node distance in direction.
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.AdjList = {};
  }

  // add vertex to graph
  addVertex(v) {
    !this.AdjList[v] && (this.AdjList[v] = []); //do not allow duplicate value to vertex.
  }

  //Connect two vertex with edges with value
  addEdges(v1, v2, weight) {
    // connect v1 vertex to v2 with value.
    this.AdjList[v1].push({ node: v2, weight });

    // Since graph is undirected, so reverse relation will be available.
    this.AdjList[v2].push({ node: v1, weight });
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distance = {};
    const previous = {};
    let path = [];

    //make every vertex infinity except start(because same point always will be zero)
    for (const vertex in this.AdjList) {
      if (vertex == start) {
        distance[vertex] = 0;
        //create start node with priority with 0.
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        //create node with priority with infinity.
        nodes.enqueue(vertex, Infinity);
      }
      //initialize previous with all the vertex with null.
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      //iterate all the nodes one by one.
      let smallest = nodes.dequeue().value;

      //base case: if we reach again at the end of the then that is data building and abortion loop case.
      if (smallest == end) {
        console.log(smallest, "  previous ", previous);
        console.log(smallest, " shortest distance ", distance);

        path.push(end); // add the end in path

        while (previous[smallest]) {
          smallest = previous[smallest];
          path.push(smallest); // add the previous value to path
        }
        break;
      }

      console.log("get enqueue from queue ", smallest);

      if (smallest || distance[smallest] !== Infinity) {
        for (const neighbor of this.AdjList[smallest]) {
          //console.log(smallest, "get  neighbour ", neighbor);

          const nextPoint = distance[smallest] + neighbor.weight;

          // if next node distance is smaller then current available distance then update it with new smallest distance.
          if (nextPoint < distance[neighbor.node]) {
            distance[neighbor.node] = nextPoint;

            //update previous node so it will indicate how will react to a certain point.
            previous[neighbor.node] = smallest;

            //update the priority queue with vertex with latest sum length
            nodes.enqueue(neighbor.node, nextPoint);
          }
        }
      }
    }

    return path.reverse();
  }
}

/**
     *      graph will be like this
     *              4
     *           a-----b
     *       2 / 2   3  \ 3
     *        c ---d----e           
     *         \ 1 |   /
     *        4  \ | / 1 
     *             f   
     */
const g = new WeightedGraph();

g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");

g.addEdges("a", "b", 4);
g.addEdges("a", "c", 2);
g.addEdges("b", "e", 3);
g.addEdges("c", "d", 2);
g.addEdges("c", "f", 4);
g.addEdges("d", "e", 3);
g.addEdges("d", "f", 1);
g.addEdges("e", "f", 1);

console.log(" adjlist ", g.AdjList);

console.log(" print shortest path algorithm ", g.dijkstra("a", "e"));
