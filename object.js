const obj = {
  a: 10,
  b: 20,
  [Symbol("a")]: "hello",
};

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
