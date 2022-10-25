const Intern = require("../lib/intern");

describe("Engineer", () => {
  const testIntern = new Intern("nick", 2, "email", "school");
  it("should return an object of the people inside", () => {
    expect(testIntern).toEqual({
      name: "nick",
      id: 2,
      email: "email",
      school: "school",
    });
  });

  it(" should return a string that says school ", () => {
    expect(testIntern.getSchool()).toEqual("school");
  });
});
