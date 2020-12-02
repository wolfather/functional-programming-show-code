define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeComposition = void 0;
    function accumulateValue(previousValue, currentValue) {
        return currentValue(previousValue);
    }
    function makeComposition(...functions) {
        return function (value) {
            return functions.reduce(accumulateValue, value);
        };
    }
    exports.makeComposition = makeComposition;
});
//# sourceMappingURL=makecomposition.service.js.map