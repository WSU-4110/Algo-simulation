const { SortingArray }  = require('../sortingArrayClass');
const { expect } = require('chai');

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