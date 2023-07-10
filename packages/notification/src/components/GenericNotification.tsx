import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"

import cautionIcon from "@kaizen/component-library/icons/caution.icon.svg"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import errorIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import securityTipIcon from "@kaizen/component-library/icons/security-tip.icon.svg"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Heading, HeadingProps } from "@kaizen/typography"

import styles from "./GenericNotification.module.scss"

export type NotificationType =
  | "positive"
  | "informative"
  | "cautionary"
  | "negative"
  | "security"

export type GenericNotificationProps = OverrideClassName<{
  type: NotificationType
  style: "global" | "inline" | "toast"
  children?: React.ReactNode
  title?: string
  persistent: boolean
  autohide: boolean
  autohideDelay?: "short" | "long"
  onHide?: () => void
  automationId?: string
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
}>

type State = {
  hidden: boolean
  removed: boolean
}

class GenericNotification extends React.Component<
  GenericNotificationProps,
  State
> {
  static defaultProps = {
    persistent: false,
    autohide: false,
    autohideDelay: "short",
  }

  state = {
    hidden: true,
    removed: false,
  }

  autoHideTimeoutId: null | ReturnType<typeof setTimeout> = null

  containerRef = React.createRef<HTMLDivElement>()

  constructor(props: GenericNotificationProps) {
    super(props)

    this.hide = this.hide.bind(this)
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
  }

  componentDidMount(): void {
    requestAnimationFrame(() => {
      if (this.containerRef.current) {
        this.setState({ hidden: false })
      }
    })

    if (["toast", "inline"].includes(this.props.style) && this.props.autohide) {
      this.autoHideTimeoutId = setTimeout(this.hide, this.autohideDelayMs())
    }
  }

  componentWillUnmount(): void {
    if (this.autoHideTimeoutId) {
      clearTimeout(this.autoHideTimeoutId)
      this.autoHideTimeoutId = null
    }
  }

  autohideDelayMs(): number {
    if (this.props.autohideDelay == "long") {
      return 30_000
    } else {
      return 5_000
    }
  }

  render(): JSX.Element | null {
    if (this.state.removed) {
      return null
    }

    return (
      <div
        className={this.className()}
        style={{ marginTop: this.marginTop() }}
        ref={this.containerRef}
        onTransitionEnd={this.onTransitionEnd}
        data-automation-id={this.props.automationId}
        data-testid={this.props.automationId}
        data-automation-class={classnames(
          "generic-notification",
          this.props.type,
          this.props.style
        )}
      >
        <div className={styles.icon}>
          <Icon icon={this.iconType()} role="presentation" inheritSize />
        </div>
        <div className={this.textContainerClassName()}>
          {this.props.style !== "global" && (
            <NotificationHeading
              titleProp={this.props.title}
              headingProps={this.props.headingProps}
            />
          )}
          {this.props.children && (
            <div className={styles.text}>{this.props.children}</div>
          )}
        </div>
        {!this.props.persistent && <CancelButton onClick={this.hide} />}
      </div>
    )
  }

  className(): string {
    return classnames(
      styles.notification,
      styles[this.props.type],
      styles[this.props.style],
      this.state.hidden && styles.hidden,
      this.props.noBottomMargin && styles.noBottomMargin,
      this.props.classNameOverride
    )
  }

  textContainerClassName(): string {
    return classnames(
      styles.textContainer,
      this.props.forceMultiline && styles.forceMultiline
    )
  }

  marginTop(): string {
    if (this.state.hidden && this.containerRef.current) {
      return -this.containerRef.current.clientHeight + "px"
    }

    return "0"
  }

  onTransitionEnd(e: React.TransitionEvent<HTMLDivElement>): void {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (this.state.hidden && e.propertyName === "margin-top") {
      this.setState({ removed: true })
      if (this.props.onHide) {
        this.props.onHide()
      }
    }
  }

  iconType(): HTMLAttributes<SVGElement> {
    switch (this.props.type) {
      case "positive":
        return successIcon
      case "negative":
        return errorIcon
      case "cautionary":
        return cautionIcon
      case "informative":
        return informationIcon
      case "security":
        return securityTipIcon
      default:
        return informationIcon
    }
  }

  hide(): void {
    this.setState({ hidden: true })
  }
}

type CancelButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CancelButton = ({ onClick }: CancelButtonProps): JSX.Element => (
  <button
    className={styles.cancel}
    type="button"
    onClick={onClick}
    data-testid="close-button"
  >
    <Icon icon={closeIcon} role="img" title="close notification" />
  </button>
)

type NotificationHeadingProps = {
  titleProp?: HeadingProps["children"]
  headingProps?: HeadingProps
}

const NotificationHeading = ({
  titleProp,
  headingProps,
}: NotificationHeadingProps): JSX.Element | null => {
  if (headingProps) {
    return (
      <Heading
        variant={headingProps.variant || "heading-6"}
        tag={headingProps.tag || "div"}
        color={headingProps.color || "dark"}
        classNameOverride={styles.notificationTitle}
      >
        {headingProps.children}
      </Heading>
    )
  } else if (titleProp) {
    return (
      <Heading
        variant="heading-6"
        tag="div"
        color="dark"
        classNameOverride={styles.notificationTitle}
      >
        {titleProp}
      </Heading>
    )
  } else return null
}

export default GenericNotification
