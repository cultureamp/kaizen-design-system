import React from "react"
import { StoryFn } from "@storybook/react"
import { Heading, Paragraph } from "@kaizen/typography"
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
  Company,
  CustomOnboardSurvey,
  CustomSurvey,
  CustomUnattributedSurvey,
  EmergencyResponse,
  EmployeeData,
  EndOfProbation,
  EngagementSurvey,
  ExecutiveReportSharing,
  ExitSurvey,
  EssentialResilience,
  EssentialProductivity,
  InfluentialCommunication,
  FastAction,
  Feedback,
  Gdpr,
  GeneralOnboardSurvey,
  HealthAndSafety,
  InclusionSurvey,
  Individual180,
  Individual360,
  Informative,
  Insights,
  InternSurvey,
  LeaderReportSharing,
  Leadership180,
  Leadership360,
  LeadingThroughCrisis,
  LeadingChange,
  Manager180,
  Manager360,
  ManagerLearning,
  ManagerReportSharing,
  MeetingVoices,
  Negative,
  NewWaysOfWorking,
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
  ReOnboarding,
  ReportSharing,
  Resilience,
  ShareReport,
  SinglePointOnboardSurvey,
  SpreadsheetTemplate,
  Strategy,
  TakeAim,
  Team1,
  Team2,
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
  PaperPen,
  DataVisualization,
  Community,
  BCorp,
  Resources,
  Goals,
  Communications,
  ScienceBackedTools,
  Microphone,
  PowerfulInsights,
  ActionPlans,
  Conversations,
  Process,
  SkillsDevelopment,
  ChangeAgents,
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
  Objective,
  London,
  Melbourne,
  NewYork,
  SanFrancisco,
  Behaviour,
  Learn,
  Templates,
  CalendarSync,
  SpotProps,
} from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Illustrations/Spot",
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

type IllustrationSpot = (props: SpotProps) => JSX.Element

export const SpotStoryForKaizenSite: StoryFn<typeof AccountBasics> = args => (
  <div style={{ width: "150px" }}>
    <AccountBasics {...args} />
  </div>
)
SpotStoryForKaizenSite.storyName = "Spot (Kaizen Site Demo)"

const IllustrationExampleTile = ({
  Component,
  name,
}: {
  Component: IllustrationSpot
  name: string
}): JSX.Element => (
  <div style={{ width: "150px", display: "inline-block", padding: "2rem" }}>
    <Component />
    <Paragraph variant="small">{name}</Paragraph>
  </div>
)

export const AllSpotIllustrations: StoryFn = () => {
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
    {
      Component: HealthAndSafety,
      name: "Health & Safety",
    },
    {
      Component: EndOfProbation,
      name: "End of Probation",
    },
    {
      Component: NewWaysOfWorking,
      name: "New Ways of Working",
    },
    {
      Component: ReOnboarding,
      name: "Re-onboarding",
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

  const officeSpots = [
    {
      Component: London,
      name: "London",
    },
    {
      Component: Melbourne,
      name: "Melbourne",
    },
    {
      Component: NewYork,
      name: "New York",
    },
    {
      Component: SanFrancisco,
      name: "San Francisco",
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
    {
      Component: EssentialProductivity,
      name: "Essential Productivity",
    },
    {
      Component: EssentialResilience,
      name: "Essential Resilience",
    },
    {
      Component: LeadingChange,
      name: "Leading Change",
    },
    {
      Component: InfluentialCommunication,
      name: "Influential Communication",
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
      Component: Team1,
      name: "Team1",
    },
    {
      Component: Team2,
      name: "Team2",
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
    {
      Component: Objective,
      name: "Objective",
    },
    {
      Component: PaperPen,
      name: "PaperPen",
    },
    {
      Component: DataVisualization,
      name: "Data Visualization",
    },
    {
      Component: Community,
      name: "Community",
    },
    {
      Component: BCorp,
      name: "B Corp",
    },
    {
      Component: Resources,
      name: "Resources",
    },
    {
      Component: Goals,
      name: "Goals",
    },
    {
      Component: Communications,
      name: "Communications",
    },
    {
      Component: ScienceBackedTools,
      name: "Science Backed Tools",
    },
    {
      Component: Microphone,
      name: "Microphone",
    },
    {
      Component: Company,
      name: "Company",
    },
    {
      Component: Insights,
      name: "Insights",
    },
    {
      Component: Behaviour,
      name: "Behaviour",
    },
    {
      Component: Learn,
      name: "Learn",
    },
    {
      Component: Templates,
      name: "Templates",
    },
    {
      Component: PowerfulInsights,
      name: "Powerful Insights",
    },
    {
      Component: ActionPlans,
      name: "Action Plans",
    },
    {
      Component: Conversations,
      name: "Conversations",
    },
    {
      Component: Process,
      name: "Process",
    },
    {
      Component: SkillsDevelopment,
      name: "Skills Development",
    },
    {
      Component: ChangeAgents,
      name: "Change Agents",
    },
    {
      Component: CalendarSync,
      name: "Calendar Sync",
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
        <Heading variant="heading-3">Offices</Heading>
        {officeSpots.map((props, i) => (
          <IllustrationExampleTile key={`offices-${i}`} {...props} />
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
AllSpotIllustrations.parameters = { chromatic: { disable: false } }
