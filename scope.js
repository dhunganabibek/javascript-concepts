"use strict";
var test = "Test";

function Test() {
  var test = "hello";
  var topic = "react";
}

Test();

(() => console.log("IFFE"))();

sayHello();

const sayHello = function sayHello() {
  console.log("hello");
};
