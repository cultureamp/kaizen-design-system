import * as React from "react"
import { logComponent as log, Counter } from "./util"

export interface withDeprecatedWarningProps {
  name: string
  deprecatedComponent: string
}

export const withDeprecatedComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { deprecatedComponent, name }: withDeprecatedWarningProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)

      if (!Counter.includes(name)) {
        Counter.add(name)
        log(name, deprecatedComponent)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
