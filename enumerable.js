Array.prototype.myEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
}


var arr = [1, 2, 3];
arr.myEach(function addOne(ele) {
    console.log(ele);
  });

Array.prototype.myMap = function(func) {
  var output = [];

  function mappedItemFunc(el) {
      output.push(func(el))
  }

  this.myEach(mappedItemFunc)

  return output;
}

var integers = [1,2,3,4];
console.log(integers.myMap(function addOne(el) {
  return el+1;
} ));

Array.prototype.myInject = function(func) {
  var accum = this[0];

  function accumFunc(el) {
    accum = func(el, accum)
  }

  this.slice(1).myEach(accumFunc)

  return accum;
}

var integers = [1,2,3,4];
console.log(integers.myInject(function addOne(el, accum) {
  return el + accum;
} ));
