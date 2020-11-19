const {employeesStub} = require('../stubs/stub');
const {findEmployeeBy} = require('../find/find');
const {appendEmail} = require('./appendemail');


describe('appendEmail function', () => {
    test('should append the property email to the employee and the "@acme.com" to the end of email address', () => {
        const find = findEmployeeBy(employeesStub);

        const employee = find('firstName', 'Doug');

        const emailAppend = appendEmail(employee[0]);
        
        expect(emailAppend.email).toEqual('doug@acme.com');
    })
})