
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
//for svg size
var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 1400 - margin.right - margin.left,
    height = 1200 - margin.top - margin.bottom;


//method to draw tree structure in js came from d3.js Tips and Tricks by Malcolm Maclean
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
  
           //new here
           // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);

// Normalize for fixed-depth.
nodes.forEach(function(d) { d.y = d.depth * 100; });

// Declare the nodes.
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
    depthFirst(treeroot);
    window.setTimeout(function(){
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  } else if(breadthFirstRadioButton.checked)
  {
    breadthFirst(treeroot);
    window.setTimeout(function(){
      seventhPseudoCodeBox.style="background-color:#ffff66;";
    }, c_delay += delay);
  }
}


//executed depth first vizualization
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

//to assist breadth first execution
function depthFirstSearch(treeroot, name)
{
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

//executes breadth first search visualization, stores order of traversal in queue first, then executed vizualization from queue
function breadthFirst(treeroot)
{
    let queue = [];
    let updateQueue=[];

    let childrenLeft = true;

    queue.push(treeroot);
    updateQueue.push(treeroot.name);
    while(queue.length != 0)
    {
        if(queue[0].hasOwnProperty('children'))
        {
            for(var i = 0; i < queue[0].children.length; i++)
            {  
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

    
}
window.onload=change_tree_size();