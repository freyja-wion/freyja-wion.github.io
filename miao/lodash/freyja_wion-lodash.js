var freyja_wion = (function () {
  //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
  //如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
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
  //创建一个新数组，包含原数组中所有的非假值元素。
  //例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
  function compact(array) {
    var arr = [];
    for (let i = 0; i < array.length; i++) {
      if (!array[i] == false) {
        arr.push(array[i]);
      }
    }
    return arr;
  }
  //创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
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
  //创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。
  //只有第一次出现的元素才会被保留。
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
  //减少一级array嵌套深度。
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
  //将array递归为一维数组。
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
  //根据 depth 递归减少 array 的嵌套层级
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
  //创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  function drop(array, n) {
    if (n == undefined) {
      n = 1;
    }
    for (let i = 0; i < n; i++) {
      array.shift();
    }
    return array;
  }
  //创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  function dropRight(array, n) {
    if (n == undefined) {
      n = 1;
    }
    for (let i = 0; i < n; i++) {
      array.pop();
    }
    return array;
  }
  //将 array 中的所有元素转换为由 separator 分隔的字符串。
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
  //与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
  function fromPairs(pairs) {
    var map = {};
    for (let i = 0; i < pairs.length; i++) {
      map[pairs[i][0]] = pairs[i][1];
    }
    return map;
  }
  //获取数组 array 的第一个元素。
  function head(array) {
    for (let i = 0; i < array.length; i++) {
      return array[0];
    }
  }
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }
  //创建一个新数组，将array与任何数组 或 值连接在一起。
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
  //获取array中的最后一个元素。
  function last(array) {
    return array[array.length - 1];
  }
  //反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
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
  //创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。
  //（注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
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
  //使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值，
  //如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
  }
  //获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
  function initial(array) {
    var arr = [];
    for (let i = 0; i < array.length - 1; i++) {
      arr.push(array[i]);
    }
    return arr;
  }
  //创建唯一值的数组，这个数组包含所有给定数组都包含的元素，
  //使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
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
  //移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
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
  //获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
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
  //这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }
  //计算 array 中值的总和
  function sum(array) {
    var total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  //这个方法类似_.summin 除了它接受 iteratee
  //来调用 array中的每一个元素，来生成其值排序的标准。
  //iteratee 会调用1个参数: (value) 。
  function sumBy(array, predicate) {
    predicate = iteratee(predicate);
    var total = 0;
    for (let i = 0; i < array.length; i++) {
      total += predicate(array[i]);
    }
    return total;
  }
  //调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index | key, collection) 。
  //如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。
  function forEach(array, predicate) {
    predicate = iteratee(predicate);
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i) === false) {
        break;
      }
    }
    return array;
  }
  //该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
  function findIndex(array, predicate) {
    predicate = iteratee(predicate);
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  }
  //这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    predicate = iteratee(predicate);
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  }
  //这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
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
  //转化value为属性路径的数组
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
  //这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，
  //通过产生的值进行了比较。iteratee 会传入一个参数： (value) 。
  function pullBy(array, values, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (values.map((item) => item[predicate]).includes(array[i][predicate])) {
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  }
  //这个方法类似于_.pullAll，区别是这个方法接受 comparator 调
  //用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal) 。
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
  //使用二进制的方式检索来决定 value值 应该插入到数组中
  //尽可能小的索引位置，以保证array的排序。
  function sortedIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i;
      }
    }
  }
  //这个方法类似_.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素
  //，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value) 。
  function sortedIndexBy(array, value, predicate) {
    predicate = iteratee(predicate);
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i]) >= predicate(value)) {
        return i;
      }
    }
  }
  // 传入什么属性名，它返回的函数就用来获取对象的什么属性名
  function property(prop) {
    // a.b
    return get.bind(null, window, prop);
    // return function(obj) {
    //   return get(obj, prop)
    // }
  }
  function isObject(obj) {
    return typeof obj === "object" && obj != null;
  }
  function isEqual(obj1, obj2) {
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

  // function f(a,b) {
  //   return Math.max(10,a,b)
  // }
  // var f = Math.max.bind(null, 10)

  function get(object, path, defaultVal = undefined) {
    path = toPath(path);
    // return path.reduce((obj, curPath) => {
    //   return obj[curPath]
    // }, object)

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

  function matches(src) {
    // return bind(isMatch, null, window, src)
    return function (obj) {
      return isMatch(obj, src);
    };
  }

  function matchesProperty(path, val) {
    return function (obj) {
      return isEqual(get(obj, path), val);
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
      return matches(predicate);
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
    pullBy: pullBy,
    pullAllWith: pullAllWith,
    sortedIndex: sortedIndex,
    sortedIndexBy: sortedIndexBy,
  };
})();
