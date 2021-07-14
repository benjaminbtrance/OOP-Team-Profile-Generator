const Manager = require('../lib/manager');

describe('manager', () => {
	it('should create the intern object', () => {
		const emp = new Manager('name', 12, 'em@il.com', 101);
		expect(emp).toEqual({
			name: 'name',
			id: 12,
			email: 'em@il.com',
			officeNumber: 101,
			role: 'Manager',
		});
	});

	it('getName', () => {
		const emp = new Manager('name', 12, 'em@il.com', 101);
		expect(emp.getName()).toEqual('name');
	});

	it('getId', () => {
		const emp = new Manager('name', 12, 'em@il.com', 101);
		expect(emp.getId()).toEqual(12);
	});

	it('getEmail', () => {
		const emp = new Manager('name', 12, 'em@il.com', 101);
		expect(emp.getEmail()).toEqual('em@il.com');
	});

	it('getOfficeNumber', () => {
		const emp = new Manager('name', 12, 'em@il.com', 101);
		expect(emp.getOfficeNumber()).toEqual(101);
	});

	it('getRole', () => {
		const emp = new Manager('name', 12, 'em@il.com', 101);
		expect(emp.getRole()).toEqual('Manager');
	});
});
