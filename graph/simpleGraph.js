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
}

var g = new Graph(6);
var vertex = ["A","B","C","D","E","F"];

for(let v of vertex){
    g.addVertices(v);
}

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("A","E");
g.addEdge("A","F");
g.addEdge("B","F");

g.printGrapgh();