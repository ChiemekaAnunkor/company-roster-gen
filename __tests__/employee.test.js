const Employee = require("../lib/employee");

describe("Employee", () => {
  const testEmployee = new Employee("james", 2, "email");

  it("should return an object of the names like such { email: 'email', id: 2, name: 'james' } ", () => {
    expect(testEmployee).toEqual({ email: "email", id: 2, name: "james" });
  });

  it("should return a string of the name ", () => {
    expect(testEmployee.getName()).toEqual("james");
  });

  it("should return a string of the id ", () => {
    expect(testEmployee.getId()).toEqual(2);
  });
  it("should return a string of the email ", () => {
    expect(testEmployee.getEmail()).toEqual("email");
  });
  it("should return a string of the manager ", () => {
    expect(testEmployee.getRole()).toEqual("Employee");
  });
});
