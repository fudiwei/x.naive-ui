﻿export const getRestProps = <T extends object, K extends keyof T>(
    obj: T,
    ...excludes: (K | K[])[]
): Omit<T, K extends string[] ? K[number] : K> => {
    const props: string[] = [];
    excludes?.forEach((p) => {
        if (Array.isArray(p)) {
            p.forEach((k) => props.push(k as string));
        } else {
            props.push(p as string);
        }
    });

    const rest: Record<string, unknown> = {};
    Object.entries(obj).forEach(([k, v]) => {
        !props.includes(k) && (rest[k] = v);
    });

    return rest as T;
};

export const getBooleanProp = <T extends object, K extends keyof T>(obj: T, prop: K): T[K] | boolean => {
    const r = obj[prop];
    if (typeof r === 'string') {
        if (r === '') {
            return true; // boolean props casting
        }
    }
    return r;
};
