import * as React from "react"
import classNames from "classnames"
import styles from "../index.module.scss"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
import "focus-visible"

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
import "normalize.css"

export default ({ children }: { children: React.ReactNode }) => (
  <div className={classNames(styles.wrapper)}>{children}</div>
)
