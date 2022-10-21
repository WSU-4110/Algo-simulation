//for creating random binary trees for tree class
function getTreeData(sizeOfTree){
  
    var numbers = [];
    var testInt;
    var added = false;
    
    //creates tree size
    var treeSize = parseInt(sizeOfTree, 10);

    //adds non repeating integers to number
    for(var i = 0; i < treeSize; i++)
    {
      added = false;
      while(!added)
      {
        testInt = getRandomInteger(treeSize + 10);
        if (!checkInteger(numbers, testInt))
        {
          numbers[i] = testInt;
          added = true;
        }
      }
    }
  
    //creates tree object
    var node = new Node(numbers[0]);
    var newBinaryTree = new BinaryTree(node);
  
    for(var i = 1; i < numbers.length; i++)
    {
      newBinaryTree.insert(new Node(numbers[i]), newBinaryTree.root);
    }
    
    var information = [newBinaryTree.root.createStructure()];
   
    return information;
  }
  
  //for random nums
  function getRandomInteger(max)
  {
    return Math.floor(Math.random() * (max)) + 1;
  }
  
  //to check if integer is in array yet
  function checkInteger(usedIntegers, newInteger)
  {
    var used = false;
  
    if (usedIntegers.length == 0)
    {
      return used;
    } else
    {
      for (var i = 0; i < usedIntegers.length; i++)
      {
        if (usedIntegers[i] == newInteger)
        {
          used = true;
        }
      }
      return used;
    }
  }

  //for testing
  module.exports= {
    getRandomInteger,
    checkInteger
  }
  