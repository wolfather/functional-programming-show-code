import { LEVELS } from "../../enums/levels.enum.ts";
import { Employee } from "../../interfaces/employee.interface.ts";

export default function changeEmployeeLevel(level: LEVELS): Function {
    return function(employees: Employee[]): Employee[] {
        return employees.map((e: Employee) => {
            return {...e, level};
        });
    };
}
