define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.changeEmployeeLevel = void 0;
    function changeEmployeeLevel(newLevel) {
        return function (employee) {
            return Object.assign(Object.assign({}, employee), { level: newLevel });
        };
    }
    exports.changeEmployeeLevel = changeEmployeeLevel;
});
//# sourceMappingURL=changelevel.service.js.map