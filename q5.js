function towerOfHanoi(numDisks, sourcePeg, destinationPeg, intermediatePeg) {
  if (numDisks === 1) {
    console.log(`Move disk 1 from ${sourcePeg} to ${destinationPeg}`);
    return;
  }
  towerOfHanoi(numDisks - 1, sourcePeg, intermediatePeg, destinationPeg);
  console.log(`Move disk ${numDisks} from ${sourcePeg} to ${destinationPeg}`);
  towerOfHanoi(numDisks - 1, intermediatePeg, destinationPeg, sourcePeg);
}
towerOfHanoi(3, 'A', 'C', 'B');
// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C