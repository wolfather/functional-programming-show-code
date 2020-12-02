import { Employee } from "../../interfaces/employee.interface";

export function addTemporaryEmployee (employeeList: Employee[], employee: Employee): Employee[] {
    return [...employeeList, employee];
}