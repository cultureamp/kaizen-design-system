import { useTheme } from "@kaizen/design-tokens"
import * as React from "react"
import { Base, BaseProps } from "./Base"
import { VideoPlayerProps, VideoPlayer } from "./Players/VideoPlayer"

export type SceneProps = Pick<BaseProps, "alt" | "classNameAndIHaveSpokenToDST">

/**
 * All keys K within T will be converted to a never type.
 * This is useful for discriminated unions
 */
type SubsetBecomesNever<T, K extends keyof T> = T | { [L in K]?: never }

type AnimatedProps = { isAnimated?: true } & Pick<
  VideoPlayerProps,
  "loop" | "autoplay"
> &
  SubsetBecomesNever<SceneProps, "alt">
type NotAnimatedProps = { isAnimated: false } & SubsetBecomesNever<
  VideoPlayerProps,
  "autoplay" | "loop"
> &
  SceneProps
type AnimatedSceneProps = AnimatedProps | NotAnimatedProps

export const BrandMomentCaptureIntro = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-capture-intro-loop.png"
        ambientAnimation="illustrations/heart/scene/brand-moments-capture-intro-loop"
        initialAnimation="illustrations/heart/scene/brand-moments-capture-intro"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-capture-intro-loop.png"
    />
  )
}

export const BrandMomentPositiveOutro = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-positive-outro.png"
        ambientAnimation="illustrations/heart/scene/brand-moments-positive-outro"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-positive-outro.png"
    />
  )
}

export const BrandMomentLogin = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-login.png"
        ambientAnimation="illustrations/heart/scene/brand-moments-login"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-login.png"
    />
  )
}

export const BrandMomentError = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const { themeKey } = useTheme()
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-error.png"
        ambientAnimation="illustrations/heart/scene/brand-moments-error"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-error.png"
    />
  )
}

export const EmptyStatesAction = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const { themeKey } = useTheme()
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-action.svg"
        ambientAnimation="illustrations/heart/scene/empty-states-action"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name={
        themeKey === "zen"
          ? "illustrations/scene/empty-states-action.svg"
          : "illustrations/heart/scene/empty-states-action.svg"
      }
    />
  )
}

export const EmptyStatesInformative = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const { themeKey } = useTheme()
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-informative.svg"
        ambientAnimation="illustrations/heart/scene/empty-states-informative"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name={
        themeKey === "zen"
          ? "illustrations/scene/empty-states-informative.svg"
          : "illustrations/heart/scene/empty-states-informative.svg"
      }
    />
  )
}

export const EmptyStatesNegative = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const { themeKey } = useTheme()
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-negative.svg"
        ambientAnimation="illustrations/heart/scene/empty-states-negative"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name={
        themeKey === "zen"
          ? "illustrations/scene/empty-states-negative.svg"
          : "illustrations/heart/scene/empty-states-negative.svg"
      }
    />
  )
}

export const EmptyStatesPositive = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const { themeKey } = useTheme()
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-positive.svg"
        ambientAnimation="illustrations/heart/scene/empty-states-positive"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name={
        themeKey === "zen"
          ? "illustrations/scene/empty-states-positive.svg"
          : "illustrations/heart/scene/empty-states-positive.svg"
      }
    />
  )
}

export const EmptyStatesNeutral = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const { themeKey } = useTheme()
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-neutral.svg"
        ambientAnimation="illustrations/heart/scene/empty-states-neutral"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name={
        themeKey === "zen"
          ? "illustrations/scene/empty-states-neutral.svg"
          : "illustrations/heart/scene/empty-states-neutral.svg"
      }
    />
  )
}

export const IntroductionsNewAccount = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/introductions-new-account.svg" />
)

export const IntroductionsCaptureIntro = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/introductions-capture-intro.svg" />
)

export const IntroductionsPerformance = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/introductions-performance.svg" />
)

export const IntroductionsNewAdmin = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/introductions-new-admin.svg" />
)

export const Information360Upgrade = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-360-upgrade.svg"
  />
)

export const InformationDemographicFocus = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-demographic-focus.svg"
  />
)

export const InformationTurnoverCalculator = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-turnover-calculator.svg"
  />
)

export const InformationTurnoverForecast = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-turnover-forecast.svg"
  />
)

export const InformationEmergingTrends = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-emerging-trends.svg"
  />
)

export const InformationEmployeeLifecycle = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-employee-lifecycle.svg"
  />
)

export const InformationReportOwner = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-report-owner.svg"
  />
)

export const InformationReportOwnerByRule = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/information-modals-report-owner-by-rule.svg"
  />
)

export const PerformanceEvaluations = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-evaluations.svg" />
)

export const PerformanceCalibration = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-calibration.svg" />
)

export const PerformanceFaq = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-faq.svg" />
)

export const PerformancePerformanceFeedback = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-feedback.svg" />
)

export const PerformanceGoalStats = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-goal-stats.svg" />
)

export const PerformanceGoals = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-goals.svg" />
)

export const PerformancePeopleNetwork = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-people-network.svg" />
)

export const PerformanceSelfReflections = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/performance-self-reflections.svg"
  />
)

export const PerformanceSupport = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-support.svg" />
)

export const PerformanceTeamSummary = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/performance-team-summary.svg" />
)

export const PerformanceCompanySettings = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/performance-company-settings.svg"
  />
)

export const ManagerLabFourWeekCycle = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-lab-4-week-cycle.svg" />
)

export const ManagerLabScheduling = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-lab-scheduling.svg" />
)

export const ManagerLearningManagerHub = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/manager-learning-manager-hub.svg"
  />
)

export const ManagerLearningCoaching = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-learning-coaching.svg" />
)

export const ManagerLearningFeedback = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-learning-feedback.svg" />
)

export const ManagerLearningProductivity = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/manager-learning-productivity.svg"
  />
)

export const ManagerLearningResilience = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-learning-resilience.svg" />
)

export const ManagerLearningOneOnOneMeetings = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-learning-1-on-1.svg" />
)

export const ManagerLearningStrategy = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/manager-learning-strategy.svg" />
)

export const ManagerLearningRemoteManager = (props: SceneProps) => (
  <Base
    {...props}
    name="illustrations/scene/manager-learning-remote-manager.svg"
  />
)

export const Programs = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/programs.svg" />
)

export const KaizenSiteBrandAlt = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-brand-alt.svg" />
)

export const KaizenSiteBrand = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-brand.svg" />
)

export const KaizenSiteLanguageAlt = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-language-alt.svg" />
)

export const KaizenSiteLanguage = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-language.svg" />
)

export const KaizenSitePrinciples = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-principles.svg" />
)

export const KaizenSitePrinciplesAlt = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-principles-alt.svg" />
)

export const KaizenSiteProduct = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-product.svg" />
)

export const KaizenSiteProductAlt = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-product-alt.svg" />
)

export const KaizenSiteResources = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-resources.svg" />
)

export const KaizenSiteResourcesAlt = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/kaizen-site-resources-alt.svg" />
)

export const SurveyOverviewClosed = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/survey-overview-closed.svg" />
)

export const SurveyGetStarted = (props: SceneProps) => (
  <Base {...props} name="illustrations/scene/getting-started.svg" />
)
