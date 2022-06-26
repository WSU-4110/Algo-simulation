class Subject {

    constructor() {
      this.observers = [];
    }
  
    addObserver(obs) {
      this.observers.push(obs)
    }
  
    updateObservers() {
        throw new Error("Needs to be implemented");
    }
  }
  