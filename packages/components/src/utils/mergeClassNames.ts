import classnames from "classnames"

type ClassNameValue = string | number | boolean | undefined | null

/**
 * Helper to merge classnames together with support for functions that receive state (render props).
 * This is useful when working with react-aria-components which have a feature where you can pass a function that receives state and returns a classname.
 * https://react-spectrum.adobe.com/react-aria/styling.html#render-props
 */
export const mergeClassNames = <
  ClassNameTypes extends (ClassNameValue | ((state: any) => string))[],
>(
  ...classNames: ClassNameTypes
): (() => string) extends ClassNameTypes[number] ? (state: any) => string : string => {
  const containsFunction = classNames.some((className) => typeof className === "function")

  // "as any" is used because TS is not smart enough to know that containsFunction means that ClassNameType doesn't extend Function
  if (!containsFunction) return classnames(...(classNames as ClassNameValue[])) as any

  // "as any" is used because TS is not smart enough to know that containsFunction means that ClassNameType doesn't extend Function
  return ((state: any) =>
    classnames(
      ...(classNames.map((className) =>
        typeof className === "function" ? className(state) : className,
      ) as ClassNameValue[]),
    )) as any
}
