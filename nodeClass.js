class Node {
    constructor(value){
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    setNode(value){
      this.value = value;
      this.parent = null;
      this.left = null;
      this.right = null;
    }

    getValue()
    {
      return this.value;
    }

    createStructure(){

      let information;
      let parent;
      let leftChild;
      let rightChild;
      let nodeValue = this.getValue();

      if(this.left == null)
      {
        leftChild = {"name": "", "parent" : nodeValue}
      } else {
        leftChild = this.left.createStructure();
      }

      if(this.right == null)
      {
        rightChild = {"name": "", "parent" : nodeValue}
      } else {
        rightChild = this.right.createStructure();
      }


      if(this.parent == null){

        parent = "null";

      } else {
        parent = this.parent.getValue();
      }


      if(this.right == null && this.left == null){
      information =
      {
        "name" : nodeValue,
        "parent" : parent,
        "visited" : "0",
      };
    } else {
      information =
      {
        "name" : nodeValue,
        "parent" : parent,
        "visited" : "0",
        "children" : [leftChild, rightChild]
      };
    }

      return information;



}
}
