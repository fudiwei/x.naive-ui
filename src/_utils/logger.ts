const format = (msg: string, ...args: any[]): string => {
    let log = '[x.naive-ui]: ' + msg;
    for (let i = 0; i < args.length; i++) {
        log = log.replaceAll('{' + i + '}', args[i] != null ? (args[i] as string) : '');
    }
    return log;
};

export const warning = (msg: string, ...args: any[]): void => {
    console.warn(format(msg, ...args));
};

export const error = (msg: string, ...args: any[]): void => {
    console.error(format(msg, ...args));
};
