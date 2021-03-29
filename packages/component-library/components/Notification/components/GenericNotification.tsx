import classnames from "classnames"
import * as React from "react"
import { Icon } from "../../Icon"

import closeIcon from "../../../icons/close.icon.svg"
import exclamationIcon from "../../../icons/exclamation.icon.svg"
import informationIcon from "../../../icons/information.icon.svg"
import successIcon from "../../../icons/success.icon.svg"

import styles from "./GenericNotification.module.scss"

export type NotificationType =
  | "affirmative"
  | "informative"
  | "cautionary"
  | "negative"

type Props = {
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
}

type State = {
  hidden: boolean
  removed: boolean
}

class GenericNotification extends React.Component<Props, State> {
  static defaultProps = {
    persistent: false,

    autohide: false,
    autohideDelay: "short",
  }

  state = {
    hidden: true,
    removed: false,
  }
  containerRef = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.hide = this.hide.bind(this)
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
  }

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ hidden: false }))

    if (["toast", "inline"].includes(this.props.style) && this.props.autohide) {
      setTimeout(this.hide, this.autohideDelayMs())
    }
  }

  autohideDelayMs() {
    if (this.props.autohideDelay == "long") {
      return 30_000
    } else {
      return 5_000
    }
  }

  render() {
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
        data-automation-class={classnames(
          "generic-notification",
          this.props.type,
          this.props.style
        )}
      >
        <div className={styles.icon}>
          <Icon icon={this.iconType()} role="presentation" inheritSize />
        </div>
        <div className={styles.textContainer}>
          {this.props.title && (
            <h6 className={styles.title}>{this.props.title}</h6>
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
      {
        [styles.hidden]: this.state.hidden,
        [styles.noBottomMargin]: this.props.noBottomMargin,
      }
    )
  }

  marginTop(): string {
    if (this.state.hidden && this.containerRef.current) {
      return -this.containerRef.current.clientHeight + "px"
    }

    return "0"
  }

  onTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (this.state.hidden && e.propertyName === "margin-top") {
      this.setState({ removed: true })
      if (this.props.onHide) {
        this.props.onHide()
      }
    }
  }

  iconType() {
    switch (this.props.type) {
      case "affirmative":
        return successIcon
      case "negative":
        return exclamationIcon
      case "cautionary":
        return exclamationIcon
      case "informative":
        return informationIcon
      default:
        return informationIcon
    }
  }

  hide() {
    this.setState({ hidden: true })
  }
}

type CancelButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CancelButton = ({ onClick }: CancelButtonProps) => (
  <button className={styles.cancel} type="button" onClick={onClick}>
    <span className={styles.cancelInner}>
      <Icon icon={closeIcon} role="img" title="close notification" />
    </span>
  </button>
)

export default GenericNotification
