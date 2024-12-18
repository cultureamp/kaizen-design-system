import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'

import {
  BrandMomentError,
  BrandMomentLogin,
  BrandMomentNewAccountOnboarding,
  BrandMomentPositiveOutro,
  BrandMomentStarterKit,
  BrandMomentUploadEmployeeData,
  Collaboration,
  Communication,
  CompanyValues,
  ConnectTheDots,
  CultureLab,
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
  EngagementSurveySummaryFemale,
  EngagementSurveySummaryMale,
  Information360Upgrade,
  InformationDemographicFocus,
  InformationEmergingTrends,
  InformationEmployeeLifecycle,
  InformationReportOwner,
  InformationReportOwnerByRule,
  InformationTurnoverCalculator,
  InformationTurnoverForecast,
  PerformanceCompanySettings,
  Programs,
  SkillsCoach1On1Meetings,
  SkillsCoachCoaching,
  SkillsCoachEmployeeDevelopment,
  SkillsCoachEssentialFeedback,
  SkillsCoachEssentialProductivity,
  SkillsCoachEssentialResilience,
  SkillsCoachFeedback,
  SkillsCoachInfluentialCommunication,
  SkillsCoachLeadingChange,
  SkillsCoachManagerHub,
  SkillsCoachProductivity,
  SkillsCoachRemoteManager,
  SkillsCoachResilience,
  SkillsCoachStrategy,
  SurveyGetStarted,
  SurveyOverviewClosed,
  TermsAgreement,
} from '../index'

export default {
  title: 'Components/Illustrations/Scene',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet
      isReversed={isReversed}
      style={{ gridTemplateColumns: 'fit-content(100%) 400px' }}
    >
      <StickerSheet.Row header="EmptyStatesAction">
        <EmptyStatesAction />
      </StickerSheet.Row>
      <StickerSheet.Row header="EmptyStatesInformative">
        <EmptyStatesInformative />
      </StickerSheet.Row>
      <StickerSheet.Row header="EmptyStatesNegative">
        <EmptyStatesNegative />
      </StickerSheet.Row>
      <StickerSheet.Row header="EmptyStatesNeutral">
        <EmptyStatesNeutral />
      </StickerSheet.Row>
      <StickerSheet.Row header="EmptyStatesPositive">
        <EmptyStatesPositive />
      </StickerSheet.Row>
      <StickerSheet.Row header="Information360Upgrade">
        <Information360Upgrade />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationDemographicFocus">
        <InformationDemographicFocus />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationEmergingTrends">
        <InformationEmergingTrends />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationEmployeeLifecycle">
        <InformationEmployeeLifecycle />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationReportOwner">
        <InformationReportOwner />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationReportOwnerByRule">
        <InformationReportOwnerByRule />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationTurnoverCalculator">
        <InformationTurnoverCalculator />
      </StickerSheet.Row>
      <StickerSheet.Row header="InformationTurnoverForecast">
        <InformationTurnoverForecast />
      </StickerSheet.Row>
      <StickerSheet.Row header="Collaboration">
        <Collaboration />
      </StickerSheet.Row>
      <StickerSheet.Row header="Communication">
        <Communication />
      </StickerSheet.Row>
      <StickerSheet.Row header="CompanyValues">
        <CompanyValues />
      </StickerSheet.Row>
      <StickerSheet.Row header="ConnectTheDots">
        <ConnectTheDots />
      </StickerSheet.Row>
      <StickerSheet.Row header="CultureLab">
        <CultureLab />
      </StickerSheet.Row>
      <StickerSheet.Row header="TermsAgreement">
        <TermsAgreement />
      </StickerSheet.Row>
      <StickerSheet.Row header="Programs">
        <Programs />
      </StickerSheet.Row>
      <StickerSheet.Row header="PerformanceCompanySettings">
        <PerformanceCompanySettings />
      </StickerSheet.Row>
      <StickerSheet.Row header="EngagementSurveySummaryFemale">
        <EngagementSurveySummaryFemale />
      </StickerSheet.Row>
      <StickerSheet.Row header="EngagementSurveySummaryMale">
        <EngagementSurveySummaryMale />
      </StickerSheet.Row>
      <StickerSheet.Row header="BrandMomentNewAccountOnboarding">
        <BrandMomentNewAccountOnboarding />
      </StickerSheet.Row>
      <StickerSheet.Row header="BrandMomentUploadEmployeeData">
        <BrandMomentUploadEmployeeData />
      </StickerSheet.Row>
      <StickerSheet.Row header="BrandMomentPositiveOutro">
        <BrandMomentPositiveOutro />
      </StickerSheet.Row>
      <StickerSheet.Row header="BrandMomentLogin">
        <BrandMomentLogin />
      </StickerSheet.Row>
      <StickerSheet.Row header="BrandMomentError">
        <BrandMomentError />
      </StickerSheet.Row>
      <StickerSheet.Row header="BrandMomentStarterKit">
        <BrandMomentStarterKit />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoach1On1Meetings">
        <SkillsCoach1On1Meetings />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachCoaching">
        <SkillsCoachCoaching />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachEmployeeDevelopment">
        <SkillsCoachEmployeeDevelopment />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachEssentialFeedback">
        <SkillsCoachEssentialFeedback />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachEssentialProductivity">
        <SkillsCoachEssentialProductivity />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachEssentialResilience">
        <SkillsCoachEssentialResilience />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachInfluentialCommunication">
        <SkillsCoachInfluentialCommunication />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachLeadingChange">
        <SkillsCoachLeadingChange />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachFeedback">
        <SkillsCoachFeedback />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachManagerHub">
        <SkillsCoachManagerHub />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachProductivity">
        <SkillsCoachProductivity />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachRemoteManager">
        <SkillsCoachRemoteManager />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachResilience">
        <SkillsCoachResilience />
      </StickerSheet.Row>
      <StickerSheet.Row header="SkillsCoachStrategy">
        <SkillsCoachStrategy />
      </StickerSheet.Row>
      <StickerSheet.Row header="SurveyGetStarted">
        <SurveyGetStarted />
      </StickerSheet.Row>
      <StickerSheet.Row header="SurveyOverviewClosed">
        <SurveyOverviewClosed />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
