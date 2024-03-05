console.log("Prototype.js");

const Person = (name) => {
  this.name = name;
};

const person = new Person("John");

console.log(person.constructor == Person);

console.log(person.__proto__ == Person.prototype);
