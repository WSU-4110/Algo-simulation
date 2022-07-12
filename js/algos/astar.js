let AStar = (function () {
    class gridNode {
      constructor(x, y, obstacle = false) {
        (this.x = x), (this.y = y);
        (this.f = 0), (this.g = 0), (this.h = 0);
        this.obstacle = obstacle;
        this.parent = null;
      }
    }
  
    let nodes = [];
    let start = null;
    let target = null;
    let startArray = [];
    let gridWidth, gridHeight;
    let directions = 4;
    let directionX = [1, -1, 0, 0];
    let directionY = [0, 0, 1, -1];
  
    const findPath = grid => {
      initializeGrid(grid);
      return startAStar();
    };
  
    const initializeGrid = grid => {
      gridHeight = grid.length;
      gridWidth = grid[0].length;
  
      for (let row = 0; row < gridHeight; row++) {
        nodes[row] = [];
        for (let col = 0; col < gridWidth; col++) {
          let nodeType = grid[row][col];
          let node = new gridNode(col, row, nodeType === 3);
          if (nodeType === 1) 
            start = node;
          else if (nodeType === 2) 
            target = node;
          nodes[row][col] = node;
        }
      }
    };
  
    const startAStar = () => {
      startArray = [start];
  
      while (startArray.length > 0) {
        let curr = getLowestF();
        startArray.splice(startArray.indexOf(curr), 1);
        curr.closed = true;
        if (curr === target) return getPath(curr);
        let neighbors = getNeighbors(curr);
        neighbors.forEach(neighbor => {
          if (neighbor.closed || neighbor.obstacle) return;
          if (startArray.includes(neighbor)) {
            if (curr.g + 1 >= neighbor.g) {
              return;
            }
          } else {
            startArray.unshift(neighbor);
          }
          neighbor.parent = curr;
          neighbor.h = manhattanDistance(neighbor);
          neighbor.g = curr.g + 1;
          neighbor.f = neighbor.g + neighbor.h;
        });
      }
      return false;
    };
  
    const getNeighbors = currentNode => {
      let neighbors = [];
      for (let i = 0; i < directions; i++) {
        let newX = currentNode.x + directionX[i];
        let newY = currentNode.y + directionY[i];
        if (isValidNode(newX, newY)) {
          neighbors.push(nodes[newY][newX]);
        }
      }
      return neighbors;
    };
  
    const getLowestF = () => {
      let closestNode = startArray[0];
      for (let i = 1; i < startArray.length; i++) {
        if (startArray[i].f < closestNode.f) {
          closestNode = startArray[i];
        }
      }
      return closestNode;
    };
  
    const isValidNode = (x, y) => x >= 0 && x < gridWidth && y >= 0 && y < gridHeight;
  
    const getPath = node => {
      let path = [];
      while (node.parent !== null) {
        path.unshift({ x: node.x, y: node.y });
        node = node.parent;
      }
      return path;
    };
  
    const manhattanDistance = node =>
      Math.abs(node.x - target.x) + Math.abs(node.y - target.y);
  
    return {
      findPath: findPath,
    };
  })();
  
