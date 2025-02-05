export const objectOmitter = <T extends object, K extends keyof T>(obj: T, ...excludes: (K | K[])[]): Omit<T, K extends string[] ? K[number] : K> => {
  const keys: string[] = [];
  excludes?.forEach((p) => {
    if (Array.isArray(p)) {
      p.forEach((k) => keys.push(k as string));
    } else {
      keys.push(p as string);
    }
  });

  const temp: Record<string, any> = {};
  Object.entries(obj).forEach(([k, v]) => {
    if (!keys.includes(k)) {
      temp[k] = v;
    }
  });

  return temp as T;
};

export const globalThisGetter = <T = any>(key: string, getter?: () => T): T | undefined => {
  let o = (globalThis as any) || {};
  let p = 'XNaiveUI';

  if (typeof o[p] !== 'object') {
    o[p] = {};
    Object.defineProperty(o, p, {
      configurable: false,
      enumerable: false,
      writable: false
    });
  }

  o = o[p];
  p = `$__${key}`;
  if (!Object.prototype.hasOwnProperty.call(o, p)) {
    if (getter) {
      o[p] = getter();
      Object.defineProperty(o, p, { enumerable: false });
    }
  }

  return o[p] as T;
};
