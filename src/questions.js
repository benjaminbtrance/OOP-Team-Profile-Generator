const employeeRole = [
	{
		name: 'role',
		type: 'list',
		message: 'Employee role: ',
		choices: ['Manager', 'Engineer', 'Intern'],
	},
	{
		name: 'name',
		type: 'input',
		message: 'Enter employee name: ',
		validate: (nameInput) => {
			if (nameInput) {
				return true;
			} else {
				console.log('Please enter your employee name.');
				return false;
			}
		},
	},
	{
		name: 'id',
		type: 'input',
		message: 'Enter employee ID: ',
		validate: (idInput) => {
			if (idInput) {
				return true;
			} else {
				console.log('Please enter your employee ID.');
				return false;
			}
		},
	},
	{
		name: 'email',
		type: 'input',
		message: 'Enter employee email: ',
		validate: (nameInput) => {
			if (nameInput) {
				return true;
			} else {
				console.log('Please enter your employee email.');
				return false;
			}
		},
	},
];

const managerQuestions = {
	name: 'officeNum',
	type: 'input',
	message: 'Enter manager office number: ',
	validate: (officeNumInput) => {
		if (officeNumInput) {
			return true;
		} else {
			console.log('Please enter your manager office number.');
			return false;
		}
	},
};

const engineerQuestions = {
	name: 'github',
	type: 'input',
	message: 'Enter engineer Github username: ',
	validate: (githubInput) => {
		if (githubInput) {
			return true;
		} else {
			console.log('Please enter your engineer Github.');
			return false;
		}
	},
};

const internQuestions = {
	name: 'school',
	type: 'input',
	message: 'Enter intern school: ',
	validate: (schoolInput) => {
		if (schoolInput) {
			return true;
		} else {
			console.log('Please enter your intern school.');
			return false;
		}
	},
};

const addMoreQuestions = {
	name: 'addMoreQuestion',
	type: 'list',
	message: 'Do you want to add another Employee? ',
	choices: ['Yes', 'No'],
};

module.exports.employeeRole = employeeRole;
module.exports.managerQuestions = managerQuestions;
module.exports.engineerQuestions = engineerQuestions;
module.exports.internQuestions = internQuestions;
module.exports.addMoreQuestions = addMoreQuestions;
