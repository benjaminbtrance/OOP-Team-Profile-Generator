const htmlTop = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid bg-dark text-white">
      <div class="container">
        <h1 class="text-center p-5">My Team</h1>
      </div>
    </div>
    <div class="container-fluid p-5">
      <div class="row justify-content-center">
      `;

const htmlBottom = `      
</div>
</div>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
  crossorigin="anonymous"
></script>
</body>
</html>`;

module.exports = (employeeCard) => {
	if (employeeCard.role === 'Manager') {
		faIcon = `<h3><i class="fas fa-mug-hot"></i>${employeeCard.role}</h3>`;
		employeeInfo = `<li class="list-group-item">Office Number: ${employeeCard.officeNumber}</li>`;
	} else if (employeeCard.role === 'Engineer') {
		faIcon = `<h3><i class="fas fa-glasses"></i>${employeeCard.role}</h3>`;
		employeeInfo = `<li class="list-group-item">Github: <a href="https://github.com/${employeeCard.github}" target="_blank">${employeeCard.github}</a></li>`;
	} else {
		faIcon = `<h3><i class="fas fa-user-graduate"></i>${employeeCard.role}</h3>`;
		employeeInfo = `<li class="list-group-item">School: ${employeeCard.school}</li>`;
	}
	return `     
     <div class="card bg-dark text-white mx-3 mt-3">
     <div class="card-header">
       <h2>${employeeCard.name}</h2>
       ${faIcon}
     </div>
     <div class="card-body bg-light mb-2">
       <ul class="list-group">
         <li class="list-group-item">ID: ${employeeCard.id}</li>
         <li class="list-group-item">Email: <a href="mailto:${employeeCard.email}">${employeeCard.email}</a></li>
         ${employeeInfo}
       </ul>
     </div>
   </div>
   `;
};

module.exports.htmlTop = htmlTop;
module.exports.htmlBottom = htmlBottom;
