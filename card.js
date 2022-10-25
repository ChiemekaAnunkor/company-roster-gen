
const fs = require("fs");

function teamMemberCards(data) {
  for (const i in data) {
    let EngineerData = `<div class="card m-2" style="width: 18rem">
    <div class="card-body">
      <div class="card-t">
        <h6 class="card-title"> <i class="bi bi-pc-display-horizontal"></i> ${data[i].teamMemberAdd}</h6>       
        <h6 class="card-title">${data[i].TMName}</h6>

      </div>
      <p class="card-text">ID: <span>${data[i].TMId}</span></p>
      <p class="card-text">Email: <a href="mailto:${data[i].TMEmail}">${data[i].TMEmail}</a></p>
      <p class="card-text">GitHub: <a href="https://github.com/${data[i].github}" target="_blank">${data[i].github}</a></p>
    </div>
  </div>`;
    let interData = `<div class="card m-2" style="width: 18rem">
  <div class="card-body">
    <div class="card-t">
      <h6 class="card-title"> <i class="bi bi-mortarboard"></i> ${data[i].teamMemberAdd}</h6>       
      <h6 class="card-title">${data[i].TMName}</h6>

    </div>
    <p class="card-text">ID: <span>${data[i].TMId}</span></p>
    <p class="card-text">Email: <a href="mailto:${data[i].TMEmail}">${data[i].TMEmail}</a></p>
    <p class="card-text">School: <span>${data[i].school}</span></p>
  </div>
</div>`;

    if (data[i].teamMemberAdd == "Engineer") {
      fs.appendFile("dist/index.html", EngineerData, (err) =>
        err ? console.log(err) : console.log("sucess")
      );
    } else if (data[i].teamMemberAdd == "Intern") {
      fs.appendFile("dist/index.html", interData, (err) =>
        err ? console.log(err) : console.log("sucess")
      );
    }
  }
}
module.exports = teamMemberCards;
