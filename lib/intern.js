const Employeee = require("./employee");
//Intern class 

class Intern extends Employeee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

const interns = new Intern("chiemeka", 2, "emelsl", "chiemekanunkor");
console.log(interns);
module.exports = Intern;
