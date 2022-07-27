class PseudoBox {
    constructor (firstPseudoCodeBox, secondPseudoCodeBox, thirdPseudoCodeBox, fourthPseudoCodeBox, fifthPseudoCodeBox) {
      this.firstPseudoCodeBox = firstPseudoCodeBox;
      this.secondPseudoCodeBox = secondPseudoCodeBox;
      this.thirdPseudoCodeBox = thirdPseudoCodeBox;
      this.fourthPseudoCodeBox = fourthPseudoCodeBox;
      this.fifthPseudoCodeBox = fifthPseudoCodeBox;
    }
  
    updatePseudoCode(boxNumber, delay) {
  
        setTimeout( function(){
          this.firstPseudoCodeBox.style="background-color:#f5ef4e;";
          this.secondPseudoCodeBox.style="background-color:#f5ef4e;";
          this.thirdPseudoCodeBox.style="background-color:#f5ef4e;";
          this.fourthPseudoCodeBox.style="background-color:#f5ef4e;";
          this.fifthPseudoCodeBox.style="background-color:#f5ef4e;";
          if (boxNumber == 1){
            this.firstPseudoCodeBox.style="background-color:#ffff66;";
          } else if (boxNumber == 2){
            this.secondPseudoCodeBox.style="background-color:#ffff66;";
          }else if (boxNumber == 3){
            this.thirdPseudoCodeBox.style="background-color:#ffff66;";
          }else if (boxNumber == 4){
            this.fourthPseudoCodeBox.style="background-color:#ffff66;";
          }else if (boxNumber == 5){
            this.fifthPseudoCodeBox.style="background-color:#ffff66;";
          }
        }, delay);
    }
  }
  