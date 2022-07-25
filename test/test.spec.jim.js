const { expect } = require('chai');
const { getRandomInteger } = require('../treeGenerator');
const { checkInteger } = require('../treeGenerator');
const { TreeClass } = require('../TreeClass');

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
