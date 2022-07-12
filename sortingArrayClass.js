class SortingArray {

    constructor(arrayBarSizes, arrayDivElements, arraySize, arraySection)
    {
      this.arrayBarSizes=arrayBarSizes;
      this.arrayDivElements=arrayDivElements;
      this.arraySize=arraySize;
      this.arraySection = arraySection;
    }
  
    setArrayBarSizes(arrayBarSizes){
      this.arrayBarSizes=arrayBarSizes;
    }
  
    setArraySize(arraySize){
      this.arraySize=arraySize;
    }
  
    clearArraySection(){
      this.arraySection.innerHTML="";
    }
  
    generateArrayElements(){
      this.clearArraySection();
      for(var i = 0; i < this.arraySize; i++)
      {
        this.arrayDivElements[i]=document.createElement("div");
        this.arraySection.appendChild(this.arrayDivElements[i]);
        this.arrayDivElements[i].style=" margin: 0% 0.1%; background-color:blue; width:" + (100/this.arraySize-0.2) + "%; height:" + (this.arrayBarSizes[i]) + "%;";
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
      }, delay);
    }
  }
  