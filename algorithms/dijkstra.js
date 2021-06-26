function initDijkstra(grid, startNode, finishNode) {
    let priorityNodes = [];
    let visited = [];
    let time = 1;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            grid[i][j].distance = Infinity;
            grid[i][j].previousNode = undefined;
        }
    }
    startNode.distance = 0;
    priorityNodes.push(startNode);
    visited.push(startNode);
    let minNode = startNode;
    let count = 0;
    while(priorityNodes.length > 0 && minNode != finishNode) {
        count++;
        console.log(count);
        minNode = priorityNodes.shift();

        minNode.neighbors
            .filter(node => node != null && node.type != "WALL")
            .forEach(node => {
                let alt = minNode.distance + minNode.weight;
                console.log(alt);
                console.log(node.distance);
                if(alt < node.distance) {
                    console.log("here");
                    node.distance = alt;
                    node.previousNode = minNode;
                    priorityNodes.push(node);
                    visited.push(node);
                    console.log(priorityNodes);
                    priorityNodes.sort(function(a, b) {
                        return a.distance - b.distance;
                    });
                    console.log(priorityNodes);
                }
            })
    }
    if(minNode == finishNode) {
        console.log("FOUND IT");

        const updateCells = async () => {
            for(let i = 1; i < visited.length; i++) {
                await sleep(time);
                visited[i].innerCell.style.backgroundColor = "#26AED9";
                visited[i].innerCell.classList.add("hvr-radial-out");
                visited[i].innerCell.classList.add("node-block");
                setTimeout(() => { visited[i].innerCell.classList.remove("hvr-radial-out"); }, 500);
                setTimeout(() => { visited[i].innerCell.classList.remove("node-block"); }, 500);
            }
    
            let path = [];
            while(minNode.previousNode) {
                path.push(minNode);
                minNode = minNode.previousNode;
            }

            for(let i = path.length - 1; i >= 0; i--) {
                await sleep(time);
                path[i].innerCell.style.backgroundColor = "yellow";
            }
        }
    
        updateCells();

    }

}