// implementation of range func with generator

function* range(start, end, step) {
  for (let i = start; i <= end; i = i + step) {
    yield i;
  }
}

for (let i of range(1, 10, 2)) {
  console.log(i);
}
