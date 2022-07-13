
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
var depthFirstRadioButton=document.getElementById('depthfirst');
var breadthFirstRadioButton=document.getElementById('breadthfirst');
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

//update, called every time tree needs to be redrawn
function update(source) {
g.innerHTML="";
    console.log("Updating");
  // Compute the new tree layout.
  
           //new here
           // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);

// Normalize for fixed-depth.
nodes.forEach(function(d) { d.y = d.depth * 100; });

// Declare the nodes…
var node = svg.selectAll("g.node")
  .data(nodes, function(d) { return d.id || (d.id = ++i); });

// Enter the nodes.
var nodeEnter = node.enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")"; });

nodeEnter.append("circle")
  .attr("r", 10)
  .style("fill", "#fff")
.style("stroke", function(d) {if (d.visited == 1){return "deepskyblue";} else {return "lightgreen";}});

nodeEnter.append("text")
  .attr("x", function(d) {
      return d.children || d._children ?  0 : 0; })
  .attr("dy", ".35em")
  //.attr("text-anchor", function(d) {
      //return d.children || d._children ? "end" : "start"; })
  .attr("text-anchor", "middle")
  .text(function(d) { return d.name; })
  .style("fill-opacity", 1);

// Declare the links…
var link = svg.selectAll("path.link")
  .data(links, function(d) { return d.target.id; });

// Enter the links.
link.enter().insert("path", "g")
 .attr("class", "link")
 .attr("d", diagonal);


    }



//executes specified traversal
function executeTraversal() {
  c_delay = 0;
  treeroot = information[0];
  if(depthFirstRadioButton.checked)
  {
    setPseudoCodePreOrder();
    depthFirst(treeroot);
    window.setTimeout(function(){
      resetPsuedoCode();
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  } else if(breadthFirstRadioButton.checked)
  {
    setPseudoCodePostOrder();
    breadthFirst(treeroot);
    window.setTimeout(function(){
      resetPsuedoCode();
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  }
}



function depthFirst(treeroot)
{
    if(treeroot.visited==0)
    {
        window.setTimeout(function(){
            treeroot.visited=1;
            update(root);
        }, c_delay += delay);

        if(treeroot.hasOwnProperty('children'))
        {
            for(var i = 0; i < treeroot.children.length; i++)
            {
                depthFirst(treeroot.children[i]);
            }
        }

    }
}

function depthFirstSearch(treeroot, name)
{
    console.log("treeroot.name");
    console.log(treeroot.name);

    console.log("name");
    console.log(name);
    if(treeroot.name==name)
    {   window.setTimeout(function() {
        treeroot.visited=1;
        update(root);
    }, c_delay += delay);
  
        return true;
    }
    else if(treeroot.hasOwnProperty('children'))
    {
        for(var i = 0; i < treeroot.children.length; i++)
        {
            depthFirstSearch(treeroot.children[i], name);
        }
    }
}

function breadthFirst(treeroot)
{
    let queue = [];
    let updateQueue=[];

    let childrenLeft = true;

    queue.push(treeroot);
    console.log("in B");
    updateQueue.push(treeroot.name);
    while(queue.length != 0)
    {
        console.log("in B1");
        
        console.log("Queue 0");
        console.log(queue[0]);
        if(queue[0].hasOwnProperty('children'))
        {
            for(var i = 0; i < queue[0].children.length; i++)
            {  
                console.log("in B2");
                let child=queue[0].children[i];
                queue.push(child); 
                updateQueue.push(child.name);
            }

        }
        queue.shift(); 
    }

    for(var i = 0; i < updateQueue.length; i++)
    {
           depthFirstSearch(treeroot, updateQueue[i]);
           window.setTimeout(function(){
            update(root);
           }, c_delay += delay)
           
          
    }
    console.log("root");
    console.log(root);

    
}


view_log_button.addEventListener('change', function(e)
{
  if (this.checked) {
    pseudocode_box.style.display="none";
    log_box.style.display="block";
  }
});

view_pseudocode_button.addEventListener('change', function(e)
{
  if (this.checked) {
    log_box.style.display="none";
    pseudocode_box.style.display="block";
  }
});

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

function incrementLogBox(){
  fifthLogBox.innerHTML=fourthLogBox.innerHTML;
  fourthLogBox.innerHTML=thirdLogBox.innerHTML;
  thirdLogBox.innerHTML=secondLogBox.innerHTML;
  secondLogBox.innerHTML=firstLogBox.innerHTML;
}