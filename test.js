"use strict";
foo();

function foo() {
  console.log(arguments);
  console.log(this);
  console.log("foo");
}

const result = foo("Bibek");
console.log(result);
