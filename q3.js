const str1 = 'hello';
const str2 = 'llohe';

function areStringsRotations(str1, str2) {
  // Check if the two strings are the same length and non-empty
  if (str1.length !== str2.length || str1.length === 0) {
    return false;
  }
  // Concatenate the first string with itself and check if the second string is a substring of the result
  const concatStr = str1 + str1;
  return concatStr.includes(str2);
}
console.log(areStringsRotations(str1, str2)); // Output: true