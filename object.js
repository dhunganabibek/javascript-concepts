let workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask.bind(workshop), 10, "Are you lost?");
