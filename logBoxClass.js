class LogBox {
    constructor(firstLogBox, secondLogBox, thirdLogBox, fourthLogBox, fifthLogBox) {
      this.firstLogBox = firstLogBox;
      this.secondLogBox = secondLogBox;
      this.thirdLogBox = thirdLogBox;
      this.fourthLogBox = fourthLogBox;
      this.fifthLogBox = fifthLogBox;
    }

    getThirdLogBox(){
      return this.thirdLogBox;
    }
  
    updateLogBox(size1, size2, operation, delay) {
      setTimeout( function(){
        this.fifthLogBox.innerHTML=this.fourthLogBox.innerHTML;
        this.fourthLogBox.innerHTML=this.thirdLogBox.innerHTML;
        this.thirdLogBox.innerHTML=this.secondLogBox.innerHTML;
        this.secondLogBox.innerHTML=this.firstLogBox.innerHTML;
        this.firstLogBox.innerHTML= operation + " size " + size1 + " with size " + size2 + ".";
      }, delay);
    }
  }

  module.exports= {
    LogBox:LogBox
  }

