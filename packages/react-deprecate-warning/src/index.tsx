import * as React from "react"

const shouldWarn =
  process.env?.NODE_ENV !== undefined && process.env?.NODE_ENV !== "production"

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
export interface withDeprecatedWarningProps {
  deprecatedComponent?: deprecatedWarning
  deprecatedProps?: {
    [key: string]: deprecatedWarning
  }
}

export const withDeprecatedWarning = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { deprecatedComponent, deprecatedProps }: withDeprecatedWarningProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)

      if (shouldWarn) {
        if (deprecatedComponent && !Counter.includes(WrappedComponent.name)) {
          // eslint-disable-next-line no-console
          console.warn(
            `DEPRECATED COMPONENT WARNING (${WrappedComponent.name})\n${deprecatedComponent}`
          )
          Counter.add(WrappedComponent.name)
        }
        if (deprecatedProps) {
          const deprecatedPropsUsed = Object.keys(
            deprecatedProps
          ).filter(curr => Object.keys(props).includes(curr))

          deprecatedPropsUsed.forEach(curr => {
            // eslint-disable-next-line no-console
            console.warn(
              `DEPRECATED PROPS WARNING (${WrappedComponent.name})\n${deprecatedProps[curr]}`
            )
          })
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
