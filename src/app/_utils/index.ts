export const isEqual = <T extends Record<string, any>>(a: T, b: T): boolean => {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !isEqual(a[key as keyof T], b[key as keyof T])) {
      return false;
    }
  }
  return true;
};
