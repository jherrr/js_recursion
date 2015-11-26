function myEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
  return arr;
}

// var arr = [1, 2, 3];
// myEach(arr, function addOne(ele) {
//     console.log(ele);
//   });

function myMap(arr, func) {
  var output = [];

  function mappedItemFunc(el) {
      output.push(func(el))
  }

  myEach(arr, mappedItemFunc)

  return output;
}

// var integers = [1,2,3,4];
// console.log(myMap(integers, function addOne(el) {
//   return el+1;
// } ));

function myInject(arr, func) {
  var accum = 0;

  function accumFunc(el) {
    accum += func(el)
  }

  myEach(arr, accumFunc)

  return accum;
}

// var integers = [1,2,3,4];
// console.log(myInject(integers, function addOne(el) {
//   return el;
// } ));
