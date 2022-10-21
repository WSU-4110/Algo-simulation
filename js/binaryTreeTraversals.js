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

//for logbox
var firstLogBox=document.getElementById("first_box");
var secondLogBox=document.getElementById("second_box");
var thirdLogBox=document.getElementById("third_box");
var fourthLogBox=document.getElementById("fourth_box");
var fifthLogBox=document.getElementById("fifth_box");


//for pseudocode
var firstPseudoCodeBox=document.getElementById("first_pseudocode_box");
var secondPseudoCodeBox=document.getElementById("second_pseudocode_box");
var thirdPseudoCodeBox=document.getElementById("third_pseudocode_box");
var fourthPseudoCodeBox=document.getElementById("fourth_pseudocode_box");
var fifthPseudoCodeBox=document.getElementById("fifth_pseudocode_box");
var sixthPseudoCodeBox=document.getElementById("sixth_pseudocode_box");
var seventhPseudoCodeBox=document.getElementById("seventh_pseudocode_box");

//for log box and pseudocode boc
var log_box=document.getElementById("log_box");
var pseudocode_box=document.getElementById("pseudocode_box");

//for radio button view selection
var view_log_button=document.getElementById("view_log");
var view_pseudocode_button=document.getElementById("view_pseudocode");

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

//method to draw tree structure in js came from d3.js Tips and Tricks by Malcolm Maclean
//update, called every time tree needs to be redrawn
function update(source) {
g.innerHTML="";
  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);


  //assigns y coordinate for each node
  nodes.forEach(function(d) { d.y = d.depth * 150; });

  //selects each node, setting unique ids
  var node = svg.selectAll("g.node")
      	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  //nodeEnter function, if name is "" node is hidden an not visible
  //invisible nodes are needed for binary tree
  var nodeEnter = node.enter().append("g")
      	  .attr("class", function(d){
          if (d.name == "") {
            return "node hidden";
            }
            return "node";
          })
      	  .attr("transform", function(d) {
      		  return "translate(" + d.x + "," + d.y + ")"; });

  //circle appended for each node, colored based on different values
  nodeEnter.append("circle")
          .attr("r", 10)
      	  .style("fill", "#fff")
          .style("stroke", function(d) {
              if(d.name == ""){
                return"white";}else{
              if (d.visited == 1)
                {return "deepskyblue";} else
                {return "lightgreen";}}});

        //text added to nodes
        nodeEnter.append("text")
      	  .attr("x", function(d) {
      		  return d.children || d._children ?  0 : 0; })
      	  .attr("dy", ".35em")
          .attr("text-anchor", "middle")
      	  .text(function(d) { return d.name; })
      	  .style("fill-opacity", 1);

        //holds all links
        var link = svg.selectAll("path.link")
      	  .data(links, function(d) { if(!isNaN(d.target.name)){return d.target.id;}});


        //link addributes dictate whether link is visible
        link.enter().insert("path", "g")
      	 .attr("class", function(d){
           if (d.target.name == "") {
             return "link hidden";
           }
           return "link";
         })
      	 .attr("d", diagonal);


    }



//executes specified traversal
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
      incrementLogBox();
      firstLogBox.innerHTML="Node is null";
    }, c_delay+= delay);
      return;
  } else {
    window.setTimeout(function(){
      resetPsuedoCode();
      fourthPseudoCodeBox.style="background-color:#ffff66;";
      treeroot.visited=1;
      update(root);
      incrementLogBox();
      firstLogBox.innerHTML=`Visiting node ${treeroot.name}`;
    }, c_delay+= delay);

    if(treeroot.hasOwnProperty('children')){
      window.setTimeout(function(){
        resetPsuedoCode();
        fifthPseudoCodeBox.style="background-color:#ffff66;";
        incrementLogBox();
        firstLogBox.innerHTML="Traversing Left Node";
      }, c_delay+= delay);
      preOrder(treeroot.children[0]);

      window.setTimeout(function(){
        resetPsuedoCode();
        sixthPseudoCodeBox.style="background-color:#ffff66;";
        incrementLogBox();
        firstLogBox.innerHTML="Traversing Right Node";
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
      incrementLogBox();
      firstLogBox.innerHTML="Node is null";
    }, c_delay+= delay);
      return;
  } else {

    if(treeroot.hasOwnProperty('children')){
      window.setTimeout(function(){
        resetPsuedoCode();
        fourthPseudoCodeBox.style="background-color:#ffff66;";
        incrementLogBox();
        firstLogBox.innerHTML="Traversing Left Node";
      }, c_delay += delay);
      postOrder(treeroot.children[0]);

      window.setTimeout(function(){
        resetPsuedoCode();
        fifthPseudoCodeBox.style="background-color:#ffff66;";
        incrementLogBox();
        firstLogBox.innerHTML="Traversing Right Node";
      }, c_delay += delay);
      postOrder(treeroot.children[1]);

      window.setTimeout(function(){
        resetPsuedoCode();
        sixthPseudoCodeBox.style="background-color:#ffff66;";
        treeroot.visited=1;
        update(root);
        incrementLogBox();
        firstLogBox.innerHTML=`Visiting node ${treeroot.name}`;
      }, c_delay+= delay);
    } else {
      window.setTimeout(function(){
        resetPsuedoCode();
        sixthPseudoCodeBox.style="background-color:#ffff66;";
        treeroot.visited=1;
        update(root);
        incrementLogBox();
      firstLogBox.innerHTML=`Visiting node ${treeroot.name}`;
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
      incrementLogBox();
      firstLogBox.innerHTML="Node is null";
    }, c_delay+= delay);
      return;
  }else if(treeroot.hasOwnProperty('children')){
    window.setTimeout(function(){
      resetPsuedoCode();
      fourthPseudoCodeBox.style="background-color:#ffff66;";
      incrementLogBox();
        firstLogBox.innerHTML="Traversing Left Node";
    }, c_delay+= delay);
    inOrder(treeroot.children[0]);
    window.setTimeout(function(){
      resetPsuedoCode();
      fifthPseudoCodeBox.style="background-color:#ffff66;";
      treeroot.visited=1;
      update(root);
      incrementLogBox();
      firstLogBox.innerHTML=`Visiting node ${treeroot.name}`;
    }, c_delay+= delay);

    window.setTimeout(function(){
      resetPsuedoCode();
      sixthPseudoCodeBox.style="background-color:#ffff66;";
      incrementLogBox();
        firstLogBox.innerHTML="Traversing Right Node";
    }, c_delay+= delay);
    inOrder(treeroot.children[1]);

  } else{
    window.setTimeout(function(){
      resetPsuedoCode();
      fifthPseudoCodeBox.style="background-color:#ffff66;";
      treeroot.visited=1;
      update(root);
      incrementLogBox();
      firstLogBox.innerHTML=`Visiting node ${treeroot.name}`;
    }, c_delay += delay);

    return;
  }
}

//adds event listener for log box radio button
view_log_button.addEventListener('change', function(e)
{
  if (this.checked) {
    pseudocode_box.style.display="none";
    log_box.style.display="block";
  }
});

//adds event listener for pseudocode radio button
view_pseudocode_button.addEventListener('change', function(e)
{
  if (this.checked) {
    log_box.style.display="none";
    pseudocode_box.style.display="block";
  }
});

//set psuedocode box for in order
function setPseudoCodeInOrder(){
  firstPseudoCodeBox.innerHTML="inorder(tree)";
  secondPseudoCodeBox.innerHTML="begin";
  thirdPseudoCodeBox.innerHTML="  if tree is null, return";
  fourthPseudoCodeBox.innerHTML=" inorder(tree.left_subtree);";
  fifthPseudoCodeBox.innerHTML="  visit tree.root;";
  sixthPseudoCodeBox.innerHTML="  inorder(tree.right_subtree);";
  seventhPseudoCodeBox.innerHTML="end";
}

//sets psuedocde box for pre order
function setPseudoCodePreOrder(){
  firstPseudoCodeBox.innerHTML="preorder(tree)";
  secondPseudoCodeBox.innerHTML="begin";
  thirdPseudoCodeBox.innerHTML="  if tree is null, return";
  fourthPseudoCodeBox.innerHTML="visit tree.root";
  fifthPseudoCodeBox.innerHTML="preorder(tree.left_subtree);";
  sixthPseudoCodeBox.innerHTML="preorder(tree.right_subtree);";
  seventhPseudoCodeBox.innerHTML="end";
}

//sets psuedocode box for post order
function setPseudoCodePostOrder(){
  firstPseudoCodeBox.innerHTML="postorder(tree)";
  secondPseudoCodeBox.innerHTML="begin";
  thirdPseudoCodeBox.innerHTML="if tree is null, return";
  fourthPseudoCodeBox.innerHTML="postorder(tree.left_subtree);";
  fifthPseudoCodeBox.innerHTML="postorder(tree.right_subtree);";
  sixthPseudoCodeBox.innerHTML="visit tree.root;";
  seventhPseudoCodeBox.innerHTML="end";
}

//resets pesudocode box
function resetPsuedoCode(){
  firstPseudoCodeBox.style="background-color:#f5ef4e;";
  secondPseudoCodeBox.style="background-color:#f5ef4e;";
  thirdPseudoCodeBox.style="background-color:#f5ef4e;";
  fourthPseudoCodeBox.style="background-color:#f5ef4e;";
  fifthPseudoCodeBox.style="background-color:#f5ef4e;";
  sixthPseudoCodeBox.style="background-color:#f5ef4e;";
  seventhPseudoCodeBox.style="background-color:#f5ef4e;";
}

//updates log box
function incrementLogBox(){
  fifthLogBox.innerHTML=fourthLogBox.innerHTML;
  fourthLogBox.innerHTML=thirdLogBox.innerHTML;
  thirdLogBox.innerHTML=secondLogBox.innerHTML;
  secondLogBox.innerHTML=firstLogBox.innerHTML;
}

//draws tree on load
window.onload=change_tree_size();
//hides pseudocode box on load
pseudocode_box.style.display="none";