import { Button, ButtonProps } from "@kaizen/draft-button"
import { Heading, Icon, Paragraph } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import classnames from "classnames"
import * as React from "react"
import styles from "../styles/GuidanceBlock.scss"

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
    primary: ButtonProps
    secondary?: ButtonProps
    dismiss?: {
      onClick: () => void
    }
  }
  persistent?: boolean
  variant?: "default" | "prominent"
  withActionButtonArrow?: boolean
}

type State = {
  hidden: boolean
  removed: boolean
}
class GuidanceBlock extends React.Component<Props, State> {
  static defaultProps = {
    variant: "default",
    withActionButtonArrow: true,
  }

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
      withActionButtonArrow,
    } = this.props

    return (
      <div
        className={this.bannerClassName()}
        style={{
          marginTop: this.marginTop(),
        }}
        ref={this.containerRef}
        onTransitionEnd={this.onTransitionEnd}
      >
        <div className={styles.iconWrapper}>
          <img src={img.src} alt={img.alt} height="155px" width="155px" />
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.headingWrapper}>
            <Heading tag="h3" variant="heading-4">
              {text.title}
            </Heading>
          </div>
          <Paragraph tag="p" variant="body">
            {text.description}
          </Paragraph>
        </div>
        <div
          className={classnames(styles.buttonContainer, {
            [styles.secondaryAction]: secondary,
          })}
        >
          <Button
            icon={withActionButtonArrow ? configureIcon : undefined}
            iconPosition="end"
            {...primary}
          />

          {secondary && (
            <div className={styles.secondaryAction}>
              <Button secondary {...secondary} />
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
      [styles.prominent]: this.props.variant === "prominent",
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
