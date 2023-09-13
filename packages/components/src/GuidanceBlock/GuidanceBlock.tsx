import React from "react"
import classnames from "classnames"
import Media from "react-media"
import { Button, ButtonProps } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import { SceneProps, SpotProps } from "@kaizen/draft-illustration"
import { Tooltip, TooltipProps } from "@kaizen/draft-tooltip"
import { Heading, HeadingProps, Paragraph } from "@kaizen/typography"
import styles from "./GuidanceBlock.module.scss"

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

interface BaseGuidanceBlockProps {
  layout?: LayoutType
  illustration: React.ReactElement<SpotProps | SceneProps>
  /*
   * Sets how the width and aspect ratio will respond to the Illustration passed in.
   */
  illustrationType?: IllustrationType

  smallScreenTextAlignment?: TextAlignment
  actions?: GuidanceBlockActions
  /*
   * This will still require the secondary object to be passed into the actions ie: {secondary: { label: "Dismiss action" }}`
   */
  secondaryDismiss?: boolean
  /*
   * `persistent` should always return true and will soon be deprecated.
   * The X close icon has been superseded with the pattern "dismiss" or "cancel" using the secondary action.
   */
  persistent?: boolean
  variant?: VariantType
  withActionButtonArrow?: boolean
  noMaxWidth?: boolean
}

interface GuidanceBlockWithText extends BaseGuidanceBlockProps {
  text: {
    title: string
    titleTag?: HeadingProps["tag"]
    description: string | React.ReactNode
  }
}

interface GuidanceBlockPropsWithContent extends BaseGuidanceBlockProps {
  content: React.ReactElement
}

export type GuidanceBlockProps =
  | GuidanceBlockWithText
  | GuidanceBlockPropsWithContent

export type GuidanceBlockState = {
  hidden: boolean
  removed: boolean
  mediaQueryLayout: string
}

type WithTooltipProps = {
  children: React.ReactNode
  tooltipProps?: TooltipProps
}

type CancelButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CancelButton = ({ onClick }: CancelButtonProps): JSX.Element => (
  <button className={styles.cancel} type="button" onClick={onClick}>
    <span>
      <Icon icon={closeIcon} role="img" title="close notification" />
    </span>
  </button>
)

const WithTooltip = ({
  tooltipProps,
  children,
}: WithTooltipProps): JSX.Element =>
  !!tooltipProps ? (
    <Tooltip {...tooltipProps}>{children}</Tooltip>
  ) : (
    <>{children}</>
  )

/**
 * {@link https://cultureamp.design/components/guidance-block/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-guidance-block--default-story Storybook}
 */
export class GuidanceBlock extends React.Component<
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

  componentDidMount(): void {
    if (this.props.layout === "inline" || this.props.layout === "stacked") {
      this.containerQuery()
    }
  }

  dismissBanner(): void {
    this.setState({ hidden: true })
    this.props.actions?.dismiss?.onClick()
  }

  onTransitionEnd(e: React.TransitionEvent<HTMLDivElement>): void {
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

  setMediaQueryLayout(width: number): void {
    if (width <= 320) {
      this.setState({
        mediaQueryLayout: "centerContent",
      })
    } else {
      this.setState({ mediaQueryLayout: "" })
    }
  }

  bannerClassName(props: GuidanceBlockProps): string {
    return classnames(
      styles.banner,
      props.variant && styles[props.variant],
      props.layout && styles[props.layout],
      this.state.hidden && styles.hidden,
      this.state.mediaQueryLayout === "centerContent" && styles.centerContent,
      props.noMaxWidth && styles.noMaxWidth,
      props.illustrationType === "scene" && styles.hasSceneIllustration,
      props.smallScreenTextAlignment === "left" &&
        styles.smallScreenTextAlignment
    )
  }

  marginTop(): string {
    if (this.state.hidden && this.containerRef.current) {
      return -this.containerRef.current.clientHeight + "px"
    }

    return "0"
  }

  render(): JSX.Element | null {
    if (this.state.removed) {
      return null
    }

    const {
      actions,
      illustration,
      persistent,
      withActionButtonArrow,
      illustrationType,
    } = this.props

    return (
      <div
        className={this.bannerClassName(this.props)}
        style={{
          marginTop: this.marginTop(),
        }}
        ref={this.containerRef}
        onTransitionEnd={this.onTransitionEnd}
      >
        <div className={styles.illustrationWrapper}>
          <div className={styles.illustration}>
            {this.renderIllustrationType(illustration, illustrationType)}
          </div>
        </div>
        <div className={styles.descriptionAndActions}>
          <div className={styles.descriptionContainer}>
            {"content" in this.props && this.props.content}
            {"text" in this.props && (
              <>
                <div className={styles.headingWrapper}>
                  <Heading
                    tag={this.props.text.titleTag ?? "h3"}
                    variant="heading-3"
                  >
                    {this.props.text.title}
                  </Heading>
                </div>
                <Paragraph tag="p" variant="body">
                  {this.props.text.description}
                </Paragraph>
              </>
            )}
          </div>
          {actions?.primary &&
            this.renderActions(actions, withActionButtonArrow)}
        </div>
        {!persistent && <CancelButton onClick={this.dismissBanner} />}
      </div>
    )
  }

  renderActions = (
    actions: GuidanceBlockActions,
    withActionButtonArrow?: boolean
  ): JSX.Element => {
    // Checks if container query is mobile configuration
    const componentIsMobile =
      this.state.mediaQueryLayout.includes("centerContent")

    return (
      <Media query="(max-width: 767px)">
        {(isMobile): JSX.Element => (
          <div
            className={
              isMobile || componentIsMobile
                ? "mr-0"
                : this.props.layout === "default"
                ? "mr-8"
                : "mr-0"
            }
          >
            <div
              className={classnames(
                styles.buttonContainer,
                actions?.secondary && styles.secondaryAction
              )}
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
                          ? (): void => this.dismissBanner()
                          : this.props.actions?.secondary?.onClick
                      }
                      fullWidth={isMobile || componentIsMobile}
                    />
                  </div>
                </WithTooltip>
              )}
            </div>
          </div>
        )}
      </Media>
    )
  }

  renderIllustrationType = (
    illustration: React.ReactElement<SpotProps | SceneProps>,
    illustrationType?: IllustrationType
  ): JSX.Element =>
    illustrationType === "scene"
      ? React.cloneElement(illustration, { enableAspectRatio: true })
      : illustration
}
