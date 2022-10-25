// importedd all my files
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generatehtml");
const teamMemberCards = require("./card");

//allows us to be able to loop throught questions if condition is met
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//ending html tag to call with fs to add the  footer of the page and close  body element
const endingTag = `
</section>

<script
  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
  crossorigin="anonymous"
></script>
</body>
</html>`;

function isnum(managerId) {
  let valid = Number.isInteger(managerId);
  if (valid) {
    return true;
  } else {
    return false;
  }
}
//call inquire to intialized our prompt in the terminal
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter Managers name",
      name: "managerName",
    },
    {
      type: "input",
      message: "Enter Managers Id",
      name: "managerId",
    },
    {
      type: "input",
      message: "Enter Managers email",
      name: "managerEmail",
      validate: function (email) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); //found this code on github https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        //issue is that it does not clear after error, will improve later
        if (valid) {
          console.log("Great job");
          return true;
        } else {
          console.log(".  Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Enter Managers office Number",
      name: "managerOffice",
    },

    {
      type: "loop",
      name: "addTeam",
      message: "Would you like to add a team member",
      questions: [
        {
          type: "list",
          message: "Would you like to add engineer or intern",
          name: "teamMemberAdd",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          message: "Enter Team member name",
          name: "TMName",
        },
        {
          type: "input",
          message: "Enter Team member  Id",
          name: "TMId",
        },
        {
          type: "input",
          message: "Enter Team member  email",
          name: "TMEmail",
        },
        {
          type: "input",
          name: "github",
          message: "What is the Engineers github",
          when: (results) => results.teamMemberAdd === "Engineer",
        },
        {
          type: "input",
          name: "school",
          message: "What is the  Inters school",
          when: (results) => results.teamMemberAdd === "Intern",
        },
      ],
    },
  ])
  .then((result) => {
    // removed manager data and only get back looped team  member data
    const teamMembers = result.addTeam;

    // write our file  using fs
    fs.writeFile("dist/index.html", generateHTML(result), (err) =>
      err ? console.log(err) : console.log("sucess")
    );

    //  imported teamcars and pass in arguments to append the file with the cards for each team member entered.
    teamMemberCards(teamMembers);
    //set timeout to make sure this this function is last to run so that all of the cards are added then close the body element  here
    setTimeout(function () {
      fs.appendFile("dist/index.html", endingTag, (err) =>
        err ? console.log(err) : console.log("sucess")
      );
    }, "500");
  })
  .catch((err) => {
    //error message when sucess or failed attemps
    err ? console.log(err) : console.log("Data Recieved");
  });
