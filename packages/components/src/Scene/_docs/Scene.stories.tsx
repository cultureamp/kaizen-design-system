import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Base } from "../Base"
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
  Collaboration,
  Communication,
  CompanyValues,
  ConnectTheDots,
  CultureLab,
  TermsAgreement,
  Programs,
  PerformanceCompanySettings,
  EngagementSurveySummaryFemale,
  EngagementSurveySummaryMale,
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
  SkillsCoachEssentialProductivity,
  SkillsCoachEssentialResilience,
  SkillsCoachInfluentialCommunication,
  SkillsCoachLeadingChange,
  SkillsCoachFeedback,
  SkillsCoachManagerHub,
  SkillsCoachProductivity,
  SkillsCoachRemoteManager,
  SkillsCoachResilience,
  SkillsCoachStrategy,
  SurveyGetStarted,
  SurveyOverviewClosed,
} from ".."

const meta = {
  title: "Components/Scene",
  component: Base,
  args: {},
} satisfies Meta<typeof Base>

export default meta

export const Playground = {
  render: () => <EmptyStatesAction isAnimated={true} />,
}

export const EmptyStatesActionStory = {
  render: () => <EmptyStatesAction isAnimated={true} />,
}
export const EmptyStatesInformativeStory = {
  render: () => <EmptyStatesInformative isAnimated={true} />,
}
export const EmptyStatesNegativeStory = {
  render: () => <EmptyStatesNegative isAnimated={true} />,
}
export const EmptyStatesNeutralStory = {
  render: () => <EmptyStatesNeutral isAnimated={true} />,
}
export const EmptyStatesPositiveStory = {
  render: () => <EmptyStatesPositive isAnimated={true} />,
}
export const Information360UpgradeStory = {
  render: () => <Information360Upgrade />,
}
export const InformationDemographicFocusStory = {
  render: () => <InformationDemographicFocus />,
}
export const InformationEmergingTrendsStory = {
  render: () => <InformationEmergingTrends />,
}
export const InformationEmployeeLifecycleStory = {
  render: () => <InformationEmployeeLifecycle />,
}
export const InformationReportOwnerStory = {
  render: () => <InformationReportOwner />,
}
export const InformationReportOwnerByRuleStory = {
  render: () => <InformationReportOwnerByRule />,
}
export const InformationTurnoverCalculatorStory = {
  render: () => <InformationTurnoverCalculator />,
}
export const InformationTurnoverForecastStory = {
  render: () => <InformationTurnoverForecast />,
}
export const CollaborationStory = {
  render: () => <Collaboration />,
}
export const CommunicationStory = {
  render: () => <Communication />,
}
export const CompanyValuesStory = {
  render: () => <CompanyValues />,
}
export const ConnectTheDotsStory = {
  render: () => <ConnectTheDots />,
}
export const CultureLabStory = {
  render: () => <CultureLab />,
}
export const TermsAgreementStory = {
  render: () => <TermsAgreement />,
}
export const ProgramsStory = {
  render: () => <Programs />,
}
export const PerformanceCompanySettingsStory = {
  render: () => <PerformanceCompanySettings />,
}
export const EngagementSurveySummaryFemaleStory = {
  render: () => <EngagementSurveySummaryFemale />,
}
export const EngagementSurveySummaryMaleStory = {
  render: () => <EngagementSurveySummaryMale />,
}
export const BrandMomentNewAccountOnboardingStory = {
  render: () => <BrandMomentNewAccountOnboarding />,
}
export const BrandMomentUploadEmployeeDataStory = {
  render: () => <BrandMomentUploadEmployeeData />,
}
export const BrandMomentPositiveOutroStory = {
  render: () => <BrandMomentPositiveOutro isAnimated={true} />,
}
export const BrandMomentLoginStory = {
  render: () => <BrandMomentLogin isAnimated={true} />,
}
export const BrandMomentErrorStory = {
  render: () => <BrandMomentError isAnimated={true} />,
}
export const BrandMomentStarterKitStory = {
  render: () => <BrandMomentStarterKit />,
}
export const SkillsCoach1On1MeetingsStory = {
  render: () => <SkillsCoach1On1Meetings />,
}
export const SkillsCoachCoachingStory = {
  render: () => <SkillsCoachCoaching />,
}
export const SkillsCoachEmployeeDevelopmentStory = {
  render: () => <SkillsCoachEmployeeDevelopment />,
}
export const SkillsCoachEssentialFeedbackStory = {
  render: () => <SkillsCoachEssentialFeedback />,
}
export const SkillsCoachEssentialProductivityStory = {
  render: () => <SkillsCoachEssentialProductivity />,
}
export const SkillsCoachEssentialResilienceStory = {
  render: () => <SkillsCoachEssentialResilience />,
}
export const SkillsCoachInfluentialCommunicationStory = {
  render: () => <SkillsCoachInfluentialCommunication />,
}
export const SkillsCoachLeadingChangeStory = {
  render: () => <SkillsCoachLeadingChange />,
}
export const SkillsCoachFeedbackStory = {
  render: () => <SkillsCoachFeedback />,
}
export const SkillsCoachManagerHubStory = {
  render: () => <SkillsCoachManagerHub />,
}
export const SkillsCoachProductivityStory = {
  render: () => <SkillsCoachProductivity />,
}
export const SkillsCoachRemoteManagerStory = {
  render: () => <SkillsCoachRemoteManager />,
}
export const SkillsCoachResilienceStory = {
  render: () => <SkillsCoachResilience />,
}
export const SkillsCoachStrategyStory = {
  render: () => <SkillsCoachStrategy />,
}
export const SurveyGetStartedStory = {
  render: () => <SurveyGetStarted />,
}
export const SurveyOverviewClosedStory = {
  render: () => <SurveyOverviewClosed />,
}

/**
 * @todo: Add your description here and use <Description /> in the MDX,
 * or write directly in the MDX.
 */

/**
export const Reversed: Story = {
  args: { isReversed: true },
}
*/
