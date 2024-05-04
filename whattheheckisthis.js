console.log("What the heck is this?");
console.log(this); // node vs browser

// this depend on called site and every function have this except arrow function
const arrFunc = () => {
  console.log(this);
};
const regularFunc = function () {
  console.log(this);
};
regularFunc();
arrFunc();
