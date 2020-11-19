const {findEmployeeBy} = require('./find');
const {employeesStub} = require('../stubs/stub');

test('findEmployeeBy', () => {
    const find = findEmployeeBy(employeesStub);

    const employee = find('firstName', 'Doug');
    expect(employee[0].lastName).toEqual('Rogue');
});