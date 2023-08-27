export const getVPropAsBoolean = <T extends object, K extends keyof T>(
    props: T,
    name: K
): T[K] | boolean | undefined => {
    const r = props[name];
    if (typeof r === 'string') {
        if (r === '') {
            return true; // boolean props casting
        }
    }
    return r;
};

export const getVPropAsNumber = <T extends object, K extends keyof T>(props: T, name: K): T[K] | number | undefined => {
    const r = props[name];
    if (typeof r === 'string') {
        if (r === '') {
            return;
        }
        return +r;
    }
    return r;
};
