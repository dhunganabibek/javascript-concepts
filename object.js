const obj = { a: "old" };
obj.b = "old";

Object.defineProperty(obj, "c", {
  value: "old",
  writable: false,
});

for (const key in obj) {
  console.log(key);
}
