export const buildPath = (label: string, root: string) => `${root}/${label}`;

export const parsePath = (path: string | null): { label: string | null; parentPath: string | null } => {
    if (!path) {
        return {
            label: null,
            parentPath: null
        };
    }

    const pathSplit = path.split('/');
    const label = (pathSplit.length > 1 ? pathSplit.pop() : pathSplit[0]) || null;
    const parentPath = pathSplit.join('/');

    return {
        label,
        parentPath
    };
};