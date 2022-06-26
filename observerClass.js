class Observer {

    update(eventType, size1, size2, location, delay){
      if(this.eventIsRelevant(eventType)) {
        this.reactToEvent(eventType, size1, size2, location, delay);
      }
    }
  
    eventIsRelevant() {
      throw new Error("Needs to be implemented");
    }
  
    reactToEvent() {
      throw new Error("Needs to be implemented");
    }
  }
  