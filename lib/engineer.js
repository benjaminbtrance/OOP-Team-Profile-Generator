const Employee = require('./employee');

class Enginner extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		this.role = 'Enginner';
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return this.role;
	}
}
