import { PERFORMACE_RATING } from "../../enums/performance.enum.ts";

export function getNewSalary(performanceRating: PERFORMACE_RATING): Function {
    return function(salary: string) {
        return (parseInt(salary) * performanceRating).toString();
    }
}
