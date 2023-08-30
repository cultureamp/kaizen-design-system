interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}
// needed untill we can use satisfies to create a similar object to tailwind class consumption
type ResolvableTo<T> = T | ((utils: any) => T)

export const flattenEntries = (
  prefix: string,
  themeObj: ResolvableTo<RecursiveKeyValuePair<string, string>>
): Array<{
  utilityClassName: string
  cssProperty: string
}> => {
  const classKeyVal: string[][] = Object.entries(themeObj || [])
  const flattenedEntries: Array<{
    utilityClassName: string
    cssProperty: string
  }> = []
  classKeyVal.forEach(colorGroup => {
    const [classModifier, cssProperty] = colorGroup
    if (typeof cssProperty === "string") {
      flattenedEntries.push({
        utilityClassName: `${prefix}${classModifier}`,
        cssProperty,
      })
    } else {
      Object.entries(cssProperty as Record<string, string>).forEach(
        classNamePair =>
          flattenedEntries.push({
            utilityClassName: `${prefix}${classModifier}-${classNamePair[0]}`,
            cssProperty: classNamePair[1],
          })
      )
    }
  })
  return flattenedEntries
}
