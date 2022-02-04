import * as React from "react"

import { Button, ButtonProps } from "@kaizen/draft-button"
import { Box, Heading, Icon, Paragraph } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import classnames from "classnames"
import { Tooltip, TooltipProps } from "@kaizen/draft-tooltip"
import Media from "react-media"
import { SceneProps, SpotProps } from "@kaizen/draft-illustration"
import styles from "./GuidanceBlock.scss"

export type ActionProps = ButtonProps & {
  tooltip?: TooltipProps
}

type LayoutType = "default" | "inline" | "stacked"

type IllustrationType = "spot" | "scene"

type TextAlignment = "center" | "left"

type GuidanceBlockActions = {
  primary: ActionProps
  secondary?: ActionProps
  dismiss?: {
    onClick: () => void
  }
}

type VariantType =
  | "default"
  | "positive"
  | "negative"
  | "informative"
  | "cautionary"
  | "assertive"
  | "prominent"

export type GuidanceBlockProps = {
  layout?: LayoutType
  illustration: React.ReactElement<SpotProps | SceneProps>
  illustrationType?: IllustrationType
  text: {
    title: string
    description: string | React.ReactNode
  }
  smallScreenTextAlignment?: TextAlignment
  actions?: GuidanceBlockActions
  secondaryDismiss?: boolean
  persistent?: boolean
  variant?: VariantType
  withActionButtonArrow?: boolean
  noMaxWidth?: boolean
  /*
   ** Set aspect ratio to landscape to ensure consist spacing in scene illustrations
   */
  lockAspectRatio?: boolean
}

export type GuidanceBlockState = {
  hidden: boolean
  removed: boolean
  mediaQueryLayout: string
}

type WithTooltipProps = {
  children: React.ReactNode
  tooltipProps?: TooltipProps
}

const WithTooltip: React.FunctionComponent<WithTooltipProps> = ({
  tooltipProps,
  children,
}) =>
  !!tooltipProps ? (
    <Tooltip {...tooltipProps}>{children}</Tooltip>
  ) : (
    <>{children}</>
  )

class GuidanceBlock extends React.Component<
  GuidanceBlockProps,
  GuidanceBlockState
> {
  static defaultProps = {
    layout: "default",
    variant: "default",
    withActionButtonArrow: true,
    noMaxWidth: false,
    illustrationType: "spot",
    smallScreenTextAlignment: "center",
  }

  state = {
    hidden: false,
    removed: false,
    mediaQueryLayout: "",
  }

  containerRef = React.createRef<HTMLDivElement>()

  constructor(props: GuidanceBlockProps) {
    super(props)

    this.dismissBanner = this.dismissBanner.bind(this)
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
  }

  componentDidMount() {
    if (this.props.layout === "inline" || this.props.layout === "stacked") {
      this.containerQuery()
    }
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

  containerQuery(): void {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 1) {
        this.setMediaQueryLayout(entries[0].contentRect.width)
      }
    })

    resizeObserver.observe(this.containerRef.current as HTMLElement)
  }

  setMediaQueryLayout(width: number) {
    if (width <= 320) {
      this.setState({
        mediaQueryLayout: "centerContent",
      })
    } else {
      this.setState({ mediaQueryLayout: "" })
    }
  }

  renderActions = (
    actions: GuidanceBlockActions,
    withActionButtonArrow?: boolean
  ) => {
    // Checks if container query is mobile configuration
    const componentIsMobile =
      this.state.mediaQueryLayout.includes("centerContent")

    return (
      <Media query="(max-width: 767px)">
        {isMobile => (
          <Box
            mr={
              isMobile || componentIsMobile
                ? 0
                : this.props.layout === "default"
                ? 0.5
                : 0
            }
          >
            <div
              className={classnames(styles.buttonContainer, {
                [styles.secondaryAction]: actions?.secondary,
              })}
            >
              <WithTooltip tooltipProps={actions.primary.tooltip}>
                <Button
                  icon={withActionButtonArrow ? configureIcon : undefined}
                  iconPosition="end"
                  {...actions.primary}
                  fullWidth={isMobile || componentIsMobile}
                />
              </WithTooltip>

              {actions?.secondary && (
                <WithTooltip tooltipProps={actions.secondary.tooltip}>
                  <div className={styles.secondaryAction}>
                    <Button
                      secondary
                      {...actions.secondary}
                      onClick={
                        this.props?.secondaryDismiss
                          ? () => this.dismissBanner()
                          : this.props.actions?.secondary?.onClick
                      }
                      fullWidth={isMobile || componentIsMobile}
                    />
                  </div>
                </WithTooltip>
              )}
            </div>
          </Box>
        )}
      </Media>
    )
  }

  render(): JSX.Element | null {
    if (this.state.removed) {
      return null
    }

    const {
      actions,
      illustration,
      text,
      persistent,
      withActionButtonArrow,
      noMaxWidth,
      lockAspectRatio,
    } = this.props

    const illustrationElement = lockAspectRatio
      ? React.cloneElement(illustration, { enableAspectRatio: true })
      : illustration

    return (
      <div
        className={this.bannerClassName(noMaxWidth)}
        style={{
          marginTop: this.marginTop(),
        }}
        ref={this.containerRef}
        onTransitionEnd={this.onTransitionEnd}
      >
        <div className={styles.illustrationWrapper}>
          <div className={styles.illustration}>{illustrationElement}</div>
        </div>
        <div className={styles.descriptionAndActions}>
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
          {actions?.primary &&
            this.renderActions(actions, withActionButtonArrow)}
        </div>
        {!persistent && <CancelButton onClick={this.dismissBanner} />}
      </div>
    )
  }

  bannerClassName(noMaxWidth): string {
    const {
      variant = "default",
      layout = "default",
      illustrationType,
      smallScreenTextAlignment,
      lockAspectRatio,
    }: GuidanceBlockProps = this.props
    return classnames(styles.banner, styles[variant], styles[layout], {
      [styles.hidden]: this.state.hidden,
      [styles.centerContent]: this.state.mediaQueryLayout === "centerContent",
      [styles.noMaxWidth]: noMaxWidth,
      [styles.hasSceneIllustration]: illustrationType === "scene",
      [styles.smallScreenTextAlignment]: smallScreenTextAlignment === "left",
      [styles.lockAspectRatio]: lockAspectRatio,
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
