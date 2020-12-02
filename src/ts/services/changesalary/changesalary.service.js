define(["require", "exports", "../getnewsalary/getnewsalary.service", "../makecomposition/makecomposition.service", "../parsevalue/parsevalue.service"], function (require, exports, getnewsalary_service_1, makecomposition_service_1, parsevalue_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.curryingEmployee = void 0;
    function curryingEmployee(employee) {
        return function (performanceRating) {
            const { salary } = employee;
            const salaryRules = makecomposition_service_1.makeComposition(getnewsalary_service_1.getNewSalary(performanceRating), parsevalue_service_1.parseValue);
            const newSalary = salaryRules(salary);
            return Object.assign(Object.assign({}, employee), { salary: newSalary });
        };
    }
    exports.curryingEmployee = curryingEmployee;
});
//# sourceMappingURL=changesalary.service.js.map