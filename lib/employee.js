class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.employee = 'Employee';
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.employee;
	}
}

module.exports = Employee;
