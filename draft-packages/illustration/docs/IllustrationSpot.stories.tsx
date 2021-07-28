import * as React from "react"
import { Heading, Paragraph } from "@kaizen/component-library"
import {
  AccountBasics,
  Action,
  AddImage,
  AddUser,
  Assertive,
  BaselineSurvey,
  BenefitsSurvey,
  BlankSurvey,
  CandidateSurvey,
  Cautionary,
  CompanyDetails,
  ChangeReadiness,
  ChangeSuccess,
  Coaching,
  CustomOnboardSurvey,
  CustomSurvey,
  CustomUnattributedSurvey,
  EmergencyResponse,
  EmployeeData,
  EngagementSurvey,
  ExecutiveReportSharing,
  ExitSurvey,
  FastAction,
  Feedback,
  Gdpr,
  GeneralOnboardSurvey,
  InclusionSurvey,
  Individual180,
  Individual360,
  Informative,
  InternSurvey,
  LeaderReportSharing,
  Leadership180,
  Leadership360,
  LeadingThroughCrisis,
  Manager180,
  Manager360,
  ManagerLearning,
  ManagerReportSharing,
  MeetingVoices,
  Negative,
  OneOnOne,
  PerformanceDiagnostics,
  PhasedWeek1OnboardSurvey,
  PhasedWeek5OnboardSurvey,
  Positive,
  Productivity,
  QuickEngagementSurvey,
  ReadArticle,
  RemoteManager,
  RemoteOnboardSurvey,
  ReportSharing,
  Resilience,
  ShareReport,
  SinglePointOnboardSurvey,
  SpreadsheetTemplate,
  Strategy,
  TakeAim,
  Team,
  TeamEffectiveness1,
  TeamEffectiveness2,
  Timezone,
  Training1,
  Training2,
  Training3,
  ValuesSurvey1,
  ValuesSurvey2,
  Video,
  ViewReports,
  WellbeingSurvey1,
  WellbeingSurvey2,
  WellbeingSurvey3,
  Workshop,
  WellbeingSurvey,
  Response,
  RemoteWorkQSet,
  ReturnToWorkplace,
  PulseSurvey,
  Alarm,
  Fire,
  Fireworks,
  FullImport,
  HrisImport,
  PartialImport,
  Starburst,
  Stop,
  TrafficCone,
  Trophy,
  UnderConstruction,
  ValueAdd,
  Recommendation,
} from ".."

export default {
  title: "Components/Illustration/Spot",
  component: AccountBasics,
  parameters: {
    docs: {
      description: {
        component:
          'import { AccountBasics } from "@kaizen/draft-illustration";',
      },
    },
  },
}

export const SpotStoryForKaizenSite = () => (
  <div style={{ width: "150px" }}>
    <AccountBasics alt="" />
  </div>
)
SpotStoryForKaizenSite.storyName = "Spot (Kaizen Site Demo)"

const IllustrationExampleTile = ({ Component, name }) => (
  <div style={{ width: "150px", display: "inline-block", padding: "2rem" }}>
    <Component alt="" />
    <Paragraph variant="small">{name}</Paragraph>
  </div>
)

export const AllSpotIllustrations = () => {
  const engagementSpots = [
    {
      Component: BenefitsSurvey,
      name: "Benefits Survey",
    },
    {
      Component: CustomSurvey,
      name: "Custom Survey",
    },
    {
      Component: CustomUnattributedSurvey,
      name: "Custom Unattributed Survey",
    },
    {
      Component: EngagementSurvey,
      name: "Engagement Survey",
    },
    {
      Component: InclusionSurvey,
      name: "Inclusion Survey",
    },
    {
      Component: QuickEngagementSurvey,
      name: "Quick Engagement Survey",
    },
    {
      Component: ValuesSurvey1,
      name: "Values Survey 1",
    },
    {
      Component: ValuesSurvey2,
      name: "Values Survey 2",
    },
    {
      Component: WellbeingSurvey1,
      name: "Wellbeing Survey 1",
    },
    {
      Component: WellbeingSurvey2,
      name: "Wellbeing Survey 2",
    },
    {
      Component: WellbeingSurvey3,
      name: "Wellbeing Survey 3",
    },
    {
      Component: ChangeReadiness,
      name: "Change Readiness",
    },
    {
      Component: ChangeSuccess,
      name: "Change Success",
    },
    {
      Component: PerformanceDiagnostics,
      name: "Performance Diagnostics",
    },
    {
      Component: LeadingThroughCrisis,
      name: "Leading Through Crisis",
    },
    {
      Component: EmergencyResponse,
      name: "Emergency Response",
    },
  ]

  const experienceSpots = [
    {
      Component: PhasedWeek1OnboardSurvey,
      name: "Phased Week 1 Onboard Survey",
    },
    {
      Component: PhasedWeek5OnboardSurvey,
      name: "Phased Week 5 Onboard Survey",
    },
    {
      Component: RemoteOnboardSurvey,
      name: "Remote Onboard Survey",
    },
    {
      Component: GeneralOnboardSurvey,
      name: "General Onboard Survey",
    },
    {
      Component: CustomOnboardSurvey,
      name: "Custom Onboard Survey",
    },
    {
      Component: CandidateSurvey,
      name: "Candidate Survey",
    },
    {
      Component: ExitSurvey,
      name: "Exit Survey",
    },
    {
      Component: InternSurvey,
      name: "Intern Survey",
    },
    {
      Component: SinglePointOnboardSurvey,
      name: "Single Point Onboard Survey",
    },
  ]

  const performanceSpots = [
    {
      Component: Individual360,
      name: "Individual 360",
    },
    {
      Component: Leadership360,
      name: "Leadership 360",
    },
    {
      Component: Manager360,
      name: "Manager 360",
    },
    {
      Component: Individual180,
      name: "Individual 180",
    },
    {
      Component: Leadership180,
      name: "Leadership 180",
    },
    {
      Component: Manager180,
      name: "Manager 180",
    },
    {
      Component: TeamEffectiveness1,
      name: "Team Effectiveness 1",
    },
    {
      Component: TeamEffectiveness2,
      name: "Team Effectiveness 2",
    },
  ]

  const covidSpots = [
    {
      Component: Response,
      name: "COVID-19 Response",
    },
    {
      Component: WellbeingSurvey,
      name: "Wellbeing Survey",
    },
    {
      Component: RemoteWorkQSet,
      name: "Remote Work Q Set",
    },
    {
      Component: ReturnToWorkplace,
      name: "Return To Workplace",
    },
    {
      Component: PulseSurvey,
      name: "Pulse Survey",
    },
  ]

  const newAccountSpots = [
    {
      Component: AccountBasics,
      name: "Account Basics",
    },
    {
      Component: CompanyDetails,
      name: "Company Details",
    },
    {
      Component: EmployeeData,
      name: "Employee Data",
    },
    {
      Component: Gdpr,
      name: "GDPR",
    },
    {
      Component: Timezone,
      name: "Timezone",
    },
    {
      Component: AddUser,
      name: "Add User",
    },
  ]

  const moodSpots = [
    {
      Component: Cautionary,
      name: "Cautionary",
    },
    {
      Component: Informative,
      name: "Informative",
    },
    {
      Component: Negative,
      name: "Negative",
    },
    {
      Component: Assertive,
      name: "Assertive",
    },
    {
      Component: Positive,
      name: "Positive",
    },
  ]

  const managerLearningSpots = [
    {
      Component: OneOnOne,
      name: "1 on 1",
    },
    {
      Component: Productivity,
      name: "Productivity",
    },
    {
      Component: Strategy,
      name: "Strategy",
    },
    {
      Component: Resilience,
      name: "Resilience",
    },
    {
      Component: Coaching,
      name: "Coaching",
    },
    {
      Component: Feedback,
      name: "Feedback",
    },
    {
      Component: RemoteManager,
      name: "Remote Manager",
    },
    {
      Component: ManagerLearning,
      name: "Manager Learning",
    },
  ]

  const miscellaneousSpots = [
    {
      Component: ViewReports,
      name: "View Reports",
    },
    {
      Component: ReadArticle,
      name: "Read Article",
    },
    {
      Component: FastAction,
      name: "Fast Action",
    },
    {
      Component: BaselineSurvey,
      name: "Baseline Survey",
    },
    {
      Component: Team,
      name: "Team",
    },
    {
      Component: Recommendation,
      name: "Recommendation",
    },
    {
      Component: AddImage,
      name: "Add Image",
    },
    {
      Component: MeetingVoices,
      name: "Meeting Voices",
    },
    {
      Component: Workshop,
      name: "Workshop",
    },
    {
      Component: Video,
      name: "Video",
    },
    {
      Component: ReportSharing,
      name: "Report Sharing",
    },
    {
      Component: BlankSurvey,
      name: "Blank Survey",
    },
    {
      Component: TakeAim,
      name: "Take Aim",
    },
    {
      Component: Action,
      name: "Action",
    },
    {
      Component: Training1,
      name: "Training 1",
    },
    {
      Component: Training2,
      name: "Training 2",
    },
    {
      Component: Training3,
      name: "Training 3",
    },
    {
      Component: ShareReport,
      name: "Share Report",
    },
    {
      Component: ExecutiveReportSharing,
      name: "ExecutiveReportSharing",
    },
    {
      Component: ManagerReportSharing,
      name: "Manager Report Sharing",
    },
    {
      Component: LeaderReportSharing,
      name: "Leader Report Sharing",
    },
    {
      Component: SpreadsheetTemplate,
      name: "Spreadsheet Template",
    },
    {
      Component: FullImport,
      name: "Full Import",
    },
    {
      Component: PartialImport,
      name: "Partial Import",
    },
    {
      Component: HrisImport,
      name: "Hris Import",
    },
    {
      Component: Alarm,
      name: "Alarm",
    },
    {
      Component: Fire,
      name: "Fire",
    },
    {
      Component: UnderConstruction,
      name: "Under Construction",
    },
    {
      Component: Stop,
      name: "Stop",
    },
    {
      Component: Trophy,
      name: "Trophy",
    },
    {
      Component: TrafficCone,
      name: "Traffic Cone",
    },
    {
      Component: ValueAdd,
      name: "Value Add",
    },
    {
      Component: Starburst,
      name: "Starburst",
    },
    {
      Component: Fireworks,
      name: "Fireworks",
    },
  ]

  return (
    <>
      <div>
        <Heading variant="heading-3">Template Library / Engagement</Heading>
        {engagementSpots.map((props, i) => (
          <IllustrationExampleTile key={`engagement-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">Template Library / Experience</Heading>
        {experienceSpots.map((props, i) => (
          <IllustrationExampleTile key={`experience-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">Template Library / Performance</Heading>
        {performanceSpots.map((props, i) => (
          <IllustrationExampleTile key={`performance-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">Template Library / COVID-19</Heading>
        {covidSpots.map((props, i) => (
          <IllustrationExampleTile key={`covid-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">New Account</Heading>
        {newAccountSpots.map((props, i) => (
          <IllustrationExampleTile key={`new-account-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">Moods</Heading>
        {moodSpots.map((props, i) => (
          <IllustrationExampleTile key={`moods-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">Skills Coach</Heading>
        {managerLearningSpots.map((props, i) => (
          <IllustrationExampleTile key={`skills-coach-${i}`} {...props} />
        ))}
      </div>
      <div>
        <Heading variant="heading-3">Miscellaneous</Heading>
        {miscellaneousSpots.map((props, i) => (
          <IllustrationExampleTile key={`misc-${i}`} {...props} />
        ))}
      </div>
    </>
  )
}

export const AnimatedSpot = () => (
  <div style={{ width: "156px" }}>
    <Cautionary alt="Add useful alt text for screen readers" isAnimated loop />
    <Informative alt="Add useful alt text for screen readers" isAnimated loop />
    <Negative alt="Add useful alt text for screen readers" isAnimated loop />
    <Positive alt="Add useful alt text for screen readers" isAnimated loop />
    <Assertive alt="Add useful alt text for screen readers" isAnimated loop />
  </div>
)
AnimatedSpot.storyName = "Spot, animated"
