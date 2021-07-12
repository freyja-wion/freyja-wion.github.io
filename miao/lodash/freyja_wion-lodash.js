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
  function drop(array, n) {
    if (n == undefined) {
      n = 1;
    }
    for (let i = 0; i < n; i++) {
      array.shift();
    }
    return array;
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
  };
})();
