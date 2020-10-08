import * as React from "react"
import { logProp as log, Counter } from "./util"

type deprecatedPropVal = {
  warning: string
  key: string
}
export interface withDeprecatedPropsProps {
  name: string
  warning: {
    [key: string]: string | deprecatedPropVal[]
  }
}

export const withDeprecatedProps = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { warning, name }: withDeprecatedPropsProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)
      if (!Counter.includes(name)) {
        Counter.add(name)
      }
      const deprecatedPropsUsed = Object.keys(warning).filter(curr =>
        Object.keys(props).includes(curr)
      )

      deprecatedPropsUsed.forEach(curr => {
        if (typeof warning[curr] === "string") {
          log(name, warning[curr] as string)
        } else if (Array.isArray(warning[curr])) {
          const deprecatedPropMessage = (warning[
            curr
          ] as deprecatedPropVal[]).find(obj => obj.key === props[curr])

          if (deprecatedPropMessage !== undefined) {
            log(name, deprecatedPropMessage.warning)
          }
        }
      })
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
