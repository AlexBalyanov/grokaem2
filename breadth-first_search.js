
//представление графа
const graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

//функция, проверяющая является ли человек продавцом (условно)
const isSeller = (name) => {
  return name[name.length - 1] === 'm'
}

const search = (name) => {

  //объявляем очередь поиска
  let searchQueue = []

  //добавляем в очередь граф (массив людей по ключу)
  searchQueue = searchQueue.concat(graph[name])

  //объявляем список проверенных людей
  let checked = []

  //пока очередь не пуста
  while (searchQueue.length) {

    //устанавливаем в person первый элемент из массива и удаляем его
    let person = searchQueue.shift()

    //если в массиве уже проверенных людей нет текущего человека (indexOf вернет -1), то идем дальше
    if (checked.indexOf(person) === -1) {

      //если человек - продавец, то завершаем поиск
      if (isSeller(person)) {
        console.log(`продавец найден! это ${person}`)
        return true
      }

      //иначе добавляем в очередь "внешних соседей" нашего person для их проверки, а самого person
      //помещаем в массив проверенных людей
      searchQueue = searchQueue.concat(graph[person])
      checked.push(person)
    }
  }
  return false
}

search('you')