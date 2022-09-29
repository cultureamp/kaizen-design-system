import * as React from "react"
import { Base, BaseProps } from "./Base"
import { AnimatedBase, AnimatedBaseProps } from "./Players/LottiePlayer"

export type SpotProps = Pick<BaseProps, "alt" | "classNameOverride"> & {
  enableAspectRatio?: boolean
}
export type AnimatedSpotProps = SpotProps &
  AnimatedBaseProps & { isAnimated?: boolean }

/**
 * Moods
 */
export const Cautionary = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-cautionary.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/heart/spot/moods-cautionary.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Informative = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-informative.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/heart/spot/moods-informative.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Negative = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-negative.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/heart/spot/moods-negative.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    return AnimatedIllustration
  }
  return StaticIllustration
}

/**
 * @deprecated Use the non-gendered Positive illustration instead
 */
export const PositiveMale = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...otherProps}
    name="illustrations/heart/spot/moods-positive.svg"
  />
)

/**
 * @deprecated Use the non-gendered Positive illustration instead
 */
export const PositiveFemale = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/heart/spot/moods-positive.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Positive = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  // TODO Update url to use heart version.

  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/heart/spot/moods-positive.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Assertive = ({
  isAnimated,
  enableAspectRatio,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-assertive.svg"
  const StaticIllustration = (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name={illustrationPath}
    />
  )
  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/heart/spot/moods-assertive.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    return AnimatedIllustration
  }
  return StaticIllustration
}

function createSpotIllustration(url: string) {
  return ({ enableAspectRatio, ...props }: SpotProps) => (
    <Base
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...props}
      name={url}
    />
  )
}

/**
 * Template Library / Engagement
 */
/* prettier-ignore */ export const BenefitsSurvey = createSpotIllustration("illustrations/heart/spot/template-library-benefits-survey.svg")
/* prettier-ignore */ export const CustomSurvey = createSpotIllustration("illustrations/heart/spot/template-library-custom-survey.svg")
/* prettier-ignore */ export const CustomUnattributedSurvey = createSpotIllustration("illustrations/heart/spot/template-library-custom-unattributed-survey.svg")
/* prettier-ignore */ export const EngagementSurvey = createSpotIllustration("illustrations/heart/spot/template-library-engagement-survey.svg")
/* prettier-ignore */ export const InclusionSurvey = createSpotIllustration("illustrations/heart/spot/template-library-inclusion-survey.svg")
/* prettier-ignore */ export const QuickEngagementSurvey = createSpotIllustration("illustrations/heart/spot/template-library-quick-engagement-survey.svg")
/* prettier-ignore */ export const ValuesSurvey1 = createSpotIllustration("illustrations/heart/spot/template-library-values-survey-1.svg")
/* prettier-ignore */ export const ValuesSurvey2 = createSpotIllustration("illustrations/heart/spot/template-library-values-survey-2.svg")
/* prettier-ignore */ export const WellbeingSurvey1 = createSpotIllustration("illustrations/heart/spot/template-library-wellbeing-survey-1.svg")
/* prettier-ignore */ export const WellbeingSurvey2 = createSpotIllustration("illustrations/heart/spot/template-library-wellbeing-survey-2.svg")
/* prettier-ignore */ export const WellbeingSurvey3 = createSpotIllustration("illustrations/heart/spot/template-library-wellbeing-survey-3.svg")
/* prettier-ignore */ export const ChangeReadiness = createSpotIllustration("illustrations/heart/spot/template-library-change-readiness.svg")
/* prettier-ignore */ export const ChangeSuccess = createSpotIllustration("illustrations/heart/spot/template-library-change-success.svg")
/* prettier-ignore */ export const PerformanceDiagnostics = createSpotIllustration("illustrations/heart/spot/template-library-performance-diagnostics.svg")
/* prettier-ignore */ export const LeadingThroughCrisis = createSpotIllustration("illustrations/heart/spot/template-library-leading-through-crisis.svg")
/* prettier-ignore */ export const EmergencyResponse = createSpotIllustration("illustrations/heart/spot/template-library-emergency-response.svg")

/**
 * Template Library / Experience
 */
/* prettier-ignore */ export const CandidateSurvey = createSpotIllustration("illustrations/heart/spot/template-library-candidate-survey.svg")
/* prettier-ignore */ export const CustomOnboardSurvey = createSpotIllustration("illustrations/heart/spot/template-library-custom-onboard-survey.svg")
/* prettier-ignore */ export const ExitSurvey = createSpotIllustration("illustrations/heart/spot/template-library-exit-survey.svg")
/* prettier-ignore */ export const InternSurvey = createSpotIllustration("illustrations/heart/spot/template-library-intern-survey.svg")
/* prettier-ignore */ export const PhasedWeek1OnboardSurvey = createSpotIllustration("illustrations/heart/spot/template-library-phased-week-1-onboard-survey.svg")
/* prettier-ignore */ export const PhasedWeek5OnboardSurvey = createSpotIllustration("illustrations/heart/spot/template-library-phased-week-5-onboard-survey.svg")
/* prettier-ignore */ export const SinglePointOnboardSurvey = createSpotIllustration("illustrations/heart/spot/template-library-single-point-onboard-survey.svg")
/* prettier-ignore */ export const GeneralOnboardSurvey = createSpotIllustration("illustrations/heart/spot/template-library-general-onboard-survey.svg")
/* prettier-ignore */ export const RemoteOnboardSurvey = createSpotIllustration("illustrations/heart/spot/template-library-remote-onboard-survey.svg")
/* prettier-ignore */ export const HealthAndSafety = createSpotIllustration("illustrations/heart/spot/template-library-health-and-safety.svg")
/* prettier-ignore */ export const EndOfProbation = createSpotIllustration("illustrations/heart/spot/template-library-end-of-probation.svg")
/* prettier-ignore */ export const NewWaysOfWorking = createSpotIllustration("illustrations/heart/spot/template-library-new-ways-of-working.svg")
/* prettier-ignore */ export const ReOnboarding = createSpotIllustration("illustrations/heart/spot/template-library-re-onboarding.svg")

/**
 * Template Library / Performance
 */
/* prettier-ignore */ export const Individual360 = createSpotIllustration("illustrations/heart/spot/template-library-individual-360.svg")
/* prettier-ignore */ export const Leadership360 = createSpotIllustration("illustrations/heart/spot/template-library-leadership-360.svg")
/* prettier-ignore */ export const Manager360 = createSpotIllustration("illustrations/heart/spot/template-library-manager-360.svg")
/* prettier-ignore */ export const Individual180 = createSpotIllustration("illustrations/heart/spot/template-library-individual-180.svg")
/* prettier-ignore */ export const Leadership180 = createSpotIllustration("illustrations/heart/spot/template-library-leadership-180.svg")
/* prettier-ignore */ export const Manager180 = createSpotIllustration("illustrations/heart/spot/template-library-manager-180.svg")
/* prettier-ignore */ export const TeamEffectiveness1 = createSpotIllustration("illustrations/heart/spot/template-library-team-effectiveness-1.svg")
/* prettier-ignore */ export const TeamEffectiveness2 = createSpotIllustration("illustrations/heart/spot/template-library-team-effectiveness-2.svg")

/**
 * Offices
 */
/* prettier-ignore */ export const London = createSpotIllustration("illustrations/heart/spot/offices-london.svg")
/* prettier-ignore */ export const Melbourne = createSpotIllustration("illustrations/heart/spot/offices-melbourne.svg")
/* prettier-ignore */ export const NewYork = createSpotIllustration("illustrations/heart/spot/offices-new-york.svg")
/* prettier-ignore */ export const SanFrancisco = createSpotIllustration("illustrations/heart/spot/offices-san-francisco.svg")

/**
 * Values
 */
/* prettier-ignore */ export const AmplifyOthers = createSpotIllustration("illustrations/heart/spot/values-amplify-others.svg")
/* prettier-ignore */ export const HaveTheCourageToBeVulnerable = createSpotIllustration("illustrations/heart/spot/values-have-the-courage-to-be-vulnerable.svg")
/* prettier-ignore */ export const LearnFasterThroughFeedback = createSpotIllustration("illustrations/heart/spot/values-learn-faster-through-feedback.svg")
/* prettier-ignore */ export const TrustOthersToMakeDecisions = createSpotIllustration("illustrations/heart/spot/values-trust-others-to-make-decisions.svg")

/**
 * Template Library / COVID-19
 */
/* prettier-ignore */ export const WellbeingSurvey = createSpotIllustration("illustrations/heart/spot/template-library-wellbeing-survey.svg")
/* prettier-ignore */ export const Response = createSpotIllustration("illustrations/heart/spot/template-library-response.svg")
/* prettier-ignore */ export const RemoteWorkQSet = createSpotIllustration("illustrations/heart/spot/template-library-remote-work-q-set.svg")
/* prettier-ignore */ export const ReturnToWorkplace = createSpotIllustration("illustrations/heart/spot/template-library-return-to-workplace.svg")
/* prettier-ignore */ export const PulseSurvey = createSpotIllustration("illustrations/heart/spot/template-library-pulse-survey.svg")

/**
 * New Account
 */
/* prettier-ignore */ export const AccountBasics = createSpotIllustration("illustrations/heart/spot/new-account-account-basics.svg")
/* prettier-ignore */ export const CompanyDetails = createSpotIllustration("illustrations/heart/spot/new-account-company-details.svg")
/* prettier-ignore */ export const EmployeeData = createSpotIllustration("illustrations/heart/spot/new-account-employee-data.svg")
/* prettier-ignore */ export const Gdpr = createSpotIllustration("illustrations/heart/spot/new-account-gdpr.svg")
/* prettier-ignore */ export const Timezone = createSpotIllustration("illustrations/heart/spot/new-account-timezone.svg")
/* prettier-ignore */ export const AddUser = createSpotIllustration("illustrations/heart/spot/new-account-add-user.svg")

/**
 * Skills Coach (previously referred to as Manager Learning)
 */
/* prettier-ignore */ export const Strategy = createSpotIllustration("illustrations/heart/spot/skills-coach-strategy.svg")
/* prettier-ignore */ export const Resilience = createSpotIllustration("illustrations/heart/spot/skills-coach-resilience.svg")
/* prettier-ignore */ export const EssentialResilience = createSpotIllustration("illustrations/heart/spot/skills-coach-essential-resillience.svg")
/* prettier-ignore */ export const RemoteManager = createSpotIllustration("illustrations/heart/spot/skills-coach-remote-manager.svg")
/* prettier-ignore */ export const Productivity = createSpotIllustration("illustrations/heart/spot/skills-coach-productivity.svg")
/* prettier-ignore */ export const EssentialProductivity = createSpotIllustration("illustrations/heart/spot/skills-coach-essential-productivity.svg")
/* prettier-ignore */ export const InfluentialCommunication = createSpotIllustration("illustrations/heart/spot/skills-coach-influential-communication.svg")
/* prettier-ignore */ export const LeadingChange = createSpotIllustration("illustrations/heart/spot/skills-coach-leading-change.svg")
/* prettier-ignore */ export const ManagerLearning = createSpotIllustration("illustrations/heart/spot/skills-coach-manager-learning.svg")
/* prettier-ignore */ export const Feedback = createSpotIllustration("illustrations/heart/spot/skills-coach-feedback.svg")
/* prettier-ignore */ export const Coaching = createSpotIllustration("illustrations/heart/spot/skills-coach-coaching.svg")
/* prettier-ignore */ export const OneOnOne = createSpotIllustration("illustrations/heart/spot/skills-coach-1-on-1.svg")

/**
 * Miscellaneous
 */
/* prettier-ignore */ export const ActionPlans = createSpotIllustration("illustrations/heart/spot/miscellaneous-action-plans.svg")
/* prettier-ignore */ export const BCorp = createSpotIllustration("illustrations/heart/spot/miscellaneous-b-corp.svg")
/* prettier-ignore */ export const Behaviour = createSpotIllustration("illustrations/heart/spot/miscellaneous-behavior.svg")
/* prettier-ignore */ export const ChangeAgents = createSpotIllustration("illustrations/heart/spot/miscellaneous-change-agents.svg")
/* prettier-ignore */ export const Communications = createSpotIllustration("illustrations/heart/spot/miscellaneous-communications.svg")
/* prettier-ignore */ export const Community = createSpotIllustration("illustrations/heart/spot/miscellaneous-community.svg")
/* prettier-ignore */ export const Company = createSpotIllustration("illustrations/heart/spot/miscellaneous-company.svg")
/* prettier-ignore */ export const Conversations = createSpotIllustration("illustrations/heart/spot/miscellaneous-conversations.svg")
/* prettier-ignore */ export const DataVisualization = createSpotIllustration("illustrations/heart/spot/miscellaneous-data-visualization.svg")
/* prettier-ignore */ export const Goals = createSpotIllustration("illustrations/heart/spot/miscellaneous-goals.svg")
/* prettier-ignore */ export const Insights = createSpotIllustration("illustrations/heart/spot/miscellaneous-insights.svg")
/* prettier-ignore */ export const Learn = createSpotIllustration("illustrations/heart/spot/miscellaneous-learn.svg")
/* prettier-ignore */ export const Microphone = createSpotIllustration("illustrations/heart/spot/miscellaneous-microphone.svg")
/* prettier-ignore */ export const PaperPen = createSpotIllustration("illustrations/heart/spot/miscellaneous-paper-pen.svg")
/* prettier-ignore */ export const PowerfulInsights = createSpotIllustration("illustrations/heart/spot/miscellaneous-powerful-insights.svg")
/* prettier-ignore */ export const Privacy = createSpotIllustration("illustrations/heart/spot/miscellaneous-privacy.svg")
/* prettier-ignore */ export const Process = createSpotIllustration("illustrations/heart/spot/miscellaneous-process.svg")
/* prettier-ignore */ export const Resources = createSpotIllustration("illustrations/heart/spot/miscellaneous-resources.svg")
/* prettier-ignore */ export const ScienceBackedTools = createSpotIllustration("illustrations/heart/spot/miscellaneous-science-backed-tools.svg")
/* prettier-ignore */ export const SkillsDevelopment = createSpotIllustration("illustrations/heart/spot/miscellaneous-skills-development.svg")
/* prettier-ignore */ export const ViewReports = createSpotIllustration("illustrations/heart/spot/miscellaneous-view-reports.svg")
/* prettier-ignore */ export const ReadArticle = createSpotIllustration("illustrations/heart/spot/miscellaneous-read-article.svg")
/* prettier-ignore */ export const FastAction = createSpotIllustration("illustrations/heart/spot/miscellaneous-fast-action.svg")
/* prettier-ignore */ export const BaselineSurvey = createSpotIllustration("illustrations/heart/spot/miscellaneous-baseline-survey.svg")
/* prettier-ignore */ export const SpreadsheetTemplate = createSpotIllustration("illustrations/heart/spot/miscellaneous-spreadsheet-template.svg")
/* prettier-ignore */ export const AddImage = createSpotIllustration("illustrations/heart/spot/miscellaneous-add-image.svg")
/* prettier-ignore */ export const MeetingVoices = createSpotIllustration("illustrations/heart/spot/miscellaneous-meeting-voices.svg")
/* prettier-ignore */ export const Workshop = createSpotIllustration("illustrations/heart/spot/miscellaneous-workshop.svg")
/* prettier-ignore */ export const Video = createSpotIllustration("illustrations/heart/spot/miscellaneous-video.svg")
/* prettier-ignore */ export const ReportSharing = createSpotIllustration("illustrations/heart/spot/miscellaneous-report-sharing.svg")
/* prettier-ignore */ export const BlankSurvey = createSpotIllustration("illustrations/heart/spot/miscellaneous-blank-survey.svg")
/* prettier-ignore */ export const TakeAim = createSpotIllustration("illustrations/heart/spot/miscellaneous-take-aim.svg")
/* prettier-ignore */ export const Action = createSpotIllustration("illustrations/heart/spot/miscellaneous-action.svg")
/* prettier-ignore */ export const Training1 = createSpotIllustration("illustrations/heart/spot/miscellaneous-training-1.svg")
/* prettier-ignore */ export const Training2 = createSpotIllustration("illustrations/heart/spot/miscellaneous-training-2.svg")
/* prettier-ignore */ export const Training3 = createSpotIllustration("illustrations/heart/spot/miscellaneous-training-3.svg")
/* prettier-ignore */ export const ShareReport = createSpotIllustration("illustrations/heart/spot/miscellaneous-share-report.svg")

// TODO: Component Name change
/* prettier-ignore */ export const Team1 = createSpotIllustration("illustrations/heart/spot/miscellaneous-team-1.svg")
/* prettier-ignore */ export const Team2 = createSpotIllustration("illustrations/heart/spot/miscellaneous-team-2.svg")
/* prettier-ignore */ export const Templates = createSpotIllustration("illustrations/heart/spot/miscellaneous-templates.svg")
/* prettier-ignore */ export const ExecutiveReportSharing = createSpotIllustration("illustrations/heart/spot/miscellaneous-executive-report-sharing.svg")
/* prettier-ignore */ export const ManagerReportSharing = createSpotIllustration("illustrations/heart/spot/miscellaneous-manager-report-sharing.svg")
/* prettier-ignore */ export const LeaderReportSharing = createSpotIllustration("illustrations/heart/spot/miscellaneous-leader-report-sharing.svg")
/* prettier-ignore */ export const Alarm = createSpotIllustration("illustrations/heart/spot/miscellaneous-alarm.svg")
/* prettier-ignore */ export const Fire = createSpotIllustration("illustrations/heart/spot/miscellaneous-fire.svg")
/* prettier-ignore */ export const Fireworks = createSpotIllustration("illustrations/heart/spot/miscellaneous-fireworks.svg")
/* prettier-ignore */ export const FullImport = createSpotIllustration("illustrations/heart/spot/miscellaneous-full-import.svg")
/* prettier-ignore */ export const HrisImport = createSpotIllustration("illustrations/heart/spot/miscellaneous-hris-import.svg")
/* prettier-ignore */ export const PartialImport = createSpotIllustration("illustrations/heart/spot/miscellaneous-partial-import.svg")
/* prettier-ignore */ export const Starburst = createSpotIllustration("illustrations/heart/spot/miscellaneous-starburst.svg")
/* prettier-ignore */ export const Stop = createSpotIllustration("illustrations/heart/spot/miscellaneous-stop.svg")
/* prettier-ignore */ export const TrafficCone = createSpotIllustration("illustrations/heart/spot/miscellaneous-traffic-cone.svg")
/* prettier-ignore */ export const Trophy = createSpotIllustration("illustrations/heart/spot/miscellaneous-trophy.svg")
/* prettier-ignore */ export const UnderConstruction = createSpotIllustration("illustrations/heart/spot/miscellaneous-under-construction.svg")
/* prettier-ignore */ export const ValueAdd = createSpotIllustration("illustrations/heart/spot/miscellaneous-value-add.svg")
/* prettier-ignore */ export const Recommendation = createSpotIllustration("illustrations/heart/spot/miscellaneous-recommendation.svg")
/* prettier-ignore */ export const Objective = createSpotIllustration("illustrations/heart/spot/miscellaneous-objective.svg")
