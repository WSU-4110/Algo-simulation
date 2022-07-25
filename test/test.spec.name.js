const { expect } = require('chai');
//const { getRandomInteger } = require('../treeGenerator');
//const { checkInteger } = require('../treeGenerator');
//const { TreeClass } = require('../TreeClass');
const { SortingArray }  = require('../sortingArrayClass');
/*
describe('the getRandomInteger function', ()=>{
    it('should output a number greater than 0', () => {
        const result = getRandomInteger(5);
        expect(result).to.be.above(0);
    });

});

describe('the check integer function, ', () => {
    let numbersArray = [1, 2, 3];
    let number = 1;
    it('Should return true that there is one', () => {
        const result = checkInteger(numbersArray, number);
        expect(result).to.be.true;
    });
});

describe('the tree class', () => {

    let numberOfNodes = 5;
    let newTree = new TreeClass(5);
    it('Should return the same number of nodes', () => {
        let actualNumberOfNodes = newTree.getNumberOfNodes();
        expect(numberOfNodes).to.equal(actualNumberOfNodes);
    });
});

describe('the tree class', () => {
    let newTree = new TreeClass(5);
    let setNodes = 6;
    newTree.setNumberOfNodes(setNodes);
    it('Should set the appropriate number of nodes', () => {
        let actualNumberOfNodes = newTree.getNumberOfNodes();
        expect(setNodes).to.equal(actualNumberOfNodes);
    });
});

describe('the tree class', () => {
    let newTree = new TreeClass(5);
    newTree.generatePruferSequence();
    it('Should have a prufer sequence length two less than the number of nodes', () => {
        let actualPruferLength = newTree.getPruferSequence().length;
        expect(actualPruferLength).to.equal(3);
    });
});

describe('the tree class', () => {
    let newTree = new TreeClass(3);
    newTree.generateTree();

    it('Should have one less edge than the number of nodes in the tree in the first edge array', () => {
        let treeEdges1 = newTree.getTreeEdges1().length;
        expect(treeEdges1).to.equal(2);
    });

    it('Should have one less edge than the number of nodes in the tree in the second edge array', () => {
        let treeEdges2 = newTree.getTreeEdges2().length;
        expect(treeEdges2).to.equal(2);
    })
});
*/
//Should return that the arrayBarSize is greater than 2
describe('ArrayBarSize must be greater than 2', () => {
    let newArrayBarSize = new SortingArray(1) ;
    let setNewArrayBarSize = 2;
    it('Must be greater than 2', () => {
        let actualNumberOfBarSizes = newArrayBarSize.getArrayBarSizes();
        expect(setNewArrayBarSize).to.greaterThan(actualNumberOfBarSizes);
    });
  });
  
  //To see check if the array size is the same as entered in the input
  describe('the ArraySize class', () => {
      let setNewArraySize = 1;
      let newArraySize = new SortingArray(1);
      newArraySize.setArraySize(setNewArraySize);
    it('Should return that are elements in the array', () => {
        let actualNumberOfArraySizes = newArraySize.getArraySize();
        expect(setNewArraySize).to.equal(actualNumberOfArraySizes);
    });
  });
  
  //To see if check if there are same div elements as the arraySize
  describe('the SortingArray class', () => {
      let setNewArraySize1 = 34;
      let newArraySize1 = new SortingArray(34);
      newArraySize1.setArraySize(setNewArraySize1);
    it('Should return the same amount of div elements in the array as the arraySize because they are the same values', () => {
        let actualNumberOfArraySizes1 = newArraySize1.getArraySize();
        expect(setNewArraySize1).to.equal(actualNumberOfArraySizes1);
    });
  });

