let finalPath = [];

function initBFS(grid, startNode, finishNode) {
    let q = new Queue(grid.length * grid[0].length);
    let visited = new Set();
    let time = 10;
    let reachedEnd = false;
    
    let path = [];
    q.enqueue(startNode);
    visited.add(startNode);
    path.push(startNode);
    let ele = startNode;
    while(!q.isEmpty() && ele != finishNode) {
        ele = q.dequeue();
        path.push(ele);
        ele.neighbors
            .filter(node => !visited.has(node) && node.type != "WALL")
            .forEach(node => {
                visited.add(node);
                q.enqueue(node);
                node.previousNode = ele;
            })
    }
    if(ele == finishNode) { reachedEnd = true; }
    finalPath = path;
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const updateCells = async () => {
        for(let i = 2; i < path.length; i++) {
            await sleep(time);
            path[i].innerCell.style.backgroundColor = "#26AED9";
            path[i].innerCell.classList.add("hvr-radial-out");
            setTimeout(() => { path[i].innerCell.classList.remove("hvr-radial-out"); }, 500);
        }

        if(reachedEnd) {
            let node = finishNode;
            let shortestPath = [];
            shortestPath.push(node);
            while(node.previousNode != undefined) {
                shortestPath.push(node);
                node = node.previousNode;
            }
            shortestPath.push(node);
            for(let i = shortestPath.length-1; i > 0; i--) {
                await sleep(time);
                shortestPath[i].innerCell.style.backgroundColor = "yellow";
            }
        }
        

    }
    updateCells();
    

}






