const Intern = require('../lib/Intern.js');

test('creates an intern employee object', () => {
    const intern = new Intern('Johnson Ha', 10, 'Johnsonha801@gmail.com', 'University of Utah');

    expect(intern.name).toBe('Johnson Ha');
    expect(intern.email).toBe('Johnsonha801@gmail.com');
    expect(intern.school).toBe('University of Utah');
    expect(intern.id).toEqual(10);
});

// Test getSchool() function
test('gets the interns school', () => {
    const intern = new Intern('Johnson Ha', 10, 'Johnsonha801@gmail.com', 'University of Utah');

    expect(intern.getSchool()).toBe('University of Utah');
});

// Test getSchool() function
test('gets the interns school', () => {
    const intern = new Intern('Johnson Ha', 10, 'Johnsonha801@gmail.com', 'University of Utah');

    expect(intern.getRole()).toBe('Intern');
});