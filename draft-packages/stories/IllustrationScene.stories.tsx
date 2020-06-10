import * as React from "react"
import {
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
  Information360Upgrade,
  InformationDemographicFocus,
  InformationEmergingTrends,
  InformationEmployeeLifecycle,
  InformationReportOwner,
  InformationReportOwnerByRule,
  InformationTurnoverCalculator,
  InformationTurnoverForecast,
  IntroductionsCaptureIntro,
  IntroductionsNewAccount,
  IntroductionsNewAdmin,
  IntroductionsPerformance,
  KaizenSiteBrand,
  KaizenSiteBrandAlt,
  KaizenSitePrinciples,
  KaizenSitePrinciplesAlt,
  KaizenSiteProduct,
  KaizenSiteProductAlt,
  KaizenSiteResources,
  KaizenSiteResourcesAlt,
  ManagerLearningCoaching,
  ManagerLearningFeedback,
  ManagerLearningManagerHub,
  ManagerLearningOneOnOneMeetings,
  ManagerLearningProductivity,
  ManagerLearningRemoteManager,
  ManagerLearningResilience,
  ManagerLearningStrategy,
  PerformanceCalibration,
  PerformanceCompanySettings,
  PerformanceEvaluations,
  PerformanceFaq,
  PerformanceGoals,
  PerformanceGoalStats,
  PerformancePeopleNetwork,
  PerformancePerformanceFeedback,
  PerformanceSelfReflections,
  PerformanceSupport,
  PerformanceTeamSummary,
} from "../illustration"

export default {
  title: "Illustration, Scene (React)",
  component: ManagerLearningResilience,
  parameters: {
    info: {
      text: `
        import { EmptyStatesAction, EmptyStatesInformative, EmptyStatesNegative } from "@kaizen/draft-illustration";
      `,
    },
  },
}

export const DefaultSiteDemo = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningResilience alt="" />
  </div>
)
DefaultSiteDemo.story = {
  name: "Scene (Kaizen Site Demo)",
}

export const EmptyStatesActionStory = () => (
  <div style={{ width: "500px" }}>
    <EmptyStatesAction alt="" />
  </div>
)
EmptyStatesActionStory.story = { name: "Empty States: Action" }

export const EmptyStatesInformativeStory = () => (
  <div style={{ width: "500px" }}>
    <EmptyStatesInformative alt="" />
  </div>
)
EmptyStatesInformativeStory.story = { name: "Empty States: Informative" }

export const EmptyStatesNegativeStory = () => (
  <div style={{ width: "500px" }}>
    <EmptyStatesNegative alt="" />
  </div>
)
EmptyStatesNegativeStory.story = { name: "Empty States: Negative" }

export const EmptyStatesPositiveStory = () => (
  <div style={{ width: "500px" }}>
    <EmptyStatesPositive alt="" />
  </div>
)
EmptyStatesPositiveStory.story = { name: "Empty States: Positive" }

export const EmptyStatesNeutralStory = () => (
  <div style={{ width: "500px" }}>
    <EmptyStatesNeutral alt="" />
  </div>
)
EmptyStatesNeutralStory.story = { name: "Empty States: Neutral" }

export const IntroductionsNewAccountStory = () => (
  <div style={{ width: "500px" }}>
    <IntroductionsNewAccount alt="" />
  </div>
)
IntroductionsNewAccountStory.story = { name: "Introductions: New Account" }

export const IntroductionsCaptureIntroStory = () => (
  <div style={{ width: "500px" }}>
    <IntroductionsCaptureIntro alt="" />
  </div>
)
IntroductionsCaptureIntroStory.story = { name: "Introductions: Capture Intro" }

export const IntroductionsPerformanceStory = () => (
  <div style={{ width: "500px" }}>
    <IntroductionsPerformance alt="" />
  </div>
)
IntroductionsPerformanceStory.story = { name: "Introductions: Performance" }

export const IntroductionsNewAdminStory = () => (
  <div style={{ width: "500px" }}>
    <IntroductionsNewAdmin alt="" />
  </div>
)
IntroductionsNewAdminStory.story = { name: "Introductions: New Admin" }

export const Information360UpgradeStory = () => (
  <div style={{ width: "500px" }}>
    <Information360Upgrade alt="" />
  </div>
)
Information360UpgradeStory.story = { name: "Information Modals: 360 Upgrade" }

export const InformationDemographicFocusStory = () => (
  <div style={{ width: "500px" }}>
    <InformationDemographicFocus alt="" />
  </div>
)
InformationDemographicFocusStory.story = {
  name: "Information Modals: Demographic Focus",
}

export const InformationTurnoverCalculatorStory = () => (
  <div style={{ width: "500px" }}>
    <InformationTurnoverCalculator alt="" />
  </div>
)
InformationTurnoverCalculatorStory.story = {
  name: "Information Modals: Turnover Calculator",
}

export const InformationTurnoverForecastStory = () => (
  <div style={{ width: "500px" }}>
    <InformationTurnoverForecast alt="" />
  </div>
)
InformationTurnoverForecastStory.story = {
  name: "Information Modals: Turnover Forecast",
}

export const InformationEmergingTrendsStory = () => (
  <div style={{ width: "500px" }}>
    <InformationEmergingTrends alt="" />
  </div>
)
InformationEmergingTrendsStory.story = {
  name: "Information Modals: Emerging Trends",
}

export const InformationEmployeeLifecycleStory = () => (
  <div style={{ width: "500px" }}>
    <InformationEmployeeLifecycle alt="" />
  </div>
)
InformationEmployeeLifecycleStory.story = {
  name: "Information Modals: Employee Lifecycle",
}

export const InformationReportOwnerStory = () => (
  <div style={{ width: "500px" }}>
    <InformationReportOwner alt="" />
  </div>
)
InformationReportOwnerStory.story = { name: "Information Modals: ReportOwner" }

export const InformationReportOwnerByRuleStory = () => (
  <div style={{ width: "500px" }}>
    <InformationReportOwnerByRule alt="" />
  </div>
)
InformationReportOwnerByRuleStory.story = {
  name: "Information Modals: Report Owner By Rule",
}

export const PerformanceEvaluationsStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceEvaluations alt="" />
  </div>
)
PerformanceEvaluationsStory.story = { name: "Performance: Evaluations" }

export const PerformanceCalibrationStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceCalibration alt="" />
  </div>
)
PerformanceCalibrationStory.story = { name: "Performance: Calibration" }

export const PerformanceFaqStory = () => (
  <div style={{ width: "500px" }}>
    {" "}
    <PerformanceFaq alt="" />
  </div>
)
PerformanceFaqStory.story = { name: "Performance: Faq" }

export const PerformancePerformanceFeedbackStory = () => (
  <div style={{ width: "500px" }}>
    <PerformancePerformanceFeedback alt="" />
  </div>
)
PerformancePerformanceFeedbackStory.story = {
  name: "Performance: Performance Feedback",
}

export const PerformanceGoalStatsStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceGoalStats alt="" />
  </div>
)
PerformanceGoalStatsStory.story = { name: "Performance: Goal Stats" }

export const PerformanceGoalsStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceGoals alt="" />
  </div>
)
PerformanceGoalsStory.story = { name: "Performance: Goals" }

export const PerformancePeopleNetworkStory = () => (
  <div style={{ width: "500px" }}>
    <PerformancePeopleNetwork alt="" />
  </div>
)
PerformancePeopleNetworkStory.story = { name: "Performance: People Network" }

export const PerformanceSelfReflectionsStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceSelfReflections alt="" />
  </div>
)
PerformanceSelfReflectionsStory.story = {
  name: "Performance: Self Reflections",
}

export const PerformanceSupportStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceSupport alt="" />
  </div>
)
PerformanceSupportStory.story = { name: "Performance: Support" }

export const PerformanceTeamSummaryStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceTeamSummary alt="" />
  </div>
)
PerformanceTeamSummaryStory.story = { name: "Performance: Team Summary" }

export const PerformanceCompanySettingsStory = () => (
  <div style={{ width: "500px" }}>
    <PerformanceCompanySettings alt="" />
  </div>
)
PerformanceCompanySettingsStory.story = {
  name: "Performance: Company Settings",
}

export const ManagerLearningManagerHubStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningManagerHub alt="" />
  </div>
)
ManagerLearningManagerHubStory.story = { name: "Manager Learning: Manager Hub" }

export const ManagerLearningCoachingStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningCoaching alt="" />
  </div>
)
ManagerLearningCoachingStory.story = { name: "Manager Learning: Coaching" }

export const ManagerLearningFeedbackStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningFeedback alt="" />
  </div>
)
ManagerLearningFeedbackStory.story = { name: "Manager Learning: Feedback" }

export const ManagerLearningProductivityStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningProductivity alt="" />
  </div>
)
ManagerLearningProductivityStory.story = {
  name: "Manager Learning: Productivity",
}

export const ManagerLearningResilienceStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningResilience alt="" />
  </div>
)
ManagerLearningResilienceStory.story = { name: "Manager Learning: Resilience" }

export const ManagerLearningOneOnOneMeetingsStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningOneOnOneMeetings alt="" />
  </div>
)
ManagerLearningOneOnOneMeetingsStory.story = {
  name: "Manager Learning: 1 On 1 Meetings",
}

export const ManagerLearningStrategyStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningStrategy alt="" />
  </div>
)
ManagerLearningStrategyStory.story = { name: "Manager Learning: Strategy" }

export const ManagerLearningRemoteManagerStory = () => (
  <div style={{ width: "500px" }}>
    <ManagerLearningRemoteManager alt="" />
  </div>
)
ManagerLearningRemoteManagerStory.story = {
  name: "Manager Learning: Remote Manager",
}

export const KaizenSiteBrandAltStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSiteBrandAlt alt="" />
  </div>
)
KaizenSiteBrandAltStory.story = { name: "Kaizen Site: Brand Alt" }

export const KaizenSiteBrandStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSiteBrand alt="" />
  </div>
)
KaizenSiteBrandStory.story = { name: "Kaizen Site: Brand" }

export const KaizenSitePrinciplesStory = () => (
  <div style={{ width: "500px" }}>
    {" "}
    <KaizenSitePrinciples alt="" />
  </div>
)
KaizenSitePrinciplesStory.story = { name: "Kaizen Site: Principles" }

export const KaizenSitePrinciplesAltStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSitePrinciplesAlt alt="" />
  </div>
)
KaizenSitePrinciplesAltStory.story = { name: "Kaizen Site: Principles Alt" }
export const KaizenSiteProductStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSiteProduct alt="" />
  </div>
)
KaizenSiteProductStory.story = { name: "Kaizen Site: Product" }

export const KaizenSiteProductAltStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSiteProductAlt alt="" />
  </div>
)
KaizenSiteProductAltStory.story = { name: "Kaizen Site: Product Alt" }

export const KaizenSiteResourcesStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSiteResources alt="" />
  </div>
)
KaizenSiteResourcesStory.story = { name: "Kaizen Site: Resources" }

export const KaizenSiteResourcesAltStory = () => (
  <div style={{ width: "500px" }}>
    <KaizenSiteResourcesAlt alt="" />
  </div>
)
KaizenSiteResourcesAltStory.story = { name: "Kaizen Site: Resources Alt" }
