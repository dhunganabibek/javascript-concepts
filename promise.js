const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 Success");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 Success");
  }, 1000);
});

promise1
  .then((value) => {
    console.log(value);
  })
  .then(() => {
    console.log("Promise1 then 2");
  });

promise2.then((value) => {
  console.log(value);
});
