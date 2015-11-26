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



}
