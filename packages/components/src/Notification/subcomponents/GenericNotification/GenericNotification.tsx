import React from "react"
import classnames from "classnames"
import { Heading, HeadingProps } from "@kaizen/typography"
import { NotificationType } from "~components/Notification/type"
import { CautionIcon } from "~icons/CautionIcon"
import { CloseIcon } from "~icons/CloseIcon"
import { ExclamationIcon } from "~icons/ExclamationIcon"
import { InformationIcon } from "~icons/Information"
import { SecurityTipIcon } from "~icons/SecurityTipIcon"
import { SuccessIcon } from "~icons/SuccessIcon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./GenericNotification.module.scss"

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

const renderIcon = (type: NotificationType): JSX.Element => {
  switch (type) {
    case "positive":
      return <SuccessIcon inheritSize />
    case "negative":
      return <ExclamationIcon inheritSize />
    case "cautionary":
      return <CautionIcon inheritSize />
    case "informative":
      return <InformationIcon inheritSize />
    case "security":
      return <SecurityTipIcon inheritSize />
    default:
      return <InformationIcon inheritSize />
  }
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
        <div className={styles.icon}>{renderIcon(this.props.type)}</div>
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
      this.props.classNameOverride,
      this.props.persistent && styles.persistent
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
    aria-label="close notification"
  >
    <CloseIcon role="presentation" />
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
