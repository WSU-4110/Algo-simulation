class BinaryTree {
    constructor(node){
        this.root = node;
    }

    // Insert Node
    insert(node, root){
        if (node.value == root.value){
            return ;
        }
        else if(node.value < root.value){
            // check if left subtree is null
            if (root.left != null){
                this.insert(node, root.left);
            }
            else{
                root.left = node;
                node.parent = root;
            }
        } else {
            // check if right subtree is null
            if (root.right != null){
                this.insert(node, root.right);
            }
            else{
                root.right = node;
                node.parent = root;
            }
        }
    }

    

}
