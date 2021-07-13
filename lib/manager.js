const Employee = require('./employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.role = 'Manager';
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

// const benny = new Manager('Benny', 0, 'email@email.com', 101);
// console.log(benny.getOfficeNumber());
