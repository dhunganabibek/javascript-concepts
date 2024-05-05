"use strict";
export let a = 2;

function foo() {
  console.log(this === global);
}

foo();
