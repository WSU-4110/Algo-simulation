//creating random tree for tree traversals
function getTreeData(tree_size)
{
    //creates random tree
    let treeObject = new TreeClass(tree_size);
    treeObject.setRandomArray();
    treeObject.generatePruferSequence();
    treeObject.generateEdges();
    treeObject.generateTree();
    
    //to store tree data before json transformation
    var data = [];
    data = treeObject.data;

    var dataMap = data.reduce(function(map, node) {
        map[node.name] = node;
    return map;
}, {});

    //  to store json transformed tree data
    let treeData = [];
    data.forEach(function(node) {
    // add to parent
    var parent = dataMap[node.parent];
    if (parent) {
    // create child array if it doesn't exist
    (parent.children || (parent.children = []))
    // add node to child array
    .push(node);
    } else {
    // parent is null or missing
    treeData.push(node);
    }
    });

    return treeData;
}
