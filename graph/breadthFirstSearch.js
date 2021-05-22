class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertices(v){
        this.AdjList.set(v,[]);
    }

    addEdge(src,dest){
        this.AdjList.get(src).push(dest);
        this.AdjList.get(dest).push(src);
    }

    printGrapgh(){
        var get_keys = this.AdjList.keys();
        for(var i of get_keys){
            var get_values = this.AdjList.get(i);
            var conc = "";
            for(var j of get_values){
                    conc +=j+" ";
            }

            console.log(i," ---> ",conc);
        }
    }
    dfs(startNode){
        var visited = [];
        for(var i=0; i< this.noOfVertices; i++){
            visited[i] = false;
        }

        this.DFSUtil(startNode,visited);
    }
    DFSUtil(vert, visited) 
        { 
            visited[vert] = true; 
            console.log(vert); 
        
            var get_neighbours = this.AdjList.get(vert); 
        
            for (var get_elem of get_neighbours) { 
                if (!visited[get_elem]) 
                    this.DFSUtil(get_elem, visited); 
            } 
        } 
    bfs(startNode){
        var visited = [];
        for(var i=0; i< this.noOfVertices; i++){
            visited[i] = false;
        }

        var q = [];

        visited[startNode] = true;
        q.push(startNode);

        while(q.length){
            var queueElement = q.shift();
            console.log(queueElement);

            var get_list = this.AdjList.get(queueElement);

            for(var i of get_list){
                if(!visited[i]){
                    q.push(i);
                    visited[i] = true;
                }
            }
        }

    }
}

var g = new Graph(6);
var vertex = ["A","B","C","D","E","F"];

for(let v of vertex){
    g.addVertices(v);
}

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("B","E");
g.addEdge("C","D");
g.addEdge("C","E");
g.addEdge("A","F");
g.addEdge("B","F");

g.printGrapgh();

console.log("BFS"); 
g.bfs('A'); 

console.log("DFS"); 
g.dfs('A'); 