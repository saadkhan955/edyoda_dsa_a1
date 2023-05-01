class Stack {
  constructor() {
    this.items = [];
    this.minStack = []; // to keep track of the minimum value so far
  }

  push(item) {
    if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(item); // push to minStack if item is smaller or equal to current minimum
    }
    this.items.push(item); // always push item to items
  }

  pop() {
    const poppedItem = this.items.pop();
    if (poppedItem === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop(); // pop from minStack if the popped item was the minimum value
    }
    return poppedItem;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null; // stack is empty
    }
    return this.minStack[this.minStack.length - 1]; // return the top element of minStack
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);
console.log(stack.getMin()); // Output: 1