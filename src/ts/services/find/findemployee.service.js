define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findEmployee = exports.compareFn = void 0;
    function compareFn(key, value) {
        return (e) => e[key].toLowerCase() === value.toLowerCase();
    }
    exports.compareFn = compareFn;
    function findEmployee(employeeList) {
        return function (key, value) {
            const params = compareFn(key, value);
            return employeeList.filter(e => params);
        };
    }
    exports.findEmployee = findEmployee;
});
//# sourceMappingURL=findemployee.service.js.map