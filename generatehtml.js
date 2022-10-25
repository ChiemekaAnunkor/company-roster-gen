
//generate html document, with a template to start with
function generateHTML(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Team</title>
  </head>
  <body>
    <nav><h1>My Team</h1></nav>
    <section class="rows">
      <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <div class="card-t">
            <h6 class="card-title"> <i class="bi bi-people"></i> Manager </h6>       
            <h6 class="card-title">${data.managerName}</h6>

          </div>
          <p class="card-text">ID: <span>${data.managerId}</span></p>
          <p class="card-text">Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></p>
          <p class="card-text">Office #: <span>${data.managerOffice}</span></p>
        </div>
      </div>
          
    
`;
}
module.exports = generateHTML;
