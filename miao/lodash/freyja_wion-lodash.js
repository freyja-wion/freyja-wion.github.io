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
  };
})();