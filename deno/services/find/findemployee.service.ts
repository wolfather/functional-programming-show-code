import { LEVELS } from "../../enums/levels.enum.ts";
import { ROLES } from "../../enums/roles.enum.ts";
import { Employee } from "../../interfaces/employee.interface.ts";


export function compareFn(key: string, value: string): Function {
    return (e: any) => e[key].toLowerCase() === value.toLowerCase();
}
/**
 * @version 1.0.1
 * @param {*} employee
 * @author `<so.israelweb@gmail.com>
 * @description "retorna uma lista de usuários de acordo com o parâmetro de propriedade e valor - FIX-CFA-121" 
 * @example ```
 * const getEmployee = findEmployeeBy(employeeList)('firstName', 'Ford')
 * ```
 */
export default function findEmployee(employeeList: Array<Employee>): Function {
    return function(key: string, value: string): Employee[] {
        const params = compareFn(key, value);
        if(key !== '' && value !== '') {
            return employeeList.filter((e: any) => e[key].toLowerCase() === value.toLowerCase());
        }
        return employeeList;
    }
}
