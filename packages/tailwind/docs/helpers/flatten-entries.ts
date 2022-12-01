interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}
// needed untill we can use satisfies to create a similar object to tailwind class consumption
type ResolvableTo<T> = T | ((utils) => T)

type ClassKey = string
type ClassValue = string | { [k: string]: ClassValue }
type ClassKeyVal = [ClassKey, ClassValue]

const flattenEntries = (
  themeClassConfig:
    | ClassValue
    | ResolvableTo<RecursiveKeyValuePair<string, string>>
): ClassKeyVal[] | ClassKeyVal => {
  const entries: ClassKeyVal[] = Object.entries(themeClassConfig)
  const keyValues: ClassKeyVal[] | ClassKeyVal = entries.reduce(
    (accumulatedClasses, currentClass) => {
      const [classNameKey, classNameValue] = currentClass
      if (typeof classNameValue === "string") {
        return [...accumulatedClasses, [classNameKey, classNameValue]]
      }
      const innerKeyVal = flattenEntries(classNameValue)
      const innerClass = innerKeyVal?.map(innerScope => {
        const [innerKey, innerValue] = innerScope
        return [`${classNameKey}-${innerKey}`, innerValue]
      })
      return [...accumulatedClasses, ...innerClass]
    },
    []
  )

  return keyValues
}

export { flattenEntries }
