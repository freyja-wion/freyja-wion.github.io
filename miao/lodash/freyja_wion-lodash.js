var freyja_wion = (function () {
  function chunk(array, size) {
    var arr = []
    var j = 0
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      var index = 0
      arr[i] = []
      for (; j < array.length; j++) {
        arr[i].push(array[j])
        index++
        if (index == size) {
          j++
          break
        }
      }
    }
    return arr
  }
  function compact(array) {
    var arr = []
    for (let i = 0; i < array.length; i++) {
      if (!array[i] == false) {
        arr.push(array[i])
      }
    }
    return arr
  }
  function difference(array, ...values) {
    var arr = []
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        arr.push(values[i][j])
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] == arr[i]) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  }
  function uniq(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  }
  function flatten(array) {
    var result = []
    for (let i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }
  function flattenDeep(array) {
    var result = []
    for (let i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        item = flattenDeep(item)
        for (let j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }
  function flattenDepth(array, depth) {
    if (depth == 0) {
      return array
    }
    var result = []
    for (let i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        item = flattenDepth(item, depth - 1)
        for (let j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }
  function drop(array, n) {
    if (n == undefined) {
      n = 1
    }
    for (let i = 0; i < n; i++) {
      array.shift()
    }
    return array
  }
  function dropRight(array, n) {
    if (n == undefined) {
      n = 1
    }
    for (let i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }
  function join(array, str) {
    var str1 = String(array)
    str1 = str1.replace(",", str)
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] == ",") {
        str1 = str1.replace(",", str)
      }
    }
    return str1
  }
  function fromPairs(pairs) {
    var map = {}
    for (let i = 0; i < pairs.length; i++) {
      map[pairs[i][0]] = pairs[i][1]
    }
    return map
  }
  function head(array) {
    for (let i = 0; i < array.length; i++) {
      return array[0]
    }
  }
  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }
  function concat(array, ...values) {
    var arr = []
    for (let i = 0; i < array.length; i++) {
      arr.push(array[i])
    }
    for (let j = 0; j < values.length; j++) {
      if (Array.isArray(values[j])) {
        for (let k = 0; k < values[j].length; k++) {
          arr.push(values[j][k])
        }
      } else {
        arr.push(values[j])
      }
    }
    return arr
  }
  function last(array) {
    return array[array.length - 1]
  }
  function reverse(array) {
    var l = array.length
    for (let i = 0; i < l >> 1; i++) {
      var temp
      temp = array[i]
      array[i] = array[l - 1 - i]
      array[l - 1 - i] = temp
    }
    return array
  }
  function union(...arrays) {
    var arr = []
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        arr.push(arrays[i][j])
      }
    }
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr
  }
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
  }
  function initial(array) {
    var arr = []
    for (let i = 0; i < array.length - 1; i++) {
      arr.push(array[i])
    }
    return arr
  }
  function intersection(...arrays) {
    var map = {}
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        var a = arrays[i][j]
        if (a in map) {
          map[a]++
        } else {
          map[a] = 1
        }
      }
    }
    var arr = []
    for (key in map) {
      if (map[key] == arrays.length) {
        arr.push(Number(key))
      }
    }
    return arr
  }
  function pull(array, ...values) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[j] == array[i]) {
          array.splice(i, 1)
          i--
          break
        }
      }
    }
    return array
  }
  function nth(array, n) {
    for (let i = 0; i < array.length; i++) {
      if (n >= 0) {
        if (i == n) {
          return array[i]
        }
      } else {
        if (i == -n) {
          return array[i]
        }
      }
    }
  }
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
  function sum(array) {
    var total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i]
    }
    return total
  }
  function sumBy(array, predicate) {
    predicate = iteratee(predicate)
    var total = 0
    for (let i = 0; i < array.length; i++) {
      total += predicate(array[i])
    }
    return total
  }
  function forEach(array, predicate) {
    predicate = iteratee(predicate)
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i) === false) {
        break
      }
    }
    return array
  }
  function findIndex(array, predicate) {
    predicate = iteratee(predicate)
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  }
  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    predicate = iteratee(predicate)
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  }
  function pullAll(array, values) {
    var idx = values[0]
    var l = values.length
    for (let j = 0; j < l; j++) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == values[j]) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
  }
  function toPath(val) {
    if (Array.isArray(val)) {
      return val
    } else {
      return val
        .split("][")
        .reduce((ary, it) => ary.concat(it.split("].")), [])
        .reduce((ary, it) => ary.concat(it.split("[")), [])
        .reduce((ary, it) => ary.concat(it.split(".")), [])
    }
  }
  function pullAllBy(array, values, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (values.map((item) => item[predicate]).includes(array[i][predicate])) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  }
  function pullAllWith(array, values, comparator) {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (comparator(values[i], array[j]) == true) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  }
  function sortedIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      }
    }
  }
  function sortedIndexBy(array, value, predicate) {
    predicate = iteratee(predicate)
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i]) >= predicate(value)) {
        return i
      }
    }
  }
  function sortedIndexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
  function sortedLastIndex(array, value) {
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i] <= value) {
        return i + 1
      }
    }
  }
  function sortedIndexBy(array, value, predicate) {
    predicate = iteratee(predicate)
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i]) <= predicate(value)) {
        return i
      }
    }
  }
  function map(collection, predicate) {
    var predicate = iteratee(predicate)
    var result = []
    for (var key in collection) {
      result.push(predicate(collection[key], key, collection))
    }
    return result
  }
  function filter(collection, predicate) {
    var predicate = iteratee(predicate)
    var result = []
    for (var key in collection) {
      if (predicate(collection[key], key, collection) == true) {
        result.push(collection[key])
      }
    }
    return result
  }
  function isEqual(obj1, obj2) {
    function isObject(obj) {
      return typeof obj === "object" && obj != null
    }
    if (!isObject(obj1) || !isObject(obj2)) {
      return obj1 === obj2
    }
    if (obj1 === obj2) {
      return true
    }
    var obj1Keys = Object.keys(obj1)
    var obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
      return false
    }
    for (var key in obj1) {
      var res = isEqual(obj1[key], obj2[key])
      if (!res) {
        return false
      }
    }
    return true
  }
  function differenceBy(array, ...values) {
    var array1 = values.slice(0, values.length - 1)[0]
    var func = values.pop()
    var predicate = iteratee(func)
    var arr = []
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array1.length; j++) {
        if (predicate(array[i]) !== predicate(array1[j])) {
          arr.push(array[i])
        }
      }
    }
    return arr
  }
  function differenceWith(array, ...values) {
    var array1 = values.slice(0, values.length - 1)[0]
    var func = values.pop()
    var predicate = iteratee(func)
    var arr = []
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array1.length; j++) {
        if (!func(array[i], array1[j])) {
          arr.push(array[i])
        }
      }
    }
    return arr
  }
  function dropRightWhile(array, predicate) {
    var predicate = iteratee(predicate)
    for (let i = array.length - 1; i > 0; i--) {
      if (predicate(array[i])) {
        array.pop()
      }
    }
    return array
  }
  function dropWhile(array, predicate) {
    var predicate = iteratee(predicate)
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  }
  function intersectionBy(...arrays) {
    var predicate = iteratee(arrays.pop())
    var arr1 = arrays[0]
    var arr2 = arrays[1]
    var arr = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (predicate(arr1[i]) == predicate(arr2[j])) {
          arr.push(arr1[i])
          break
        }
      }
    }
    return arr
  }
  function intersectionWith(...arrays) {
    var predicate = iteratee(arrays.pop())
    var arr1 = arrays[0]
    var arr2 = arrays[1]
    var arr = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (predicate(arr1[i], arr2[j])) {
          arr.push(arr1[i])
          break
        }
      }
    }
    return arr
  }
  function sortedLastIndexBy(array, value, predicate) {
    var predicate = iteratee(predicate)
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i]) == predicate(value)) {
        return array.length - 1 - i
      }
    }
    return -1
  }
  function sortedLastIndexOf(array, value) {
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
  }
  function sortedUniq(array) {
    var arr = [array[0]]
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i - 1]) {
        arr.push(array[i])
      }
    }
    return arr
  }
  function sortedUniqBy(array, predicate) {
    var predicate = iteratee(predicate)
    var arr = [array[0]]
    for (let i = 1; i < array.length; i++) {
      if (predicate(array[i]) !== predicate(array[i - 1])) {
        arr.push(array[i])
      }
    }
    return arr
  }
  function tail(array) {
    return array.slice(1)
  }
  function take(array, n = 1) {
    return array.slice(0, n)
  }
  function takeRight(array, n = 1) {
    return array.reverse().slice(0, n).reverse()
  }
  function takeRightWhile(array, predicate) {
    var predicate = iteratee(predicate)
    for (let i = array.length - 1; i >= 0; i--) {
      if (!predicate(array[i], i, array)) {
        array.splice(i, 1)
      }
    }
    return array
  }
  function takeWhile(array, predicate) {
    var predicate = iteratee(predicate)
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  }
  function unionBy(...arrays) {
    var predicate = iteratee(arrays.pop(predicate))
    var arr = flatten(arrays)
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (predicate(arr[i]) !== predicate(arr[j])) {
          arr1.push(arr[i])
          break
        }
      }
    }
    return arr1
  }
  function unionWith(...arrays) {
    var predicate = iteratee(arrays.pop(predicate))
    var arr = flatten(arrays)
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (!predicate(arr[i], arr[j])) {
          arr1.push(arr[i])
          break
        }
      }
    }
    return arr1
  }
  function uniqBy(...arrays) {
    var predicate = iteratee(arrays.pop(predicate))
    var arr = flatten(arrays)
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (predicate(arr[i]) !== predicate(arr[j])) {
          arr1.push(arr[i])
          break
        }
      }
    }
    return arr1
  }
  function uniqWith(...arrays) {
    var predicate = iteratee(arrays.pop(predicate))
    var arr = flatten(arrays)
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (!predicate(arr[i], arr[j])) {
          arr1.push(arr[i])
          break
        }
      }
    }
    return arr1
  }
  function unzip(array) {
    var arr = []
    for (let i = 0; i < array[0].length; i++) {
      var arr1 = []
      for (let j = 0; j < array.length; j++) {
        arr1.push(array[j][i])
      }
      arr.push(arr1)
    }
    return arr
  }
  function unzipWith(array, predicate) {
    var predicate = iteratee(predicate)
    var arr = []
    for (let i = 0; i < array[0].length; i++) {
      var arr1 = []
      for (let j = 0; j < array.length; j++) {
        arr1.push(array[j][i])
      }
      var val = predicate(...arr1)
      arr.push(val)
    }
    return arr
  }
  function without(array, ...values) {
    return array.filter((it) => !values.includes(it))
  }
  function xor(...arrays) {
    var arr = flatten(arrays)
    var map = {}
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in map) {
        map[arr[i]]++
      } else {
        map[arr[i]] = 1
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]] == 1) {
        arr1.push(arr[i])
      }
    }
    return arr1
  }
  function xorBy(...arrays) {
    var predicate = iteratee(arrays.pop())
    var arr = flatten(arrays)
    var map = {}
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i]) in map) {
        map[predicate(arr[i])]++
      } else {
        map[predicate(arr[i])] = 1
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (map[predicate(arr[i])] == 1) {
        arr1.push(arr[i])
      }
    }
    return arr1
  }
  function xorWith(...arrays) {
    var predicate = iteratee(arrays.pop())
    var arr = flatten(arrays)
    var arr1 = []
    var isSame
    for (let i = 0; i < arr.length - 1; i++) {
      isSame = true
      for (let j = i + 1; j < arr.length; j++) {
        if (predicate(arr[i], arr[j])) {
          isSame = false
        }
      }
      if (isSame) {
        arr1.push(arr[i])
      }
    }
    return arr1
  }
  function zip(...arrays) {
    var arr = []
    for (let i = 0; i < arrays[0].length; i++) {
      var item = []
      for (let j = 0; j < arrays.length; j++) {
        item.push(arrays[j][i])
      }
      arr.push(item)
    }
    return arr
  }
  function zipObject(props, values) {
    var map = {}
    for (let i = 0; i < props.length; i++) {
      map[props[i]] = values[i]
    }
    return map
  }
  function zipWith(...arrays) {
    var predicate = iteratee(arrays.pop())
    var arr = []
    for (let i = 0; i < arrays[0].length; i++) {
      var item = []
      for (let j = 0; j < arrays.length; j++) {
        item.push(arrays[j][i])
      }
      arr.push(item)
    }
    return arr.map((it) => predicate(...it))
  }
  function countBy(collection, predicate) {
    var predicate = iteratee(predicate)
    var map = {}
    for (let i = 0; i < collection.length; i++) {
      var p = predicate(collection[i])
      if (p in map) {
        map[p]++
      } else {
        map[p] = 1
      }
    }
    return map
  }
  function every(collection, predicate) {
    var predicate = iteratee(predicate)
    var flag = false
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        flag = true
      } else {
        return false
      }
    }
    return flag
  }
  function find(collection, predicate, index = 0) {
    var predicate = iteratee(predicate)
    for (let i = index; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i]
      }
    }
    return -1
  }
  function findLast(collection, predicate, index = collection.length - 1) {
    var predicate = iteratee(predicate)
    for (let i = index; i >= 0; i--) {
      if (predicate(collection[i])) {
        return collection[i]
      }
    }
    return -1
  }
  function flatMap(collection, predicate) {
    var predicate = iteratee(predicate)
    return flatten(collection.map((it) => predicate(it)))
  }
  function flatMapDeep(collection, predicate) {
    var predicate = iteratee(predicate)
    return flattenDeep(collection.map((it) => predicate(it)))
  }
  function flatMapDepth(collection, predicate, depth = 1) {
    var predicate = iteratee(predicate)
    return flattenDeep(
      collection.map((it) => predicate(it)),
      depth
    )
  }
  function forEachRight(collection, predicate) {
    predicate = iteratee(predicate)
    for (var i = collection.length - 1; i >= 0; i--) {
      if (predicate(collection[i], i) === false) {
        break
      }
    }
    return collection
  }
  function groupBy(collection, predicate) {
    var predicate = iteratee(predicate)
    var map = {}
    for (let i = 0; i < collection.length; i++) {
      var c = predicate(collection[i])
      if (c in map) {
        map[c].push(collection[i])
      } else {
        map[c] = []
        map[c].push(collection[i])
      }
    }
    return map
  }
  function includes(collection, value, index = 0) {
    if (Array.isArray(collection)) {
      for (let i = index; i < collection.length; i++) {
        if (collection[i] == value) {
          return true
        }
      }
      return false
    }
    if (typeof collection == "object") {
      for (var key in collection) {
        if (collection[key] == value) {
          return true
        }
      }
      return false
    }
    if (typeof collection == "string") {
      var j = 0
      var l = 0
      for (let i = 0; i < collection.length; i++) {
        if (collection[i] == value[j]) {
          j++
          l++
        }
      }
      return value.length == l
    }
  }
  function invokeMap(collection, path, ...args) {
    if (typeof path == "string") {
      return collection.map((it) => it[path](...args))
    } else if (typeof path == "function") {
      return collection.map((it) => path.call(it, ...args))
    }
  }
  function keyBy(collection, predicate) {
    var predicate = iteratee(predicate)
    var map = {}
    collection.forEach((it) => (map[predicate(it)] = it))
    return map
  }
  function partition(collection, predicate) {
    var arr1 = []
    var arr2 = []
    var predicate = iteratee(predicate)
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        arr1.push(collection[i])
      } else {
        arr2.push(collection[i])
      }
    }
    var arr = []
    arr.push(arr1)
    arr.push(arr2)
    return arr
  }
  function reduce(collection, predicate, accumlator = 0) {
    var result = accumlator
    var predicate = iteratee(predicate)
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result = predicate(result, collection[i])
      }
      return result
    }
    if (typeof collection == "object") {
      for (var key in collection) {
        result = predicate(result, collection[key], key, collection)
      }
      return result
    }
  }
  function reduceRight(collection, predicate, accumlator = 0) {
    var result = accumlator
    var predicate = iteratee(predicate)
    if (Array.isArray(collection)) {
      for (let i = collection.length - 1; i >= 0; i--) {
        result = predicate(result, collection[i])
      }
      return result
    }
    if (typeof collection == "object") {
      for (var key in collection) {
        result = predicate(result, collection[key], key, collection)
      }
      return result
    }
  }
  function reject(collection, predicate) {
    var predicate = iteratee(predicate)
    var arr = []
    for (var key in collection) {
      if (!predicate(collection[key], key, collection)) {
        arr.push(collection[key])
      }
    }
    return arr
  }
  function sample(collection) {
    return collection[Math.floor(Math.random() * collection.length)]
  }
  function sampleSize(collection, n = 1) {
    var arr = []
    var count = 0
    if (collection.length < n) {
      n = collection.length
    }
    while (count < n) {
      var i = collection[Math.floor(Math.random() * collection.length)]
      if (arr.includes(i)) {
        continue
      }
      arr.push(i)
      count++
    }
    return arr
  }
  function shuffle(collection) {
    var arr = []
    var count = 0
    while (count < collection.length) {
      var i = collection[Math.floor(Math.random() * collection.length)]
      if (arr.includes(i)) {
        continue
      }
      arr.push(i)
      count++
    }
    return arr
  }
  function size(collection) {
    if (Array.isArray(collection) || typeof collection == "string") {
      return collection.length
    } else if (typeof collection == "object") {
      return Object.keys(collection).length
    }
  }
  function some(collection, predicate) {
    var predicate = iteratee(predicate)
    for (var item in collection) {
      if (predicate(item)) {
        return true
      }
    }
    return false
  }
  function defer(func, args) {
    return setTimeout(func(args), 1) - 1
  }
  function delay(func, wait, args) {
    return setTimeout(func(args), wait) - 1
  }
  function castArray(value) {
    if (arguments.length == 0) {
      return []
    }
    return [value]
  }
  function conformsTo(object, source) {
    for (var key in source) {
      if (!source[key](object[key])) {
        return false
      }
    }
    return true
  }
  function eq(value, other) {
    return value === other || (value !== value && other !== other)
  }
  function gt(value, other) {
    return value > other
  }
  function gte(value, other) {
    return value >= other
  }
  function isArguments(value) {
    return Object.prototype.toString.call(value) == "[object Arguments]"
  }
  function isArray(value) {
    return Object.prototype.toString.call(value) == "[object Array]"
  }
  function isArrayBuffer(value) {
    return Object.prototype.toString.call(value) == "[object ArrayBuffer]"
  }
  function isArrayLike(value) {
    return typeof value != "function" && value.length >= 0
  }
  function isArrayLikeObject(value) {
    return isArrayLike(value) && typeof value == "object"
  }
  function isBoolean(value) {
    return Object.prototype.toString.call(value) == "[object Boolean]"
  }
  function isDate(value) {
    return Object.prototype.toString.call(value) == "[object Date]"
  }
  function isElement(value) {
    return Object.prototype.toString.call(value) == "[object HTMLBodyElement]"
  }
  function isEmpty(value) {
    for (var key in value) {
      return false
    }
    return true
  }
  // ----------------------------------------------------------
  function bind(f, thisArg, ...fixedArgs) {
    // bind(f, {}, 1, _, _, 3, _, 4)
    return function (...args) {
      // 5,8
      var ary = fixedArgs.slice()
      var j = 0
      for (var i = 0; i < ary.length; i++) {
        if (Object.is(ary[i], bind.placeholder)) {
          if (j < args.length) {
            ary[i] = args[j++]
          } else {
            ary[i] = undefined
          }
        }
      }
      while (j < args.length) {
        ary.push(args[j++])
      }
      return f.apply(thisArg, ary)
    }
  }
  bind.placeholder = NaN
  function get(object, path, defaultVal = undefined) {
    path = toPath(path)
    for (var i = 0; i < path.length; i++) {
      if (object == undefined) {
        return defaultVal
      } else {
        object = object[path[i]]
      }
    }
    return object
  }
  function get(object, path, defaultVal = undefined) {
    if (object == undefined) {
      return defaultVal
    } else if (path.length == 0) {
      return object
    } else {
      return get(object[path[0]], path.slice(1))
    }
  }

  function isMatch(object, source) {
    if (object == source) {
      return true
    }
    if (typeof object !== "object" || typeof source !== "object") {
      return false
    }
    for (var key in source) {
      if (source[key] && typeof source[key] !== "object") {
        if (object[key] !== source[key]) {
          return false
        }
      } else {
        if (!isMatch(object[key], source[key])) {
          return false
        }
      }
    }
    return true
  }
  function iteratee(predicate) {
    if (typeof predicate == "function") {
      return predicate
    }
    if (typeof predicate == "string") {
      return function (obj) {
        return obj[predicate]
      }
    }
    if (Array.isArray(predicate)) {
      return (obj) => obj[predicate[0]] === predicate[1]
    }
    if (typeof predicate == "object") {
      return (obj) => {
        for (var item in predicate) {
          if (obj[item] == undefined || obj[item] !== predicate[item])
            return false
        }
        return true
      }
    }
  }
  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
    uniq: uniq,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    drop: drop,
    dropRight: dropRight,
    join: join,
    fromPairs: fromPairs,
    head: head,
    fill: fill,
    concat: concat,
    last: last,
    reverse: reverse,
    union: union,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    pull: pull,
    nth: nth,
    lastIndexOf: lastIndexOf,
    sum: sum,
    sumBy: sumBy,
    forEach: forEach,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    pullAll: pullAll,
    toPath: toPath,
    pullAllBy: pullAllBy,
    pullAllWith: pullAllWith,
    sortedIndex: sortedIndex,
    sortedIndexBy: sortedIndexBy,
    sortedIndexOf: sortedIndexOf,
    sortedLastIndex: sortedLastIndex,
    map: map,
    filter: filter,
    isEqual: isEqual,
    differenceBy: differenceBy,
    differenceWith: differenceWith,
    dropRightWhile: dropRightWhile,
    dropWhile: dropWhile,
    intersectionBy: intersectionBy,
    intersectionWith: intersectionWith,
    sortedLastIndexBy: sortedLastIndexBy,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    tail: tail,
    take: take,
    takeRight: takeRight,
    takeRightWhile: takeRightWhile,
    takeWhile: takeWhile,
    unionBy: unionBy,
    unionWith: unionWith,
    uniqBy: uniqBy,
    uniqWith: uniqWith,
    unzip: unzip,
    unzipWith: unzipWith,
    without: without,
    xor: xor,
    xorBy: xorBy,
    xorWith: xorWith,
    zip: zip,
    zipObject: zipObject,
    zipWith: zipWith,
    countBy: countBy,
    every: every,
    find: find,
    findLast: findLast,
    flatMap: flatMap,
    flatMapDeep: flatMapDeep,
    flatMapDepth: flatMapDepth,
    forEachRight: forEachRight,
    groupBy: groupBy,
    includes: includes,
    invokeMap: invokeMap,
    keyBy: keyBy,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    sample: sample,
    sampleSize: sampleSize,
    shuffle: shuffle,
    size: size,
    some: some,
    defer: defer,
    delay: delay,
    castArray: castArray,
    conformsTo: conformsTo,
    eq: eq,
    gt: gt,
    gte: gte,
    isArguments: isArguments,
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isArrayLike: isArrayLike,
    isArrayLikeObject: isArrayLikeObject,
    isBoolean: isBoolean,
    isDate: isDate,
    isElement: isElement,
    isEmpty: isEmpty,
  }
})()
