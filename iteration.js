function bubbleSort(arr) {
  var swap = false
  var temp;

  do {
    swap = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while(swap);

  return arr;
}

// var arr = [1,8,6,0,2,7];
// console.log(bubbleSort(arr));

function substrings(str) {
  var arr = str.split("")
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j =  i + 1; j < arr.length + 1; j++) {
      output.push(arr.slice(i, j).join(""));
    }
  }

  return output;
}

// console.log(substrings("cat"));
