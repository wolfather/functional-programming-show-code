import { Employee } from './interfaces/employee.interface.ts';
import { LEVELS } from './enums/levels.enum.ts';
import { ROLES } from './enums/roles.enum.ts';

export const employeesStub: Array<Employee> = [
    {
        firstName: 'Doug', 
        lastName: 'Rogue', 
        role: ROLES.SENIOR_DEVELOPER, 
        level: LEVELS.senior, 
        salary: '2600',
        contract: false,
        id: '123456'
    },
    {
        firstName: 'John', 
        lastName: 'Doe', 
        role: ROLES.PLENO_DEVELOPER, 
        level: LEVELS.pleno, 
        salary: '1000',
        contract: false,
        id: '983456'
    },
    {
        firstName: 'Larry', 
        lastName: 'Kid', 
        role: ROLES.DIRETOR, 
        level: LEVELS.diretor, 
        salary: '3500',
        contract: false,
        id: '129856'
    },
    {
        firstName: 'Mary', 
        lastName: 'Harry', 
        role: ROLES.JUNIOR_DEVELOPER, 
        level: LEVELS.junior, 
        salary: '2100',
        contract: false,
        id: '555632'
    },
    {
        firstName: 'Mandy', 
        lastName: 'Sandy', 
        role: ROLES.COORDENADOR, 
        level: LEVELS.coordenador, 
        salary: '3500',
        contract: false,
        id: '111111'
    },
    {
        firstName: 'Silas', 
        lastName: 'Vanilla', 
        role: ROLES.JUNIOR_DEVELOPER, 
        level: LEVELS.junior, 
        salary: '2100',
        contract: false,
        id: '897321'
    },
];