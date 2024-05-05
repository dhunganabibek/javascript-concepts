const workshop = {
  teacher: "Kyle",
  ask: function (question) {
    console.log(this.teacher, question);
  },
};

setTimeout(function () {
  workshop.ask("Still losing this");
}, 1000);

setTimeout(workshop.ask.bind(workshop), 2000, "Still losing this");
