function fibsIterative(number) {
  let start = number - 2;
  let sequence = [0, 1]
  for (let i = 0; i < start; i++) {
    let seqLength = sequence.length;
    sequence.push(sequence[seqLength - 1] + sequence[seqLength - 2])
  }
  return sequence;
}

// console.log(fibsIterative(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRecursive(number, sequence = [0, 1]) {
  const lastTwo = sequence.slice(-2);
  const lastTwoSum = lastTwo[0] + lastTwo[1];
  if (number === 2) return sequence;
  sequence.push(lastTwoSum);
  return fibsRecursive(number - 1, sequence);
}

// console.log(fibsRecursive(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]