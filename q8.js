const code = 'function greet(name) { if (name === "Alice") { return "Hello, Alice!"; } else { return "Hello, world!"; } }';
const result = areBracketsClosed(code);
console.log(result); // Output: true
function areBracketsClosed(code) {
  const stack = [];
  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false; // Closing bracket with no corresponding opening bracket
      }
      const top = stack.pop();
      if ((top === '(' && char !== ')') || (top === '[' && char !== ']') || (top === '{' && char !== '}')) {
        return false; // Closing bracket does not match the expected opening bracket
      }
    }
  }
  return stack.length === 0; // Check if all opening brackets have been closed
}