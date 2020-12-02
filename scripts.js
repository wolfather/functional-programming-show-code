
var app = (function(version) {
    console.warn('app version:', version);

    const group = groupEmployeesBy(employeesStub, 'role');
    console.log('group', group);

    const someEmployee = findEmployeeBy(employeesStub)('role', 'developer');
    console.log('someEmployee', someEmployee);
    
    const doug = curryingEmployee(employeesStub[0]);
    const dougBonusSalary = doug('above');
    console.log('dougBonusSalary', dougBonusSalary);
    
    const newEmployeeList = addTemporaryEmployee(employeesStub, tempEmployee);
    console.log('newEmployeeList', newEmployeeList);

    const findTempEmployee = findEmployeeBy(newEmployeeList)('firstName', 'Bob');
    console.log('findTempEmployee', findTempEmployee);

    const findSomeDeveloper = findEmployeeBy(newEmployeeList);
    const employeePromoted = findSomeDeveloper('firstName', 'Doug')[0];
    console.log('promoted: ', employeePromoted);

    const promoteEmployee = makeComposition(
        changeEmployeeLevel,
        addCard,
    );

    const onboardingEmployee = makeComposition(
        appendEmail,
        //darBoasVindas
    );
    
    const anotherPromoteEmployee = makeComposition(
        appendEmail,
        addCard,
    );

    console.log(promoteEmployee(someEmployee[0]));
    console.log(anotherPromoteEmployee(someEmployee[1]));
}('1.0.0'));

