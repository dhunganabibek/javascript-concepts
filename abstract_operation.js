const arr = [1, 2, 3, null, undefined, "hello", { a: 1 }, function () {}];

console.log(arr.toString());

const obj = { a: 1 };
console.log(obj.toString());

function hello() {
  console.log("hello");
}

console.log(hello.toString());
console.log(hello.valueOf());
console.log(hello);
