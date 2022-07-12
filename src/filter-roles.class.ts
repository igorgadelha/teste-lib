export class FilterRoles {
    hasRole(role: string, fromRoles: string[]): boolean {
        if (!fromRoles.length) {
            throw new Error(
                'Você precisa adicionar as roles para poder checá-las'
            );
        }

        return fromRoles.indexOf(role) > -1;
    }

    hasRoles(roles: string[], fromRoles: string[]): Array<boolean> {
        let checkedRoles: Array<boolean> = [];

        if (!fromRoles.length) {
            throw Error('Você precisa adicionar as roles para poder checá-las');
        }

        roles.some((role: string) => {
            let hasRole = fromRoles.includes(role) ? true : false;

            checkedRoles.push(hasRole);
        });

        return checkedRoles;
    }
}
