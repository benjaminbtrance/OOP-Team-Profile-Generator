const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const questions = require('./src/questions.js');
const html = require('./src/html.js');

function askQuestions() {
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

// Add a manager, then ask to add another employee
function addManager(employeeInfo) {
	inquirer.prompt(questions.managerQuestions).then((data) => {
		const manager = new Manager(
			employeeInfo.name,
			employeeInfo.id,
			employeeInfo.email,
			data.officeNum
		);
		addMoreEmployee(manager);
	});
}

// Add an engineer, then ask to add another employee
function addEngineer(employeeInfo) {
	inquirer.prompt(questions.engineerQuestions).then((data) => {
		const engineer = new Engineer(
			employeeInfo.name,
			employeeInfo.id,
			employeeInfo.email,
			data.github
		);
		addMoreEmployee(engineer);
	});
}

// Add an intern, then ask to add another employee
function addIntern(employeeInfo) {
	inquirer.prompt(questions.internQuestions).then((data) => {
		const intern = new Intern(
			employeeInfo.name,
			employeeInfo.id,
			employeeInfo.email,
			data.school
		);
		addMoreEmployee(intern);
	});
}

// ask to add another employee
function addMoreEmployee(employeeInfo) {
	const employeeCard = addEmployeeCard(employeeInfo);
	appendToFile(employeeCard);
	inquirer.prompt(questions.addMoreQuestions).then((data) => {
		if (data.addMoreQuestion === 'Yes') {
			askQuestions();
		} else {
			console.log('Your team is complete');
			appendToFile(html.htmlBottom);
		}
	});
}

// Build employee card
function addEmployeeCard(employeeInfo) {
	const employeeCard = html(employeeInfo);
	return employeeCard;
}

// Append HTML to index.html
function appendToFile(data) {
	fs.appendFile('./dist/index.html', data, (err) => {
		if (err) {
			throw err;
		}
	});
}

// Create empty index.html
function init() {
	fs.writeFile('./dist/index.html', html.htmlTop, (err) => {
		if (err) {
			throw err;
		}
	});
}

// MAIN
init();
askQuestions();
