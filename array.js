console.log(Number.isInteger(5 ** 0.5));
console.log(`The array is ${[1, 2, 3]}`);
console.log([1, 2, 3]);
Array.prototype[Symbol.inspect] = () => "Array";

const a = [1, 2, 3];
console.log(a.concat(4, 5, [6, [`7`]]));
