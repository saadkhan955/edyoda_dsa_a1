const arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
function reverseArrayInPlace(arr) {
  // Swap elements from opposite ends of the array until the middle is reached
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(arr); // Output: [5, 4, 3, 2, 1]