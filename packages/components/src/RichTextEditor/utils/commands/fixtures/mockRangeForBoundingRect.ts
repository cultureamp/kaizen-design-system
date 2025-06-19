// eslint-disable-next-line import/no-extraneous-dependencies
import { vi } from 'vitest'

/*
 ** This is used handle the JSDom type error issue you may encounter in testing
 ** See https://github.com/jsdom/jsdom/issues/3002
 */
export const mockRangeForBoundingRect = (): void => {
  vi.spyOn(document, 'createRange').mockImplementation(() => {
    const range = new Range()

    range.getBoundingClientRect = () => ({
      x: 0,
      y: 0,
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      toJSON: () => undefined,
    })

    range.getClientRects = () => ({
      item: () => null,
      length: 0,
      [Symbol.iterator]: vi.fn(),
    })

    return range
  })
}
