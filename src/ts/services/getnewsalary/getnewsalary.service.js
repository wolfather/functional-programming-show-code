define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getNewSalary = void 0;
    function getNewSalary(performanceRating) {
        return function (salary) {
            return (parseInt(salary) * performanceRating).toString(0);
        };
    }
    exports.getNewSalary = getNewSalary;
});
//# sourceMappingURL=getnewsalary.service.js.map