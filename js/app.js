let app = (function () {
    const initializeBoard = () => Grid.initializeGrid(20, 20);
  
    const findPath = () => {
      let path = AStar.findPath(Grid.showGrid());
      Grid.walkOverPath(path);
    };
  
    const findPathSpeed = speed => {
      switch (speed) {
        case 'Default':
          Grid.walkDefault();
          findPath();
          break;
        // case 'Fast':
        //   break;
      }
    };
  
    const launch = () => {
      initializeBoard();
    };
  
    return {
      launch: launch,
      findPath: findPath,
      findPathSpeed: findPathSpeed
    };
  })();
  