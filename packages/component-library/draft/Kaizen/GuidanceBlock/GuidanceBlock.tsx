import { Button, Icon, Text } from "@kaizen/component-library"
const configureIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default

import classnames from "classnames"
import * as React from "react"

const styles = require("./GuidanceBlock.scss")

const closeIcon = require("@kaizen/component-library/icons/close.icon.svg")
  .default

type Props = {
  img: {
    src: string
    alt: string
  }
  text: {
    title: string
    description: string | React.ReactNode
  }
  button: {
    label: string
    onClick: () => void
  }
  onDismiss: () => void
}

type State = {
  hidden: boolean
  removed: boolean
}
class GuidanceBlock extends React.Component<Props, State> {
  state = {
    hidden: false,
    removed: false,
  }

  containerRef = React.createRef<HTMLDivElement>()

  constructor(props: Props) {
    super(props)

    this.dismissBanner = this.dismissBanner.bind(this)
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
  }

  dismissBanner(): void {
    this.setState({ hidden: true })
    this.props.onDismiss()
  }

  onTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (this.state.hidden && e.propertyName === "margin-top") {
      this.setState({ removed: true })
    }
  }

  render(): JSX.Element | null {
    if (this.state.removed) {
      return null
    }

    return (
      <div
        className={this.bannerClassName()}
        style={{ marginTop: this.marginTop() }}
        ref={this.containerRef}
        onTransitionEnd={this.onTransitionEnd}
      >
        <div className={styles.imageContainer}>
          <img
            src={this.props.img.src}
            alt={this.props.img.alt}
            height="96px"
            width="96px"
          />
        </div>
        <div>
          <Text style="heading" tag="h3">
            {this.props.text.title}
          </Text>
          <Text style="notification" tag="p">
            {this.props.text.description}
          </Text>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            label={this.props.button.label}
            onClick={this.props.button.onClick}
            icon={configureIcon}
            iconPosition="end"
          />
        </div>
        <CancelButton onClick={this.dismissBanner} />
      </div>
    )
  }

  bannerClassName(): string {
    return classnames(styles.banner, {
      [styles.hidden]: this.state.hidden,
    })
  }

  marginTop(): string {
    if (this.state.hidden && this.containerRef.current) {
      return -this.containerRef.current.clientHeight + "px"
    }

    return "0"
  }
}

type CancelButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CancelButton = ({ onClick }: CancelButtonProps) => (
  <button className={styles.cancel} type="button" onClick={onClick}>
    <span>
      <Icon icon={closeIcon} role="img" title="close notification" />
    </span>
  </button>
)

export default GuidanceBlock
