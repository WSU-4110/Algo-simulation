class TreeClass {

  constructor(numberOfNodes)
  {
    this.numberOfNodes = numberOfNodes;
    this.randomArray = [];
    this.pruferSequence=[];
    this.copiedPrufer = [];
    this.orderedSet =[];
    this.treeEdges1=[];
    this.treeEdges2=[];
    this.treeData=[];
    this.data=[];
    this.root=0;

  }

  getNumberOfNodes()
  {
    return this.numberOfNodes;
  }

  setNumberOfNodes(numberOfNodes)
  {
    this.numberOfNodes = numberOfNodes;
  }

  getRandomInteger(max)
  {
    return Math.floor(Math.random() * (max)) + 1;
  }

  checkInteger(usedIntegers, newInteger)
  {
    var used = false;
    if (usedIntegers.length == 0)
    {
      return used;
    }
    else
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

  generatePruferSequence()
  {
    this.pruferSequence=[];
    var nextInteger;
    var added = false;
    for(var i = 0; i < this.numberOfNodes - 2; i++)
    {
      added = false;
      while (!added)
      {
        nextInteger = this.getRandomInteger(this.numberOfNodes);
        if(!this.checkInteger(this.pruferSequence , nextInteger))
        {
          this.pruferSequence[i]=nextInteger;
          added = true;
        }
      }
    }
  }

  generatePruferSequence2()
  {
    this.pruferSequence=[];
    for(var i = 0; i < this.numberOfNodes - 2; i++)
    {
      this.pruferSequence[i]=this.getRandomInteger(this.numberOfNodes);
    }
  }

  setRandomArray()
  {
    for(var i = 0; i < this.numberOfNodes; i++)
    {
      this.randomArray[i] = this.getRandomInteger(this.numberOfNodes);
      console.log(this.getRandomInteger(this.numberOfNodes));
    }
  }

  getRandomArray()
  {
    return this.randomArray;
  }

  getPruferSequence()
  {
    return this.pruferSequence;
  }

  generateEdges()
  {

    this.generatePruferSequence2();

    this.copiedPrufer = [];
    this.orderedSet = [];
    this.treeEdges1 = [];
    this.treeEdges2 = [];
    var u;
    var v;
    var inPruferSequence = true;
    var orderedSetIndex = 0;

    //generating copy of prufer sequence
    console.log("Checking Copied Prufer");
    for(var i = 0; i < this.pruferSequence.length; i++)
    {
      this.copiedPrufer[i] = this.pruferSequence[i];
    }


    console.log("CopiedPrufer");
    console.log(this.copiedPrufer);


    //creating ordered set
    for(var i = 0; i < this.numberOfNodes; i++)
    {
      this.orderedSet[i]= i + 1;
    }

    console.log("OrderedSet")
    console.log(this.orderedSet);


    for(var i = 0; i < this.numberOfNodes - 2; i++)
    {
      u = this.pruferSequence[i]
      orderedSetIndex = 0;

      console.log("CopiedPrufer");
      console.log(this.copiedPrufer);

      console.log("OrderedSet")
      console.log(this.orderedSet);
      inPruferSequence = true;
      while(inPruferSequence)
      {

        v = this.orderedSet[orderedSetIndex];
        inPruferSequence = false;
        for(var j = 0; j < this.copiedPrufer.length; j++)
        {

          if (this.copiedPrufer[j] == v)
          {
            inPruferSequence = true;
          }
        }
        orderedSetIndex++;
      }

      this.treeEdges1.push(u);
      this.treeEdges2.push(v);

      //removes first element of prufer sequence
      this.copiedPrufer.shift();

      for(var j = 0; j < this.orderedSet.length; j++)
      {
        console.log("Value of V")
        console.log(v);
        if (this.orderedSet[j] == v)
        {
          this.orderedSet.splice(j, 1);
        }
      }

    }

    this.treeEdges1.push(this.orderedSet[0]);
    this.treeEdges2.push(this.orderedSet[1]);
    this.root = this.orderedSet[0];
  }

  getTreeEdges1()
  {
    return this.treeEdges1;
  }

  getTreeEdges2()
  {
    return this.treeEdges2;
  }

  returnDuplicates()
  {
    var duplicates = [];
    var testValue;
    var secondTestValue;
    for(var i = 0; i < this.treeEdges1.length -1; i++)
    {
      testValue = this.treeEdges1[i];
      console.log("Test Value");
      console.log(testValue);
      for(var j = i + 1; j < this.treeEdges1.length; j++)
      {
        secondTestValue = this.treeEdges1[j];
        console.log("Second Test Value");
        console.log(secondTestValue);
        if(testValue == secondTestValue)
        {
          if(!this.checkInteger(duplicates, testValue))
          {
            duplicates.push(testValue);
          }
        }
      }
    }
    console.log("Duplicates");
    console.log(duplicates);
    return duplicates;
  }

  generateTree()
  {

    this.data =[];
    var duplicatesArray = [];
    var rootExists = false;
    var root = 0;

    console.log("Here 1");

    while (!rootExists)
    {
      do {
        this.generateEdges();
        duplicatesArray = this.returnDuplicates();
      } while (duplicatesArray.length == 0);

      for(var i = 0; i < duplicatesArray.length; i++)
      {
        rootExists = true;
        for(var j = 0; j < this.treeEdges2.length; j++)
        {
          if(duplicatesArray[i] == this.treeEdges2[j])
          {
            rootExists = false;
          }
        }
        if(rootExists)
        {
          root = duplicatesArray[i];
          break;
        }
      }
    }



    for(var i = 0; i < this.treeEdges2.length; i++)
    {
      this.data[i] = {"name" : `${this.treeEdges2[i]}`, "parent" : `${this.treeEdges1[i]}`,
                  "visited" : "0"};
    }

    this.data[this.treeEdges2.length] = {"name" : `${this.root}`, "parent" : "null",
                "visited" : "0"};


  }

}
