const employeesStub = [
    {firstName: 'Doug', lastName: 'Rogue', role: 'developer', level: '3', salary: '2600'},
    {firstName: 'John', lastName: 'Doe', role: 'tester', level: '1', salary: '1000'},
    {firstName: 'Larry', lastName: 'Kid', role: 'director', level: '5', salary: '3500'},
    {firstName: 'Mary', lastName: 'Harry', role: 'developer', level: '2', salary: '2100'},
    {firstName: 'Mandy', lastName: 'Sandy', role: 'manager', level: '4', salary: '3500'},
    {firstName: 'Silas', lastName: 'Vanilla', role: 'president', level: '6', salary: '6000'},
];

try {
    module.exports = {employeesStub};
} catch(e) {throw new Error(e)}