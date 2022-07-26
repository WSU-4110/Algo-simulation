const { expect } = require('chai');
const { BinaryTree } = require('../binaryTreeClass');
const { LogBox } = require('../logBoxClass');
const { Node } = require('../nodeClass');

describe('the binary tree class ', ()=>{
    it("creates a binary tree with a root value that is passed in", () => {
        let node = 8;
        let newBinaryTree = new BinaryTree(node);
        let actualRoot = newBinaryTree.getRoot();
            expect(node).to.equal(actualRoot);
    });

});

describe('the binary tree class but the expectation is that the two values are different ', ()=>{
    it("creates a binary tree with a root value that is passed in", () => {
        let node = 8;
        let node2 = 1;
        let newBinaryTree = new BinaryTree(node);
        let actualRoot = newBinaryTree.getRoot();
            expect(node2).to.not.equal(actualRoot);
    });

});

describe('the binary tree class insertion method. ', ()=>{
    it("inserts a node into a binary tree (passing 8 for root and then inserting 9)", () => {
        let node = 8; //root
        let newNode = 9; //passed to the right of root.
        let newBinaryTree = new BinaryTree(node);
        newBinaryTree.insert(newNode, node);
        let root = newBinaryTree.getRoot();
            expect(root).to.not.equal(newNode);
    });

});

describe('the Log Box class creates a log box with 5 different values that are passed in. ', ()=>{
    it("will create the logbox and check the third logbox that was inserted", () => {
        let newLogBox = new LogBox(5, 10, 15, 20, 25);
        let actualThirdLogBox = newLogBox.getThirdLogBox();
        let expected = 15;
            expect(expected).to.equal(actualThirdLogBox);
    });

});

describe('the Log Box class creates a log box with 5 different values that are passed in. ', ()=>{
    it("will create the logbox and check the third logbox that was inserted (however we are testing to see if they are not equal(they should be the same so it should return false))", () => {
        let newLogBox = new LogBox(5, 10, 15, 20, 25);
        let actualThirdLogBox = newLogBox.getThirdLogBox();
        let expected = 20;
            expect(expected).to.not.equal(actualThirdLogBox);
    });

});

describe('the node class will create a node with 4 values (3 of which are null on instantiation) ', ()=>{
    it("will create the node class and then we will set the node with a new value and then test to see if it was changed.", () => {
        let newNode = new Node(20);
        newNode.setNode(16);
        let actual = newNode.getValue();
        let expectedValue = 16;
            expect(expectedValue).to.equal(actual);
    });

});

//describe('the node class method create Structure', ()=>{
//    it("will create the structure of our node class with the parent, left child, right child. We will make changes and call to see if the structure was made.", () => {
//        let newNode = new Node(20);
//        let test = newNode.createStructure();
//        let expectedValue = { name: 20, parent: 'null', ...(1) }
//            expect(expectedValue).to.equal(test);
//    });
//
//});