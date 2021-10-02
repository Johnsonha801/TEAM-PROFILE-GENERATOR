const Employee = require('../lib/Employee.js');

// Create an employee object
test('creates an employee object', () => {
    const employee = new Employee('Johnson Ha', 10,'Johnsonha801@gmail.com');

    expect(employee.name).toBe('Johnson Ha');
    expect(employee.email).toBe('Johnsonha801@gmail.com');
    expect(employee.id).toEqual(10);
});

// Get employee name
test("get the employee's name", () => {
    const employee = new Employee('Johnson Ha', 10,'Johnsonha801@gmail.com');

    expect(employee.getName()).toBe('Johnson Ha');
});

// Get employee id
test("get the employee's id", () => {
    const employee = new Employee('Johnson Ha', 10, 'Johnsonha801@gmail.com');

    expect(employee.getId()).toEqual(10);
});

// Get employee email
test("get the employee's id", () => {
    const employee = new Employee('Johnson Ha', 10, 'Johnsonha801@gmail.com');

    expect(employee.getEmail()).toBe('Johnsonha801@gmail.com');
});

// Get employee role
test("get the employee's role", () => {
    const employee = new Employee('Johnson Ha', 10, 'Johnsonha801@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});