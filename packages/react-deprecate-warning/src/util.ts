export const shouldWarn =
  process.env?.NODE_ENV !== undefined && process.env?.NODE_ENV !== "production"

const log = (deprecatedType: "component" | "prop") => (
  name: string,
  message: string
) => {
  if (shouldWarn) {
    // eslint-disable-next-line no-console
    console.warn(
      `DEPRECATED ${deprecatedType.toUpperCase()} WARNING (${name})\n${message}`
    )
  }
}

export const logComponent = log("component")
export const logProp = log("prop")

export const Counter = (() => {
  let countComponents: string[] = []

  const reset = () => {
    countComponents = []
  }

  const add = (value: string) => {
    countComponents.push(value)
  }

  const includes = (value: string) => !!countComponents.includes(value)

  // eslint-disable-next-line no-console
  const debug = () => console.log(countComponents)

  return {
    reset,
    add,
    includes,
    debug,
  }
})()
