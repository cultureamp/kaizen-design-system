import React from "react"
import classnames from "classnames"
import { Heading, HeadingProps } from "@kaizen/typography"
import { CautionIcon } from "~components/Icon/CautionIcon"
import { CloseIcon } from "~components/Icon/CloseIcon"
import { ExclamationIcon } from "~components/Icon/ExclamationIcon"
import { InformationIcon } from "~components/Icon/InformationIcon"
import { SecurityTipIcon } from "~components/Icon/SecurityTipIcon"
import { SuccessIcon } from "~components/Icon/SuccessIcon"
import { NotificationType } from "~components/Notification/types"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./GenericNotification.module.scss"

export type GenericNotificationProps = OverrideClassName<{
  type: NotificationType
  style: "global" | "inline" | "toast"
  children?: React.ReactNode
  title?: string
  persistent: boolean
  onHide?: () => void
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
      return <SuccessIcon role="presentation" inheritSize />
    case "negative":
      return <ExclamationIcon role="presentation" inheritSize />
    case "cautionary":
      return <CautionIcon role="presentation" inheritSize />
    case "informative":
      return <InformationIcon role="presentation" inheritSize />
    case "security":
      return <SecurityTipIcon role="presentation" inheritSize />
    default:
      return <InformationIcon role="presentation" inheritSize />
  }
}

class GenericNotification extends React.Component<
  GenericNotificationProps,
  State
> {
  static defaultProps = {
    persistent: false,
  }

  state = {
    hidden: true,
    removed: false,
  }

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
    aria-label="Close notification"
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
