import { CREDIT_CARD } from "../../enums/credit_card.enum.ts";
import { Employee } from "../../interfaces/employee.interface.ts";


export function mapCreditCard(e: Employee) {
    const {level} = e;
    
    return (level >= 3) ? {...e, credit_card: CREDIT_CARD[level]} : e;
}

export default function addCreditCard(employees: Employee[]): Employee[] {
    return employees.map(mapCreditCard);
}