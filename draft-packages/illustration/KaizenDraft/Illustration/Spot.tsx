import * as React from "react"
import { Base, BaseProps } from "./Base"
import { AnimatedBase, AnimatedBaseProps } from "./Players/LottiePlayer"

export type SpotProps = Pick<BaseProps, "alt" | "classNameAndIHaveSpokenToDST">
export type AnimatedSpotProps = SpotProps &
  AnimatedBaseProps & { isAnimated?: boolean }

/**
 * Moods
 */
export const Cautionary = ({
  isAnimated,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-cautionary.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
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
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/spot/moods-informative.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
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

export const Negative = ({ isAnimated, ...otherProps }: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-negative.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
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
  ...otherProps
}: AnimatedSpotProps) => (
  <Base {...otherProps} name="illustrations/spot/moods-positive-male.svg" />
)

/**
 * @deprecated Use the non-gendered Positive illustration instead
 */
export const PositiveFemale = ({
  isAnimated,
  ...otherProps
}: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
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

export const Positive = ({ isAnimated, ...otherProps }: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
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

export const Assertive = ({ isAnimated, ...otherProps }: AnimatedSpotProps) => {
  const illustrationPath = "illustrations/heart/spot/moods-assertive.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
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
export const BenefitsSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-benefits-survey.svg"
  />
)

export const CustomSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-custom-survey.svg"
  />
)

export const CustomUnattributedSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-custom-unattributed-survey.svg"
  />
)

export const EngagementSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-engagement-survey.svg"
  />
)

export const InclusionSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-inclusion-survey.svg"
  />
)

export const QuickEngagementSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-quick-engagement-survey.svg"
  />
)

export const ValuesSurvey1 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-values-survey-1.svg"
  />
)

export const ValuesSurvey2 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-values-survey-2.svg"
  />
)

export const WellbeingSurvey1 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey-1.svg"
  />
)

export const WellbeingSurvey2 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey-2.svg"
  />
)

export const WellbeingSurvey3 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey-3.svg"
  />
)

export const ChangeReadiness = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-change-readiness.svg"
  />
)

export const ChangeSuccess = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-change-success.svg"
  />
)

export const PerformanceDiagnostics = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-performance-diagnostics.svg"
  />
)

export const LeadingThroughCrisis = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-leading-through-crisis.svg"
  />
)

export const EmergencyResponse = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-emergency-response.svg"
  />
)

/**
 * Template Library / Experience
 */
export const CandidateSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-candidate-survey.svg"
  />
)

export const CustomOnboardSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-custom-onboard-survey.svg"
  />
)

export const ExitSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-exit-survey.svg"
  />
)

export const InternSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-intern-survey.svg"
  />
)

export const PhasedWeek1OnboardSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-phased-week-1-onboard-survey.svg"
  />
)

export const PhasedWeek5OnboardSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-phased-week-5-onboard-survey.svg"
  />
)

export const SinglePointOnboardSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-single-point-onboard-survey.svg"
  />
)

export const GeneralOnboardSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-general-onboard-survey.svg"
  />
)

export const RemoteOnboardSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-remote-onboard-survey.svg"
  />
)

/**
 * Template Library / Performance
 */
export const Individual360 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-individual-360.svg"
  />
)

export const Leadership360 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-leadership-360.svg"
  />
)

export const Manager360 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-manager-360.svg"
  />
)

export const Individual180 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-individual-180.svg"
  />
)

export const Leadership180 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-leadership-180.svg"
  />
)

export const Manager180 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-manager-180.svg"
  />
)

export const TeamEffectiveness1 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-team-effectiveness-1.svg"
  />
)

export const TeamEffectiveness2 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-team-effectiveness-2.svg"
  />
)

/**
 * Template Library / COVID-19
 */

export const WellbeingSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-wellbeing-survey.svg"
  />
)

export const Response = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-response.svg"
  />
)

export const RemoteWorkQSet = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-remote-work-q-set.svg"
  />
)

export const ReturnToWorkplace = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-return-to-workplace.svg"
  />
)

export const PulseSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/template-library-pulse-survey.svg"
  />
)

/**
 * New Account
 */
export const AccountBasics = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/new-account-account-basics.svg"
  />
)

export const CompanyDetails = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/new-account-company-details.svg"
  />
)

export const EmployeeData = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/new-account-employee-data.svg"
  />
)

export const Gdpr = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/new-account-gdpr.svg" />
)

export const Timezone = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/new-account-timezone.svg" />
)

export const AddUser = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/new-account-add-user.svg" />
)

/**
 * Skills Coach (previously referred to as Manager Learning)
 */
export const Strategy = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/skills-coach-strategy.svg" />
)

export const Resilience = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/skills-coach-resilience.svg"
  />
)

export const RemoteManager = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/skills-coach-remote-manager.svg"
  />
)

export const Productivity = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/skills-coach-productivity.svg"
  />
)

export const ManagerLearning = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/skills-coach-manager-learning.svg"
  />
)

export const Feedback = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/skills-coach-feedback.svg" />
)

export const Coaching = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/skills-coach-coaching.svg" />
)

export const OneOnOne = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/skills-coach-1-on-1.svg" />
)

/**
 * Miscellaneous
 */
export const ViewReports = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-view-reports.svg"
  />
)

export const ReadArticle = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-read-article.svg"
  />
)

export const FastAction = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-fast-action.svg"
  />
)

export const BaselineSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-baseline-survey.svg"
  />
)

export const SpreadsheetTemplate = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-spreadsheet-template.svg"
  />
)

export const AddImage = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-add-image.svg"
  />
)

export const MeetingVoices = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-meeting-voices.svg"
  />
)

export const Workshop = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-workshop.svg" />
)

export const Video = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-video.svg" />
)

export const ReportSharing = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-report-sharing.svg"
  />
)

export const BlankSurvey = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-blank-survey.svg"
  />
)

export const TakeAim = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-take-aim.svg" />
)

export const Action = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-action.svg" />
)

export const Training1 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-training-1.svg"
  />
)

export const Training2 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-training-2.svg"
  />
)

export const Training3 = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-training-3.svg"
  />
)

export const ShareReport = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-share-report.svg"
  />
)

export const Team = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-team.svg" />
)

export const ExecutiveReportSharing = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-executive-report-sharing.svg"
  />
)

export const ManagerReportSharing = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-manager-report-sharing.svg"
  />
)

export const LeaderReportSharing = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-leader-report-sharing.svg"
  />
)

export const Alarm = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-alarm.svg" />
)

export const Fire = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-fire.svg" />
)

export const Fireworks = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-fireworks.svg"
  />
)

export const FullImport = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-full-import.svg"
  />
)

export const HrisImport = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-hris-import.svg"
  />
)

export const PartialImport = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-partial-import.svg"
  />
)

export const Starburst = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-starburst.svg"
  />
)

export const Stop = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-stop.svg" />
)

export const TrafficCone = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-traffic-cone.svg"
  />
)

export const Trophy = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-trophy.svg" />
)

export const UnderConstruction = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-under-construction.svg"
  />
)

export const ValueAdd = (props: SpotProps) => (
  <Base
    {...props}
    name="illustrations/heart/spot/miscellaneous-value-add.svg"
  />
)

export const Recommendation = (props: SpotProps) => (
  <Base {...props} name="illustrations/heart/spot/miscellaneous-shield.svg" />
)
