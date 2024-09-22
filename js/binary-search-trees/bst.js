module.exports = class Tree {
  root = null;
  array = [];
  constructor(array) {
    this.buildTree(array);
  }
  buildTree(array = null) {
    if (array) {
      this.array = [...new Set(array)].sort(function (a, b) {
        return a - b;
      });
    }
    this.root = this.buildTreeRec();
    return this.root;
  }
  buildTreeRec(arr = this.array, start = 0, end = this.array.length - 1) {
    if (start > end) return null;

    const middle = parseInt((start + end) / 2);

    const node = new Node(arr[middle]);
    node.left = this.buildTreeRec(arr, start, middle - 1);
    node.right = this.buildTreeRec(arr, middle + 1, end);

    return node;
  }
  insert(value) {
    function insertRec(node, value) {
      if (node === null) node = new Node(value);
      if (node.data === value) return node;
      if (value < node.data) {
        node.left = insertRec(node.left, value);
      } else if (value > node.data) {
        node.right = insertRec(node.right, value);
      }

      return node;
    }
    this.root = insertRec(this.root, value);
  }
  deleteItem(value) {
    function deleteItemRec(node, value) {
      if (node === null) return node;
      if (node.data > value) {
        node.left = deleteItemRec(node.left, value);
      } else if (node.data < value) {
        node.right = deleteItemRec(node.right, value);
      } else {
        if (node.left === null) return node.right;
        else if (node.right === null) return node.left;

        function findMax(curr) {
          while (curr.right) curr = curr.right;
          return curr;
        }
        const pred = findMax(node.left);
        node.data = pred.data;
        node.left = deleteItemRec(node.left, pred.data);
      }
      return node;
    }
    this.root = deleteItemRec(this.root, value);
  }
  find(value) {
    function findRec(node, value) {
      if (node === null) return node;
      if (node.data === value) return node;
      else if (node.data > value) {
        return findRec(node.left, value);
      } else {
        return findRec(node.right, value);
      }
    }
    return findRec(this.root, value);
  }

  levelOrder(callback) {
    return this.root.levelOrder(callback);
  }
  inOrder(callback) {
    return this.root.inOrder(callback);
  }
  preOrder(callback) {
    return this.root.preOrder(callback);
  }
  postOrder(callback) {
    return this.root.postOrder(callback);
  }

  height(node = this.root) {
    return node.height();
  }
  depth(node) {
    return this.root.depth(node);
  }

  isBalanced() {
    if (!this.root) return true;
    if (!this.root.left && !this.root.right) return true;
    if (!this.root.left || !this.root.right) return false;
    return Math.abs(this.root.left.height() - this.root.right.height()) < 1;
  }
  rebalance() {
    let arr = [];
    this.levelOrder((value) => {
      arr.push(value);
    });
    this.buildTree(arr);
  }
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
};

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  levelOrder(callback) {
    // Breadth-first traversal
    if (typeof callback !== "function") throw new Error("Callback is required");

    let queue = [this];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      callback(currentNode.data);

      if (currentNode.left === null && currentNode.right === null) {
        continue;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  inOrder(callback) {
    // At first traverse left subtree then visit the root and then traverse the right subtree.
    if (typeof callback !== "function") throw new Error("Callback is required");

    if (this.left) this.left.inOrder(callback);
    callback(this.data);
    if (this.right) this.right.inOrder(callback);
  }
  preOrder(callback) {
    // At first visit the root then traverse left subtree and then traverse the right subtree.
    if (typeof callback !== "function") throw new Error("Callback is required");

    callback(this.data);
    if (this.left) this.left.preOrder(callback);
    if (this.right) this.right.preOrder(callback);
  }
  postOrder(callback) {
    // At first traverse left subtree then traverse the right subtree and then visit the root.

    if (typeof callback !== "function") throw new Error("Callback is required");

    if (this.left) this.left.postOrder(callback);
    if (this.right) this.right.postOrder(callback);
    callback(this.data);
  }
  height() {
    // Number of edges in the longest path from root to a leaf node.

    let leftHeight = (() => {
      return this.left ? this.left.height() : 0;
    })();
    let rightHeight = (() => {
      return this.right ? this.right.height() : 0;
    })();

    return Math.max(leftHeight, rightHeight) + 1;
  }
  depth(node) {
    if (!node) return 0;
    if (this.data === node.data) return 1;
    if (this.left && this.left.depth(node)) return this.left.depth(node) + 1;
    if (this.right && this.right.depth(node)) return this.right.depth(node) + 1;
  }
}
