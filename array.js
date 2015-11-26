function uniq(arr) {
  var uniqArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

//  console.log(uniq([1, 2, 3, 3, 6, 10]));

function twoSum(arr) {
  var output = [];

  for(var x = 0; x < arr.length; x++) {
    for(var y = x + 1; y < arr.length; y++) {
      if(arr[x] + arr[y] === 0) {
        output.push([x, y]);
      }
    }
  }
  return output;
}

// console.log(twoSum([-1,0,2,-2,1]));

function transpose(arr) {
  var transposedArr = [];

  for(var x = 0; x < arr.length; x++) {
    transposedArr.push([]);
  }

  for(x = 0; x < arr.length; x++) {
    for(var y = 0; y < arr[x].length; y++) {
      transposedArr[y].push(arr[x][y]);
    }
  }

  return transposedArr;
}

// console.log(transpose([[0, 1, 2], [3, 4, 5], [6, 7, 8]]))
