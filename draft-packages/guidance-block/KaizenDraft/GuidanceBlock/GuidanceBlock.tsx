import * as React from "react"

import { Button, ButtonProps } from "@kaizen/draft-button"
import { Heading, Icon, Paragraph } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import classnames from "classnames"
import { Tooltip } from "@kaizen/draft-tooltip"

const styles = require("./GuidanceBlock.scss")

export type ActionProps = ButtonProps & {
  tooltip?: string
}

type GuidanceBlockActions = {
  primary: ActionProps
  secondary?: ActionProps
  dismiss?: {
    onClick: () => void
  }
}

export type GuidanceBlockProps = {
  img: {
    src: string
    alt: string
  }
  text: {
    title: string
    description: string | React.ReactNode
  }
  actions?: GuidanceBlockActions
  persistent?: boolean
  variant?: "default" | "prominent"
  withActionButtonArrow?: boolean
  noMaxWidth?: boolean
}

export type GuidanceBlockState = {
  hidden: boolean
  removed: boolean
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

class GuidanceBlock extends React.Component<
  GuidanceBlockProps,
  GuidanceBlockState
> {
  static defaultProps = {
    variant: "default",
    withActionButtonArrow: true,
    noMaxWidth: false,
  }

  state = {
    hidden: false,
    removed: false,
  }

  containerRef = React.createRef<HTMLDivElement>()

  constructor(props: GuidanceBlockProps) {
    super(props)

    this.dismissBanner = this.dismissBanner.bind(this)
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
  }

  dismissBanner(): void {
    this.setState({ hidden: true })
    this.props.actions?.dismiss?.onClick()
  }

  onTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (this.state.hidden && e.propertyName === "margin-top") {
      this.setState({ removed: true })
    }
  }

  renderActions = (
    actions: GuidanceBlockActions,
    withActionButtonArrow?: boolean
  ) => (
    <div
      className={classnames(styles.buttonContainer, {
        [styles.secondaryAction]: actions?.secondary,
      })}
    >
      <ConditionalWrapper
        condition={!!actions.primary.tooltip}
        wrapper={children => (
          <Tooltip text={actions.primary.tooltip} position="above">
            {children}
          </Tooltip>
        )}
      >
        <Button
          icon={withActionButtonArrow ? configureIcon : undefined}
          iconPosition="end"
          {...actions.primary}
        />
      </ConditionalWrapper>

      {actions?.secondary && (
        <div className={styles.secondaryAction}>
          <Button secondary {...actions.secondary} />
        </div>
      )}
    </div>
  )

  render(): JSX.Element | null {
    if (this.state.removed) {
      return null
    }

    const {
      actions,
      img,
      text,
      persistent,
      withActionButtonArrow,
      noMaxWidth,
    } = this.props

    return (
      <div
        className={this.bannerClassName(noMaxWidth)}
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
            <Heading tag="h3" variant="heading-3">
              {text.title}
            </Heading>
          </div>
          <Paragraph tag="p" variant="body">
            {text.description}
          </Paragraph>
        </div>
        {actions?.primary && this.renderActions(actions, withActionButtonArrow)}
        {!persistent && <CancelButton onClick={this.dismissBanner} />}
      </div>
    )
  }

  bannerClassName(noMaxWidth): string {
    return classnames(styles.banner, {
      [styles.hidden]: this.state.hidden,
      [styles.prominent]: this.props.variant === "prominent",
      [styles.noMaxWidth]: noMaxWidth,
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
