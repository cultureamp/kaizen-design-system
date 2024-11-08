export const getValidValue = <Value>(value: Value): Value | undefined => {
  if (typeof value === "object" && JSON.stringify(value) === "{}")
    return undefined

  if (Array.isArray(value) && value.length === 0) return undefined

  return value
}
