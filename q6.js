const postfix = '23+4*';
const prefix = postfixToPrefix(postfix);
console.log(prefix); // Output: '*+234'

function postfixToPrefix(postfix) {
  const stack = [];
  for (let i = 0; i < postfix.length; i++) {
    const token = postfix.charAt(i);
    if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefix = token + operand1 + operand2;
      stack.push(prefix);
    } else {
      stack.push(token);
    }
  }
  return stack.pop();
}

function isOperator(token) {
  return token === '+' || token === '-' || token === '*' || token === '/';
}