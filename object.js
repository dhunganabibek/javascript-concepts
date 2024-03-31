function Point(x, y) {
  this.x = 0;
  this.y = 0;

  this.setTo = function (x, y) {
    this.x = x;
    this.y = y;
  };
}

let p1 = new Point(1, 2);
p1.setTo(0, 0);
console.log(p1);
