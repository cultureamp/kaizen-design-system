import * as React from "react"
import { Base, BaseProps } from "./Base"
import { AnimatedBase, AnimatedBaseProps } from "./Players/LottiePlayer"

export type SpotProps = Pick<
  BaseProps,
  "alt" | "classNameAndIHaveSpokenToDST"
> & { enableAspectRatio?: boolean }
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
      name="illustrations/spot/moods-cautionary.lottie"
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
      name="illustrations/spot/moods-informative.lottie"
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
      name="illustrations/spot/moods-negative.lottie"
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
      name="illustrations/spot/moods-positive.lottie"
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
  const AnimatedIllustration = (
    <AnimatedBase
      aspectRatio={enableAspectRatio ? "square" : undefined}
      {...otherProps}
      name="illustrations/spot/moods-positive.lottie"
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

/**
 * Template Library / Engagement
 */
export const BenefitsSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-benefits-survey.svg"
  />
)

export const CustomSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-custom-survey.svg"
  />
)

export const CustomUnattributedSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-custom-unattributed-survey.svg"
  />
)

export const EngagementSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-engagement-survey.svg"
  />
)

export const InclusionSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-inclusion-survey.svg"
  />
)

export const QuickEngagementSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-quick-engagement-survey.svg"
  />
)

export const ValuesSurvey1 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-values-survey-1.svg"
  />
)

export const ValuesSurvey2 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-values-survey-2.svg"
  />
)

export const WellbeingSurvey1 = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey-1.svg"
  />
)

export const WellbeingSurvey2 = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey-2.svg"
  />
)

export const WellbeingSurvey3 = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey-3.svg"
  />
)

export const ChangeReadiness = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-change-readiness.svg"
  />
)

export const ChangeSuccess = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-change-success.svg"
  />
)

export const PerformanceDiagnostics = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-performance-diagnostics.svg"
  />
)

export const LeadingThroughCrisis = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-leading-through-crisis.svg"
  />
)

export const EmergencyResponse = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-emergency-response.svg"
  />
)

/**
 * Template Library / Experience
 */
export const CandidateSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-candidate-survey.svg"
  />
)

export const CustomOnboardSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-custom-onboard-survey.svg"
  />
)

export const ExitSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-exit-survey.svg"
  />
)

export const InternSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-intern-survey.svg"
  />
)

export const PhasedWeek1OnboardSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-phased-week-1-onboard-survey.svg"
  />
)

export const PhasedWeek5OnboardSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-phased-week-5-onboard-survey.svg"
  />
)

export const SinglePointOnboardSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-single-point-onboard-survey.svg"
  />
)

export const GeneralOnboardSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-general-onboard-survey.svg"
  />
)

export const RemoteOnboardSurvey = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-remote-onboard-survey.svg"
  />
)

/**
 * Template Library / Performance
 */
export const Individual360 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-individual-360.svg"
  />
)

export const Leadership360 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-leadership-360.svg"
  />
)

export const Manager360 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-manager-360.svg"
  />
)

export const Individual180 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-individual-180.svg"
  />
)

export const Leadership180 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-leadership-180.svg"
  />
)

export const Manager180 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-manager-180.svg"
  />
)

export const TeamEffectiveness1 = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-team-effectiveness-1.svg"
  />
)

export const TeamEffectiveness2 = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-team-effectiveness-2.svg"
  />
)

/**
 * Template Library / COVID-19
 */

export const WellbeingSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey.svg"
  />
)

export const Response = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-response.svg"
  />
)

export const RemoteWorkQSet = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-remote-work-q-set.svg"
  />
)

export const ReturnToWorkplace = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-return-to-workplace.svg"
  />
)

export const PulseSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/template-library-pulse-survey.svg"
  />
)

/**
 * New Account
 */
export const AccountBasics = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/new-account-account-basics.svg"
  />
)

export const CompanyDetails = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/new-account-company-details.svg"
  />
)

export const EmployeeData = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/new-account-employee-data.svg"
  />
)

export const Gdpr = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/new-account-gdpr.svg"
  />
)

export const Timezone = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/new-account-timezone.svg"
  />
)

export const AddUser = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/new-account-add-user.svg"
  />
)

/**
 * Skills Coach (previously referred to as Manager Learning)
 */
export const Strategy = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-strategy.svg"
  />
)

export const Resilience = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-resilience.svg"
  />
)

export const RemoteManager = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-remote-manager.svg"
  />
)

export const Productivity = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-productivity.svg"
  />
)

export const ManagerLearning = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-manager-learning.svg"
  />
)

export const Feedback = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-feedback.svg"
  />
)

export const Coaching = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-coaching.svg"
  />
)

export const OneOnOne = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/skills-coach-1-on-1.svg"
  />
)

/**
 * Miscellaneous
 */
export const ViewReports = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-view-reports.svg"
  />
)

export const ReadArticle = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-read-article.svg"
  />
)

export const FastAction = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-fast-action.svg"
  />
)

export const BaselineSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-baseline-survey.svg"
  />
)

export const SpreadsheetTemplate = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-spreadsheet-template.svg"
  />
)

export const AddImage = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-add-image.svg"
  />
)

export const MeetingVoices = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-meeting-voices.svg"
  />
)

export const Workshop = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-workshop.svg"
  />
)

export const Video = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-video.svg"
  />
)

export const ReportSharing = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-report-sharing.svg"
  />
)

export const BlankSurvey = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-blank-survey.svg"
  />
)

export const TakeAim = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-take-aim.svg"
  />
)

export const Action = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-action.svg"
  />
)

export const Training1 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-training-1.svg"
  />
)

export const Training2 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-training-2.svg"
  />
)

export const Training3 = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-training-3.svg"
  />
)

export const ShareReport = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-share-report.svg"
  />
)

export const Team = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-team.svg"
  />
)

export const ExecutiveReportSharing = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-executive-report-sharing.svg"
  />
)

export const ManagerReportSharing = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-manager-report-sharing.svg"
  />
)

export const LeaderReportSharing = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-leader-report-sharing.svg"
  />
)

export const Alarm = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-alarm.svg"
  />
)

export const Fire = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-fire.svg"
  />
)

export const Fireworks = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-fireworks.svg"
  />
)

export const FullImport = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-full-import.svg"
  />
)

export const HrisImport = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-hris-import.svg"
  />
)

export const PartialImport = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-partial-import.svg"
  />
)

export const Starburst = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-starburst.svg"
  />
)

export const Stop = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-stop.svg"
  />
)

export const TrafficCone = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-traffic-cone.svg"
  />
)

export const Trophy = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-trophy.svg"
  />
)

export const UnderConstruction = ({
  enableAspectRatio,
  ...props
}: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-under-construction.svg"
  />
)

export const ValueAdd = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-value-add.svg"
  />
)

export const Recommendation = ({ enableAspectRatio, ...props }: SpotProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "square" : undefined}
    {...props}
    name="illustrations/heart/spot/miscellaneous-shield.svg"
  />
)
