(function () {
	window.addEventListener("load", init);
    const CURSORS = ["START", "FINISH", "WEIGHT", "WALL"];
    const COLUMNS = 50;
    let ROWS;
    let currentCursor = CURSORS[0];
    let startNode;
    let finishNode;
    let grid = new Array(COLUMNS);
    let mouseIsDown = false;

	function init() {
        ROWS = calculateRows();
        for(let i = 0; i < COLUMNS; i++) {
            grid[i] = new Array(ROWS);
            for(let j = 0; j < ROWS; j++) {
                grid[i][j] = new Cell(i, j); // fill grid with empty cells
            }
        }
		createGrid();
        btnListeners();
        setCells();
        cellListeners();
        mouseHoldListener();
        searchListener();
	}

    function createGrid() {
        let grid = id("grid-wrapper");
        for(let i = 0; i < COLUMNS; i++) {
            let columnWrapper = gen("div");
            columnWrapper.classList.add("column");
            columnWrapper.id = "column" + (i+1);
            let width = (100 / COLUMNS);
            columnWrapper.style.width = width + "vw";
            //columnWrapper.style.height = "90%";
            
            for(let j = 0; j < ROWS; j++) {
                let element = createCellStructure(width);
                columnWrapper.appendChild(element);
            }
            grid.appendChild(columnWrapper);
        }
    }

    function createCellStructure(height) {
        let cell = gen("div");
        let innerCell = gen("div");
        cell.classList.add("cell");
        innerCell.classList.add("inner-cell");
        cell.style.height = height + "vw";
        cell.appendChild(innerCell);
        return cell;
    }

    function calculateRows() {
        const gridHeight = 90;
        let width = vw(100 / COLUMNS);
        let windowHeight = vh(gridHeight);
        return Math.floor(windowHeight / width);
    }

    function vh(v) {
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }
      
    function vw(v) {
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (v * w) / 100;
    }

    function getCell(col, row) {
        return qs("#column" + (col+1) + " > div:nth-child(" + (row+1) + ")");
    }

    function setCells() {
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                let cell = getCell(i, j);
                grid[i][j].cell = cell;
                grid[i][j].innerCell = cell.childNodes[0];
            }
        }
    }

    function cellListeners() {
        for(let i = 0; i < COLUMNS; i++) {
            for(let j = 0; j < ROWS; j++) {
                let cell = getCell(i, j);
                let innerCell = cell.childNodes[0];

                let node = new Cell(i, j);
                node.cell = cell;
                node.innerCell = innerCell;
                innerCell.classList.add("hvr-push");
                setTimeout(() => {  innerCell.classList.remove("hvr-push"); }, 700);
                
                cell.addEventListener("mousedown", function(e) {
                    e.preventDefault();
                    if(e.buttons == 1 || e.buttons == 3) { // left click
                        clearBoard();
                        if(currentCursor === CURSORS[0]) {
                            node.type = CURSORS[0];
                            handleStartNode(node);
                        } else if(currentCursor === CURSORS[1]) {
                            node.type = CURSORS[1];
                            handleFinishNode(node);
                        } else if(currentCursor === CURSORS[2]) {
                            node.type = CURSORS[2];
                            handleNodes(node);
                        } else if(currentCursor === CURSORS[3]) {
                            node.type = CURSORS[3];
                            handleNodes(node);
                        }
                        innerCell.classList.add("hvr-push");
                        setTimeout(() => {  innerCell.classList.remove("hvr-push"); }, 200);
                    } else if(e.buttons == 2) {
                        clearNode(node);
                    }
                    
                });
                cell.addEventListener("mouseover", function(e) {
                    e.preventDefault();
                    if(e.buttons == 1 || e.buttons == 3) { // left click
                        clearBoard();
                        console.log("holdingggg");
                        if(currentCursor === CURSORS[2]) {
                            node.type = CURSORS[2];
                            handleNodes(node);
                        } else if(currentCursor === CURSORS[3]) {
                            node.type = CURSORS[3];
                            handleNodes(node);
                        }
                        innerCell.classList.add("hvr-push");
                        setTimeout(() => {  innerCell.classList.remove("hvr-push"); }, 200);
                    } else if(e.buttons == 2) {
                        clearNode(node);
                    }
                });
            }
        }
    }

    function handleStartNode(node) {
        if(startNode && startNode != node.innerCell) { 
            resetNode(startNode);
        }
        if(!grid[node.column].includes(node)) {  
            grid[node.column][node.row] = node;
        }
        startNode = node;
        node.innerCell.style.backgroundImage = "url('images/start-icon-18.png')";
        node.innerCell.style.backgroundColor = "#A9D7FC";
    }

    function handleFinishNode(node) {
        if(finishNode && finishNode != node.innerCell) { 
            resetNode(finishNode);
        }
        if(!grid[node.column].includes(node)) {  
            grid[node.column][node.row] = node;
        }
        finishNode = node;
        node.innerCell.style.backgroundImage = "url('images/finish-icon-18.png')";
        node.innerCell.style.backgroundColor = "#FF8095";
    }

    function handleNodes(node) {
        grid[node.column][node.row] = node;
        if(node.type.toUpperCase() == "WEIGHT") {
            node.innerCell.style.backgroundImage = "url('images/weight-icon-18.png')";
            node.innerCell.style.backgroundColor = "#95FF80";
        } else if(node.type.toUpperCase() == "WALL") {
            node.innerCell.style.backgroundImage = "url('images/wall-icon-18.png')";
            node.innerCell.style.backgroundColor = "#062f4f";
        }
    }

    function clearBoard() {
        for(let i = 0; i < COLUMNS; i++) {
            for(let j = 0; j < ROWS; j++) {
                let node = grid[i][j];
                if(node.type != "START" && node.type != "FINISH" && node.type != "WALL" && node.type != "WEIGHT") {
                    resetNode(node);
                } 
                if(node.type == "START") {
                    node.innerCell.style.backgroundColor = "#A9D7FC";
                } else if(node.type == "FINISH") {
                    node.innerCell.style.backgroundColor = "#FF8095";
                } else if(node.type == "WEIGHT") {
                    node.innerCell.style.backgroundColor = "#95FF80";
                }
                //console.log(node);
            }
        }
    }

    function resetNode(node) {
        if(!node.innerCell) { console.log(node); }
        
        node.type = "EMPTY";
        node.previousNode = undefined;
        node.innerCell.style.background = "none"; 
        node.innerCell.style.backgroundColor = "#fff";
        node.innerCell.style.backgroundRepeat = "no-repeat";
        node.innerCell.style.backgroundPosition = "center";
    }

    function clearNode(node) {
        let gridIndex = grid[node.column].indexOf(node);
        if(gridIndex > -1) { resetNode(grid[node.column][node.row]); }
        if(startNode === node) { startNode = null; }
        if(finishNode === node) { finishNode = null; }
        if(node.innerCell) { 
            node.innerCell.style.background = "none"; 
            node.innerCell.style.backgroundColor = "#fff";
            node.innerCell.style.backgroundRepeat = "no-repeat";
            node.innerCell.style.backgroundPosition = "center";
        }
    }

    function btnListeners() {
        let grid = id("grid-wrapper");
        let btns = qsa(".icon-wrapper");
        for(let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                btns[i].classList.add("hvr-push");
                setTimeout(() => {  btns[i].classList.remove("hvr-push"); }, 200);
                clearCursors();
                if(i == 0) {
                    grid.classList.add("start-icon-cursor");
                    currentCursor = CURSORS[0];
                } else if(i == 1) {
                    grid.classList.add("finish-icon-cursor");
                    currentCursor = CURSORS[1];
                } else if(i == 2) {
                    grid.classList.add("weight-icon-cursor");
                    currentCursor = CURSORS[2];
                } else if(i == 3) {
                    grid.classList.add("wall-icon-cursor");
                    currentCursor = CURSORS[3];
                }
            });
        }
    }

    function clearCursors() {
        let gridWrapper = id("grid-wrapper");
        gridWrapper.classList.remove("start-icon-cursor");
        gridWrapper.classList.remove("finish-icon-cursor");
        gridWrapper.classList.remove("weight-icon-cursor");
        gridWrapper.classList.remove("wall-icon-cursor");
    }

    function mouseHoldListener() {
        window.addEventListener('mousedown', function() {
            mouseIsDown = true;
        });
        window.addEventListener('mouseup', function() {
            mouseIsDown = false;
        });
    }

    function searchListener() {
        let searchBtn = id("search-btn");
        searchBtn.addEventListener("click", function() {
            clearBoard();
            setNeighbors();
            //initDijkstra(newGrid, COLUMNS);
            //initBFS(grid, startNode, finishNode);
            initDFS(grid, startNode, finishNode);
            //initA(grid, startNode, finishNode);
        });
    }

    // TODO: add weights to each type of item
    // Fill the new grid and use Dijkstra's Algorithm after
    function setNeighbors() {
        for(let i = 0; i < COLUMNS; i++) {
            for(let j = 0; j < ROWS; j++) {
                grid[i][j].neighbors = findNeighbors(grid[i][j]);
            } 
        }
    }

    function findNeighbors(node) {
        let neighbors = [];
        if(grid[node.column-1]) { // left
            neighbors.push(grid[node.column-1][node.row]); 
        } else {
            neighbors.push(null);
        }
        if(grid[node.column] && grid[node.column][node.row+1]) { // down
            neighbors.push(grid[node.column][node.row+1]); 
        } else {
            neighbors.push(null);
        }
        if(grid[node.column+1]) { // right
            neighbors.push(grid[node.column+1][node.row]); 
        } else {
            neighbors.push(null);
        }
        if(grid[node.column] && grid[node.column][node.row-1]) { // up
            neighbors.push(grid[node.column][node.row-1]); 
        } else {
            neighbors.push(null);
        }
        
        
        return neighbors;
    }

    function getVal(node) {
        if(node.type == "") {
            return 1;
        } else if(node.type == "WEIGHT") {
            return 4;
        } else if(node.type == "WALL") {
            return Number.MAX_VALUE;
        } 
        return 0;
    }

    



    /////////////////////////////////////////////////////

	function id(idName) {
		return document.getElementById(idName);
	}
	function qs(selector) {
    	return document.querySelector(selector);
  	}
	function qsa(selector) {
		return document.querySelectorAll(selector);
	}
	function gen(tagName) {
		return document.createElement(tagName);
	}
	
})();