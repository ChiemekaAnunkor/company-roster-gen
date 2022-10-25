const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  const testEngineer = new Engineer("nick", 2, "email", "github");
  it("should return an object of the people inside", () => {
    console.log(testEngineer);
    expect(testEngineer).toEqual({
      name: "nick",
      id: 2,
      email: "email",
      githubName: "github",
    });
  });

  it(" should return a string that says github ", () => {
    expect(testEngineer.getGithub()).toEqual("github");
  });
});
