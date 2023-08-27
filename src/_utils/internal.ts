export const getRestProps = <T extends object, K extends keyof T>(
    obj: T,
    ...excludes: (K | K[])[]
): Omit<T, K extends string[] ? K[number] : K> => {
    const keys: string[] = [];
    excludes?.forEach((p) => {
        if (Array.isArray(p)) {
            p.forEach((k) => keys.push(k as string));
        } else {
            keys.push(p as string);
        }
    });

    const rest: Record<string, unknown> = {};
    Object.entries(obj).forEach(([k, v]) => {
        !keys.includes(k) && (rest[k] = v);
    });

    return rest as T;
};
