class TreeClass {

  constructor(numberOfNodes) {
    this.numberOfNodes = numberOfNodes;
    this.randomArray = [];
    this.pruferSequence = [];
    this.copiedPrufer = [];
    this.orderedSet = [];
    this.treeEdges1 = [];
    this.treeEdges2 = [];
    this.treeData = [];
    this.data = [];
    this.root = 0;

  }

  getNumberOfNodes() {
    return this.numberOfNodes;
  }

  setNumberOfNodes(numberOfNodes) {
    this.numberOfNodes = numberOfNodes;
  }

  getRandomInteger(max) {
    return Math.floor(Math.random() * (max)) + 1;
  }

  checkInteger(usedIntegers, newInteger) {
    var used = false;
    if (usedIntegers.length == 0) {
      return used;
    }
    else {
      for (var i = 0; i < usedIntegers.length; i++) {
        if (usedIntegers[i] == newInteger) {
          used = true;
        }
      }
      return used;
    }
  }

  generatePruferSequence() {
    this.pruferSequence = [];
    for (var i = 0; i < this.numberOfNodes - 2; i++) {
      this.pruferSequence[i] = this.getRandomInteger(this.numberOfNodes);
    }
  }

  setRandomArray() {
    for (var i = 0; i < this.numberOfNodes; i++) {
      this.randomArray[i] = this.getRandomInteger(this.numberOfNodes);
    }
  }

  getRandomArray() {
    return this.randomArray;
  }

  getPruferSequence() {
    return this.pruferSequence;
  }

  generateEdges() {

    this.generatePruferSequence();
    this.copiedPrufer = [];
    this.orderedSet = [];
    this.treeEdges1 = [];
    this.treeEdges2 = [];
    var u;
    var v;
    var inPruferSequence = true;
    var orderedSetIndex = 0;

    //generating copy of prufer sequence
    for (var i = 0; i < this.pruferSequence.length; i++) {
      this.copiedPrufer[i] = this.pruferSequence[i];
    }

    //creating ordered set 1 - n
    for (var i = 0; i < this.numberOfNodes; i++) {
      this.orderedSet[i] = i + 1;
    }

    // 0-n-2
    for (var i = 0; i < this.numberOfNodes - 2; i++) {
      //u is from prufer sequence
      u = this.pruferSequence[i]


      orderedSetIndex = 0;

      inPruferSequence = true;
      //
      while (inPruferSequence) {

        v = this.orderedSet[orderedSetIndex];
        inPruferSequence = false;
        for (var j = 0; j < this.copiedPrufer.length; j++) {

          if (this.copiedPrufer[j] == v) {
            inPruferSequence = true;
          }

        }
        orderedSetIndex++;
      }

      this.treeEdges1.push(u);
      this.treeEdges2.push(v);

      //removes first element of prufer sequence
      this.copiedPrufer.shift();

      for (var j = 0; j < this.orderedSet.length; j++) {

        if (this.orderedSet[j] == v) {
          this.orderedSet.splice(j, 1);
        }

      }
    }
    //pushes last two node edges from ordered set
    this.treeEdges1.push(this.orderedSet[0]);
    this.treeEdges2.push(this.orderedSet[1]);

    //selects 0th element as root
    this.root = this.orderedSet[0];
  }

  getTreeEdges1() {
    return this.treeEdges1;
  }

  getTreeEdges2() {
    return this.treeEdges2;
  }

  //checks for duplicate of nodes in first tree edge list
  returnDuplicates() {
    var duplicates = [];
    var testValue;
    var secondTestValue;
    for (var i = 0; i < this.treeEdges1.length - 1; i++) {

      testValue = this.treeEdges1[i];

      for (var j = i + 1; j < this.treeEdges1.length; j++) {

        secondTestValue = this.treeEdges1[j];

        if (testValue == secondTestValue) {

          if (!this.checkInteger(duplicates, testValue)) {

            duplicates.push(testValue);

          }
        }
      }
    }
    return duplicates;
  }

  generateTree() {

    this.data = [];
    var duplicatesArray = [];
    var rootExists = false;
    var root = 0;

    //ensures no duplicates in first tree edge list
    do {
      this.generateEdges();
      duplicatesArray = this.returnDuplicates();
    } while (duplicatesArray.length == 0);

    //creates data array of json objects to represent tree
    for (var i = 0; i < this.treeEdges2.length; i++) {

      this.data[i] = {
        "name": `${this.treeEdges2[i]}`, "parent": `${this.treeEdges1[i]}`,
        "visited": "0"
      };

    }

    this.data[this.treeEdges2.length] = {
      "name": `${this.root}`, "parent": "null",
      "visited": "0"
    };


  }

}

module.exports = {
  TreeClass: TreeClass
}