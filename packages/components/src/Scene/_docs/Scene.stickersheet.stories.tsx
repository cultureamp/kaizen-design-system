import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
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

export default {
  title: "Components/Scene",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Scene"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <EmptyStatesAction />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <EmptyStatesInformative />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <EmptyStatesNegative />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <EmptyStatesNeutral />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <EmptyStatesPositive />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <Information360Upgrade />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationDemographicFocus />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationEmergingTrends />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationEmployeeLifecycle />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationReportOwner />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationReportOwnerByRule />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationTurnoverCalculator />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <InformationTurnoverForecast />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <Collaboration />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <Communication />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <CompanyValues />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <ConnectTheDots />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <CultureLab />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <TermsAgreement />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <Programs />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <PerformanceCompanySettings />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <EngagementSurveySummaryFemale />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <EngagementSurveySummaryMale />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <BrandMomentNewAccountOnboarding />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <BrandMomentUploadEmployeeData />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <BrandMomentPositiveOutro />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <BrandMomentLogin />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <BrandMomentError />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <BrandMomentStarterKit />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoach1On1Meetings />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachCoaching />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachEmployeeDevelopment />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachEssentialFeedback />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachEssentialProductivity />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachEssentialResilience />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachInfluentialCommunication />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachLeadingChange />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachFeedback />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachManagerHub />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachProductivity />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachRemoteManager />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachResilience />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SkillsCoachStrategy />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SurveyGetStarted />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <SurveyOverviewClosed />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
