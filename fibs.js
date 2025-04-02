function fibsIteration(number) {
  let start = number - 2;
  let sequence = [0, 1]
  for (let i = 0; i < start; i++) {
    let seqLength = sequence.length;
    sequence.push(sequence[seqLength - 1] + sequence[seqLength - 2])
  }
  console.log(sequence);
}

fibsIteration(8); // returns [0, 1, 1, 2, 3, 5, 8, 13]