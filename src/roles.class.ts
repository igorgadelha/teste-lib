import { FilterRoles } from './filter-roles.class';

export class Roles {
    private static instance: Roles;

    protected roles: string[] = [];

    private constructor(
        private filterRoles: FilterRoles
    ) {}

    public static getInstance(): Roles {
        if (!Roles.instance) {
            Roles.instance = new Roles( new FilterRoles());
        }

        return Roles.instance;
    }

    setRoles(roles: string[]): void {
        try {
            this.roles = roles;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    getRoles(): string[] {
        return this.roles;
    }


    hasRole(role: string | string[]): boolean | Array<boolean> {
        if (Array.isArray(role)) {
            return this.filterRoles.hasRoles(role, this.getRoles());
        }
        return this.filterRoles.hasRole(role as string, this.getRoles());
    }
}
