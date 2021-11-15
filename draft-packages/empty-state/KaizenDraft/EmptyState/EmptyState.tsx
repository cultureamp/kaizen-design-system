import classnames from "classnames"
import * as React from "react"
import {
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
  AnimatedProps,
} from "@kaizen/draft-illustration"
import styles from "./styles.scss"

const illustrations = {
  positive: EmptyStatesPositive,
  neutral: EmptyStatesNeutral,
  negative: EmptyStatesNegative,
  informative: EmptyStatesInformative,
  action: EmptyStatesAction,
} as const

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
  headingText: string | React.ReactNode
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  illustrationType?: IllustrationType
  layoutContext?: LayoutContextType
  children?: React.ReactNode
} & Pick<AnimatedProps, "isAnimated" | "loop">

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
  isAnimated = true,
  loop = false,
}) => {
  const animationProps = isAnimated ? { isAnimated, loop } : {}
  return (
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
        {React.createElement(illustrations[illustrationType], {
          alt: illustrationType,
          classNameAndIHaveSpokenToDST: styles.illustration,
          ...animationProps,
        })}
      </div>
      <div className={styles.textSide}>
        <div className={styles.textSideInner}>
          <div className={styles.heading}>{headingText}</div>
          <div className={styles.description}>{bodyText}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default EmptyState
