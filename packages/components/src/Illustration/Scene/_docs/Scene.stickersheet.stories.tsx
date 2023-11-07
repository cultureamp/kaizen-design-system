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
} from "../index"

export default {
  title: "Components/Illustrations/Scene",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          EmptyStatesAction
          <StickerSheet.Cell width={400}>
            <EmptyStatesAction />
          </StickerSheet.Cell>
        </StickerSheet.Row>
        <StickerSheet.Row>
          EmptyStatesInformative
          <EmptyStatesInformative />
        </StickerSheet.Row>
        <StickerSheet.Row>
          EmptyStatesNegative
          <EmptyStatesNegative />
        </StickerSheet.Row>
        <StickerSheet.Row>
          EmptyStatesNeutral
          <EmptyStatesNeutral />
        </StickerSheet.Row>
        <StickerSheet.Row>
          EmptyStatesPositive
          <EmptyStatesPositive />
        </StickerSheet.Row>
        <StickerSheet.Row>
          Information360Upgrade
          <Information360Upgrade />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationDemographicFocus
          <InformationDemographicFocus />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationEmergingTrends
          <InformationEmergingTrends />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationEmployeeLifecycle
          <InformationEmployeeLifecycle />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationReportOwner
          <InformationReportOwner />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationReportOwnerByRule
          <InformationReportOwnerByRule />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationTurnoverCalculator
          <InformationTurnoverCalculator />
        </StickerSheet.Row>
        <StickerSheet.Row>
          InformationTurnoverForecast
          <InformationTurnoverForecast />
        </StickerSheet.Row>
        <StickerSheet.Row>
          Collaboration
          <Collaboration />
        </StickerSheet.Row>
        <StickerSheet.Row>
          Communication
          <Communication />
        </StickerSheet.Row>
        <StickerSheet.Row>
          CompanyValues
          <CompanyValues />
        </StickerSheet.Row>
        <StickerSheet.Row>
          ConnectTheDots
          <ConnectTheDots />
        </StickerSheet.Row>
        <StickerSheet.Row>
          CultureLab
          <CultureLab />
        </StickerSheet.Row>
        <StickerSheet.Row>
          TermsAgreement
          <TermsAgreement />
        </StickerSheet.Row>
        <StickerSheet.Row>
          Programs
          <Programs />
        </StickerSheet.Row>
        <StickerSheet.Row>
          PerformanceCompanySettings
          <PerformanceCompanySettings />
        </StickerSheet.Row>
        <StickerSheet.Row>
          EngagementSurveySummaryFemale
          <EngagementSurveySummaryFemale />
        </StickerSheet.Row>
        <StickerSheet.Row>
          EngagementSurveySummaryMale
          <EngagementSurveySummaryMale />
        </StickerSheet.Row>
        <StickerSheet.Row>
          BrandMomentNewAccountOnboarding
          <BrandMomentNewAccountOnboarding />
        </StickerSheet.Row>
        <StickerSheet.Row>
          BrandMomentUploadEmployeeData
          <BrandMomentUploadEmployeeData />
        </StickerSheet.Row>
        <StickerSheet.Row>
          BrandMomentPositiveOutro
          <BrandMomentPositiveOutro />
        </StickerSheet.Row>
        <StickerSheet.Row>
          BrandMomentLogin
          <BrandMomentLogin />
        </StickerSheet.Row>
        <StickerSheet.Row>
          BrandMomentError
          <BrandMomentError />
        </StickerSheet.Row>
        <StickerSheet.Row>
          BrandMomentStarterKit
          <BrandMomentStarterKit />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoach1On1Meetings
          <SkillsCoach1On1Meetings />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachCoaching
          <SkillsCoachCoaching />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachEmployeeDevelopment
          <SkillsCoachEmployeeDevelopment />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachEssentialFeedback
          <SkillsCoachEssentialFeedback />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachEssentialProductivity
          <SkillsCoachEssentialProductivity />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachEssentialResilience
          <SkillsCoachEssentialResilience />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachInfluentialCommunication
          <SkillsCoachInfluentialCommunication />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachLeadingChange
          <SkillsCoachLeadingChange />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachFeedback
          <SkillsCoachFeedback />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachManagerHub
          <SkillsCoachManagerHub />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachProductivity
          <SkillsCoachProductivity />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachRemoteManager
          <SkillsCoachRemoteManager />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachResilience
          <SkillsCoachResilience />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SkillsCoachStrategy
          <SkillsCoachStrategy />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SurveyGetStarted
          <SurveyGetStarted />
        </StickerSheet.Row>
        <StickerSheet.Row>
          SurveyOverviewClosed
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
