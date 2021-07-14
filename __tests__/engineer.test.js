const Engineer = require('../lib/engineer');

describe('engineer', () => {
	it('should create the engineer object', () => {
		const emp = new Engineer('name', 12, 'em@il.com', 'github');
		expect(emp).toEqual({
			name: 'name',
			id: 12,
			email: 'em@il.com',
			github: 'github',
			role: 'Engineer',
		});
	});

	it('getName', () => {
		const emp = new Engineer('name', 12, 'em@il.com', 'github');
		expect(emp.getName()).toEqual('name');
	});

	it('getId', () => {
		const emp = new Engineer('name', 12, 'em@il.com', 'github');
		expect(emp.getId()).toEqual(12);
	});

	it('getEmail', () => {
		const emp = new Engineer('name', 12, 'em@il.com', 'github');
		expect(emp.getEmail()).toEqual('em@il.com');
	});

	it('getGithub', () => {
		const emp = new Engineer('name', 12, 'em@il.com', 'github');
		expect(emp.getGithub()).toEqual('github');
	});

	it('getRole', () => {
		const emp = new Engineer('name', 12, 'em@il.com', 'github');
		expect(emp.getRole()).toEqual('Engineer');
	});
});
