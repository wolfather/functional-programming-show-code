import { CREDIT_CARD } from "../enums/credit_card.enum.ts";
import { LEVELS } from "../enums/levels.enum.ts";
import { ROLES } from "../enums/roles.enum.ts";

export interface Employee {
    firstName: string;
    lastName: string;
    role: ROLES;
    level: LEVELS;
    salary: string;
    contract: boolean;
    email ?: string;
    credit_card ?: CREDIT_CARD | string;
    id: string;
}
