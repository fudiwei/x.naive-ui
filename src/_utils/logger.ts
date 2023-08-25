const format = (msg: string, ...args: unknown[]): string => {
    let log = '[x.naive-ui]: ' + msg;
    for (let i = 0; i < args.length; i++) {
        log = log.replaceAll('{' + i + '}', args[i] != null ? (args[i] as string) : '');
    }
    return log;
};

export const warning = (msg: string, ...args: unknown[]) => {
    console.warn(format(msg, ...args));
};

export const error = (msg: string, ...args: unknown[]) => {
    console.error(format(msg, ...args));
};
