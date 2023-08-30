export function XNaiveUIResolver() {
    return {
        type: 'component' as const,
        resolve: (name: string) => {
            if (name.match(/^(XN[A-Z]|x-n-[a-z])/)) {
                return { name, from: '@skit/x.naive-ui' };
            }
        }
    };
}
