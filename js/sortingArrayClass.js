class SortingArray {

  constructor(arrayBarSizes, arrayDivElements, arraySize, arraySection)
  {
    this.arrayBarSizes=arrayBarSizes;
    this.arrayDivElements=arrayDivElements;
    this.arraySize=arraySize;
    this.arraySection = arraySection;
  }

  getArrayBarSizes()
  {
    return this.arrayBarSizes;
  }

  setArrayBarSizes(arrayBarSizes){
    this.arrayBarSizes=arrayBarSizes;
  }

  getArraySize()
  {
    return this.arraySize;
  }

  setArraySize(arraySize){
    this.arraySize=arraySize;
  }

  setarrayDivElements(){
    this.arrayDivElements=arrayDivElements;
  }

  getarrayDivElements(){
    return this.arrayDivElements;
  }

  setArraySection(){
    this.arraySection=arraySection;
  }

  getArraySection(){
    return this.arraySection;
  }

  clearArraySection(){
    this.arraySection.innerHTML="";
  }

//Shows the numbers on the array
  generateArrayElements(){
    this.clearArraySection();
    for(var i = 0; i < this.arraySize; i++)
    {
    this.arrayDivElements[i]=document.createElement("div");
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = this.arrayBarSizes[i];
    this.arrayDivElements[i].appendChild(array_ele_label);
    this.arraySection.appendChild(this.arrayDivElements[i]);
    this.arrayDivElements[i].style=" margin: 0% 0.1%; flex-direction: column; background-color:blue; width:" + (100/this.arraySize-0.2) + "%; height:" + (this.arrayBarSizes[i]) + "%;";
    }
  }

  swapDivElements(firstIndex, secondIndex) {
    let temporary = this.arrayBarSizes[firstIndex];
    this.arrayBarSizes[firstIndex] = this.arrayBarSizes[secondIndex];
    this.arrayBarSizes[secondIndex] = temporary;
  }

  updateDivElement(index, color, delay) {
    let height = this.arrayBarSizes[index];

    setTimeout(function(){
      this.arrayDivElements[index].style=" margin:0% 0.1%; width:"+ (100/array_size-0.2) + "%; height:" + height + "%; background-color:" + color + ";";
      this.arrayDivElements[index].firstChild.innerHTML=height;
    }, delay);
  }
}

module.exports= {
  SortingArray:SortingArray
}
