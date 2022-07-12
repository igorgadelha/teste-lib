"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const filter_roles_class_1 = require("./filter-roles.class");
class Roles {
    filterRoles;
    static instance;
    roles = [];
    constructor(filterRoles) {
        this.filterRoles = filterRoles;
    }
    static getInstance() {
        if (!Roles.instance) {
            Roles.instance = new Roles(new filter_roles_class_1.FilterRoles());
        }
        return Roles.instance;
    }
    setRoles(roles) {
        try {
            this.roles = roles;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    getRoles() {
        return this.roles;
    }
    hasRole(role) {
        if (Array.isArray(role)) {
            return this.filterRoles.hasRoles(role, this.getRoles());
        }
        return this.filterRoles.hasRole(role, this.getRoles());
    }
}
exports.Roles = Roles;
//# sourceMappingURL=roles.class.js.map