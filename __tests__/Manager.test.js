const Manager = require('../lib/Manager.js');

test('creates an manager employee object', () => {
    const manager = new Manager('Johnson Ha', 10, 'Johnsonha801@gmail.com', 45);

    expect(manager.name).toBe('Johnson Ha');
    expect(manager.email).toBe('Johnsonha801@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.id).toEqual(10);
});

// Test getRole() function
test("gets the manager's role", () => {
    const manager = new Manager('Johnson Ha', 10, 'Johnsonha801@gmail.com', 45);

    expect(manager.getRole()).toBe('Manager');
});