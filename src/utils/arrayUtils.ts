export const filterAndJoinArray = (array: (string | number | undefined | null)[], separator: string | undefined = ',') => {
    return array.filter(v => !!v).join(separator);
};