import * as React from "react"
import { logProp as log, getDisplayName } from "./util"

type deprecatedPropVal = {
  warning: string
  key: string
}
export interface withDeprecatedPropProps {
  warning: {
    [key: string]: string | deprecatedPropVal[]
  }
}

export const withDeprecatedProp = <P extends unknown>(
  WrappedComponent: React.ComponentType<P>,
  { warning }: withDeprecatedPropProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props: P) {
      super(props)
      const name = getDisplayName(WrappedComponent)
      Object.keys(warning).forEach(deprecatedPropName => {
        if (!(props as Record<string, unknown>)[deprecatedPropName]) {
          // prop not being used
          return
        }
        const propWarning = warning[deprecatedPropName]
        if (typeof propWarning === "string") {
          // the entire prop is deprecated

          log(name, propWarning)
        } else {
          // only _some values_ of the prop are deprecated, match against incoming props
          propWarning.forEach(
            ({ key: deprecatedKey, warning: deprecatedWarning }) => {
              if (
                deprecatedKey ===
                (props as Record<string, unknown>)[deprecatedPropName]
              ) {
                log(name, deprecatedWarning)
              }
            }
          )
        }
      })
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
