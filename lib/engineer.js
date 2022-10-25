const Employeee = require("./employee");
//Engineer class 

class Engineer extends Employeee {
  constructor(name, id, email, githubName) {
    super(name, id, email);
    this.githubName = githubName;
  }
  getGithub() {
    return this.githubName;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
