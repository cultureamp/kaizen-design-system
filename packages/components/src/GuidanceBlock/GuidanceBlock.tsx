import React, { useEffect, useState } from "react"
import classNames from "classnames"
import Media from "react-media"
import { Button, ButtonProps } from "~components/Button"
import { Heading, HeadingProps } from "~components/Heading"
import { ArrowForwardIcon } from "~components/Icon"
import { SceneProps, SpotProps } from "~components/Illustration"
import { Text } from "~components/Text"
import { Tooltip, TooltipProps } from "~components/Tooltip"
import { VariantType } from "./types"
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

type BaseGuidanceBlockProps = {
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
  variant?: VariantType
  withActionButtonArrow?: boolean
  noMaxWidth?: boolean
}

type GuidanceBlockWithText = {
  text: {
    title: string
    titleTag?: HeadingProps["tag"]
    description: string | React.ReactNode
  }
} & BaseGuidanceBlockProps

type GuidanceBlockPropsWithContent = {
  content: React.ReactElement
} & BaseGuidanceBlockProps

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
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093807/Guidance+Block Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-guidanceblock--docs Storybook}
 */
export const GuidanceBlock = ({
  layout = "default",
  variant = "default",
  withActionButtonArrow = true,
  noMaxWidth = false,
  illustrationType = "spot",
  smallScreenTextAlignment = "center",
  actions,
  illustration,
  secondaryDismiss,
  ...restProps
}: GuidanceBlockProps): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(false)
  const [removed, setRemoved] = useState<boolean>(false)
  const [mediaQueryLayout, setMediaQueryLayout] = useState<string>("")

  const containerRef = React.createRef<HTMLDivElement>()

  useEffect(() => {
    if (layout === "inline" || layout === "stacked") {
      containerQuery()
    }
  }, [])

  const handleDismissBanner = (): void => {
    setHidden(true)
    actions?.dismiss?.onClick()
  }

  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>): void => {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (hidden && e.propertyName === "margin-top") {
      setRemoved(true)
    }
  }

  const containerQuery = (): void => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 1) {
        handleMediaQueryLayout(entries[0].contentRect.width)
      }
    })

    resizeObserver.observe(containerRef.current as HTMLElement)
  }

  const handleMediaQueryLayout = (width: number): void => {
    if (width <= 320) {
      setMediaQueryLayout("centerContent")
    } else {
      setMediaQueryLayout("")
    }
  }

  const marginTop = (): string => {
    if (hidden && containerRef.current) {
      return -containerRef.current.clientHeight + "px"
    }

    return "0"
  }

  if (removed) {
    return <></>
  }

  const componentIsMobile = mediaQueryLayout.includes("centerContent")

  return (
    <div
      className={classNames(
        styles.banner,
        variant && styles[variant],
        layout && styles[layout],
        hidden && styles.hidden,
        mediaQueryLayout === "centerContent" && styles.centerContent,
        noMaxWidth && styles.noMaxWidth,
        illustrationType === "scene" && styles.hasSceneIllustration,
        smallScreenTextAlignment === "left" && styles.smallScreenTextAlignment
      )}
      style={{
        marginTop: marginTop(),
      }}
      ref={containerRef}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.illustrationWrapper}>
        <div className={styles.illustration}>
          {illustrationType === "scene"
            ? React.cloneElement(illustration, { enableAspectRatio: true })
            : illustration}
        </div>
      </div>
      <div className={styles.descriptionAndActions}>
        <div className={styles.descriptionContainer}>
          {"content" in restProps && restProps.content}
          {"text" in restProps && (
            <>
              <div className={styles.headingWrapper}>
                <Heading
                  tag={restProps?.text?.titleTag ?? "h3"}
                  variant="heading-3"
                >
                  {restProps?.text?.title}
                </Heading>
              </div>
              <Text tag="p" variant="body">
                {restProps?.text?.description}
              </Text>
            </>
          )}
        </div>
        {actions?.primary && (
          <Media query="(max-width: 767px)">
            {(isMobile: boolean): JSX.Element => (
              <div
                className={classNames({
                  noRightMargin: isMobile || componentIsMobile,
                  rightMargin:
                    !(isMobile || componentIsMobile) && layout === "default",
                })}
              >
                <div
                  className={classNames(
                    styles.buttonContainer,
                    actions?.secondary && styles.secondaryAction
                  )}
                >
                  <WithTooltip tooltipProps={actions.primary.tooltip}>
                    <Button
                      icon={
                        withActionButtonArrow ? (
                          <ArrowForwardIcon role="presentation" />
                        ) : undefined
                      }
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
                            secondaryDismiss
                              ? (): void => handleDismissBanner()
                              : actions?.secondary?.onClick
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
        )}
      </div>
    </div>
  )
}

export default GuidanceBlock
