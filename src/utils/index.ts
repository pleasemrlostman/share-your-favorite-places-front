import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const isEqual = <T extends Record<string, any>>(a: T, b: T): boolean => {
//   if (a === b) return true;
//   if (
//     typeof a !== "object" ||
//     typeof b !== "object" ||
//     a === null ||
//     b === null
//   ) {
//     return false;
//   }
//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);
//   if (keysA.length !== keysB.length) return false;
//   for (let key of keysA) {
//     if (
//       !keysB.includes(key) ||
//       !isEqual(a[key as keyof T], b[key as keyof T])
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

export const isEqual = (value: unknown, other: unknown): boolean => {
  if (value === other) {
    return true;
  }

  if (typeof value !== typeof other) {
    return false;
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  if (
    typeof value === "object" &&
    typeof other === "object" &&
    value !== null &&
    other !== null
  ) {
    const valueObj = value as Record<string, unknown>;
    const otherObj = other as Record<string, unknown>;
    const valueKeys = Object.keys(valueObj);
    const otherKeys = Object.keys(otherObj);

    if (valueKeys.length !== otherKeys.length) {
      return false;
    }

    return valueKeys.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(otherObj, key) &&
        isEqual(valueObj[key], otherObj[key])
    );
  }

  return value === other;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
