define(["require", "exports", "../../enums/credit_card.enum"], function (require, exports, credit_card_enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addCard = void 0;
    function addCard(employee) {
        const { level } = employee;
        return Object.assign(Object.assign({}, employee), { credit_card: credit_card_enum_1.CREDIT_CARD[level] });
    }
    exports.addCard = addCard;
});
//# sourceMappingURL=addcard.service.js.map