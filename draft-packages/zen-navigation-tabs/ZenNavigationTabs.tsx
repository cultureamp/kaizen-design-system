import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type ZenNavigationTabsProps = {
  id?: string
  automationId?: string

  //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  //   disabled?: boolean
}

export type ZenNavigationTabsLinkProps = {
  text: string
  href: string
  active?: boolean
}

const Link = (props: ZenNavigationTabsLinkProps) => (
  <a className={styles.linkAnchor} href={props.href}>
    <div
      className={classnames(styles.linkLabel, {
        [styles.active]: props.active,
      })}
    >
      {props.text}
    </div>
  </a>
)

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

// type ZenNavigationTabs = React.FunctionComponent<ZenNavigationTabsProps>

class ZenNavigationTabs extends React.Component<ZenNavigationTabsProps> {
  static Link = Link
  static Container = Container

  constructor(props) {
    super(props)
  }

  // render() {
  //   const { children } = this.props

  //   return
  // }
}

// const ZenNavigationTabs: ZenNavigationTabs = ({
//   id,
//   automationId,
//   children,
// }) =>

export default ZenNavigationTabs
