import { Heading, Box } from "@kaizen/component-library"
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
  BrandMomentNewAccountOnboarding,
  BrandMomentUploadEmployeeData,
  BrandMomentPositiveOutro,
  BrandMomentLogin,
  BrandMomentError,
  BrandMomentStarterKit,
  SkillsCoach1On1Meetings,
  SkillsCoachCoaching,
  SkillsCoachEmployeeDevelopment,
  SkillsCoachEssentialFeedback,
  SkillsCoachFeedback,
  SkillsCoachManagerHub,
  SkillsCoachProductivity,
  SkillsCoachRemoteManager,
  SkillsCoachResilience,
  SkillsCoachStrategy,
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
          'import { SurveyOverviewClosed } from "@kaizen/draft-illustration"',
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
      <BrandMomentStarterKit {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <BrandMomentNewAccountOnboarding {...args} />
    </div>
    <div style={{ width: "450px" }}>
      <BrandMomentUploadEmployeeData {...args} />
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

export const DefaultSiteDemo = args => (
  <ManagerLearningResilience alt="" {...args} />
)
DefaultSiteDemo.storyName = "Scene (Kaizen Site Demo)"

export const EmptyStatesActionStory = args => (
  <EmptyStatesAction alt="" {...args} />
)
EmptyStatesActionStory.storyName = "Empty States: Action"

export const EmptyStatesInformativeStory = args => (
  <EmptyStatesInformative alt="" {...args} />
)
EmptyStatesInformativeStory.storyName = "Empty States: Informative"

export const EmptyStatesNegativeStory = args => (
  <EmptyStatesNegative alt="" {...args} />
)
EmptyStatesNegativeStory.storyName = "Empty States: Negative"

export const EmptyStatesPositiveStory = args => (
  <EmptyStatesPositive alt="" {...args} />
)
EmptyStatesPositiveStory.storyName = "Empty States: Positive"

export const EmptyStatesNeutralStory = args => (
  <EmptyStatesNeutral alt="" {...args} />
)
EmptyStatesNeutralStory.storyName = "Empty States: Neutral"

export const IntroductionsNewAccountStory = args => (
  <IntroductionsNewAccount alt="" {...args} />
)
IntroductionsNewAccountStory.storyName = "Introductions: New Account"

export const IntroductionsCaptureIntroStory = args => (
  <IntroductionsCaptureIntro alt="" {...args} />
)
IntroductionsCaptureIntroStory.storyName = "Introductions: Capture Intro"

export const IntroductionsPerformanceStory = args => (
  <IntroductionsPerformance alt="" {...args} />
)
IntroductionsPerformanceStory.storyName = "Introductions: Performance"

export const IntroductionsNewAdminStory = args => (
  <IntroductionsNewAdmin alt="" {...args} />
)
IntroductionsNewAdminStory.storyName = "Introductions: New Admin"

export const Information360UpgradeStory = args => (
  <Information360Upgrade alt="" {...args} />
)
Information360UpgradeStory.storyName = "Information Modals: 360 Upgrade"

export const InformationDemographicFocusStory = args => (
  <InformationDemographicFocus alt="" {...args} />
)
InformationDemographicFocusStory.storyName =
  "Information Modals: Demographic Focus"

export const InformationTurnoverCalculatorStory = args => (
  <InformationTurnoverCalculator alt="" {...args} />
)
InformationTurnoverCalculatorStory.storyName =
  "Information Modals: Turnover Calculator"

export const InformationTurnoverForecastStory = args => (
  <InformationTurnoverForecast alt="" {...args} />
)
InformationTurnoverForecastStory.storyName =
  "Information Modals: Turnover Forecast"

export const InformationEmergingTrendsStory = args => (
  <InformationEmergingTrends alt="" {...args} />
)
InformationEmergingTrendsStory.storyName = "Information Modals: Emerging Trends"

export const InformationEmployeeLifecycleStory = args => (
  <InformationEmployeeLifecycle alt="" {...args} />
)
InformationEmployeeLifecycleStory.storyName =
  "Information Modals: Employee Lifecycle"

export const InformationReportOwnerStory = args => (
  <InformationReportOwner alt="" {...args} />
)
InformationReportOwnerStory.storyName = "Information Modals: ReportOwner"

export const InformationReportOwnerByRuleStory = args => (
  <InformationReportOwnerByRule alt="" {...args} />
)
InformationReportOwnerByRuleStory.storyName =
  "Information Modals: Report Owner By Rule"

export const PerformanceEvaluationsStory = args => (
  <PerformanceEvaluations alt="" {...args} />
)
PerformanceEvaluationsStory.storyName = "Performance: Evaluations"

export const PerformanceCalibrationStory = args => (
  <PerformanceCalibration alt="" {...args} />
)
PerformanceCalibrationStory.storyName = "Performance: Calibration"

export const PerformanceFaqStory = args => <PerformanceFaq alt="" {...args} />
PerformanceFaqStory.storyName = "Performance: Faq"

export const PerformancePerformanceFeedbackStory = args => (
  <PerformancePerformanceFeedback alt="" {...args} />
)
PerformancePerformanceFeedbackStory.storyName =
  "Performance: Performance Feedback"

export const PerformanceGoalStatsStory = args => (
  <PerformanceGoalStats alt="" {...args} />
)
PerformanceGoalStatsStory.storyName = "Performance: Goal Stats"

export const PerformanceGoalsStory = args => (
  <PerformanceGoals alt="" {...args} />
)
PerformanceGoalsStory.storyName = "Performance: Goals"

export const PerformancePeopleNetworkStory = args => (
  <PerformancePeopleNetwork alt="" {...args} />
)
PerformancePeopleNetworkStory.storyName = "Performance: People Network"

export const PerformanceSelfReflectionsStory = args => (
  <PerformanceSelfReflections alt="" {...args} />
)
PerformanceSelfReflectionsStory.storyName = "Performance: Self Reflections"

export const PerformanceSupportStory = args => (
  <PerformanceSupport alt="" {...args} />
)
PerformanceSupportStory.storyName = "Performance: Support"

export const PerformanceTeamSummaryStory = args => (
  <PerformanceTeamSummary alt="" {...args} />
)
PerformanceTeamSummaryStory.storyName = "Performance: Team Summary"

export const PerformanceCompanySettingsStory = args => (
  <PerformanceCompanySettings alt="" {...args} />
)
PerformanceCompanySettingsStory.storyName = "Performance: Company Settings"

export const ManagerLabFourWeekCycleStory = args => (
  <ManagerLabFourWeekCycle alt="" {...args} />
)
ManagerLabFourWeekCycleStory.storyName = "Manager Lab: 4 week cycle"

export const ManagerLabSchedulingStory = args => (
  <ManagerLabScheduling alt="" {...args} />
)
ManagerLabSchedulingStory.storyName = "Manager Lab: Scheduling"

export const ManagerLearningManagerHubStory = args => (
  <ManagerLearningManagerHub alt="" {...args} />
)
ManagerLearningManagerHubStory.storyName = "Manager Learning: Manager Hub"

export const ManagerLearningCoachingStory = args => (
  <ManagerLearningCoaching alt="" {...args} />
)
ManagerLearningCoachingStory.storyName = "Manager Learning: Coaching"

export const ManagerLearningFeedbackStory = args => (
  <ManagerLearningFeedback alt="" {...args} />
)
ManagerLearningFeedbackStory.storyName = "Manager Learning: Feedback"

export const ManagerLearningProductivityStory = args => (
  <ManagerLearningProductivity alt="" {...args} />
)
ManagerLearningProductivityStory.storyName = "Manager Learning: Productivity"

export const ManagerLearningResilienceStory = args => (
  <ManagerLearningResilience alt="" {...args} />
)
ManagerLearningResilienceStory.storyName = "Manager Learning: Resilience"

export const ManagerLearningOneOnOneMeetingsStory = args => (
  <ManagerLearningOneOnOneMeetings alt="" {...args} />
)
ManagerLearningOneOnOneMeetingsStory.storyName =
  "Manager Learning: 1 On 1 Meetings"

export const ManagerLearningStrategyStory = args => (
  <ManagerLearningStrategy alt="" {...args} />
)
ManagerLearningStrategyStory.storyName = "Manager Learning: Strategy"

export const ManagerLearningRemoteManagerStory = args => (
  <ManagerLearningRemoteManager alt="" {...args} />
)
ManagerLearningRemoteManagerStory.storyName = "Manager Learning: Remote Manager"

export const ProgramsStory = args => <Programs alt="" {...args} />
ProgramsStory.storyName = "Programs"

export const KaizenSiteBrandAltStory = args => (
  <KaizenSiteBrandAlt alt="" {...args} />
)
KaizenSiteBrandAltStory.storyName = "Kaizen Site: Brand Alt"

export const KaizenSiteBrandStory = args => <KaizenSiteBrand alt="" {...args} />
KaizenSiteBrandStory.storyName = "Kaizen Site: Brand"

export const KaizenSiteLanguageAltStory = args => (
  <KaizenSiteLanguageAlt alt="" {...args} />
)
KaizenSiteLanguageAltStory.storyName = "Kaizen Site: Language Alt"

export const KaizenSiteLanguageStory = args => (
  <KaizenSiteLanguage alt="" {...args} />
)
KaizenSiteLanguageStory.storyName = "Kaizen Site: Language"

export const KaizenSitePrinciplesStory = args => (
  <KaizenSitePrinciples alt="" {...args} />
)
KaizenSitePrinciplesStory.storyName = "Kaizen Site: Principles"

export const KaizenSitePrinciplesAltStory = args => (
  <KaizenSitePrinciplesAlt alt="" {...args} />
)
KaizenSitePrinciplesAltStory.storyName = "Kaizen Site: Principles Alt"
export const KaizenSiteProductStory = args => (
  <KaizenSiteProduct alt="" {...args} />
)
KaizenSiteProductStory.storyName = "Kaizen Site: Product"

export const KaizenSiteProductAltStory = args => (
  <KaizenSiteProductAlt alt="" {...args} />
)
KaizenSiteProductAltStory.storyName = "Kaizen Site: Product Alt"

export const KaizenSiteResourcesStory = args => (
  <KaizenSiteResources alt="" {...args} />
)
KaizenSiteResourcesStory.storyName = "Kaizen Site: Resources"

export const KaizenSiteResourcesAltStory = args => (
  <KaizenSiteResourcesAlt alt="" {...args} />
)
KaizenSiteResourcesAltStory.storyName = "Kaizen Site: Resources Alt"

export const SurveyOverviewClosedStory = args => (
  <SurveyOverviewClosed alt="" {...args} />
)
SurveyOverviewClosedStory.storyName = "Survey Overview: Closed Survey"

export const SurveyGetStartedStory = args => (
  <SurveyGetStarted alt="" {...args} />
)
SurveyGetStartedStory.storyName = "Survey Overview: Get Started"

export const SkillsCoachStory = args => (
  <>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            1-on-1 Meetings
          </Heading>
        </Box>
        <SkillsCoach1On1Meetings alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Coaching
          </Heading>
        </Box>
        <SkillsCoachCoaching alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Employee Development
          </Heading>
        </Box>
        <SkillsCoachEmployeeDevelopment alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Essential Feedback
          </Heading>
        </Box>
        <SkillsCoachEssentialFeedback alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Feedback
          </Heading>
        </Box>
        <SkillsCoachFeedback alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Manager Hub
          </Heading>
        </Box>
        <SkillsCoachManagerHub alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Productivity
          </Heading>
        </Box>
        <SkillsCoachProductivity alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Remote Manager
          </Heading>
        </Box>
        <SkillsCoachRemoteManager alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Resilience
          </Heading>
        </Box>
        <SkillsCoachResilience alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Strategy
          </Heading>
        </Box>
        <SkillsCoachStrategy alt="" {...args} />
      </div>
    </Box>
  </>
)
SkillsCoachStory.storyName = "Skills Coach"
