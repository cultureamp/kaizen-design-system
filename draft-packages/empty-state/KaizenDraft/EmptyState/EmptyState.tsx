import classnames from "classnames"
import * as React from "react"
import styles from "./styles.scss"

const actionIllustration = require("./illustrations/action.png")
const informativeIllustration = require("./illustrations/informative.png")
const negativeIllustration = require("./illustrations/negative.png")
const neutralIllustration = require("./illustrations/neutral.png")
const positiveIllustration = require("./illustrations/positive.png")

const illustrations: { [key: string]: any } = {
  positive: positiveIllustration as any,
  neutral: neutralIllustration as any,
  negative: negativeIllustration as any,
  informative: informativeIllustration as any,
  action: actionIllustration as any,
}

type IllustrationType =
  | "positive"
  | "neutral"
  | "negative"
  | "informative"
  | "action"

type LayoutContextType = "sidebarAndContent" | "contentOnly"

export type EmptyStateProps = {
  id?: string
  automationId?: string
  headingText: string
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  illustrationType?: IllustrationType
  layoutContext?: LayoutContextType
  useZenStyles?: boolean
  children?: React.ReactNode
}

type EmptyState = React.FunctionComponent<EmptyStateProps>

const EmptyState: EmptyState = ({
  id,
  automationId,
  illustrationType = "informative",
  layoutContext = "sidebarAndContent",
  headingText,
  bodyText,
  children,
  straightCorners,
  useZenStyles,
}) => (
  <div
    className={classnames([
      styles[illustrationType],
      styles.container,
      styles.zen,
      styles[layoutContext],
      { [styles.straightCorners]: straightCorners },
    ])}
    id={id}
    data-automation-id={automationId}
  >
    <div className={styles.illustrationSide}>
      <img
        src={illustrations[illustrationType]}
        className={styles.illustration}
      />
    </div>
    <div
      className={classnames([styles.textSide, { [styles.zen]: useZenStyles }])}
    >
      <div className={styles.textSideInner}>
        <div className={styles.heading}>{headingText}</div>
        <div className={styles.description}>{bodyText}</div>
        {children}
      </div>
    </div>
  </div>
)

export default EmptyState
