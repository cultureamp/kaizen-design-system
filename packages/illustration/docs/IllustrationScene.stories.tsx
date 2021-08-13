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
  KaizenSiteLanguage,
  KaizenSiteLanguageAlt,
  KaizenSitePrinciples,
  KaizenSitePrinciplesAlt,
  KaizenSiteProduct,
  KaizenSiteProductAlt,
  KaizenSiteResources,
  KaizenSiteResourcesAlt,
  ManagerLabFourWeekCycle,
  ManagerLabScheduling,
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
  Programs,
  SurveyOverviewClosed,
  SurveyGetStarted,
  BrandMomentCaptureIntro,
  BrandMomentPositiveOutro,
  BrandMomentLogin,
  BrandMomentError,
  BrandMomentStarterKit,
} from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

const withFixedWidth = Story => (
  <div style={{ width: "500px" }}>
    <Story />
  </div>
)

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.illustration}/Scene`,
  component: ManagerLearningResilience,
  parameters: {
    docs: {
      description: {
        component:
          'import { SurveyOverviewClosed } from "@kaizen/illustration"',
      },
    },
    decorators: [withFixedWidth],
  },
}

export const BrandMoments = args => (
  <>
    <div style={{ width: "450px" }}>
      <BrandMomentCaptureIntro {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <BrandMomentPositiveOutro {...args} />
    </div>
    <div style={{ width: "800px" }}>
      <BrandMomentLogin {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <BrandMomentError {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <BrandMomentStarterKit alt="" />
    </div>
  </>
)
BrandMoments.args = {
  isAnimated: true,
  loop: true,
}

export const AnimatedSceneIllustrations = args => (
  <>
    <div style={{ width: "450px" }}>
      <EmptyStatesAction {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <EmptyStatesInformative {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <EmptyStatesNegative {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <EmptyStatesPositive {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <EmptyStatesNeutral {...args} />
    </div>
  </>
)
AnimatedSceneIllustrations.args = {
  isAnimated: true,
  loop: true,
}

export const DefaultSiteDemo = () => <ManagerLearningResilience alt="" />
DefaultSiteDemo.storyName = "Scene (Kaizen Site Demo)"

export const EmptyStatesActionStory = () => <EmptyStatesAction alt="" />
EmptyStatesActionStory.storyName = "Empty States: Action"

export const EmptyStatesInformativeStory = () => (
  <EmptyStatesInformative alt="" />
)
EmptyStatesInformativeStory.storyName = "Empty States: Informative"

export const EmptyStatesNegativeStory = () => <EmptyStatesNegative alt="" />
EmptyStatesNegativeStory.storyName = "Empty States: Negative"

export const EmptyStatesPositiveStory = () => <EmptyStatesPositive alt="" />
EmptyStatesPositiveStory.storyName = "Empty States: Positive"

export const EmptyStatesNeutralStory = () => <EmptyStatesNeutral alt="" />
EmptyStatesNeutralStory.storyName = "Empty States: Neutral"

export const IntroductionsNewAccountStory = () => (
  <IntroductionsNewAccount alt="" />
)
IntroductionsNewAccountStory.storyName = "Introductions: New Account"

export const IntroductionsCaptureIntroStory = () => (
  <IntroductionsCaptureIntro alt="" />
)
IntroductionsCaptureIntroStory.storyName = "Introductions: Capture Intro"

export const IntroductionsPerformanceStory = () => (
  <IntroductionsPerformance alt="" />
)
IntroductionsPerformanceStory.storyName = "Introductions: Performance"

export const IntroductionsNewAdminStory = () => <IntroductionsNewAdmin alt="" />
IntroductionsNewAdminStory.storyName = "Introductions: New Admin"

export const Information360UpgradeStory = () => <Information360Upgrade alt="" />
Information360UpgradeStory.storyName = "Information Modals: 360 Upgrade"

export const InformationDemographicFocusStory = () => (
  <InformationDemographicFocus alt="" />
)
InformationDemographicFocusStory.storyName =
  "Information Modals: Demographic Focus"

export const InformationTurnoverCalculatorStory = () => (
  <InformationTurnoverCalculator alt="" />
)
InformationTurnoverCalculatorStory.storyName =
  "Information Modals: Turnover Calculator"

export const InformationTurnoverForecastStory = () => (
  <InformationTurnoverForecast alt="" />
)
InformationTurnoverForecastStory.storyName =
  "Information Modals: Turnover Forecast"

export const InformationEmergingTrendsStory = () => (
  <InformationEmergingTrends alt="" />
)
InformationEmergingTrendsStory.storyName = "Information Modals: Emerging Trends"

export const InformationEmployeeLifecycleStory = () => (
  <InformationEmployeeLifecycle alt="" />
)
InformationEmployeeLifecycleStory.storyName =
  "Information Modals: Employee Lifecycle"

export const InformationReportOwnerStory = () => (
  <InformationReportOwner alt="" />
)
InformationReportOwnerStory.storyName = "Information Modals: ReportOwner"

export const InformationReportOwnerByRuleStory = () => (
  <InformationReportOwnerByRule alt="" />
)
InformationReportOwnerByRuleStory.storyName =
  "Information Modals: Report Owner By Rule"

export const PerformanceEvaluationsStory = () => (
  <PerformanceEvaluations alt="" />
)
PerformanceEvaluationsStory.storyName = "Performance: Evaluations"

export const PerformanceCalibrationStory = () => (
  <PerformanceCalibration alt="" />
)
PerformanceCalibrationStory.storyName = "Performance: Calibration"

export const PerformanceFaqStory = () => <PerformanceFaq alt="" />
PerformanceFaqStory.storyName = "Performance: Faq"

export const PerformancePerformanceFeedbackStory = () => (
  <PerformancePerformanceFeedback alt="" />
)
PerformancePerformanceFeedbackStory.storyName =
  "Performance: Performance Feedback"

export const PerformanceGoalStatsStory = () => <PerformanceGoalStats alt="" />
PerformanceGoalStatsStory.storyName = "Performance: Goal Stats"

export const PerformanceGoalsStory = () => <PerformanceGoals alt="" />
PerformanceGoalsStory.storyName = "Performance: Goals"

export const PerformancePeopleNetworkStory = () => (
  <PerformancePeopleNetwork alt="" />
)
PerformancePeopleNetworkStory.storyName = "Performance: People Network"

export const PerformanceSelfReflectionsStory = () => (
  <PerformanceSelfReflections alt="" />
)
PerformanceSelfReflectionsStory.storyName = "Performance: Self Reflections"

export const PerformanceSupportStory = () => <PerformanceSupport alt="" />
PerformanceSupportStory.storyName = "Performance: Support"

export const PerformanceTeamSummaryStory = () => (
  <PerformanceTeamSummary alt="" />
)
PerformanceTeamSummaryStory.storyName = "Performance: Team Summary"

export const PerformanceCompanySettingsStory = () => (
  <PerformanceCompanySettings alt="" />
)
PerformanceCompanySettingsStory.storyName = "Performance: Company Settings"

export const ManagerLabFourWeekCycleStory = () => (
  <ManagerLabFourWeekCycle alt="" />
)
ManagerLabFourWeekCycleStory.storyName = "Manager Lab: 4 week cycle"

export const ManagerLabSchedulingStory = () => <ManagerLabScheduling alt="" />
ManagerLabSchedulingStory.storyName = "Manager Lab: Scheduling"

export const ManagerLearningManagerHubStory = () => (
  <ManagerLearningManagerHub alt="" />
)
ManagerLearningManagerHubStory.storyName = "Manager Learning: Manager Hub"

export const ManagerLearningCoachingStory = () => (
  <ManagerLearningCoaching alt="" />
)
ManagerLearningCoachingStory.storyName = "Manager Learning: Coaching"

export const ManagerLearningFeedbackStory = () => (
  <ManagerLearningFeedback alt="" />
)
ManagerLearningFeedbackStory.storyName = "Manager Learning: Feedback"

export const ManagerLearningProductivityStory = () => (
  <ManagerLearningProductivity alt="" />
)
ManagerLearningProductivityStory.storyName = "Manager Learning: Productivity"

export const ManagerLearningResilienceStory = () => (
  <ManagerLearningResilience alt="" />
)
ManagerLearningResilienceStory.storyName = "Manager Learning: Resilience"

export const ManagerLearningOneOnOneMeetingsStory = () => (
  <ManagerLearningOneOnOneMeetings alt="" />
)
ManagerLearningOneOnOneMeetingsStory.storyName =
  "Manager Learning: 1 On 1 Meetings"

export const ManagerLearningStrategyStory = () => (
  <ManagerLearningStrategy alt="" />
)
ManagerLearningStrategyStory.storyName = "Manager Learning: Strategy"

export const ManagerLearningRemoteManagerStory = () => (
  <ManagerLearningRemoteManager alt="" />
)
ManagerLearningRemoteManagerStory.storyName = "Manager Learning: Remote Manager"

export const ProgramsStory = () => <Programs alt="" />
ProgramsStory.storyName = "Programs"

export const KaizenSiteBrandAltStory = () => <KaizenSiteBrandAlt alt="" />
KaizenSiteBrandAltStory.storyName = "Kaizen Site: Brand Alt"

export const KaizenSiteBrandStory = () => <KaizenSiteBrand alt="" />
KaizenSiteBrandStory.storyName = "Kaizen Site: Brand"

export const KaizenSiteLanguageAltStory = () => <KaizenSiteLanguageAlt alt="" />
KaizenSiteLanguageAltStory.storyName = "Kaizen Site: Language Alt"

export const KaizenSiteLanguageStory = () => <KaizenSiteLanguage alt="" />
KaizenSiteLanguageStory.storyName = "Kaizen Site: Language"

export const KaizenSitePrinciplesStory = () => <KaizenSitePrinciples alt="" />
KaizenSitePrinciplesStory.storyName = "Kaizen Site: Principles"

export const KaizenSitePrinciplesAltStory = () => (
  <KaizenSitePrinciplesAlt alt="" />
)
KaizenSitePrinciplesAltStory.storyName = "Kaizen Site: Principles Alt"
export const KaizenSiteProductStory = () => <KaizenSiteProduct alt="" />
KaizenSiteProductStory.storyName = "Kaizen Site: Product"

export const KaizenSiteProductAltStory = () => <KaizenSiteProductAlt alt="" />
KaizenSiteProductAltStory.storyName = "Kaizen Site: Product Alt"

export const KaizenSiteResourcesStory = () => <KaizenSiteResources alt="" />
KaizenSiteResourcesStory.storyName = "Kaizen Site: Resources"

export const KaizenSiteResourcesAltStory = () => (
  <KaizenSiteResourcesAlt alt="" />
)
KaizenSiteResourcesAltStory.storyName = "Kaizen Site: Resources Alt"

export const SurveyOverviewClosedStory = () => <SurveyOverviewClosed alt="" />
SurveyOverviewClosedStory.storyName = "Survey Overview: Closed Survey"

export const SurveyGetStartedStory = () => <SurveyGetStarted alt="" />
SurveyGetStartedStory.storyName = "Survey Overview: Get Started"
