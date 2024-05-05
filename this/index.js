const workshop = {
  teacher: "Kyle",
  ask: function (question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?"); // Kyle What is implicit binding?
