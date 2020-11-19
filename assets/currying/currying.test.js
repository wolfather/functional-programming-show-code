const {curryingEmployee} = require('./currying');
const {findEmployeeBy} = require('../find/find');
const {employeesStub} = require('../stubs/stub');

describe('curryingEmployee to prove currying', () => {
    const employee = findEmployeeBy(employeesStub);

    test('increase the salary at 10%', () => {
        director = employee('role', 'director');
        const bonusProvidedToAverage = curryingEmployee(director[0])('average');
        expect(bonusProvidedToAverage).toEqual('3850');
    });

    test('increase the salary at 50%', () => {
        const president = employee('role', 'president');
        const bonusProvidedToAbove = curryingEmployee(president[0])('above');
        expect(bonusProvidedToAbove).toEqual('9000');
    });

    test('do not increase the salary', () => {
        const john = employee('firstName', 'John');
        const noBonusProvided = curryingEmployee(john[0])('');
        expect(noBonusProvided).toEqual('1000');
    });
});