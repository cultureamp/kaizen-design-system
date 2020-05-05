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
  actions: {
    primary?: {
      label: string
      onClick: () => void
    }
    secondary?: {
      label: string
      onClick: () => void
    }
    dismiss?: {
      onClick: () => void
    }
  }
  persistent?: boolean
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
    this.props.actions.dismiss?.onClick()
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

    const {
      actions: { primary, secondary },
      img,
      text,
      persistent,
    } = this.props

    return (
      <div
        className={this.bannerClassName()}
        style={{ marginTop: this.marginTop() }}
        ref={this.containerRef}
        onTransitionEnd={this.onTransitionEnd}
      >
        <div className={styles.iconWrapper}>
          <img src={img.src} alt={img.alt} height="155px" width="155px" />
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.headingWrapper}>
            <Text inline={true} tag="h3" style="display">
              {text.title}
            </Text>
          </div>
          <Text tag="p" style="body">
            {text.description}
          </Text>
        </div>
        <div
          className={classnames(styles.buttonContainer, {
            [styles.secondaryAction]: secondary,
          })}
        >
          {primary && (
            <Button
              label={primary.label}
              onClick={primary.onClick}
              icon={configureIcon}
              iconPosition="end"
            />
          )}
          {secondary && (
            <div className={styles.secondaryAction}>
              <Button
                label={secondary.label}
                onClick={secondary.onClick}
                secondary
              />
            </div>
          )}
        </div>
        {!persistent && <CancelButton onClick={this.dismissBanner} />}
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
