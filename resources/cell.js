class Cell {
    constructor(column, row) {
        this.type = "EMPTY";
        this.column = column;
        this.row = row;
        this.cell = undefined;
        this.innerCell = undefined;
        this.previousNode = undefined;
        this.neighbors = [];

        // for A* algorithm
        this.fScore = 0;
        this.gScore = 0;
        this.hScore = 0;

        // for DFS algorithm
        this.cost = 0;

        // for Dijkstra algorithm
        this.distance = 0;
        this.weight = 1;
    }

}