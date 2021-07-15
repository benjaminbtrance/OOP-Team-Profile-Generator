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
		message: 'Employee Name: ',
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
		message: 'Employee ID: ',
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
		message: 'Employee email: ',
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
	message: 'Office Number: ',
	validate: (officeNumInput) => {
		if (officeNumInput) {
			return true;
		} else {
			console.log('Please enter your manager office number.');
			return false;
		}
	},
};

module.exports.employeeRole = employeeRole;
module.exports.managerQuestions = managerQuestions;
