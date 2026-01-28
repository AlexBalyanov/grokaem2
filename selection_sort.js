const findSmallest = (arr) => {
  let smallest = arr[0]
  let smallestIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

const selectionSort = (arr) => {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const smallestIndex = findSmallest(arr)

    newArr.push(arr.pop(smallest))
  }

  return newArr
}

console.log(selectionSort([1, 3, 4, -5, 6, 7, -8, 2]))