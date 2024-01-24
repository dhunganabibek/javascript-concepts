console.log(Symbol.hasInstance);

class Alpha {

}

class Beta {

}

const alpha = new Alpha();
const beta = new Beta();

console.log(alpha instanceof Alpha);
console.log(alpha  instanceof Beta);

console.log(Alpha[Symbol.hasInstance](alpha))
console.log(Alpha[Symbol.hasInstance](beta))


//  // create symbol in global registry
//  const one = Symbol.for("hello");
//  const two = Symbol.for("hello");


//  console.log(one == two)








// const gamma = Symbol("gamma");

// const enumObj = {
//     alpha: "alpha",
//     beta: "Beta",
//     [gamma] : "gamma"
// }

// console.log(enumObj);

// console.log(Object.keys(enumObj))




// const one = Symbol();
// const two = Symbol();
// const three = Symbol('Test');
// const four = Symbol('Test');


// console.log(typeof one);
// console.log(three == four);
// console.log(three);
// console.log(three.toString());

