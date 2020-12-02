define(["require", "exports", "../enums/credit_card.enum"], function (require, exports, credit_card_enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddcardService = void 0;
    class AddcardService {
        static(employee) {
            const { level } = employee;
            const cc = credit_card_enum_1.CREDIT_CARD[level];
            return (level < 3) ? employee : Object.assign(Object.assign({}, employee), { credit_card: cc });
        }
    }
    exports.AddcardService = AddcardService;
});
//# sourceMappingURL=addcard.service.js.map