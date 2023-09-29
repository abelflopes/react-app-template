/**
 * Returns object with all query params
 * @param value - URLSearchParams object
 * @returns object with all params
 */
export function getAllSearchParams(value: URLSearchParams): Record<string, string> {
  return [...value.entries()]
    .map((i) => Object.fromEntries([i]))
    .reduce(
      (a, b) => ({
        ...a,
        ...b,
      }),
      {},
    );
}
