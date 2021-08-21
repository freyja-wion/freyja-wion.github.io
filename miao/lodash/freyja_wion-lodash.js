var freyja_wion = (function () {
  function chunk(array, size) {
    var arr = [];
    var j = 0;
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      var index = 0;
      arr[i] = [];
      for (; j < array.length; j++) {
        arr[i].push(array[j]);
        index++;
        if (index == size) {
          j++;
          break;
        }
      }
    }
    return arr;
  }
  function compact(array) {
    var arr = [];
    for (let i = 0; i < array.length; i++) {
      if (!array[i] == false) {
        arr.push(array[i]);
      }
    }
    return arr;
  }
  function difference(array, ...values) {
    var arr = [];
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        arr.push(values[i][j]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] == arr[i]) {
          array.splice(j, 1);
          j--;
        }
      }
    }
    return array;
  }
  function uniq(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          array.splice(j, 1);
          j--;
        }
      }
    }
    return array;
  }
  function flatten(array) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
      var item = array[i];
      if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j++) {
          result.push(item[j]);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }
  function flattenDeep(array) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
      var item = array[i];
      if (Array.isArray(item)) {
        item = flattenDeep(item);
        for (let j = 0; j < item.length; j++) {
          result.push(item[j]);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }
  function flattenDepth(array, depth) {
    if (depth == 0) {
      return array;
    }
    var result = [];
    for (let i = 0; i < array.length; i++) {
      var item = array[i];
      if (Array.isArray(item)) {
        item = flattenDepth(item, depth - 1);
        for (let j = 0; j < item.length; j++) {
          result.push(item[j]);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }
  function drop(array, n) {
    if (n == undefined) {
      n = 1;
    }
    for (let i = 0; i < n; i++) {
      array.shift();
    }
    return array;
  }
  function dropRight(array, n) {
    if (n == undefined) {
      n = 1;
    }
    for (let i = 0; i < n; i++) {
      array.pop();
    }
    return array;
  }
  function join(array, str) {
    var str1 = String(array);
    str1 = str1.replace(",", str);
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] == ",") {
        str1 = str1.replace(",", str);
      }
    }
    return str1;
  }
  function fromPairs(pairs) {
    var map = {};
    for (let i = 0; i < pairs.length; i++) {
      map[pairs[i][0]] = pairs[i][1];
    }
    return map;
  }
  function head(array) {
    for (let i = 0; i < array.length; i++) {
      return array[0];
    }
  }
  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }
  function concat(array, ...values) {
    var arr = [];
    for (let i = 0; i < array.length; i++) {
      arr.push(array[i]);
    }
    for (let j = 0; j < values.length; j++) {
      if (Array.isArray(values[j])) {
        for (let k = 0; k < values[j].length; k++) {
          arr.push(values[j][k]);
        }
      } else {
        arr.push(values[j]);
      }
    }
    return arr;
  }
  function last(array) {
    return array[array.length - 1];
  }
  function reverse(array) {
    var l = array.length;
    for (let i = 0; i < l >> 1; i++) {
      var temp;
      temp = array[i];
      array[i] = array[l - 1 - i];
      array[l - 1 - i] = temp;
    }
    return array;
  }
  function union(...arrays) {
    var arr = [];
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        arr.push(arrays[i][j]);
      }
    }
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
  }
  function initial(array) {
    var arr = [];
    for (let i = 0; i < array.length - 1; i++) {
      arr.push(array[i]);
    }
    return arr;
  }
  function intersection(...arrays) {
    var map = {};
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        var a = arrays[i][j];
        if (a in map) {
          map[a]++;
        } else {
          map[a] = 1;
        }
      }
    }
    var arr = [];
    for (key in map) {
      if (map[key] == arrays.length) {
        arr.push(Number(key));
      }
    }
    return arr;
  }
  function pull(array, ...values) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[j] == array[i]) {
          array.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return array;
  }
  function nth(array, n) {
    for (let i = 0; i < array.length; i++) {
      if (n >= 0) {
        if (i == n) {
          return array[i];
        }
      } else {
        if (i == -n) {
          return array[i];
        }
      }
    }
  }
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }
  function sum(array) {
    var total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  function sumBy(array, predicate) {
    predicate = iteratee(predicate);
    var total = 0;
    for (let i = 0; i < array.length; i++) {
      total += predicate(array[i]);
    }
    return total;
  }
  function forEach(array, predicate) {
    predicate = iteratee(predicate);
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i) === false) {
        break;
      }
    }
    return array;
  }
  function findIndex(array, predicate) {
    predicate = iteratee(predicate);
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  }
  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    predicate = iteratee(predicate);
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  }
  function pullAll(array, values) {
    var idx = values[0];
    var l = values.length;
    for (let j = 0; j < l; j++) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == values[j]) {
          array.splice(i, 1);
          i--;
        }
      }
    }
    return array;
  }
  function toPath(val) {
    if (Array.isArray(val)) {
      return val;
    } else {
      return val
        .split("][")
        .reduce((ary, it) => ary.concat(it.split("].")), [])
        .reduce((ary, it) => ary.concat(it.split("[")), [])
        .reduce((ary, it) => ary.concat(it.split(".")), []);
    }
  }
  function pullAllBy(array, values, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (values.map((item) => item[predicate]).includes(array[i][predicate])) {
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  }
  function pullAllWith(array, values, comparator) {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (comparator(values[i], array[j]) == true) {
          array.splice(j, 1);
          j--;
        }
      }
    }
    return array;
  }
  function sortedIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i;
      }
    }
  }
  function sortedIndexBy(array, value, predicate) {
    predicate = iteratee(predicate);
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i]) >= predicate(value)) {
        return i;
      }
    }
  }
  function sortedIndexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }
  function sortedLastIndex(array, value) {
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i] <= value) {
        return i + 1;
      }
    }
  }
  function sortedIndexBy(array, value, predicate) {
    predicate = iteratee(predicate);
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i]) <= predicate(value)) {
        return i;
      }
    }
  }
  function map(collection, predicate) {
    var predicate = iteratee(predicate);
    var result = [];
    for (var key in collection) {
      result.push(predicate(collection[key], key, collection));
    }
    return result;
  }
  function filter(collection, predicate) {
    var predicate = iteratee(predicate);
    var result = [];
    for (var key in collection) {
      if (predicate(collection[key], key, collection) == true) {
        result.push(collection[key]);
      }
    }
    return result;
  }
  function isEqual(obj1, obj2) {
    function isObject(obj) {
      return typeof obj === "object" && obj != null;
    }
    if (!isObject(obj1) || !isObject(obj2)) {
      return obj1 === obj2;
    }
    if (obj1 === obj2) {
      return true;
    }
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (var key in obj1) {
      var res = isEqual(obj1[key], obj2[key]);
      if (!res) {
        return false;
      }
    }
    return true;
  }
  function differenceBy(array, ...values) {
    var array1 = values.slice(0, values.length - 1)[0];
    var func = values.pop();
    var predicate = iteratee(func);
    var arr = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array1.length; j++) {
        if (predicate(array[i]) !== predicate(array1[j])) {
          arr.push(array[i]);
        }
      }
    }
    return arr;
  }
  function differenceWith(array, ...values) {
    var array1 = values.slice(0, values.length - 1)[0];
    var func = values.pop();
    var predicate = iteratee(func);
    var arr = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array1.length; j++) {
        if (!func(array[i], array1[j])) {
          arr.push(array[i]);
        }
      }
    }
    return arr;
  }
  function dropRightWhile(array, predicate) {
    var predicate = iteratee(predicate);
    for (let i = array.length - 1; i > 0; i--) {
      if (predicate(array[i])) {
        array.pop();
      }
    }
    return array;
  }
  function dropWhile(array, predicate) {
    var predicate = iteratee(predicate);
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  }
  function intersectionBy(...arrays) {
    var predicate = iteratee(arrays.pop());
    var arr1 = arrays[0];
    var arr2 = arrays[1];
    var arr = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (predicate(arr1[i]) == predicate(arr2[j])) {
          arr.push(arr1[i]);
          break;
        }
      }
    }
    return arr;
  }
  function intersectionWith(...arrays) {
    var predicate = iteratee(arrays.pop());
    var arr1 = arrays[0];
    var arr2 = arrays[1];
    var arr = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (predicate(arr1[i], arr2[j])) {
          arr.push(arr1[i]);
          break;
        }
      }
    }
    return arr;
  }
  // ----------------------------------------------------------
  function bind(f, thisArg, ...fixedArgs) {
    // bind(f, {}, 1, _, _, 3, _, 4)
    return function (...args) {
      // 5,8
      var ary = fixedArgs.slice();
      var j = 0;
      for (var i = 0; i < ary.length; i++) {
        if (Object.is(ary[i], bind.placeholder)) {
          if (j < args.length) {
            ary[i] = args[j++];
          } else {
            ary[i] = undefined;
          }
        }
      }
      while (j < args.length) {
        ary.push(args[j++]);
      }
      return f.apply(thisArg, ary);
    };
  }
  bind.placeholder = NaN;

  function get(object, path, defaultVal = undefined) {
    path = toPath(path);
    for (var i = 0; i < path.length; i++) {
      if (object == undefined) {
        return defaultVal;
      } else {
        object = object[path[i]];
      }
    }
    return object;
  }
  function get(object, path, defaultVal = undefined) {
    if (object == undefined) {
      return defaultVal;
    } else if (path.length == 0) {
      return object;
    } else {
      return get(object[path[0]], path.slice(1));
    }
  }

  function isMatch(object, source) {
    if (object == source) {
      return true;
    }
    if (typeof object !== "object" || typeof source !== "object") {
      return false;
    }
    for (var key in source) {
      if (source[key] && typeof source[key] !== "object") {
        if (object[key] !== source[key]) {
          return false;
        }
      } else {
        if (!isMatch(object[key], source[key])) {
          return false;
        }
      }
    }
    return true;
  }

  // 传入什么属性名，它返回的函数就用来获取对象的什么属性名
  function property(prop) {
    return function (obj) {
      return obj[prop];
    };
  }
  function matches(obj) {
    return function (src) {
      for (var key in obj) {
        if (obj[key] !== src[key]) {
          return false;
        }
      }
      return true;
    };
  }
  function matchesProperty(ary) {
    var key = ary[0];
    var val = ary[1];
    return function (obj) {
      return obj[key] == val;
    };
  }
  function iteratee(predicate) {
    if (typeof predicate == "function") {
      return predicate;
    }
    if (typeof predicate == "string") {
      return property(predicate);
    }
    if (Array.isArray(predicate)) {
      return matchesProperty(...predicate);
    }
    if (typeof predicate == "object") {
      if (!Object.keys(predicate).length) return true;
      return (o) => {
        for (var item in predicate) {
          if (o[item] == undefined || o[item] !== predicate[item]) return false;
        }
        return true;
      };
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
  };
})();
