/**
 * Finds the first ancestor with a `dir` property on it
 * Returning true is that is `dir=rtl` and returning false in all other cases
 */
export const isRTL = (element: Element): boolean =>
  !!element.closest('[dir]')?.matches('[dir="rtl"]')
