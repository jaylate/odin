const Tree = require("./bst.js");

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tree.insert(44);
tree.insert(56);
tree.prettyPrint();

console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced());
