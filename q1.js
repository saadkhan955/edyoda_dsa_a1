const arr = [1, 2, 3, 4, 5, 6];
const target = 7;
const pairs = findPairs(arr, target);
function findPairs(arr, target) {
  const pairs = [];
  // Iterate through every number in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the complement of the current number (i.e., the number that would add up to the target sum) is in the array
    const complement = target - arr[i];
    if (arr.slice(i + 1).includes(complement)) {
      // If so, add the pair to the list of pairs
      pairs.push([arr[i], complement]);
    }
  }
  return pairs;
}
console.log(pairs); // Output: [[1, 6], [2, 5], [3, 4]]