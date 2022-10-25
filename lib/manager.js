const Employeee = require("./employee");
//manager class
class Manager extends Employeee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getOffice() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
