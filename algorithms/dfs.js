let finalPath = [];

function initDFS(grid, startNode, finishNode) {
    let stack = new Stack();
    let visited = [];
    stack.push(startNode);
    let node = startNode;
    let time = 1;

    while(!stack.isEmpty() && node != finishNode && node != undefined) {
        console.log(stack.peek());
        node = stack.pop();
        
        if(node == undefined) {
            console.log(node);
            console.log("UNDEFINED");
        }
        if(!visited.includes(node)) {
            visited.push(node);
            //console.log("Visited (" + node.column + ", " + node.row + ")");

            for(let i = 0; i < node.neighbors.length; i++) {
                if(node.neighbors[i] != null 
                    && !visited.includes(node.neighbors[i]) 
                    && node.neighbors[i].type != "WALL") {
                        stack.push(node.neighbors[i]);
                }
            }
        }
    }
    console.log(visited);
    if(node == finishNode) { reachedEnd = true; }

    const updateCells = async () => {
        for(let i = 1; i < visited.length; i++) {
            await sleep(time);
            visited[i].innerCell.style.backgroundColor = "#26AED9";
            visited[i].innerCell.classList.add("hvr-radial-out");
            setTimeout(() => { visited[i].innerCell.classList.remove("hvr-radial-out"); }, 500);
        }

        if(reachedEnd) {
            startNode.innerCell.style.backgroundColor = "yellow";
            finishNode.innerCell.style.backgroundColor = "yellow";
        }
    }

    updateCells();    

}

function getLowestCost(neighbors) {
    let lowestCost = neighbors[0];
    for(let i = 0; i < neighbors.length; i++) {
        if(neighbors[i].cost < lowestCost.cost) {
            lowestCost = neighbors[i];
        }
    }
    console.log(lowestCost.cost);
    return lowestCost;
}

