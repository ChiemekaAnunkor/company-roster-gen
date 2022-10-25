const Manager = require("../lib/manager");

describe("Engineer", () => {
  const testManager = new Manager("nick", 2, "email", "office");
  it("should return an object of the people inside", () => {
    expect(testManager).toEqual({
      name: "nick",
      id: 2,
      email: "email",
      officeNum: "office",
    });
  });

  it(" should return a string that says school ", () => {
    expect(testManager.getOffice()).toEqual("office");
  });
});
