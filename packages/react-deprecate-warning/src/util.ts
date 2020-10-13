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
export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "Component"
