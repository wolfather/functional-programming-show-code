define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normalizeString = void 0;
    function normalizeString(str) {
        return str
            .toLowerCase()
            .trim()
            .split('')
            .join('')
            .replace(/ç/g, 'c')
            .replace(/[á,à,ã,â]/g, 'a')
            .replace(/[é,è,ê]/g, 'e')
            .replace(/[í,î,ì]/g, 'i')
            .replace(/[ó,ò,ô,õ]/g, 'o')
            .replace(/[ú,ù]/g, 'u');
    }
    exports.normalizeString = normalizeString;
});
//# sourceMappingURL=normalizestring.service.js.map