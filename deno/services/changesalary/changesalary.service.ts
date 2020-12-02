import { PERFORMACE_RATING } from "../../enums/performance.enum.ts";
import { Employee } from "../../interfaces/employee.interface.ts";
import { getNewSalary } from "../getnewsalary/getnewsalary.service.ts";
import makeComposition from "../makecomposition/makecomposition.service.ts";
import { parseValue } from "../parsevalue/parsevalue.service.ts";

export default function changeEmployeeSalary(performanceRating: PERFORMACE_RATING): Function {
    return function(employees: Employee[]): Employee[] {
        return employees.map((e: Employee) => {
            const { salary } = e;
            const salaryRules = makeComposition(
                getNewSalary(performanceRating),
                parseValue,
            );
            const newSalary: string = salaryRules(salary);
    
            return {...e, salary: newSalary};
        });
    };
}