const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const questions = require('./src/questions.js');

function chooseRole() {
	inquirer.prompt(questions.employeeRole).then((data) => {
		if (data.role === 'Manager') {
			addManager(data);
		} else if (data.role === 'Engineer') {
			addEngineer(data);
		} else {
			addIntern(data);
		}
	});
}

function addManager(employeeInfo) {
	inquirer.prompt(questions.managerQuestions).then((data) => {
		const manager = new Manager(
			employeeInfo.name,
			employeeInfo.id,
			employeeInfo.email,
			data.officeNumber
		);
	});
}

chooseRole();
