const Employee = require('./employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.manager = 'Manager';
	}

	getRole() {
		return this.manager;
	}
}
