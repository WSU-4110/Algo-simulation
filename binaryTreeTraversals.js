
//delays for settimeouts
var delay=450;
var c_delay=0;
var i = 0;
//for tree size slider
var tree_size_input=document.getElementById('size_of_tree');
tree_size=tree_size_input.value; //value of tree size

//for execution of traversal
var executeTraversalButton = document.getElementById('traverse_tree');

//radio buttons for traversal selection
var inOrderRadioButton=document.getElementById('inorder');
var preOrderRadioButton=document.getElementById('preorder');
var postOrderRadioButton=document.getElementById('postorder');

//for log or pseudoCodeBox


//for pseudocode
var firstPseudoCodeBox=document.getElementById("first_pseudocode_box");
var secondPseudoCodeBox=document.getElementById("second_pseudocode_box");
var thirdPseudoCodeBox=document.getElementById("third_pseudocode_box");
var fourthPseudoCodeBox=document.getElementById("fourth_pseudocode_box");
var fifthPseudoCodeBox=document.getElementById("fifth_pseudocode_box");
var sixthPseudoCodeBox=document.getElementById("sixth_pseudocode_box");
var seventhPseudoCodeBox=document.getElementById("seventh_pseudocode_box");

//for svg size
var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 1000 - margin.right - margin.left,
    height = 1000 - margin.top - margin.bottom;

//tree layout from d3
var tree = d3.layout.tree()
    	.size([height, width]);

//diagonal for node connections
var diagonal = d3.svg.diagonal()
    	.projection(function(d) { return [d.x, d.y]; });

//svg element added to html page
var svg = d3.select("span").append("svg")
    	.attr("width", width + margin.right + margin.left)
    	.attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("id", "treeSection")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//holds g tag, where binary tree is drawn, so it can be reset with .innerHTML
let g = document.getElementById('treeSection');

//holds tree object to be drawn from
let information;

//holds root of tree
let root;

//event listeners
tree_size_input.addEventListener("input", change_tree_size);
executeTraversalButton.addEventListener("click", executeTraversal);



//changes tree
function change_tree_size(){
  g.innerHTML="";
  tree_size=tree_size_input.value;
  information = getTreeData(tree_size);
  root = information[0];
  update(root);
}

//update, called every time tree needs to be redrawn
function update(source) {
g.innerHTML="";
    console.log("Updating");
  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);



  nodes.forEach(function(d) { d.y = d.depth * 150; });


  var node = svg.selectAll("g.node")
      	  .data(nodes, function(d) { return d.id || (d.id = ++i); });


  var nodeEnter = node.enter().append("g")
      	  .attr("class", function(d){
          if (d.name == "") {
            return "node hidden";
            }
            return "node";
          })
      	  .attr("transform", function(d) {
      		  return "translate(" + d.x + "," + d.y + ")"; });

  nodeEnter.append("circle")
          .attr("r", 10)
      	  .style("fill", "#fff")
          .style("stroke", function(d) {
              if(d.name == ""){
                return"white";}else{
              if (d.visited == 1)
                {return "deepskyblue";} else
                {return "lightgreen";}}});

        nodeEnter.append("text")
      	  .attr("x", function(d) {
      		  return d.children || d._children ?  0 : 0; })
      	  .attr("dy", ".35em")

            .attr("text-anchor", "middle")
      	  .text(function(d) { return d.name; })
      	  .style("fill-opacity", 1);


        var link = svg.selectAll("path.link")
      	  .data(links, function(d) { if(!isNaN(d.target.name)){return d.target.id;}});



        link.enter().insert("path", "g")
      	 .attr("class", function(d){
           if (d.target.name == "") {
             return "link hidden";
           }
           return "link";
         })
      	 .attr("d", diagonal);


    }



//executes specified trabersal
function executeTraversal() {
  c_delay = 0;
  treeroot = information[0];
  if(preOrderRadioButton.checked)
  {
    setPseudoCodePreOrder();
    preOrder(treeroot);
    window.setTimeout(function(){
      resetPsuedoCode();
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  } else if(postOrderRadioButton.checked)
  {
    setPseudoCodePostOrder();
    postOrder(treeroot);
    window.setTimeout(function(){
      resetPsuedoCode();
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  } else if(inOrderRadioButton.checked){
    setPseudoCodeInOrder();
    inOrder(treeroot);
    window.setTimeout(function(){
      resetPsuedoCode();
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  }
}

//executes pre order tree traversal
function preOrder(treeroot){
  if (treeroot.name ==""){
    window.setTimeout(function(){
      resetPsuedoCode();
      thirdPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay+= delay);
      return;
  } else {
    window.setTimeout(function(){
      resetPsuedoCode();
      fourthPseudoCodeBox.style="background-color:#ffff66;";
      treeroot.visited=1;
      update(root);
    }, c_delay+= delay);

    if(treeroot.hasOwnProperty('children')){
      window.setTimeout(function(){
        resetPsuedoCode();
        fifthPseudoCodeBox.style="background-color:#ffff66;";
      }, c_delay+= delay);
      preOrder(treeroot.children[0]);

      window.setTimeout(function(){
        resetPsuedoCode();
        sixthPseudoCodeBox.style="background-color:#ffff66;";
      }, c_delay+= delay);
      preOrder(treeroot.children[1]);
    }

  }
}

//executes post order tree traversal
function postOrder(treeroot){
  if (treeroot.name ==""){
    window.setTimeout(function(){
      resetPsuedoCode();
      thirdPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay+= delay);
      return;
  } else {

    if(treeroot.hasOwnProperty('children')){
      window.setTimeout(function(){
        resetPsuedoCode();
        fourthPseudoCodeBox.style="background-color:#ffff66;";
      }, c_delay += delay);
      postOrder(treeroot.children[0]);

      window.setTimeout(function(){
        resetPsuedoCode();
        fifthPseudoCodeBox.style="background-color:#ffff66;";
      }, c_delay += delay);
      postOrder(treeroot.children[1]);

      window.setTimeout(function(){
        resetPsuedoCode();
        sixthPseudoCodeBox.style="background-color:#ffff66;";
        treeroot.visited=1;
        update(root);
      }, c_delay+= delay);
    } else {
      window.setTimeout(function(){
        resetPsuedoCode();
        sixthPseudoCodeBox.style="background-color:#ffff66;";
        treeroot.visited=1;
        update(root);
      }, c_delay+= delay);
    }

  }
}

//executes in order tree traversal
function inOrder(treeroot){
  if (treeroot.name==""){
    window.setTimeout(function(){
      resetPsuedoCode();
      thirdPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay+= delay);
      return;
  }else if(treeroot.hasOwnProperty('children')){
    window.setTimeout(function(){
      resetPsuedoCode();
      fourthPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay+= delay);
    inOrder(treeroot.children[0]);
    window.setTimeout(function(){
      resetPsuedoCode();
      fifthPseudoCodeBox.style="background-color:#ffff66;";
      treeroot.visited=1;
      update(root);
    }, c_delay+= delay);

    window.setTimeout(function(){
      resetPsuedoCode();
      sixthPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay+= delay);
    inOrder(treeroot.children[1]);

  } else{
    window.setTimeout(function(){
      resetPsuedoCode();
      fifthPseudoCodeBox.style="background-color:#ffff66;";
      treeroot.visited=1;
      update(root);
    }, c_delay += delay);

    return;
  }
}

function setPseudoCodeInOrder(){
  firstPseudoCodeBox.innerHTML="inorder(tree)";
  secondPseudoCodeBox.innerHTML="begin";
  thirdPseudoCodeBox.innerHTML="  if tree is null, return";
  fourthPseudoCodeBox.innerHTML=" inorder(tree.left_subtree);";
  fifthPseudoCodeBox.innerHTML="  visit tree.root;";
  sixthPseudoCodeBox.innerHTML="  inorder(tree.right_subtree);";
  seventhPseudoCodeBox.innerHTML="end";
}

function setPseudoCodePreOrder(){
  firstPseudoCodeBox.innerHTML="preorder(tree)";
  secondPseudoCodeBox.innerHTML="begin";
  thirdPseudoCodeBox.innerHTML="  if tree is null, return";
  fourthPseudoCodeBox.innerHTML="visit tree.root";
  fifthPseudoCodeBox.innerHTML="preorder(tree.left_subtree);";
  sixthPseudoCodeBox.innerHTML="preorder(tree.right_subtree);";
  seventhPseudoCodeBox.innerHTML="end";
}

function setPseudoCodePostOrder(){
  firstPseudoCodeBox.innerHTML="postorder(tree)";
  secondPseudoCodeBox.innerHTML="begin";
  thirdPseudoCodeBox.innerHTML="if tree is null, return";
  fourthPseudoCodeBox.innerHTML="postorder(tree.left_subtree);";
  fifthPseudoCodeBox.innerHTML="postorder(tree.right_subtree);";
  sixthPseudoCodeBox.innerHTML="visit tree.root;";
  seventhPseudoCodeBox.innerHTML="end";
}

function resetPsuedoCode(){
  firstPseudoCodeBox.style="background-color:#f5ef4e;";
  secondPseudoCodeBox.style="background-color:#f5ef4e;";
  thirdPseudoCodeBox.style="background-color:#f5ef4e;";
  fourthPseudoCodeBox.style="background-color:#f5ef4e;";
  fifthPseudoCodeBox.style="background-color:#f5ef4e;";
  sixthPseudoCodeBox.style="background-color:#f5ef4e;";
  seventhPseudoCodeBox.style="background-color:#f5ef4e;";
}
