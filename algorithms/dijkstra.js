function initDijkstra(grid, startNode, finishNode) {
    console.log("Starting Dijkstra's Algorithm");
    //dijkstra(formattedGrid, 0, numVertices);
}

function dijkstra(grid, startNode, finishNode) {
    let distance = new Array(grid.length);
    let previousNode = new Array(grid.length);
    
    for (let i = 0; i < grid.length; i++) {
        distance[i] = Number.MAX_VALUE;
        previousNode[i] = false;

    }
    distance[startNode.column][startNode.row] = 0;


}