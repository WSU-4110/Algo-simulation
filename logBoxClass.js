class LogBox extends Observer{
  constructor(firstLogBox, secondLogBox, thirdLogBox, fourthLogBox, fifthLogBox) {
    super();
    this.firstLogBox = firstLogBox;
    this.secondLogBox = secondLogBox;
    this.thirdLogBox = thirdLogBox;
    this.fourthLogBox = fourthLogBox;
    this.fifthLogBox = fifthLogBox;
  }

  eventIsRelevant(eventType) {
    return(eventType == "log" || eventType == "both");
  }

  reactToEvent(eventType, size1, size2, operation, location, delay) {
    setTimeout( function(){
      this.fifthLogBox.innerHTML=this.fourthLogBox.innerHTML;
      this.fourthLogBox.innerHTML=this.thirdLogBox.innerHTML;
      this.thirdLogBox.innerHTML=this.secondLogBox.innerHTML;
      this.secondLogBox.innerHTML=this.firstLogBox.innerHTML;
      this.firstLogBox.innerHTML= operation + " size " + size1 + " with size " + size2 + ".";
    }, delay);
  }

  update(eventType, size1, size2, operation, location, delay) {
    if (this.eventIsRelevant(eventType)){
      this.reactToEvent(eventType, size1, size2, operation, location, delay);
    }
  }
}
