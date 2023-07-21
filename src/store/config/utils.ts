type Obj = Record<string | number, unknown> | Array<unknown>;

function isValidObject(value: unknown): value is Obj {
  return typeof value === "object" && value !== null;
}

/**
 * Sort object keys alphabetically
 */
function sortObject<T extends Obj>(obj: T): T {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- needed as Object.fromEntries looses the reference key
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => {
      if (String(a) < String(b)) return -1;
      if (String(a) > String(b)) return 1;
      return 0;
    })
  ) as T;
}

/**
 * Compare state equality
 * @param left - previous version of the state
 * @param right - current version of the state
 * @returns true if state remains unchanged
 */
export const isEqual = (a: unknown, b: unknown): boolean =>
  isValidObject(a) && isValidObject(b)
    ? JSON.stringify(sortObject(a)) === JSON.stringify(sortObject(b))
    : a === b;
