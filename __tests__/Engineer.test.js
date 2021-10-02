const Engineer = require('../lib/Engineer.js');

// Create an engineer employee object
test('creates an engineer employee object', () => {
    const engineer = new Engineer('Johnson Ha', 10, 'Johnsonha801@gmail.com', 'Johnsonha801');

    expect(engineer.name).toBe('Johnson Ha');
    expect(engineer.email).toBe('Johnsonha801@gmail.com');
    expect(engineer.github).toBe('Johnsonha801');
    expect(engineer.id).toEqual(10);
});

// Git Github Username
test("gets engineer's github username", () => {
    const engineer = new Engineer('Johnson Ha', 10, 'Johnsonha801@gmail.com', 'Johnsonha801');

    expect(engineer.getGithub()).toBe('Johnsonha801');
});

// Get Role - Engineer
test("get engineer's role", () => {
    const engineer = new Engineer('Johnson Ha', 10, 'Johnsonha801@gmail.com', 'Johnsonha801');

    expect(engineer.getRole()).toBe('Engineer');
});



