//basic node for binry tree, added method to create json structure from tree so it can be drawn in 
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

    getLeft()
    {
      return this.left;
    }

    //creates JSON structure and returns to draw tree from
    createStructure(){

      let information;
      let parent;
      let leftChild;
      let rightChild;
      let nodeValue = this.getValue();

      //case no left chile
      if(this.left == null)
      {
        leftChild = {"name": "", "parent" : nodeValue}
      } else {
        leftChild = this.left.createStructure();
      }

      //case no right child
      if(this.right == null)
      {
        rightChild = {"name": "", "parent" : nodeValue}
      } else {
        rightChild = this.right.createStructure();
      }

      //case parent null "at root"
      if(this.parent == null){

        parent = "null";

      } else {
        parent = this.parent.getValue();
      }

      //case right and left child null
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

module.exports= {
  Node:Node
}