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
define("ts/enums/credit_card.enum", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CREDIT_CARD = void 0;
    var CREDIT_CARD;
    (function (CREDIT_CARD) {
        CREDIT_CARD[CREDIT_CARD["CARD_BLACK"] = 3] = "CARD_BLACK";
        CREDIT_CARD[CREDIT_CARD["CARD_GREEN"] = 4] = "CARD_GREEN";
        CREDIT_CARD[CREDIT_CARD["CARD_GOLD"] = 5] = "CARD_GOLD";
        CREDIT_CARD[CREDIT_CARD["CARD_BLUE"] = 6] = "CARD_BLUE";
    })(CREDIT_CARD = exports.CREDIT_CARD || (exports.CREDIT_CARD = {}));
});
define("ts/enums/levels.enum", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LEVELS = void 0;
    var LEVELS;
    (function (LEVELS) {
        LEVELS[LEVELS["temporario"] = 0] = "temporario";
        LEVELS[LEVELS["junior"] = 1] = "junior";
        LEVELS[LEVELS["pleno"] = 2] = "pleno";
        LEVELS[LEVELS["senior"] = 3] = "senior";
        LEVELS[LEVELS["analista"] = 4] = "analista";
        LEVELS[LEVELS["coordenador"] = 5] = "coordenador";
        LEVELS[LEVELS["diretor"] = 6] = "diretor";
    })(LEVELS = exports.LEVELS || (exports.LEVELS = {}));
});
define("ts/enums/roles.enum", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ROLES = void 0;
    var ROLES;
    (function (ROLES) {
        ROLES["JUNIOR_DEVELOPER"] = "junior developer";
        ROLES["PLENO_DEVELOPER"] = "pleno developer";
        ROLES["SENIOR_DEVELOPER"] = "senior developer";
        ROLES["ANALISTA"] = "analista";
        ROLES["COORDENADOR"] = "coordenador";
        ROLES["DIRETOR"] = "diretor";
        ROLES["CONTRACT"] = "tempor\u00E1rio";
    })(ROLES = exports.ROLES || (exports.ROLES = {}));
});
define("ts/interfaces/employee.interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("stubs/stubs", ["require", "exports", "ts/enums/levels.enum", "ts/enums/roles.enum"], function (require, exports, levels_enum_1, roles_enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.employeesStub = void 0;
    exports.employeesStub = [
        {
            firstName: 'Doug',
            lastName: 'Rogue',
            role: roles_enum_1.ROLES.SENIOR_DEVELOPER,
            level: levels_enum_1.LEVELS.senior,
            salary: '2600',
            contract: false,
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            role: roles_enum_1.ROLES.PLENO_DEVELOPER,
            level: levels_enum_1.LEVELS.pleno,
            salary: '1000',
            contract: false,
        },
        {
            firstName: 'Larry',
            lastName: 'Kid',
            role: roles_enum_1.ROLES.DIRETOR,
            level: levels_enum_1.LEVELS.diretor,
            salary: '3500',
            contract: false,
        },
        {
            firstName: 'Mary',
            lastName: 'Harry',
            role: roles_enum_1.ROLES.JUNIOR_DEVELOPER,
            level: levels_enum_1.LEVELS.junior,
            salary: '2100',
            contract: false,
        },
        {
            firstName: 'Mandy',
            lastName: 'Sandy',
            role: roles_enum_1.ROLES.COORDENADOR,
            level: levels_enum_1.LEVELS.coordenador,
            salary: '3500',
            contract: false,
        },
        {
            firstName: 'Silas',
            lastName: 'Vanilla',
            role: roles_enum_1.ROLES.JUNIOR_DEVELOPER,
            level: levels_enum_1.LEVELS.junior,
            salary: '2100',
            contract: false,
        },
    ];
});
define("ts/services/find/findemployee.service", ["require", "exports"], function (require, exports) {
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
define("ts/main", ["require", "exports", "stubs/stubs", "ts/services/find/findemployee.service"], function (require, exports, stubs_1, findemployee_service_1) {
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
define("ts/enums/email_sufix.enum", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMAIL_SUFIX = void 0;
    var EMAIL_SUFIX;
    (function (EMAIL_SUFIX) {
        EMAIL_SUFIX["sufix"] = "@acme.com";
    })(EMAIL_SUFIX = exports.EMAIL_SUFIX || (exports.EMAIL_SUFIX = {}));
});
define("ts/enums/performance.enum", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PERFORMACE_RATING = void 0;
    var PERFORMACE_RATING;
    (function (PERFORMACE_RATING) {
        PERFORMACE_RATING[PERFORMACE_RATING["HIGH"] = 1.5] = "HIGH";
        PERFORMACE_RATING[PERFORMACE_RATING["AVERAGE"] = 1.25] = "AVERAGE";
        PERFORMACE_RATING[PERFORMACE_RATING["LOW"] = 1] = "LOW";
    })(PERFORMACE_RATING = exports.PERFORMACE_RATING || (exports.PERFORMACE_RATING = {}));
});
define("ts/services/addcard.service", ["require", "exports", "ts/enums/credit_card.enum"], function (require, exports, credit_card_enum_1) {
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
define("ts/services/addcard/addcard.service", ["require", "exports", "ts/enums/credit_card.enum"], function (require, exports, credit_card_enum_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addCard = void 0;
    function addCard(employee) {
        const { level } = employee;
        return Object.assign(Object.assign({}, employee), { credit_card: credit_card_enum_2.CREDIT_CARD[level] });
    }
    exports.addCard = addCard;
});
define("ts/services/normalizestring/normalizestring.service", ["require", "exports"], function (require, exports) {
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
define("ts/services/addemail/addemail.service", ["require", "exports", "ts/services/normalizestring/normalizestring.service"], function (require, exports, normalizestring_service_1) {
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
define("ts/services/addtemporary/addtemporary.service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addTemporaryEmployee = void 0;
    function addTemporaryEmployee(employeeList, employee) {
        return [...employeeList, employee];
    }
    exports.addTemporaryEmployee = addTemporaryEmployee;
});
define("ts/services/changelevel/changelevel.service", ["require", "exports"], function (require, exports) {
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
define("ts/services/getnewsalary/getnewsalary.service", ["require", "exports"], function (require, exports) {
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
define("ts/services/makecomposition/makecomposition.service", ["require", "exports"], function (require, exports) {
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
define("ts/services/parsevalue/parsevalue.service", ["require", "exports"], function (require, exports) {
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
define("ts/services/changesalary/changesalary.service", ["require", "exports", "ts/services/getnewsalary/getnewsalary.service", "ts/services/makecomposition/makecomposition.service", "ts/services/parsevalue/parsevalue.service"], function (require, exports, getnewsalary_service_1, makecomposition_service_1, parsevalue_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.curryingEmployee = void 0;
    function curryingEmployee(employee) {
        return function (performanceRating) {
            const { salary } = employee;
            const salaryRules = makecomposition_service_1.makeComposition(getnewsalary_service_1.getNewSalary(performanceRating), parsevalue_service_1.parseValue);
            const newSalary = salaryRules(salary);
            return Object.assign(Object.assign({}, employee), { salary: newSalary });
        };
    }
    exports.curryingEmployee = curryingEmployee;
});
//# sourceMappingURL=bundle.js.map