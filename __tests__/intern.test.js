const Intern = require('../lib/intern');

describe('intern', () => {
	it('should create the intern object', () => {
		const emp = new Intern('name', 12, 'em@il.com', 'school');
		expect(emp).toEqual({
			name: 'name',
			id: 12,
			email: 'em@il.com',
			school: 'school',
			role: 'Intern',
		});
	});

	it('getName', () => {
		const emp = new Intern('name', 12, 'em@il.com', 'school');
		expect(emp.getName()).toEqual('name');
	});

	it('getId', () => {
		const emp = new Intern('name', 12, 'em@il.com', 'school');
		expect(emp.getId()).toEqual(12);
	});

	it('getEmail', () => {
		const emp = new Intern('name', 12, 'em@il.com', 'school');
		expect(emp.getEmail()).toEqual('em@il.com');
	});

	it('getSchool', () => {
		const emp = new Intern('name', 12, 'em@il.com', 'school');
		expect(emp.getSchool()).toEqual('school');
	});

	it('getRole', () => {
		const emp = new Intern('name', 12, 'em@il.com', 'github');
		expect(emp.getRole()).toEqual('Intern');
	});
});
