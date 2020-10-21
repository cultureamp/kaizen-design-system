import classnames from "classnames"
import * as React from "react"
import DoOrDontItem from "./DoOrDontItem"

import styles from "./DoAndDontContainer.scss"

const maxItems = 3

export default ({ children }) => (
  <div className={classnames(styles.tagAndCard)}>
    <div className={classnames(styles.dontText)}>Don't:</div>
    <div className={classnames(styles.card, styles.dontCard)}>
      <ul className={classnames(styles.doOrDontList)}>
        {React.Children.map(children, ul => {
          if (React.Children.count(ul.props.children) > maxItems) {
            return React.Children.map(ul.props.children, li => (
              <li className={classnames(styles.doOrDontListItem)}>
                <DoOrDontItem variant="dont" />
                {li.props.children}
              </li>
            )).concat(
              <li
                className={classnames(
                  styles.doOrDontListItem,
                  styles.tooManyItemsWarning
                )}
              >
                We only want to show {maxItems} items. Please remove some.
              </li>
            )
          } else {
            return React.Children.map(ul.props.children, li => (
              <li className={classnames(styles.doOrDontListItem)}>
                <DoOrDontItem variant="dont" />
                {li.props.children}
              </li>
            ))
          }
        })}
      </ul>
    </div>
  </div>
)
