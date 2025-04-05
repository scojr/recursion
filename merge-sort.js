const unsortedArrays = [
  [6, 3, 0, 1, 4, 8],
  [3, 2, 1, 13, 8, 5, 0, 1],
  [-6, 2.6, 11, 13, 0],
  [2, 13, 1.5],
]


function mergeSort(array) {
  if (array.length <= 1) return array;
  const leftHalf = mergeSort(array.slice(0, array.length / 2));
  const rightHalf = mergeSort(array.slice(array.length / 2, array.length));

  return merge(leftHalf, rightHalf);

  function merge(array1, array2) {
    const totalLength = array1.length + array2.length;
    let arr1Index = 0;
    let arr2Index = 0;
    const sortedArray = [];
    for (let i = 0; i < totalLength - 1; i++) {
      if (typeof array2[arr2Index] !== "number") {
        return sortedArray.concat(array1.slice(arr1Index));
      }
      if (array1[arr1Index] <= array2[arr2Index]) {
        sortedArray.push(array1[arr1Index]);
        arr1Index++;
      } else {
        sortedArray.push(array2[arr2Index]);
        arr2Index++;
      }
    }
    sortedArray.push(array1[arr1Index] || array2[arr2Index]);
    return sortedArray;
  }
}

unsortedArrays.forEach((array) => {     // returns
  console.log(mergeSort(array));        // [ 0, 1, 3, 4, 6, 8 ]
})                                      // [0, 1, 1, 2, 3, 5, 8, 13 ]
//                                         [ -6, 0, 2.6, 11, 13 ]
//                                         [ 1.5, 2, 13 ]


