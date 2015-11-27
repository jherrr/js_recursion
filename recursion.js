function range(start, end) {
  if (start > end ) {
    return []
  }

  return [start] + range(start + 1, end)
}

// console.log(range(0,10));

function exp1(base, n) {
  if (n === 0) {
    return 1;
  }

  return base * exp1(base, n-1);
}

// console.log(exp1(2,3));

function exp2(base, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return base;
  }
  if (n % 2 === 0) {
  return Math.pow(exp2(base, (n)/2), 2)
  }
  else {
    return Math.pow(exp2(base, (n-1)/2), 2) * base
  }

}

// console.log(exp2(3,4));

function fibsRec(n) {
  // if ( n === 1) {
  //   return [0];
  // }
  // else if ( n === 2) {
  //   return [0, 1];
  // }
  // else {
  //   var fibs = fibonacci(n - 1);
  //   console.log(fibs)
  //   var new_num = [fibs[fibs.length - 2] + fibs[fibs.length - 1]];
  //   console.log(fibs[fibs.length-2]);
  //   return fibs.push(new_num);
  // }

    if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}


console.log(fibsRec(5));
// 0, 1, 1, 2, 3
