"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterRoles = void 0;
class FilterRoles {
    hasRole(role, fromRoles) {
        if (!fromRoles.length) {
            throw new Error('Você precisa adicionar as roles para poder checá-las');
        }
        return fromRoles.indexOf(role) > -1;
    }
    hasRoles(roles, fromRoles) {
        let checkedRoles = [];
        if (!fromRoles.length) {
            throw Error('Você precisa adicionar as roles para poder checá-las');
        }
        roles.some((role) => {
            let hasRole = fromRoles.includes(role) ? true : false;
            checkedRoles.push(hasRole);
        });
        return checkedRoles;
    }
}
exports.FilterRoles = FilterRoles;
//# sourceMappingURL=filter-roles.class.js.map