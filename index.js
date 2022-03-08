function objectToArray(collection) {
  if (Array.isArray(collection) === false) {
    const arrayCollection = Object.values(collection)
    return arrayCollection
  } else {
    return collection
  }
}

const myEach = function (collection, cb) {
  const newArray = objectToArray(collection)
  for (let i = 0; i < newArray.length; i++) {
    cb(newArray[i])
  }
  return collection
}

const myMap = function (collection, callback) {
  const newArray = objectToArray(collection)
  const newArray2 = []

  for (let i = 0; i < newArray.length; i++) {
    newArray2.push(callback(newArray[i]))
  }
  return newArray2
}

const myReduce = function (collection, callback, acc) {
  const newArray = objectToArray(collection)
  if (typeof acc !== 'undefined') {
    for (let i = 0; i < newArray.length; i++) {
      acc = callback(acc, newArray[i], newArray)
    }
  } else {
    acc = newArray[0]
    let slicedArray = newArray.slice(1)
    for (let i = 0; i < slicedArray.length; i++) {
      acc = callback(acc, slicedArray[i], slicedArray)
    }
  }
  return acc
}

const myFind = function(collection, predicate) {
  const newArray = objectToArray(collection)
  for (let i = 0; i < newArray.length; i++) {
    if (predicate(newArray[i]) === true) {
      return newArray[i]
      break;
    }
  }
}

const myFilter = function(collection, predicate) {
  const newArray = objectToArray(collection)
  let filteredArray = [];
  for(let i = 0; i < newArray.length; i++) {
    if(predicate(newArray[i]) === true) {
      filteredArray.push(newArray[i])
    }
  }
  return filteredArray
}

function mySize(collection) {
  const newArray = objectToArray(collection)
  return newArray.length
}

function myFirst(array, integer) {
  return (typeof integer !== 'undefined' ? array.slice(0, integer) : array[0])
}

function myLast(array, integer) {
  return (typeof integer !== 'undefined' ? array.slice(array.length - integer, array.length) : array[array.length - 1])
}

const myKeys = function(anObj) {
  let array = []
  for(let key in anObj) {
    array.push(key)
  }
  return array
}

const myValues = function(anObj) {
  let array = []
  for(let key in anObj) {
    array.push(anObj[key])
  }
  return array
}