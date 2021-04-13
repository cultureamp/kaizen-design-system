/**
 * All our consumers use Webpack's DefinePlugin to emulate process.env
 * This either generates a string, "process.env.NODE_ENV", or an object
 * process.env with properties such that they can be referenced like so
 * process.env["NODE_ENV"]. This makes it safe to not need to check if
 * process.env is a valid object.
 */
export const shouldWarn =
  process.env.NODE_ENV !== undefined && process.env.NODE_ENV !== "production"

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
export const getDisplayName = <Props>(
  WrappedComponent: React.ComponentType<Props>
) => WrappedComponent.displayName || WrappedComponent.name || "Component"
