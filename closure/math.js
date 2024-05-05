console.log("Math module loaded.");
const PI = 3.1415926535897932;

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(45);

exports.PI = PI;
exports.fibonacci = fibonacci;
exports.result = result;
