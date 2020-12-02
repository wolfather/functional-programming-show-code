import { Employee } from "../interfaces/employee.interface";
import { CREDIT_CARD } from '../enums/credit_card.enum';

export class AddcardService {
    public static (employee: Employee): Employee {
        const {level} = employee;
        const cc = CREDIT_CARD[level];

        return (level < 3) ? employee : {...employee, credit_card : cc};
    }
}