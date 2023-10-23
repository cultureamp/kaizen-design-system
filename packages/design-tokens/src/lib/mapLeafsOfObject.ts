import { DeepMapObjectLeafs } from "../types"

/**
 * This allows you to map the leaf nodes of an object, and you're provided the path to that leaf as well as the value as parameters to your mapper function.
 * This function was build to support mapping theme values to their respective CSS variable identifiers.
 * For example:
 * ```ts
 * mapLeafsOfObject({
 *  one: {
 *    two: 4
 *  }
 * }, (path, value) => value + 7)
 * ```
 * Results in:
 * ```
 * {
 *    one: {
 *      two: 11
 *    }
 * }
 * ```
 */
/**
 * @deprecated Remove if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` in next-services.
 */
export function mapLeafsOfObject<
  Obj extends Record<string | number, unknown>,
  Value,
>(
  object: Obj,
  mapper: (pathToLeaf: string[], value: unknown) => Value
): DeepMapObjectLeafs<Obj, Value> {
  const recurser = <O extends Record<string | number, unknown>>(
    currentPath: string[],
    obj: O
  ): DeepMapObjectLeafs<O, Value> => {
    const handleEntry = (
      key: string,
      value: unknown
    ):
      | {
          [x: string]: unknown
          [x: number]: unknown
        }
      | Value => {
      const pathToKey = [...currentPath, key]
      if (typeof value === "object" && value !== null && value !== undefined) {
        return recurser(pathToKey, value as Record<string | number, unknown>)
      }
      return mapper(pathToKey, value)
    }

    return Object.entries(obj).reduce(
      (acc, [nextKey, nextValue]) => ({
        ...acc,
        [nextKey]: handleEntry(nextKey, nextValue),
      }),
      {} as DeepMapObjectLeafs<O, Value>
    )
  }
  return recurser([], object)
}
