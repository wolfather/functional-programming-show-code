define(["require", "exports", "../normalizestring/normalizestring.service"], function (require, exports, normalizestring_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addEmail = void 0;
    const emailCompany = 'acme.com';
    function addEmail(employee) {
        const { firstName } = employee;
        return Object.assign(Object.assign({}, employee), { email: `${normalizestring_service_1.normalizeString(firstName)}@${emailCompany}` });
    }
    exports.addEmail = addEmail;
});
//# sourceMappingURL=addemail.service.js.map