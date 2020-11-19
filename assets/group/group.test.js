const {groupEmployeesBy} = require('./group');
const {employeesStub} = require('../stubs/stub');

test('groupEmployeesBy', () => {
    const group = groupEmployeesBy(employeesStub, 'role')
    expect(group.developer.length).toBe(2);
});