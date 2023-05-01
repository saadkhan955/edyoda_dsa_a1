const stack = [1, 2, 3, 4, 5];
reverseStack(stack);
console.log(stack); // Output: [5, 4, 3, 2, 1]
function reverseStack(stack) {
  const auxStack = [];
  while (stack.length > 0) {
    auxStack.push(stack.pop());
  }
  while (auxStack.length > 0) {
    stack.push(auxStack.pop());
  }
}