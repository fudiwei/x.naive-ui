import { camelize } from 'vue';

export const getVProp = <T extends object, K extends keyof T>(props: T, name: K): T[K] | undefined => {
  if (!props || !name) {
    return;
  }

  // NOTICE: You must use kebab-case prop names in the source codes of components.
  const r = props[name] ?? (props[camelize(name as string) as keyof T] as T[K] | undefined);
  return r;
};

export const getVPropAsBoolean = <T extends object, K extends keyof T>(props: T, name: K): T[K] | boolean | undefined => {
  const r = getVProp(props, name);
  if (typeof r === 'string') {
    if (r === '') {
      return true; // boolean props casting
    }
  }
  return r;
};

export const getVPropAsNumber = <T extends object, K extends keyof T>(props: T, name: K): T[K] | number | undefined => {
  const r = getVProp(props, name);
  if (typeof r === 'string') {
    if (r === '') {
      return;
    }
    return +r;
  }
  return r;
};

export const normalizeVProps = (props: any): object => {
  const temp = {} as any;
  for (const [k, v] of Object.entries(props || {})) {
    temp[camelize(k)] = v;
  }
  return temp;
};
