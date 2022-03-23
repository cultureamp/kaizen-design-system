import React from "react"
import { Story } from "@storybook/react"
import isChromatic from "chromatic"
import { Box } from "@kaizen/component-library"
import { Heading } from "@kaizen/typography"
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
  PerformanceCompanySettings,
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
  SurveyGetStarted,
  SurveyOverviewClosed,
  AnimatedSceneProps,
  SceneProps,
} from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

const IS_CHROMATIC = isChromatic()

const STATIC_SCENE_CONTROLS = {
  argTypes: {
    isAnimated: { table: { disable: true } },
    loop: { table: { disable: true } },
    autoplay: { table: { disable: true } },
    onEnded: { table: { disable: true } },
  },
}

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.illustration}/Scene`,
  component: BrandMomentCaptureIntro,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component:
          'import { SurveyOverviewClosed } from "@kaizen/draft-illustration"',
      },
    },
  },
  argTypes: {
    sceneComponents: { table: { disable: true } },
    fallback: { table: { disable: true } },
    source: { table: { disable: true } },
  },
}

const SceneWrapper: React.VFC<{
  children: React.ReactNode
  heading: string
  width: string
}> = ({ children, heading, width }) => (
  <Box mb={3}>
    <div style={{ width }}>
      <Box mb={1}>
        <Heading variant="heading-4" tag="div">
          {heading}
        </Heading>
      </Box>
      {children}
    </div>
  </Box>
)

type StaticSceneProps = SceneProps & {
  isAnimated?: never
  loop?: never
  autoplay?: never
}
type AnimatedScene = React.VFC<AnimatedSceneProps>
type StaticScene = React.VFC<StaticSceneProps>
type IllustrationScene = AnimatedScene | StaticScene

type SceneComponents = Array<{
  Component: IllustrationScene
  heading: string
  width?: string
}>

const isAnimatedScene = (
  Component: IllustrationScene
): Component is AnimatedScene => Component.toString().includes("isAnimated")

const IllustrationScenesTemplate: Story<
  (AnimatedSceneProps | StaticSceneProps) & { sceneComponents: SceneComponents }
> = ({ sceneComponents, ...restArgs }) => {
  const { isAnimated, loop, autoplay, alt = "", ...restProps } = restArgs
  const isAnimatedStory = IS_CHROMATIC ? false : isAnimated
  return (
    <>
      {sceneComponents.map(({ Component, heading, width }) => {
        const sceneWrapperProps = {
          key: heading,
          width: width || "450px",
          heading,
        }
        if (isAnimatedScene(Component)) {
          return (
            <SceneWrapper {...sceneWrapperProps}>
              {isAnimatedStory ? (
                <Component
                  isAnimated={true}
                  loop={loop}
                  autoplay={autoplay}
                  {...restProps}
                />
              ) : (
                <Component isAnimated={false} alt={alt} {...restProps} />
              )}
            </SceneWrapper>
          )
        }

        return (
          <SceneWrapper {...sceneWrapperProps}>
            <Component alt={alt} {...restProps} />
          </SceneWrapper>
        )
      })}
    </>
  )
}

const BRAND_MOMENTS_COMPONENTS: SceneComponents = [
  {
    Component: BrandMomentCaptureIntro,
    heading: "Capture Intro",
  },
  {
    Component: BrandMomentPositiveOutro,
    heading: "Positive Outro",
  },
  {
    Component: BrandMomentLogin,
    heading: "Login",
    width: "800px",
  },
  {
    Component: BrandMomentError,
    heading: "Error",
  },
  {
    Component: BrandMomentStarterKit,
    heading: "Starter Kit",
  },
  {
    Component: BrandMomentNewAccountOnboarding,
    heading: "New Account Onboarding",
  },
  {
    Component: BrandMomentUploadEmployeeData,
    heading: "Upload Employee Data",
  },
]

export const BrandMoments = IllustrationScenesTemplate.bind({})
BrandMoments.args = {
  sceneComponents: BRAND_MOMENTS_COMPONENTS,
  isAnimated: true,
  loop: true,
}

const EMPTY_STATE_COMPONENTS: SceneComponents = [
  {
    Component: EmptyStatesAction,
    heading: "Action",
  },
  {
    Component: EmptyStatesInformative,
    heading: "Informative",
  },
  {
    Component: EmptyStatesNegative,
    heading: "Negative",
  },
  {
    Component: EmptyStatesPositive,
    heading: "Positive",
  },
  {
    Component: EmptyStatesNeutral,
    heading: "Neutral",
  },
]

export const EmptyState = IllustrationScenesTemplate.bind({})
EmptyState.args = {
  sceneComponents: EMPTY_STATE_COMPONENTS,
  isAnimated: true,
  loop: true,
}

const INFORMATION_MODALS_COMPONENTS: SceneComponents = [
  {
    Component: Information360Upgrade,
    heading: "360 Upgrade",
  },
  {
    Component: InformationDemographicFocus,
    heading: "Demographic Focus",
  },
  {
    Component: InformationTurnoverCalculator,
    heading: "Turnover Calculator",
  },
  {
    Component: InformationTurnoverForecast,
    heading: "Turnover Forecast",
  },
  {
    Component: InformationEmergingTrends,
    heading: "Emerging Trends",
  },
  {
    Component: InformationEmployeeLifecycle,
    heading: "Employee Lifecycle",
  },
  {
    Component: InformationReportOwner,
    heading: "Report Owner",
  },
  {
    Component: InformationReportOwnerByRule,
    heading: "Report Owner By Rule",
  },
]

export const InformationModals = IllustrationScenesTemplate.bind({})
InformationModals.story = { ...STATIC_SCENE_CONTROLS }
InformationModals.args = {
  sceneComponents: INFORMATION_MODALS_COMPONENTS,
}

const MISCELLANEOUS_COMPONENTS: SceneComponents = [
  {
    Component: Collaboration,
    heading: "Collaboration",
  },
  {
    Component: Communication,
    heading: "Communication",
  },
  {
    Component: CompanyValues,
    heading: "Company Values",
  },
  {
    Component: ConnectTheDots,
    heading: "Connect The Dots",
  },
  {
    Component: CultureLab,
    heading: "Culture Lab",
  },
  {
    Component: DataCatching,
    heading: "Data Catching",
  },
  {
    Component: HumanityAtWork,
    heading: "Humanity At Work",
  },
  {
    Component: TermsAgreement,
    heading: "Terms Agreement",
  },
  {
    Component: PerformanceCompanySettings,
    heading: "Performance Company Settings",
  },
]

export const Miscellaneous = IllustrationScenesTemplate.bind({})
Miscellaneous.story = { ...STATIC_SCENE_CONTROLS }
Miscellaneous.args = {
  sceneComponents: MISCELLANEOUS_COMPONENTS,
}

const SKILLS_COACH_COMPONENTS: SceneComponents = [
  {
    Component: SkillsCoach1On1Meetings,
    heading: "1-on-1 Meetings",
  },
  {
    Component: SkillsCoachCoaching,
    heading: "Coaching",
  },
  {
    Component: SkillsCoachEmployeeDevelopment,
    heading: "Employee Development",
  },
  {
    Component: SkillsCoachEssentialFeedback,
    heading: "Essential Feedback",
  },
  {
    Component: SkillsCoachFeedback,
    heading: "Feedback",
  },
  {
    Component: SkillsCoachManagerHub,
    heading: "Manager Hub",
  },
  {
    Component: SkillsCoachProductivity,
    heading: "Productivity",
  },
  {
    Component: SkillsCoachRemoteManager,
    heading: "Remote Manager",
  },
  {
    Component: SkillsCoachResilience,
    heading: "Resilience",
  },
  {
    Component: SkillsCoachStrategy,
    heading: "Strategy",
  },
  {
    Component: SkillsCoachEssentialProductivity,
    heading: "Essential Productivity",
  },
  {
    Component: SkillsCoachEssentialResilience,
    heading: "Essential Resilience",
  },
  {
    Component: SkillsCoachInfluentialCommunication,
    heading: "Influential Communication",
  },
  {
    Component: SkillsCoachLeadingChange,
    heading: "Leading Change",
  },
]

export const SkillsCoach = IllustrationScenesTemplate.bind({})
SkillsCoach.story = { ...STATIC_SCENE_CONTROLS }
SkillsCoach.args = {
  sceneComponents: SKILLS_COACH_COMPONENTS,
}

const SURVEY_COMPONENTS: SceneComponents = [
  {
    Component: SurveyGetStarted,
    heading: "Survey Get Started",
  },
  {
    Component: SurveyOverviewClosed,
    heading: "Survey Overview Closed",
  },
]

export const Survey = IllustrationScenesTemplate.bind({})
Survey.story = { ...STATIC_SCENE_CONTROLS }
Survey.args = {
  sceneComponents: SURVEY_COMPONENTS,
}

const ENGAGEMENT_COMPONENTS: SceneComponents = [
  {
    Component: Programs,
    heading: "Programs",
  },
  {
    Component: EngagementSurveySummaryFemale,
    heading: "Survey Summary (Female)",
  },
  {
    Component: EngagementSurveySummaryMale,
    heading: "Survey Summary (Male)",
  },
]

export const Engagement = IllustrationScenesTemplate.bind({})
Engagement.story = { ...STATIC_SCENE_CONTROLS }
Engagement.args = {
  sceneComponents: ENGAGEMENT_COMPONENTS,
}
