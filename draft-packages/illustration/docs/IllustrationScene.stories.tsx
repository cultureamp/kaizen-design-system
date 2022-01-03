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
  Collaboration,
  Communication,
  CompanyValues,
  ConnectTheDots,
  CultureLab,
  DataCatching,
  HumanityAtWork,
  TermsAgreement,
  Programs,
  EngagementSurveySummaryFemale,
  EngagementSurveySummaryMale,
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
} from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

const withFixedWidth = Story => (
  <div style={{ width: "500px" }}>
    <Story />
  </div>
)

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.illustration}/Scene`,
  component: EmptyStatesInformative,
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
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Capture Intro
          </Heading>
        </Box>
        <BrandMomentCaptureIntro {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Positive Outro
          </Heading>
        </Box>
        <BrandMomentPositiveOutro {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "800px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Login
          </Heading>
        </Box>
        <BrandMomentLogin {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Error
          </Heading>
        </Box>
        <BrandMomentError {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Starter Kit
          </Heading>
        </Box>
        <BrandMomentStarterKit {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            New Account Onboarding
          </Heading>
        </Box>
        <BrandMomentNewAccountOnboarding {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Upload Employee Data
          </Heading>
        </Box>
        <BrandMomentUploadEmployeeData {...args} />
      </div>
    </Box>
  </>
)
BrandMoments.args = {
  isAnimated: true,
  loop: true,
}

export const EmptyState = args => (
  <>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Action
          </Heading>
        </Box>
        <EmptyStatesAction {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Informative
          </Heading>
        </Box>
        <EmptyStatesInformative {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Negative
          </Heading>
        </Box>
        <EmptyStatesNegative {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Positive
          </Heading>
        </Box>
        <EmptyStatesPositive {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Neutral
          </Heading>
        </Box>
        <EmptyStatesNeutral {...args} />
      </div>
    </Box>
  </>
)
EmptyState.args = {
  isAnimated: true,
  loop: true,
}

export const InformationModals = args => (
  <>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            360 Upgrade
          </Heading>
        </Box>
        <Information360Upgrade {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Demographic Focus
          </Heading>
        </Box>
        <InformationDemographicFocus {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Turnover Calculator
          </Heading>
        </Box>
        <InformationTurnoverCalculator {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Turnover Forecast
          </Heading>
        </Box>
        <InformationTurnoverForecast {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Emerging Trends
          </Heading>
        </Box>
        <InformationEmergingTrends {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Employee Lifecycle
          </Heading>
        </Box>
        <InformationEmployeeLifecycle {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Report Owner
          </Heading>
        </Box>
        <InformationReportOwner {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Report Owner By Rule
          </Heading>
        </Box>
        <InformationReportOwnerByRule {...args} />
      </div>
    </Box>
  </>
)

export const Miscellaneous = args => (
  <>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Collaboration
          </Heading>
        </Box>
        <Collaboration {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Communication
          </Heading>
        </Box>
        <Communication {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Company Values
          </Heading>
        </Box>
        <CompanyValues {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Connect The Dots
          </Heading>
        </Box>
        <ConnectTheDots {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Culture Lab
          </Heading>
        </Box>
        <CultureLab {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Data Catching
          </Heading>
        </Box>
        <DataCatching {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Humanity At Work
          </Heading>
        </Box>
        <HumanityAtWork {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Terms Agreement
          </Heading>
        </Box>
        <TermsAgreement {...args} />
      </div>
    </Box>
  </>
)

export const SkillsCoach = args => (
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
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Essential Productivity
          </Heading>
        </Box>
        <SkillsCoachEssentialProductivity alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Essential Resilience
          </Heading>
        </Box>
        <SkillsCoachEssentialResilience alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Influential Communication
          </Heading>
        </Box>
        <SkillsCoachInfluentialCommunication alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Leading Change
          </Heading>
        </Box>
        <SkillsCoachLeadingChange alt="" {...args} />
      </div>
    </Box>
  </>
)

export const Engagement = args => (
  <>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Programs
          </Heading>
        </Box>
        <Programs alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Survey Summary (Female)
          </Heading>
        </Box>
        <EngagementSurveySummaryFemale alt="" {...args} />
      </div>
    </Box>
    <Box mb={3}>
      <div style={{ width: "450px" }}>
        <Box mb={1}>
          <Heading variant="heading-4" tag="div">
            Survey Summary (Male)
          </Heading>
        </Box>
        <EngagementSurveySummaryMale alt="" {...args} />
      </div>
    </Box>
  </>
)
