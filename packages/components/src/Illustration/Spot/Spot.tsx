import React from "react"
import { Base, BaseProps } from "../subcomponents/Base"

export type SpotProps = Pick<BaseProps, "alt" | "classNameOverride"> & {
  enableAspectRatio?: boolean
}

const SPOT_ILLUSTRATION_BASE_PATH = "illustrations/heart/spot/"
const createSpotIllustration =
  (fileName: string) =>
  // eslint-disable-next-line react/display-name
  ({ enableAspectRatio, ...restProps }: SpotProps): JSX.Element => (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...restProps}
      name={`${SPOT_ILLUSTRATION_BASE_PATH}${fileName}`}
    />
  )

/**
 * Template Library / Moods
 */
/* prettier-ignore */ export const Cautionary = createSpotIllustration("moods-cautionary.svg")
/* prettier-ignore */ export const Informative = createSpotIllustration("moods-informative.svg")
/* prettier-ignore */ export const Negative = createSpotIllustration("moods-negative.svg")
/* prettier-ignore */ export const Positive = createSpotIllustration("moods-positive.svg")
/* prettier-ignore */ export const Assertive = createSpotIllustration("moods-assertive.svg")

/**
 * Template Library / Engagement
 */
/* prettier-ignore */ export const BenefitsSurvey = createSpotIllustration("template-library-benefits-survey.svg")
/* prettier-ignore */ export const CustomSurvey = createSpotIllustration("template-library-custom-survey.svg")
/* prettier-ignore */ export const CustomUnattributedSurvey = createSpotIllustration("template-library-custom-unattributed-survey.svg")
/* prettier-ignore */ export const EngagementSurvey = createSpotIllustration("template-library-engagement-survey.svg")
/* prettier-ignore */ export const InclusionSurvey = createSpotIllustration("template-library-inclusion-survey.svg")
/* prettier-ignore */ export const QuickEngagementSurvey = createSpotIllustration("template-library-quick-engagement-survey.svg")
/* prettier-ignore */ export const ValuesSurvey1 = createSpotIllustration("template-library-values-survey-1.svg")
/* prettier-ignore */ export const ValuesSurvey2 = createSpotIllustration("template-library-values-survey-2.svg")
/* prettier-ignore */ export const WellbeingSurvey1 = createSpotIllustration("template-library-wellbeing-survey-1.svg")
/* prettier-ignore */ export const WellbeingSurvey2 = createSpotIllustration("template-library-wellbeing-survey-2.svg")
/* prettier-ignore */ export const WellbeingSurvey3 = createSpotIllustration("template-library-wellbeing-survey-3.svg")
/* prettier-ignore */ export const ChangeReadiness = createSpotIllustration("template-library-change-readiness.svg")
/* prettier-ignore */ export const ChangeSuccess = createSpotIllustration("template-library-change-success.svg")
/* prettier-ignore */ export const PerformanceDiagnostics = createSpotIllustration("template-library-performance-diagnostics.svg")
/* prettier-ignore */ export const LeadingThroughCrisis = createSpotIllustration("template-library-leading-through-crisis.svg")
/* prettier-ignore */ export const EmergencyResponse = createSpotIllustration("template-library-emergency-response.svg")

/**
 * Template Library / Experience
 */
/* prettier-ignore */ export const CandidateSurvey = createSpotIllustration("template-library-candidate-survey.svg")
/* prettier-ignore */ export const CustomOnboardSurvey = createSpotIllustration("template-library-custom-onboard-survey.svg")
/* prettier-ignore */ export const ExitSurvey = createSpotIllustration("template-library-exit-survey.svg")
/* prettier-ignore */ export const InternSurvey = createSpotIllustration("template-library-intern-survey.svg")
/* prettier-ignore */ export const PhasedWeek1OnboardSurvey = createSpotIllustration("template-library-phased-week-1-onboard-survey.svg")
/* prettier-ignore */ export const PhasedWeek5OnboardSurvey = createSpotIllustration("template-library-phased-week-5-onboard-survey.svg")
/* prettier-ignore */ export const SinglePointOnboardSurvey = createSpotIllustration("template-library-single-point-onboard-survey.svg")
/* prettier-ignore */ export const GeneralOnboardSurvey = createSpotIllustration("template-library-general-onboard-survey.svg")
/* prettier-ignore */ export const RemoteOnboardSurvey = createSpotIllustration("template-library-remote-onboard-survey.svg")
/* prettier-ignore */ export const HealthAndSafety = createSpotIllustration("template-library-health-and-safety.svg")
/* prettier-ignore */ export const EndOfProbation = createSpotIllustration("template-library-end-of-probation.svg")
/* prettier-ignore */ export const NewWaysOfWorking = createSpotIllustration("template-library-new-ways-of-working.svg")
/* prettier-ignore */ export const ReOnboarding = createSpotIllustration("template-library-re-onboarding.svg")

/**
 * Template Library / Performance
 */
/* prettier-ignore */ export const Individual360 = createSpotIllustration("template-library-individual-360.svg")
/* prettier-ignore */ export const Leadership360 = createSpotIllustration("template-library-leadership-360.svg")
/* prettier-ignore */ export const Manager360 = createSpotIllustration("template-library-manager-360.svg")
/* prettier-ignore */ export const Individual180 = createSpotIllustration("template-library-individual-180.svg")
/* prettier-ignore */ export const Leadership180 = createSpotIllustration("template-library-leadership-180.svg")
/* prettier-ignore */ export const Manager180 = createSpotIllustration("template-library-manager-180.svg")
/* prettier-ignore */ export const TeamEffectiveness1 = createSpotIllustration("template-library-team-effectiveness-1.svg")
/* prettier-ignore */ export const TeamEffectiveness2 = createSpotIllustration("template-library-team-effectiveness-2.svg")

/**
 * Offices
 */
/* prettier-ignore */ export const London = createSpotIllustration("offices-london.svg")
/* prettier-ignore */ export const Melbourne = createSpotIllustration("offices-melbourne.svg")
/* prettier-ignore */ export const NewYork = createSpotIllustration("offices-new-york.svg")
/* prettier-ignore */ export const SanFrancisco = createSpotIllustration("offices-san-francisco.svg")

/**
 * Values
 */
/* prettier-ignore */ export const AmplifyOthers = createSpotIllustration("values-amplify-others.svg")
/* prettier-ignore */ export const HaveTheCourageToBeVulnerable = createSpotIllustration("values-have-the-courage-to-be-vulnerable.svg")
/* prettier-ignore */ export const LearnFasterThroughFeedback = createSpotIllustration("values-learn-faster-through-feedback.svg")
/* prettier-ignore */ export const TrustOthersToMakeDecisions = createSpotIllustration("values-trust-others-to-make-decisions.svg")

/**
 * Template Library / COVID-19
 */
/* prettier-ignore */ export const WellbeingSurvey = createSpotIllustration("template-library-wellbeing-survey.svg")
/* prettier-ignore */ export const Response = createSpotIllustration("template-library-response.svg")
/* prettier-ignore */ export const RemoteWorkQSet = createSpotIllustration("template-library-remote-work-q-set.svg")
/* prettier-ignore */ export const ReturnToWorkplace = createSpotIllustration("template-library-return-to-workplace.svg")
/* prettier-ignore */ export const PulseSurvey = createSpotIllustration("template-library-pulse-survey.svg")

/**
 * New Account
 */
/* prettier-ignore */ export const AccountBasics = createSpotIllustration("new-account-account-basics.svg")
/* prettier-ignore */ export const CompanyDetails = createSpotIllustration("new-account-company-details.svg")
/* prettier-ignore */ export const EmployeeData = createSpotIllustration("new-account-employee-data.svg")
/* prettier-ignore */ export const Gdpr = createSpotIllustration("new-account-gdpr.svg")
/* prettier-ignore */ export const Timezone = createSpotIllustration("new-account-timezone.svg")
/* prettier-ignore */ export const AddUser = createSpotIllustration("new-account-add-user.svg")

/**
 * Skills Coach (previously referred to as Manager Learning)
 */
/* prettier-ignore */ export const Strategy = createSpotIllustration("skills-coach-strategy.svg")
/* prettier-ignore */ export const Resilience = createSpotIllustration("skills-coach-resilience.svg")
/* prettier-ignore */ export const EssentialResilience = createSpotIllustration("skills-coach-essential-resillience.svg")
/* prettier-ignore */ export const RemoteManager = createSpotIllustration("skills-coach-remote-manager.svg")
/* prettier-ignore */ export const Productivity = createSpotIllustration("skills-coach-productivity.svg")
/* prettier-ignore */ export const EssentialProductivity = createSpotIllustration("skills-coach-essential-productivity.svg")
/* prettier-ignore */ export const InfluentialCommunication = createSpotIllustration("skills-coach-influential-communication.svg")
/* prettier-ignore */ export const LeadingChange = createSpotIllustration("skills-coach-leading-change.svg")
/* prettier-ignore */ export const ManagerLearning = createSpotIllustration("skills-coach-manager-learning.svg")
/* prettier-ignore */ export const Feedback = createSpotIllustration("skills-coach-feedback.svg")
/* prettier-ignore */ export const Coaching = createSpotIllustration("skills-coach-coaching.svg")
/* prettier-ignore */ export const OneOnOne = createSpotIllustration("skills-coach-1-on-1.svg")

/**
 * Miscellaneous
 */
/* prettier-ignore */ export const ActionPlans = createSpotIllustration("miscellaneous-action-plans.svg")
/* prettier-ignore */ export const BCorp = createSpotIllustration("miscellaneous-b-corp.svg")
/* prettier-ignore */ export const Behaviour = createSpotIllustration("miscellaneous-behavior.svg")
/* prettier-ignore */ export const ChangeAgents = createSpotIllustration("miscellaneous-change-agents.svg")
/* prettier-ignore */ export const Communications = createSpotIllustration("miscellaneous-communications.svg")
/* prettier-ignore */ export const Community = createSpotIllustration("miscellaneous-community.svg")
/* prettier-ignore */ export const Company = createSpotIllustration("miscellaneous-company.svg")
/* prettier-ignore */ export const Conversations = createSpotIllustration("miscellaneous-conversations.svg")
/* prettier-ignore */ export const DataVisualization = createSpotIllustration("miscellaneous-data-visualization.svg")
/* prettier-ignore */ export const Goals = createSpotIllustration("miscellaneous-goals.svg")
/* prettier-ignore */ export const Insights = createSpotIllustration("miscellaneous-insights.svg")
/* prettier-ignore */ export const Learn = createSpotIllustration("miscellaneous-learn.svg")
/* prettier-ignore */ export const Microphone = createSpotIllustration("miscellaneous-microphone.svg")
/* prettier-ignore */ export const PaperPen = createSpotIllustration("miscellaneous-paper-pen.svg")
/* prettier-ignore */ export const PowerfulInsights = createSpotIllustration("miscellaneous-powerful-insights.svg")
/* prettier-ignore */ export const Privacy = createSpotIllustration("miscellaneous-privacy.svg")
/* prettier-ignore */ export const Process = createSpotIllustration("miscellaneous-process.svg")
/* prettier-ignore */ export const Resources = createSpotIllustration("miscellaneous-resources.svg")
/* prettier-ignore */ export const ScienceBackedTools = createSpotIllustration("miscellaneous-science-backed-tools.svg")
/* prettier-ignore */ export const SkillsDevelopment = createSpotIllustration("miscellaneous-skills-development.svg")
/* prettier-ignore */ export const ViewReports = createSpotIllustration("miscellaneous-view-reports.svg")
/* prettier-ignore */ export const ReadArticle = createSpotIllustration("miscellaneous-read-article.svg")
/* prettier-ignore */ export const FastAction = createSpotIllustration("miscellaneous-fast-action.svg")
/* prettier-ignore */ export const BaselineSurvey = createSpotIllustration("miscellaneous-baseline-survey.svg")
/* prettier-ignore */ export const SpreadsheetTemplate = createSpotIllustration("miscellaneous-spreadsheet-template.svg")
/* prettier-ignore */ export const AddImage = createSpotIllustration("miscellaneous-add-image.svg")
/* prettier-ignore */ export const MeetingVoices = createSpotIllustration("miscellaneous-meeting-voices.svg")
/* prettier-ignore */ export const Workshop = createSpotIllustration("miscellaneous-workshop.svg")
/* prettier-ignore */ export const Video = createSpotIllustration("miscellaneous-video.svg")
/* prettier-ignore */ export const ReportSharing = createSpotIllustration("miscellaneous-report-sharing.svg")
/* prettier-ignore */ export const BlankSurvey = createSpotIllustration("miscellaneous-blank-survey.svg")
/* prettier-ignore */ export const TakeAim = createSpotIllustration("miscellaneous-take-aim.svg")
/* prettier-ignore */ export const Action = createSpotIllustration("miscellaneous-action.svg")
/* prettier-ignore */ export const Training1 = createSpotIllustration("miscellaneous-training-1.svg")
/* prettier-ignore */ export const Training2 = createSpotIllustration("miscellaneous-training-2.svg")
/* prettier-ignore */ export const Training3 = createSpotIllustration("miscellaneous-training-3.svg")
/* prettier-ignore */ export const ShareReport = createSpotIllustration("miscellaneous-share-report.svg")

// TODO: Component Name change
/* prettier-ignore */ export const Team1 = createSpotIllustration("miscellaneous-team-1.svg")
/* prettier-ignore */ export const Team2 = createSpotIllustration("miscellaneous-team-2.svg")
/* prettier-ignore */ export const Templates = createSpotIllustration("miscellaneous-templates.svg")
/* prettier-ignore */ export const ExecutiveReportSharing = createSpotIllustration("miscellaneous-executive-report-sharing.svg")
/* prettier-ignore */ export const ManagerReportSharing = createSpotIllustration("miscellaneous-manager-report-sharing.svg")
/* prettier-ignore */ export const LeaderReportSharing = createSpotIllustration("miscellaneous-leader-report-sharing.svg")
/* prettier-ignore */ export const Alarm = createSpotIllustration("miscellaneous-alarm.svg")
/* prettier-ignore */ export const Fire = createSpotIllustration("miscellaneous-fire.svg")
/* prettier-ignore */ export const Fireworks = createSpotIllustration("miscellaneous-fireworks.svg")
/* prettier-ignore */ export const FullImport = createSpotIllustration("miscellaneous-full-import.svg")
/* prettier-ignore */ export const HrisImport = createSpotIllustration("miscellaneous-hris-import.svg")
/* prettier-ignore */ export const PartialImport = createSpotIllustration("miscellaneous-partial-import.svg")
/* prettier-ignore */ export const Starburst = createSpotIllustration("miscellaneous-starburst.svg")
/* prettier-ignore */ export const Stop = createSpotIllustration("miscellaneous-stop.svg")
/* prettier-ignore */ export const TrafficCone = createSpotIllustration("miscellaneous-traffic-cone.svg")
/* prettier-ignore */ export const Trophy = createSpotIllustration("miscellaneous-trophy.svg")
/* prettier-ignore */ export const UnderConstruction = createSpotIllustration("miscellaneous-under-construction.svg")
/* prettier-ignore */ export const ValueAdd = createSpotIllustration("miscellaneous-value-add.svg")
/* prettier-ignore */ export const Recommendation = createSpotIllustration("miscellaneous-recommendation.svg")
/* prettier-ignore */ export const Objective = createSpotIllustration("miscellaneous-objective.svg")
/* prettier-ignore */ export const CalendarSync = createSpotIllustration("miscellaneous-calendar-sync.svg")
