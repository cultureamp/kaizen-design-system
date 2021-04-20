import { useTheme } from "@kaizen/design-tokens"
import * as React from "react"
import { Base, BaseProps } from "./Base"

export type SceneProps = Pick<BaseProps, "alt" | "classNameAndIHaveSpokenToDST">

export const EmptyStatesAction = (props: SceneProps) => {
  const theme = useTheme()
  return (
    <Base
      {...props}
      name={
        theme.themeKey === "zen"
          ? "illustrations/scene/empty-states-action.svg"
          : "illustrations/heart/scene/empty-states-action.svg"
      }
    />
  )
}
export const EmptyStatesInformative = (props: SceneProps) => {
  const theme = useTheme()
  return (
    <Base
      {...props}
      name={
        theme.themeKey === "zen"
          ? "illustrations/scene/empty-states-informative.svg"
          : "illustrations/heart/scene/empty-states-informative.svg"
      }
    />
  )
}

export const EmptyStatesNegative = (props: SceneProps) => {
  const theme = useTheme()
  return (
    <Base
      {...props}
      name={
        theme.themeKey === "zen"
          ? "illustrations/scene/empty-states-negative.svg"
          : "illustrations/heart/scene/empty-states-negative.svg"
      }
    />
  )
}

export const EmptyStatesPositive = (props: SceneProps) => {
  const theme = useTheme()
  return (
    <Base
      {...props}
      name={
        theme.themeKey === "zen"
          ? "illustrations/scene/empty-states-positive.svg"
          : "illustrations/heart/scene/empty-states-positive.svg"
      }
    />
  )
}

export const EmptyStatesNeutral = (props: SceneProps) => {
  const theme = useTheme()
  return (
    <Base
      {...props}
      name={
        theme.themeKey === "zen"
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
