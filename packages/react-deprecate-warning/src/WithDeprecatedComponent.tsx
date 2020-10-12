import * as React from "react"
import { logComponent as log, Counter } from "./util"

export interface withDeprecatedComponentProps {
  name: string
  warning: string
}

export const withDeprecatedComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { warning, name }: withDeprecatedComponentProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)

      if (!Counter.includes(name)) {
        Counter.add(name)
        log(name, warning)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
