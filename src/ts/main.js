var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define(["require", "exports", "../stubs/stubs", "./services/find/findemployee.service"], function (require, exports, stubs_1, findemployee_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(stubs_1.employeesStub);
    (function (_a) {
        var config = __rest(_a, []);
        console.warn(`APP NAME: ${config.name}`);
        console.warn(`APP VERSION: ${config.version}`);
        const _f = findemployee_service_1.findEmployee(stubs_1.employeesStub);
        console.log(_f);
    }({
        vesion: '1.1.0',
        name: 'HR SOLUTION'
    }));
});
//# sourceMappingURL=main.js.map