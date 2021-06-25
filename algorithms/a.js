let openSet = [];
let closedSet = [];
let path = [];

function initA(grid, startNode, finishNode) {
    console.log("RUNNING A*");
    openSet.push(startNode);

    if(openSet.length > 0) {
        let smallestIndex = 0;
        for(let i = 0; i < openSet.length; i++) {
            let cost = getCost(openSet[i]);
            let costSmallest = getCost(openSet[smallestIndex]);
            if(cost < costSmallest) {
                smallestIndex = i;
            }
        }

        let current = openSet[smallestIndex];

        let openSetIndex = openSet.indexOf(current);
        if(openSetIndex > -1) { openSet.splice(openSetIndex, 1); }
        closedSet.push(current);

        let neighbors = current.neighbors;

        for(let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            let cell = getCell(neighbor.column, neighbor.row);
            cell.style.backgroundColor = "black";
            console.log(neighbor);
            if(!closedSet.includes(neighbor)) {
                let tempG = current.gScore + 1;

                if(openSet.includes(neighbor)) {
                    if(tempG < neighbor.gScore) {
                        neighbor.gScore = tempG;
                    }
                } else {
                    neighbor.gScore = tempG;
                    openSet.push(neighbor);
                }

                neighbor.hScore = heuristics(neighbor, finishNode);
                neighbor.fScore = neighbor.gScore + neighbor.hScore;
                neighbor.previous = current;
            }
        }
    
        console.log(path.length);
        for(let i = 0; i < path.length; i++) {
            console.log("path")
            console.log("(" + path[i].column + ", " + path[i].row + ")")
        }

        path = [];
        let temp = current;
        path.push(temp);
        while(temp.previous) {
            path.push(temp.previous);
            temp = temp.previous;
        }
        console.log(path);
        console.log("DONE");

    } else {
        // no sol
        console.log("ERROR: No Solution");
    }

}

function heuristics(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.column - b.column);
}


function getCost(node) {
    if(node.type == "") {
        return 1;
    } else if(node.type == "WEIGHT") {
        return 4;
    } else if(node.type == "WALL") {
        return Number.MAX_VALUE;
    } 
    return 0;
}

function getCell(col, row) {
    return qs("#column" + (col+1) + " > div:nth-child(" + (row+1) + ")");
}

function qs(selector) {
    return document.querySelector(selector);
  }