import * as React from "react"

const shouldWarn =
  process.env?.NODE_ENV !== undefined && process.env?.NODE_ENV !== "production"

const logWarning = (
  name: string,
  deprecatedType: "component" | "prop",
  message: string
) => {
  // eslint-disable-next-line no-console
  console.warn(
    `DEPRECATED ${deprecatedType.toUpperCase()} WARNING (${name})\n${message}`
  )
}

export const Counter = (() => {
  let countComponents: string[] = []

  const reset = () => {
    countComponents = []
  }

  const add = (value: string) => {
    countComponents.push(value)
  }

  const includes = (value: string) => !!countComponents.includes(value)

  return {
    reset,
    add,
    includes,
  }
})()

type deprecatedWarning = string
type deprecatedPropVal = {
  warning: deprecatedWarning
  key: string
}
export interface withDeprecatedWarningProps {
  name: string
  deprecatedComponent?: deprecatedWarning
  deprecatedProps?: {
    [key: string]: deprecatedWarning | deprecatedPropVal[]
  }
}

export const withDeprecatedWarning = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { deprecatedComponent, deprecatedProps, name }: withDeprecatedWarningProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)

      if (shouldWarn) {
        if (deprecatedComponent && !Counter.includes(name)) {
          Counter.add(name)
          logWarning(name, "component", deprecatedComponent)
        }
        if (deprecatedProps) {
          const deprecatedPropsUsed = Object.keys(
            deprecatedProps
          ).filter(curr => Object.keys(props).includes(curr))

          deprecatedPropsUsed.forEach(curr => {
            if (typeof deprecatedProps[curr] === "string") {
              logWarning(name, "prop", deprecatedProps[curr] as string)
            } else if (Array.isArray(deprecatedProps[curr])) {
              const deprecatedPropMessage = (deprecatedProps[
                curr
              ] as deprecatedPropVal[]).find(obj => obj.key === props[curr])

              if (deprecatedPropMessage !== undefined) {
                logWarning(name, "prop", deprecatedPropMessage.warning)
              }
            }
          })
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
