
function getTreeData(tree_size)
{
    let treeObject = new TreeClass(tree_size);
    treeObject.setRandomArray();
    treeObject.generatePruferSequence();
    treeObject.generateEdges();
    treeObject.generateTree();
    
    var data = [];

    data = treeObject.data;

   
    var dataMap = data.reduce(function(map, node) {
        map[node.name] = node;
    return map;
}, {});
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
