import * as React from "react"
import { Base, BaseProps } from "./Base"
import { VideoPlayerProps, VideoPlayer } from "./Players/VideoPlayer"
import { SubsetBecomesNever } from "./types"

export type SceneProps = Pick<
  BaseProps,
  "alt" | "classNameAndIHaveSpokenToDST"
> & { enableAspectRatio?: boolean }
export type AnimatedProps = { isAnimated?: true } & Pick<
  VideoPlayerProps,
  "loop" | "autoplay"
> &
  SubsetBecomesNever<SceneProps, "alt">
type NotAnimatedProps = { isAnimated: false } & SubsetBecomesNever<
  VideoPlayerProps,
  "autoplay" | "loop"
> &
  SceneProps

export type AnimatedSceneProps = AnimatedProps | NotAnimatedProps

export const BrandMomentPositiveOutro = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-positive-outro"
        source="illustrations/heart/scene/brand-moments-positive-outro"
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
        fallback="illustrations/heart/scene/brand-moments-login"
        source="illustrations/heart/scene/brand-moments-login"
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
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-error"
        source="illustrations/heart/scene/brand-moments-error"
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

export const BrandMomentNewAccountOnboarding = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-new-account-onboarding.svg"
  />
)

export const BrandMomentUploadEmployeeData = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-upload-employee-data.svg"
  />
)

export const BrandMomentStarterKit = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-starter-kit.svg"
  />
)

export const EmptyStatesAction = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-action"
        source="illustrations/heart/scene/empty-states-action"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-action.svg"
    />
  )
}

export const EmptyStatesInformative = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-informative"
        source="illustrations/heart/scene/empty-states-informative"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-informative.svg"
    />
  )
}

export const EmptyStatesNegative = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-negative"
        source="illustrations/heart/scene/empty-states-negative"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-negative.svg"
    />
  )
}

export const EmptyStatesPositive = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-positive"
        source="illustrations/heart/scene/empty-states-positive"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-positive.svg"
    />
  )
}

export const EmptyStatesNeutral = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-neutral"
        source="illustrations/heart/scene/empty-states-neutral"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-neutral.svg"
    />
  )
}

export const IntroductionsNewAccount = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/introductions-new-account.svg"
  />
)

export const IntroductionsCaptureIntro = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/introductions-capture-intro.svg"
  />
)

export const IntroductionsPerformance = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/introductions-performance.svg"
  />
)

export const IntroductionsNewAdmin = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/introductions-new-admin.svg"
  />
)

export const Information360Upgrade = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-360-upgrade.svg"
  />
)

export const InformationDemographicFocus = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-demographic-focus.svg"
  />
)

export const InformationTurnoverCalculator = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-turnover-calculator.svg"
  />
)

export const InformationTurnoverForecast = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-turnover-forecast.svg"
  />
)

export const InformationEmergingTrends = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-emerging-trends.svg"
  />
)

export const InformationEmployeeLifecycle = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-employee-lifecycle.svg"
  />
)

export const InformationReportOwner = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-report-owner.svg"
  />
)

export const InformationReportOwnerByRule = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-report-owner-by-rule.svg"
  />
)

export const PerformanceEvaluations = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-evaluations.svg"
  />
)

export const PerformanceCalibration = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-calibration.svg"
  />
)

export const PerformanceFaq = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-faq.svg"
  />
)

export const PerformancePerformanceFeedback = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-feedback.svg"
  />
)

export const PerformanceGoalStats = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-goal-stats.svg"
  />
)

export const PerformanceGoals = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-goals.svg"
  />
)

export const PerformancePeopleNetwork = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-people-network.svg"
  />
)

export const PerformanceSelfReflections = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-self-reflections.svg"
  />
)

export const PerformanceSupport = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-support.svg"
  />
)

export const PerformanceTeamSummary = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-team-summary.svg"
  />
)

export const PerformanceCompanySettings = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-company-settings.svg"
  />
)

export const ManagerLabFourWeekCycle = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-lab-4-week-cycle.svg"
  />
)

export const ManagerLabScheduling = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-lab-scheduling.svg"
  />
)

export const ManagerLearningManagerHub = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-manager-hub.svg"
  />
)

export const ManagerLearningCoaching = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-coaching.svg"
  />
)

export const ManagerLearningFeedback = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-feedback.svg"
  />
)

export const ManagerLearningProductivity = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-productivity.svg"
  />
)

export const ManagerLearningResilience = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-resilience.svg"
  />
)

export const ManagerLearningOneOnOneMeetings = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-1-on-1.svg"
  />
)

export const ManagerLearningStrategy = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-strategy.svg"
  />
)

export const ManagerLearningRemoteManager = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-remote-manager.svg"
  />
)

export const Programs = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/programs.svg"
  />
)

export const KaizenSiteBrandAlt = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-brand-alt.svg"
  />
)

export const KaizenSiteBrand = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-brand.svg"
  />
)

export const KaizenSiteLanguageAlt = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-language-alt.svg"
  />
)

export const KaizenSiteLanguage = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-language.svg"
  />
)

export const KaizenSitePrinciples = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-principles.svg"
  />
)

export const KaizenSitePrinciplesAlt = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-principles-alt.svg"
  />
)

export const KaizenSiteProduct = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-product.svg"
  />
)

export const KaizenSiteProductAlt = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-product-alt.svg"
  />
)

export const KaizenSiteResources = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-resources.svg"
  />
)

export const KaizenSiteResourcesAlt = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-resources-alt.svg"
  />
)

export const SurveyOverviewClosed = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/survey-overview-closed.svg"
  />
)

export const SurveyGetStarted = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/getting-started.svg"
  />
)

export const SkillsCoach1On1Meetings = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-1-on-1-meetings.svg"
  />
)

export const SkillsCoachCoaching = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-coaching.svg"
  />
)

export const SkillsCoachEmployeeDevelopment = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-employee-development.svg"
  />
)

export const SkillsCoachEssentialFeedback = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-feedback.svg"
  />
)

export const SkillsCoachFeedback = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-feedback.svg"
  />
)

export const SkillsCoachManagerHub = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-manager-hub.svg"
  />
)

export const SkillsCoachProductivity = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-productivity.svg"
  />
)

export const SkillsCoachRemoteManager = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-remote-manager.svg"
  />
)

export const SkillsCoachResilience = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-resilience.svg"
  />
)

export const SkillsCoachStrategy = (props: SceneProps) => (
  <Base
    aspectRatio={props.enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-strategy.svg"
  />
)
