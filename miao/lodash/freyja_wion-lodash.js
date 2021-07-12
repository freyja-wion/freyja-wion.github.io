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
  function difference(array, values) {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] == values[i]) {
          array.splice(j, 1);
          j--;
        }
      }
    }
    return array;
  }
  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
  };
})();
