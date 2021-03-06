function getTreeData(sizeOfTree){
  
    var numbers = [];
    var testInt;
    var added = false;
  
    var treeSize = parseInt(sizeOfTree, 10);
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
  
  
    var node = new Node(numbers[0]);
    var treeet = new BinaryTree(node);
  
    for(var i = 1; i < numbers.length; i++)
    {
      treeet.insert(new Node(numbers[i]), treeet.root);
    }
    
    var information = [treeet.root.createStructure()];
    console.log(numbers);
        console.log(information);
    return information;
  }
  
  function getRandomInteger(max)
  {
    return Math.floor(Math.random() * (max)) + 1;
  }
  
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

  module.exports= {
    getRandomInteger,
    checkInteger
  }
  