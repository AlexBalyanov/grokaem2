//факториал числа с применением рекурсии
const fact = (num) => {
  if (num === 1) {
    return 1
  } else {
    return num * fact(num - 1)
  }
}
console.log(fact(3))


//разделяй и властвуй
//сумма числа с применением рекурсии
const sum = (arr) => {

  //если остается 1 элемент в массиве, то возвращаем этот элемент
  if (arr.length === 1) {
    return arr[0]
  } else {
    const firstElement = arr[0]
    //первый элемент + вызов этой же функции, но без этого элемента
    //колл стек заполняется вызовами и по очереди складывает firstElement
    return firstElement + sum(arr.slice(1))
  }
}
console.log(sum([1, 2, 3, 4, 5]))


//разделяй и властвуй
//подсчет количество элементов в массиве
const sumIndex = (arr) => {

  //если остается 1 элемент в массиве, то возвращаем 1
  if (arr.length === 1) {
    return 1
  } else {
    //первый элемент + вызов этой же функции, но без этого элемента
    //колл стек заполняется вызовами и по очереди складывает 1
    return 1 + sumIndex(arr.slice(1))
  }
}
console.log(sumIndex([1, 2, 3, 4, 5]))


//разделяй и властвуй
//нахождение максимального числа через рекурсию
const maxNumber = (arr) => {

  //если в массиве остается 2 числа, то мы их сравниваем и возвращаем наибольшее
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  } else {

    //иначе вызываем функцию рекурсивно в subMax
    const subMax = maxNumber(arr.slice(1))

    //сравниваем первое число массива из параметра и subMax
    return arr[0] > subMax ? arr[0] : subMax
  }
}
console.log(maxNumber([1, 57, 2, 3, 4, 66]))