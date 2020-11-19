const {findEmployeeBy} = require('../find/find');
const {addTemporaryEmployee} = require('./add');
const {employeesStub} = require('../stubs/stub');
const {tempEmployee} = require('../stubs/temp_stub');


describe('addTemporaryEmployee', () => {
    const _tempEmployeeList = addTemporaryEmployee(employeesStub, tempEmployee);
    
    test(' function to prove immutability on original list', () => {
        expect(employeesStub.length).toEqual(6);
        expect(_tempEmployeeList.length).toEqual(7);
    });

    test('add an item in list, returning a new list', () => {
        const _find = findEmployeeBy(_tempEmployeeList);
        const _t = _find('firstName', 'Bob');
    
        expect(_t[0].lastName).toBe('Marley');
    });
});