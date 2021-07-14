const Employee = require('../lib/employee');

describe('employee', () => {
	it('should create the employee object', () => {
		const emp = new Employee('name', 12, 'em@il.com');
		expect(emp).toEqual({
			name: 'name',
			id: 12,
			email: 'em@il.com',
			role: 'Employee',
		});
	});

	it('getName', () => {
		const emp = new Employee('name', 12, 'em@il.com');
		expect(emp.getName()).toEqual('name');
	});

	it('getId', () => {
		const emp = new Employee('name', 12, 'em@il.com');
		expect(emp.getId()).toEqual(12);
	});

	it('getEmail', () => {
		const emp = new Employee('name', 12, 'em@il.com');
		expect(emp.getEmail()).toEqual('em@il.com');
	});

	it('getRole', () => {
		const emp = new Employee('name', 12, 'em@il.com');
		expect(emp.getRole()).toEqual('Employee');
	});
});
