class PseudoBox extends Observer{
  constructor (firstPseudoCodeBox, secondPseudoCodeBox, thirdPseudoCodeBox, fourthPseudoCodeBox) {
    super();
    this.firstPseudoCodeBox = firstPseudoCodeBox;
    this.secondPseudoCodeBox = secondPseudoCodeBox;
    this.thirdPseudoCodeBox = thirdPseudoCodeBox;
    this.fourthPseudoCodeBox = fourthPseudoCodeBox;
  }

  eventIsRelevant(eventType) {
    return(eventType == "pseudo" || eventType == "both");
  }

  reactToEvent(eventType, size1, size2, operation, location, delay) {

      setTimeout( function(){
        this.firstPseudoCodeBox.style="background-color:#f5ef4e;";
        this.secondPseudoCodeBox.style="background-color:#f5ef4e;";
        this.thirdPseudoCodeBox.style="background-color:#f5ef4e;";
        this.fourthPseudoCodeBox.style="background-color:#f5ef4e;";
        if (location == 1){
          this.firstPseudoCodeBox.style="background-color:#ffff66;";
        } else if (location == 2){
          this.secondPseudoCodeBox.style="background-color:#ffff66;";
        }else if (location == 3){
          this.thirdPseudoCodeBox.style="background-color:#ffff66;";
        }else if (location == 4){
          this.fourthPseudoCodeBox.style="background-color:#ffff66;";
        }
      }, delay);
  }

  update(eventType, size1, size2, operation, location, delay)
  {
    if (this.eventIsRelevant(eventType)) {
      this.reactToEvent(eventType, size1, size2, operation, location, delay);
    }
  }
}
