interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}
// needed untill we can use satisfies to create a similar object to tailwind class consumption
type ResolvableTo<T> = T | ((utils) => T)

const flattenEntries = (
  prefix: string,
  themeObj: ResolvableTo<RecursiveKeyValuePair<string, string>>
): Array<{
  className: string
  classValue: string
}> => {
  const classKeyVal: string[][] = Object.entries(themeObj || [])
  const flattenedEntries: Array<{ className: string; classValue: string }> = []
  classKeyVal.forEach(colorGroup => {
    const [classModifier, classValue] = colorGroup
    if (typeof classValue === "string") {
      flattenedEntries.push({
        className: `${prefix}${classModifier}`,
        classValue,
      })
    } else {
      Object.entries(classValue as Record<string, string>).forEach(
        classNamePair =>
          flattenedEntries.push({
            className: `${prefix}${classModifier}-${classNamePair[0]}`,
            classValue: classNamePair[1],
          })
      )
    }
  })
  return flattenedEntries
}

export { flattenEntries }
