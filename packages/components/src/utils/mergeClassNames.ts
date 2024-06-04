import classnames from "classnames"

type ClassNameValue = string | number | boolean | undefined | null

export const mergeClassNames = <
  ClassNameType extends ClassNameValue | ((state: any) => string),
>(
  ...classNames: ClassNameType[]
): ClassNameType extends () => void ? (state: any) => string : string => {
  const containsFunction = classNames.some(
    className => typeof className === "function"
  )

  // "as any" is used because TS is not smart enough to know that containsFunction means that ClassNameType doesn't extend Function
  if (!containsFunction) return classnames(...(classNames as ClassNameValue[])) as any

  // "as any" is used because TS is not smart enough to know that containsFunction means that ClassNameType doesn't extend Function
  return ((state: any) =>
    classnames(
      ...(classNames.map(className =>
        typeof className === "function" ? className(state) : className
      ) as ClassNameValue[])
    )) as any
}
