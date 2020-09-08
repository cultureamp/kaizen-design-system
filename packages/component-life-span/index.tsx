import * as React from "react"

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

export interface withDeprecatedComponentProps {
  message: string
}

export const withDeprecatedComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { message }: withDeprecatedComponentProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if (process.env?.NODE_ENV !== "production") {
        if (!Counter.includes(WrappedComponent.name)) {
          // eslint-disable-next-line no-console
          console.warn(`KAIZEN WARNING: ${message}`)
          Counter.add(WrappedComponent.name)
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
