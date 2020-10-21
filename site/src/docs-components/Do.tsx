import classnames from "classnames"
import * as React from "react"
import DoOrDontItem from "./DoOrDontItem"

import styles from "./DoAndDontContainer.scss"

const maxItems = 3

export default ({ children }) => (
  <div className={classnames(styles.tagAndCard)}>
    <div className={classnames(styles.doText)}>Do:</div>
    <div className={classnames(styles.card, styles.doCard)}>
      <ul className={classnames(styles.doOrDontList)}>
        {React.Children.map(children, ul => {
          if (React.Children.count(ul.props.children) > maxItems) {
            return React.Children.map(ul.props.children, li => (
              <li className={classnames(styles.doOrDontListItem)}>
                <DoOrDontItem variant="do" />
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
                <DoOrDontItem variant="do" />
                {li.props.children}
              </li>
            ))
          }
        })}
      </ul>
    </div>
  </div>
)
