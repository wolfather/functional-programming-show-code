import { Employee } from "../../interfaces/employee.interface.ts";
import { normalizeString } from "../normalizestring/normalizestring.service.ts";

const emailCompany: string = 'acme.com';

export function mapEmployee(e: Employee): Employee {
    const { firstName } = e;
    const email = `${normalizeString(firstName)}@${emailCompany}`;

    return {...e, email};
};

export default function addEmail(employees: Employee[]): Employee[] {
    return employees.map(mapEmployee);
}
