import React from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { LoadingSpinner } from "@kaizen/loading-spinner"
import styles from "./StyledButton.module.scss"

const WorkingContents = ({ contents }: { contents: React.ReactNode }) => (
  <>
    <div className={styles.hidden} aria-hidden="true">
      {contents}
    </div>
    <LoadingSpinner
      accessibilityLabel=""
      size="sm"
      classNameOverride={styles.loadingSpinner}
    />
  </>
)
interface BaseStyledButtonProps extends OverrideClassName<unknown> {
  variant: "default" | "primary" | "secondary" | "secondaryDestructive"
  isReversed?: boolean
  isWorking?: boolean
  contentsPropName?: string
  isDisabled?: boolean
}

export const getStyledButtonClassNames = ({
  variant,
  isReversed,
  isWorking,
  isDisabled,
  classNameOverride,
}: BaseStyledButtonProps) =>
  classnames(
    styles.styledButton,
    styles[variant],
    isReversed && styles.isReversed,
    isWorking && styles.isWorking,
    isDisabled && styles.isDisabled,
    classNameOverride
  )

// V1: Using children
export interface StyledButtonProps extends BaseStyledButtonProps {
  children: React.ReactElement
}

export const StyledButton: React.VFC<StyledButtonProps> = ({
  children,
  isWorking,
  contentsPropName = "children",
  ...restProps
}) => {
  const className = getStyledButtonClassNames({
    isWorking,
    ...restProps,
  })

  return React.Children.only(
    React.cloneElement(children, {
      ...children.props,
      [contentsPropName]: isWorking ? (
        <WorkingContents contents={children.props[contentsPropName]} />
      ) : (
        children.props[contentsPropName]
      ),
      className: classnames(
        className,
        children.props.className,
        children.props.classNameOverride
      ),
    })
  )
}

// V2: Using prop
export interface StyledButtonProps2 extends BaseStyledButtonProps {
  element: React.ReactElement
}

export const StyledButton2: React.VFC<StyledButtonProps2> = ({
  element,
  isWorking,
  contentsPropName = "children",
  ...restProps
}) => {
  const className = getStyledButtonClassNames({
    isWorking,
    ...restProps,
  })

  return React.cloneElement(element, {
    ...element.props,
    [contentsPropName]: isWorking ? (
      <WorkingContents contents={element.props[contentsPropName]} />
    ) : (
      element.props[contentsPropName]
    ),
    className: classnames(
      className,
      element.props.className,
      element.props.classNameOverride
    ),
  })
}
