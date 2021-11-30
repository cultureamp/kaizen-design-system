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
  SubsetBecomesNever<SceneProps, "alt"> & { enableAspectRatio?: boolean }
type NotAnimatedProps = { isAnimated: false } & SubsetBecomesNever<
  VideoPlayerProps,
  "autoplay" | "loop"
> &
  SceneProps & { enableAspectRatio?: boolean }

export type AnimatedSceneProps = AnimatedProps | NotAnimatedProps

export const BrandMomentPositiveOutro = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-positive-outro"
        source="illustrations/heart/scene/brand-moments-positive-outro"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-positive-outro.png"
    />
  )
}

export const BrandMomentLogin = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-login"
        source="illustrations/heart/scene/brand-moments-login"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-login.png"
    />
  )
}

export const BrandMomentError = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-error"
        source="illustrations/heart/scene/brand-moments-error"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-error.png"
    />
  )
}

export const BrandMomentNewAccountOnboarding = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-new-account-onboarding.svg"
  />
)

export const BrandMomentUploadEmployeeData = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-upload-employee-data.svg"
  />
)

export const BrandMomentStarterKit = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-starter-kit.svg"
  />
)

export const EmptyStatesAction = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-action"
        source="illustrations/heart/scene/empty-states-action"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-action.svg"
    />
  )
}

export const EmptyStatesInformative = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-informative"
        source="illustrations/heart/scene/empty-states-informative"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-informative.svg"
    />
  )
}

export const EmptyStatesNegative = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-negative"
        source="illustrations/heart/scene/empty-states-negative"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-negative.svg"
    />
  )
}

export const EmptyStatesPositive = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-positive"
        source="illustrations/heart/scene/empty-states-positive"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-positive.svg"
    />
  )
}

export const EmptyStatesNeutral = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-neutral"
        source="illustrations/heart/scene/empty-states-neutral"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-neutral.svg"
    />
  )
}

export const IntroductionsNewAccount = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/introductions-new-account.svg"
  />
)

export const IntroductionsCaptureIntro = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/introductions-capture-intro.svg"
  />
)

export const IntroductionsPerformance = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/introductions-performance.svg"
  />
)

export const IntroductionsNewAdmin = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/introductions-new-admin.svg"
  />
)

export const Information360Upgrade = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-360-upgrade.svg"
  />
)

export const InformationDemographicFocus = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-demographic-focus.svg"
  />
)

export const InformationTurnoverCalculator = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-turnover-calculator.svg"
  />
)

export const InformationTurnoverForecast = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-turnover-forecast.svg"
  />
)

export const InformationEmergingTrends = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-emerging-trends.svg"
  />
)

export const InformationEmployeeLifecycle = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-employee-lifecycle.svg"
  />
)

export const InformationReportOwner = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-report-owner.svg"
  />
)

export const InformationReportOwnerByRule = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/information-modals-report-owner-by-rule.svg"
  />
)

export const PerformanceEvaluations = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-evaluations.svg"
  />
)

export const PerformanceCalibration = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-calibration.svg"
  />
)

export const PerformanceFaq = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-faq.svg"
  />
)

export const PerformancePerformanceFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-feedback.svg"
  />
)

export const PerformanceGoalStats = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-goal-stats.svg"
  />
)

export const PerformanceGoals = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-goals.svg"
  />
)

export const PerformancePeopleNetwork = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-people-network.svg"
  />
)

export const PerformanceSelfReflections = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-self-reflections.svg"
  />
)

export const PerformanceSupport = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-support.svg"
  />
)

export const PerformanceTeamSummary = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-team-summary.svg"
  />
)

export const PerformanceCompanySettings = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/performance-company-settings.svg"
  />
)

export const ManagerLabFourWeekCycle = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-lab-4-week-cycle.svg"
  />
)

export const ManagerLabScheduling = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-lab-scheduling.svg"
  />
)

export const ManagerLearningManagerHub = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-manager-hub.svg"
  />
)

export const ManagerLearningCoaching = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-coaching.svg"
  />
)

export const ManagerLearningFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-feedback.svg"
  />
)

export const ManagerLearningProductivity = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-productivity.svg"
  />
)

export const ManagerLearningResilience = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-resilience.svg"
  />
)

export const ManagerLearningOneOnOneMeetings = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-1-on-1.svg"
  />
)

export const ManagerLearningStrategy = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-strategy.svg"
  />
)

export const ManagerLearningRemoteManager = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/manager-learning-remote-manager.svg"
  />
)

export const Programs = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/programs.svg"
  />
)

export const KaizenSiteBrandAlt = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-brand-alt.svg"
  />
)

export const KaizenSiteBrand = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-brand.svg"
  />
)

export const KaizenSiteLanguageAlt = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-language-alt.svg"
  />
)

export const KaizenSiteLanguage = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-language.svg"
  />
)

export const KaizenSitePrinciples = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-principles.svg"
  />
)

export const KaizenSitePrinciplesAlt = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-principles-alt.svg"
  />
)

export const KaizenSiteProduct = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-product.svg"
  />
)

export const KaizenSiteProductAlt = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-product-alt.svg"
  />
)

export const KaizenSiteResources = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-resources.svg"
  />
)

export const KaizenSiteResourcesAlt = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/scene/kaizen-site-resources-alt.svg"
  />
)

export const SurveyOverviewClosed = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/survey-overview-closed.svg"
  />
)

export const SurveyGetStarted = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/scene/getting-started.svg"
  />
)

export const SkillsCoach1On1Meetings = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-1-on-1-meetings.svg"
  />
)

export const SkillsCoachCoaching = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-coaching.svg"
  />
)

export const SkillsCoachEmployeeDevelopment = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-employee-development.svg"
  />
)

export const SkillsCoachEssentialFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-feedback.svg"
  />
)

export const SkillsCoachFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-feedback.svg"
  />
)

export const SkillsCoachManagerHub = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-manager-hub.svg"
  />
)

export const SkillsCoachProductivity = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-productivity.svg"
  />
)

export const SkillsCoachRemoteManager = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-remote-manager.svg"
  />
)

export const SkillsCoachResilience = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-resilience.svg"
  />
)

export const SkillsCoachStrategy = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-strategy.svg"
  />
)
