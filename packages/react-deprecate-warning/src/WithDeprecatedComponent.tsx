import * as React from "react"
import { logComponent as log, getDisplayName } from "./util"

export interface withDeprecatedComponentProps {
  warning: string
}

export const withDeprecatedComponent = <P extends unknown>(
  WrappedComponent: React.ComponentType<P>,
  { warning }: withDeprecatedComponentProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)

      const name = getDisplayName(WrappedComponent)
      log(name, warning)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
