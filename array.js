function uniq(arr) {
  var uniqArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

console.log(uniq([1, 2, 3, 3, 6, 10]));

function twoSum(arr) {

}

function transpose(arr) {

}
