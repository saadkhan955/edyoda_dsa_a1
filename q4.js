const str = 'hello world';
function findFirstNonRepeatedChar(str) {
  // Create a dictionary to store the count of each character in the string
  const charCounts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
  }
  // Iterate through the string and return the first character that has a count of 1 in the dictionary
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCounts[char] === 1) {
      return char;
    }
  }
  // Return null if no non-repeated characters are found
  return null;
}
console.log(findFirstNonRepeatedChar(str)); // Output: 'h'