import * as React from "react"
import { logProp as log, Counter } from "./util"

type deprecatedPropVal = {
  warning: string
  key: string
}
export interface withDeprecatedPropsProps {
  name: string
  deprecatedProps: {
    [key: string]: string | deprecatedPropVal[]
  }
}

export const withDeprecatedProps = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { deprecatedProps, name }: withDeprecatedPropsProps
): React.ComponentType<P> =>
  class extends React.Component<P> {
    constructor(props) {
      super(props)
      if (!Counter.includes(name)) {
        Counter.add(name)
      }
      const deprecatedPropsUsed = Object.keys(deprecatedProps).filter(curr =>
        Object.keys(props).includes(curr)
      )

      deprecatedPropsUsed.forEach(curr => {
        if (typeof deprecatedProps[curr] === "string") {
          log(name, deprecatedProps[curr] as string)
        } else if (Array.isArray(deprecatedProps[curr])) {
          const deprecatedPropMessage = (deprecatedProps[
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
