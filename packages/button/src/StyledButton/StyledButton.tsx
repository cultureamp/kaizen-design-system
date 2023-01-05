import React from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import { LoadingSpinner } from "@kaizen/loading-spinner"
import styles from "./StyledButton.module.scss"

const WorkingContents = ({
  contents,
}: {
  contents: React.ReactNode
}): JSX.Element => (
  <>
    <span className={styles.hidden} aria-hidden="true">
      {contents}
    </span>
    <LoadingSpinner
      accessibilityLabel=""
      size="sm"
      classNameOverride={styles.loadingSpinner}
    />
  </>
)

interface ButtonIconProps {
  icon?: React.SVGAttributes<SVGSymbolElement>
  iconPosition?: "start" | "end"
}

interface ButtonContentsProps extends ButtonIconProps {
  contents: React.ReactNode
}

const ButtonContents: React.VFC<ButtonContentsProps> = ({
  contents,
  icon,
  iconPosition = "start",
}) => {
  if (!icon) return <>{contents}</>

  return (
    <span
      className={classnames(
        styles.buttonContents,
        iconPosition === "end" && styles.iconPositionEnd
      )}
    >
      <span className={styles.iconContainer}>
        <Icon icon={icon} role="presentation" />
      </span>
      <span>{contents}</span>
    </span>
  )
}

interface BaseStyledButtonProps
  extends ButtonIconProps,
    OverrideClassName<unknown> {
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
}: BaseStyledButtonProps): string =>
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
  icon,
  iconPosition = "start",
  ...restProps
}) => {
  const className = getStyledButtonClassNames({
    isWorking,
    ...restProps,
  })

  const buttonContents = (
    <ButtonContents
      contents={children.props[contentsPropName]}
      icon={icon}
      iconPosition={iconPosition}
    />
  )

  return React.Children.only(
    React.cloneElement(children, {
      ...children.props,
      [contentsPropName]: isWorking ? (
        <WorkingContents contents={buttonContents} />
      ) : (
        buttonContents
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
  icon,
  iconPosition = "start",
  ...restProps
}) => {
  const className = getStyledButtonClassNames({
    isWorking,
    ...restProps,
  })

  const buttonContents = (
    <ButtonContents
      contents={element.props[contentsPropName]}
      icon={icon}
      iconPosition={iconPosition}
    />
  )

  return React.cloneElement(element, {
    ...element.props,
    [contentsPropName]: isWorking ? (
      <WorkingContents contents={element.props[contentsPropName]} />
    ) : (
      buttonContents
    ),
    className: classnames(
      className,
      element.props.className,
      element.props.classNameOverride
    ),
  })
}
