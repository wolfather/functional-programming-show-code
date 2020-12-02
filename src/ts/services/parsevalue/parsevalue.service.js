define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseValue = void 0;
    function parseValue(value) {
        return parseFloat(value)
            .toFixed(2)
            .toString()
            .split('.')[0];
    }
    exports.parseValue = parseValue;
});
//# sourceMappingURL=parsevalue.service.js.map