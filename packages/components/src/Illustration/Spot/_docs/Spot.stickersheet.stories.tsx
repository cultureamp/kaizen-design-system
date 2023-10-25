import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
import { StickerSheetStory } from "~storybook/components/StickerSheet"

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
} from "../"

export default {
  title: "Components/Illustrations/Spot",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const engagementSpots = [
  {
    Component: BenefitsSurvey,
    name: "BenefitsSurvey",
  },
  {
    Component: CustomSurvey,
    name: "CustomSurvey",
  },
  {
    Component: CustomUnattributedSurvey,
    name: "CustomUnattributedSurvey",
  },
  {
    Component: EngagementSurvey,
    name: "EngagementSurvey",
  },
  {
    Component: InclusionSurvey,
    name: "InclusionSurvey",
  },
  {
    Component: QuickEngagementSurvey,
    name: "QuickEngagementSurvey",
  },
  {
    Component: ValuesSurvey1,
    name: "ValuesSurvey1",
  },
  {
    Component: ValuesSurvey2,
    name: "ValuesSurvey2",
  },
  {
    Component: WellbeingSurvey1,
    name: "WellbeingSurvey1",
  },
  {
    Component: WellbeingSurvey2,
    name: "WellbeingSurvey2",
  },
  {
    Component: WellbeingSurvey3,
    name: "WellbeingSurvey3",
  },
  {
    Component: ChangeReadiness,
    name: "ChangeReadiness",
  },
  {
    Component: ChangeSuccess,
    name: "ChangeSuccess",
  },
  {
    Component: PerformanceDiagnostics,
    name: "PerformanceDiagnostics",
  },
  {
    Component: LeadingThroughCrisis,
    name: "LeadingThroughCrisis",
  },
  {
    Component: EmergencyResponse,
    name: "EmergencyResponse",
  },
]

const experienceSpots = [
  {
    Component: PhasedWeek1OnboardSurvey,
    name: "PhasedWeek1OnboardSurvey",
  },
  {
    Component: PhasedWeek5OnboardSurvey,
    name: "PhasedWeek5OnboardSurvey",
  },
  {
    Component: RemoteOnboardSurvey,
    name: "RemoteOnboardSurvey",
  },
  {
    Component: GeneralOnboardSurvey,
    name: "GeneralOnboardSurvey",
  },
  {
    Component: CustomOnboardSurvey,
    name: "CustomOnboardSurvey",
  },
  {
    Component: CandidateSurvey,
    name: "CandidateSurvey",
  },
  {
    Component: ExitSurvey,
    name: "ExitSurvey",
  },
  {
    Component: InternSurvey,
    name: "InternSurvey",
  },
  {
    Component: SinglePointOnboardSurvey,
    name: "SinglePointOnboardSurvey",
  },
  {
    Component: HealthAndSafety,
    name: "HealthAndSafety",
  },
  {
    Component: EndOfProbation,
    name: "EndOfProbation",
  },
  {
    Component: NewWaysOfWorking,
    name: "NewWaysOfWorking",
  },
  {
    Component: ReOnboarding,
    name: "ReOnboarding",
  },
]

const performanceSpots = [
  {
    Component: Individual360,
    name: "Individual360",
  },
  {
    Component: Leadership360,
    name: "Leadership360",
  },
  {
    Component: Manager360,
    name: "Manager360",
  },
  {
    Component: Individual180,
    name: "Individual180",
  },
  {
    Component: Leadership180,
    name: "Leadership180",
  },
  {
    Component: Manager180,
    name: "Manager180",
  },
  {
    Component: TeamEffectiveness1,
    name: "TeamEffectiveness1",
  },
  {
    Component: TeamEffectiveness2,
    name: "TeamEffectiveness2",
  },
]

const covidSpots = [
  {
    Component: Response,
    name: "Response",
  },
  {
    Component: WellbeingSurvey,
    name: "WellbeingSurvey",
  },
  {
    Component: RemoteWorkQSet,
    name: "RemoteWorkQSet",
  },
  {
    Component: ReturnToWorkplace,
    name: "ReturnToWorkplace",
  },
  {
    Component: PulseSurvey,
    name: "PulseSurvey",
  },
]

const newAccountSpots = [
  {
    Component: AccountBasics,
    name: "AccountBasics",
  },
  {
    Component: CompanyDetails,
    name: "CompanyDetails",
  },
  {
    Component: EmployeeData,
    name: "EmployeeData",
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
    name: "AddUser",
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
    name: "NewYork",
  },
  {
    Component: SanFrancisco,
    name: "SanFrancisco",
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
    name: "OneOnOne",
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
    name: "RemoteManager",
  },
  {
    Component: ManagerLearning,
    name: "ManagerLearning",
  },
  {
    Component: EssentialProductivity,
    name: "EssentialProductivity",
  },
  {
    Component: EssentialResilience,
    name: "EssentialResilience",
  },
  {
    Component: LeadingChange,
    name: "LeadingChange",
  },
  {
    Component: InfluentialCommunication,
    name: "InfluentialCommunication",
  },
]

const miscellaneousSpots = [
  {
    Component: ViewReports,
    name: "ViewReports",
  },
  {
    Component: ReadArticle,
    name: "ReadArticle",
  },
  {
    Component: FastAction,
    name: "FastAction",
  },
  {
    Component: BaselineSurvey,
    name: "BaselineSurvey",
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
    name: "AddImage",
  },
  {
    Component: MeetingVoices,
    name: "MeetingVoices",
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
    name: "ReportSharing",
  },
  {
    Component: BlankSurvey,
    name: "BlankSurvey",
  },
  {
    Component: TakeAim,
    name: "TakeAim",
  },
  {
    Component: Action,
    name: "Action",
  },
  {
    Component: Training1,
    name: "Training1",
  },
  {
    Component: Training2,
    name: "Training2",
  },
  {
    Component: Training3,
    name: "Training3",
  },
  {
    Component: ShareReport,
    name: "ShareReport",
  },
  {
    Component: ExecutiveReportSharing,
    name: "ExecutiveReportSharing",
  },
  {
    Component: ManagerReportSharing,
    name: "ManagerReportSharing",
  },
  {
    Component: LeaderReportSharing,
    name: "LeaderReportSharing",
  },
  {
    Component: SpreadsheetTemplate,
    name: "SpreadsheetTemplate",
  },
  {
    Component: FullImport,
    name: "FullImport",
  },
  {
    Component: PartialImport,
    name: "PartialImport",
  },
  {
    Component: HrisImport,
    name: "HrisImport",
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
    name: "UnderConstruction",
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
    name: "TrafficCone",
  },
  {
    Component: ValueAdd,
    name: "ValueAdd",
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
    name: "DataVisualization",
  },
  {
    Component: Community,
    name: "Community",
  },
  {
    Component: BCorp,
    name: "BCorp",
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
    name: "ScienceBackedTools",
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
    name: "PowerfulInsights",
  },
  {
    Component: ActionPlans,
    name: "ActionPlans",
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
    name: "SkillsDevelopment",
  },
  {
    Component: ChangeAgents,
    name: "ChangeAgents",
  },
  {
    Component: CalendarSync,
    name: "CalendarSync",
  },
]

type IllustrationSpot = (props: SpotProps) => JSX.Element

const IllustrationExampleTile = ({
  Component,
  name,
}: {
  Component: IllustrationSpot
  name: string
}): JSX.Element => (
  <div className="w-[150px] inline-flex flex-col p-32 items-center">
    <Component />
    <Text variant="small">{name}</Text>
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <div className="grid gap-24">
      <div>
        <Heading variant="heading-3">Engagement</Heading>
        <div className="flex flex-wrap ">
          {engagementSpots.map((props, i) => (
            <IllustrationExampleTile key={`engagement-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">Experience</Heading>
        <div className="flex flex-wrap ">
          {experienceSpots.map((props, i) => (
            <IllustrationExampleTile key={`experience-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">Performance</Heading>
        <div className="flex flex-wrap ">
          {performanceSpots.map((props, i) => (
            <IllustrationExampleTile key={`performance-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">COVID-19</Heading>
        <div className="flex flex-wrap ">
          {covidSpots.map((props, i) => (
            <IllustrationExampleTile key={`covid-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">New Account</Heading>
        <div className="flex flex-wrap ">
          {newAccountSpots.map((props, i) => (
            <IllustrationExampleTile key={`new-account-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">Moods</Heading>
        <div className="flex flex-wrap ">
          {moodSpots.map((props, i) => (
            <IllustrationExampleTile key={`moods-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">Skills Coach</Heading>
        <div className="flex flex-wrap ">
          {managerLearningSpots.map((props, i) => (
            <IllustrationExampleTile key={`skills-coach-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">Offices</Heading>
        <div className="flex flex-wrap ">
          {officeSpots.map((props, i) => (
            <IllustrationExampleTile key={`offices-${i}`} {...props} />
          ))}
        </div>
      </div>

      <div>
        <Heading variant="heading-3">Miscellaneous</Heading>
        <div className="flex flex-wrap ">
          {miscellaneousSpots.map((props, i) => (
            <IllustrationExampleTile key={`misc-${i}`} {...props} />
          ))}
        </div>
      </div>
    </div>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
