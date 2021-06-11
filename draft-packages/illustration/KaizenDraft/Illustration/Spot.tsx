import { useTheme } from "@kaizen/design-tokens"
import * as React from "react"
import { Base, BaseProps } from "./Base"
import { AnimatedBase, AnimatedBaseProps } from "./AnimatedBase"

export type SpotProps = Pick<BaseProps, "alt" | "classNameAndIHaveSpokenToDST">
export type AnimatedSpotProps = SpotProps &
  AnimatedBaseProps & { isAnimated?: boolean }

const noZenIllustrationWarning = (illustrationName: string) => {
  // eslint-disable-next-line no-console
  console.warn(
    `Kaizen Illustration: No corresponding Zen illustration for ${illustrationName}. Displaying Heart illustration instead."`
  )
}

const noAnimationSupportWarning = (illustrationName: string) => {
  // eslint-disable-next-line no-console
  console.warn(
    `Kaizen Illustration: Animations are not supported for ${illustrationName} in Zen."`
  )
}

/**
 * Moods
 */
export const Cautionary = ({
  isAnimated,
  ...otherProps
}: AnimatedSpotProps) => {
  const { themeKey } = useTheme()
  const illustrationPath =
    themeKey === "zen"
      ? "illustrations/spot/moods-cautionary.svg"
      : "illustrations/heart/spot/moods-cautionary.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
      {...otherProps}
      name="illustrations/spot/moods-cautionary.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    if (themeKey === "zen") {
      noAnimationSupportWarning("Cautionary")
      return StaticIllustration
    }
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Informative = ({
  isAnimated,
  ...otherProps
}: AnimatedSpotProps) => {
  const { themeKey } = useTheme()
  const illustrationPath =
    themeKey === "zen"
      ? "illustrations/spot/moods-informative.svg"
      : "illustrations/heart/spot/moods-informative.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
      {...otherProps}
      name="illustrations/spot/moods-informative.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    if (themeKey === "zen") {
      noAnimationSupportWarning("Cautionary")
      return StaticIllustration
    }
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Negative = ({ isAnimated, ...otherProps }: AnimatedSpotProps) => {
  const { themeKey } = useTheme()
  const illustrationPath =
    themeKey === "zen"
      ? "illustrations/spot/moods-negative.svg"
      : "illustrations/heart/spot/moods-negative.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
      {...otherProps}
      name="illustrations/spot/moods-negative.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    if (themeKey === "zen") {
      noAnimationSupportWarning("Cautionary")
      return StaticIllustration
    }
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
}: AnimatedSpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/moods-positive-male.svg"
      : "illustrations/heart/spot/moods-positive.svg"

  return <Base {...otherProps} name={illustrationPath} />
}

/**
 * @deprecated Use the non-gendered Positive illustration instead
 */
export const PositiveFemale = ({
  isAnimated,
  ...otherProps
}: AnimatedSpotProps) => {
  const { themeKey } = useTheme()
  const illustrationPath =
    themeKey === "zen"
      ? "illustrations/spot/moods-positive-female.svg"
      : "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
      {...otherProps}
      name="illustrations/spot/moods-positive.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    if (themeKey === "zen") {
      noAnimationSupportWarning("Cautionary")
      return StaticIllustration
    }
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Positive = ({ isAnimated, ...otherProps }: AnimatedSpotProps) => {
  const { themeKey } = useTheme()
  const illustrationPath =
    themeKey === "zen"
      ? "illustrations/spot/moods-positive-female.svg"
      : "illustrations/heart/spot/moods-positive.svg"
  const StaticIllustration = <Base {...otherProps} name={illustrationPath} />
  const AnimatedIllustration = (
    <AnimatedBase
      {...otherProps}
      name="illustrations/spot/moods-positive.lottie"
      fallback={illustrationPath}
    />
  )

  if (isAnimated) {
    if (themeKey === "zen") {
      noAnimationSupportWarning("Cautionary")
      return StaticIllustration
    }
    return AnimatedIllustration
  }
  return StaticIllustration
}

export const Assertive = ({ isAnimated, ...otherProps }: AnimatedSpotProps) => {
  const { themeKey } = useTheme()
  if (themeKey === "zen") {
    noZenIllustrationWarning("Assertive")
  }
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
    if (themeKey === "zen") {
      noAnimationSupportWarning("Cautionary")
      return StaticIllustration
    }
    return AnimatedIllustration
  }
  return StaticIllustration
}

/**
 * Template Library / Engagement
 */
export const BenefitsSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-benefits-survey.svg"
      : "illustrations/heart/spot/template-library-benefits-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const CustomSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-custom-survey.svg"
      : "illustrations/heart/spot/template-library-custom-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const CustomUnattributedSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-custom-unattributed-survey.svg"
      : "illustrations/heart/spot/template-library-custom-unattributed-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const EngagementSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-engagement-survey.svg"
      : "illustrations/heart/spot/template-library-engagement-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const InclusionSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-inclusion-survey.svg"
      : "illustrations/heart/spot/template-library-inclusion-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const QuickEngagementSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-quick-engagement-survey.svg"
      : "illustrations/heart/spot/template-library-quick-engagement-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ValuesSurvey1 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-values-survey-1.svg"
      : "illustrations/heart/spot/template-library-values-survey-1.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ValuesSurvey2 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-values-survey-2.svg"
      : "illustrations/heart/spot/template-library-values-survey-2.svg"

  return <Base {...props} name={illustrationPath} />
}

export const WellbeingSurvey1 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-wellbeing-survey-1.svg"
      : "illustrations/heart/spot/template-library-wellbeing-survey-1.svg"

  return <Base {...props} name={illustrationPath} />
}

export const WellbeingSurvey2 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-wellbeing-survey-2.svg"
      : "illustrations/heart/spot/template-library-wellbeing-survey-2.svg"

  return <Base {...props} name={illustrationPath} />
}

export const WellbeingSurvey3 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-wellbeing-survey-3.svg"
      : "illustrations/heart/spot/template-library-wellbeing-survey-3.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ChangeReadiness = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-change-readiness.svg"
      : "illustrations/heart/spot/template-library-change-readiness.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ChangeSuccess = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-change-success.svg"
      : "illustrations/heart/spot/template-library-change-success.svg"

  return <Base {...props} name={illustrationPath} />
}

export const PerformanceDiagnostics = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-diagnostics.svg"
      : "illustrations/heart/spot/template-library-performance-diagnostics.svg"

  return <Base {...props} name={illustrationPath} />
}

export const LeadingThroughCrisis = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-leading-through-crisis.svg"

  return <Base {...props} name={illustrationPath} />
}

export const EmergencyResponse = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-emergency-response.svg"

  return <Base {...props} name={illustrationPath} />
}

/**
 * Template Library / Experience
 */
export const CandidateSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-candidate-survey.svg"
      : "illustrations/heart/spot/template-library-candidate-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const CustomOnboardSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-custom-onboard-survey.svg"
      : "illustrations/heart/spot/template-library-custom-onboard-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ExitSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-exit-survey.svg"
      : "illustrations/heart/spot/template-library-exit-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const InternSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-intern-survey.svg"
      : "illustrations/heart/spot/template-library-intern-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const PhasedWeek1OnboardSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-phased-week-1-onboard-survey.svg"
      : "illustrations/heart/spot/template-library-phased-week-1-onboard-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const PhasedWeek5OnboardSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-phased-week-5-onboard-survey.svg"
      : "illustrations/heart/spot/template-library-phased-week-5-onboard-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const SinglePointOnboardSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-single-point-onboard-survey.svg"
      : "illustrations/heart/spot/template-library-single-point-onboard-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const GeneralOnboardSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-general-onboard-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const RemoteOnboardSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-remote-onboard-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

/**
 * Template Library / Performance
 */
export const Individual360 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-individual-360.svg"
      : "illustrations/heart/spot/template-library-individual-360.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Leadership360 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-leadership-360.svg"
      : "illustrations/heart/spot/template-library-leadership-360.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Manager360 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-manager-360.svg"
      : "illustrations/heart/spot/template-library-manager-360.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Individual180 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-individual-180.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Leadership180 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-leadership-180.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Manager180 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-manager-180.svg"

  return <Base {...props} name={illustrationPath} />
}

export const TeamEffectiveness1 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-team-effectiveness-1.svg"
      : "illustrations/heart/spot/template-library-team-effectiveness-1.svg"

  return <Base {...props} name={illustrationPath} />
}

export const TeamEffectiveness2 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/template-library-team-effectiveness-2.svg"
      : "illustrations/heart/spot/template-library-team-effectiveness-2.svg"

  return <Base {...props} name={illustrationPath} />
}

/**
 * Template Library / COVID-19
 */

export const WellbeingSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-wellbeing-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Response = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-response.svg"

  return <Base {...props} name={illustrationPath} />
}

export const RemoteWorkQSet = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-remote-work-q-set.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ReturnToWorkplace = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-return-to-workplace.svg"

  return <Base {...props} name={illustrationPath} />
}

export const PulseSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/template-library-pulse-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

/**
 * New Account
 */
export const AccountBasics = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/new-account-account-basics.svg"
      : "illustrations/heart/spot/new-account-account-basics.svg"

  return <Base {...props} name={illustrationPath} />
}

export const CompanyDetails = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/new-account-company-details.svg"
      : "illustrations/heart/spot/new-account-company-details.svg"

  return <Base {...props} name={illustrationPath} />
}

export const EmployeeData = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/new-account-employee-data.svg"
      : "illustrations/heart/spot/new-account-employee-data.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Gdpr = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/new-account-gdpr.svg"
      : "illustrations/heart/spot/new-account-gdpr.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Timezone = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/new-account-timezone.svg"
      : "illustrations/heart/spot/new-account-timezone.svg"

  return <Base {...props} name={illustrationPath} />
}

export const AddUser = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/new-account-add-user.svg"
      : "illustrations/heart/spot/new-account-add-user.svg"

  return <Base {...props} name={illustrationPath} />
}

/**
 * Skills Coach (previously referred to as Manager Learning)
 */
export const Strategy = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-strategy.svg"
      : "illustrations/heart/spot/skills-coach-strategy.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Resilience = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-resilience.svg"
      : "illustrations/heart/spot/skills-coach-resilience.svg"

  return <Base {...props} name={illustrationPath} />
}

export const RemoteManager = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-remote-manager.svg"
      : "illustrations/heart/spot/skills-coach-remote-manager.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Productivity = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-productivity.svg"
      : "illustrations/heart/spot/skills-coach-productivity.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ManagerLearning = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-manager-learning.svg"
      : "illustrations/heart/spot/skills-coach-manager-learning.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Feedback = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-feedback.svg"
      : "illustrations/heart/spot/skills-coach-feedback.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Coaching = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-coaching.svg"
      : "illustrations/heart/spot/skills-coach-coaching.svg"

  return <Base {...props} name={illustrationPath} />
}

export const OneOnOne = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/manager-learning-1-on-1.svg"
      : "illustrations/heart/spot/skills-coach-1-on-1.svg"

  return <Base {...props} name={illustrationPath} />
}

/**
 * Miscellaneous
 */
export const ViewReports = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-view-reports.svg"
      : "illustrations/heart/spot/miscellaneous-view-reports.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ReadArticle = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-read-article.svg"
      : "illustrations/heart/spot/miscellaneous-read-article.svg"

  return <Base {...props} name={illustrationPath} />
}

export const FastAction = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-fast-action.svg"
      : "illustrations/heart/spot/miscellaneous-fast-action.svg"

  return <Base {...props} name={illustrationPath} />
}

export const BaselineSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-baseline-survey.svg"
      : "illustrations/heart/spot/miscellaneous-baseline-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const SpreadsheetTemplate = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-spreadsheet-template.svg"
      : "illustrations/heart/spot/miscellaneous-spreadsheet-template.svg"

  return <Base {...props} name={illustrationPath} />
}

export const AddImage = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-add-image.svg"
      : "illustrations/heart/spot/miscellaneous-add-image.svg"

  return <Base {...props} name={illustrationPath} />
}

export const MeetingVoices = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-meeting-voices.svg"
      : "illustrations/heart/spot/miscellaneous-meeting-voices.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Workshop = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-workshop.svg"
      : "illustrations/heart/spot/miscellaneous-workshop.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Video = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-video.svg"
      : "illustrations/heart/spot/miscellaneous-video.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ReportSharing = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-report-sharing.svg"
      : "illustrations/heart/spot/miscellaneous-report-sharing.svg"

  return <Base {...props} name={illustrationPath} />
}

export const BlankSurvey = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-blank-survey.svg"
      : "illustrations/heart/spot/miscellaneous-blank-survey.svg"

  return <Base {...props} name={illustrationPath} />
}

export const TakeAim = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-take-aim.svg"
      : "illustrations/heart/spot/miscellaneous-take-aim.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Action = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-action.svg"
      : "illustrations/heart/spot/miscellaneous-action.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Training1 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-training-1.svg"
      : "illustrations/heart/spot/miscellaneous-training-1.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Training2 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-training-2.svg"
      : "illustrations/heart/spot/miscellaneous-training-2.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Training3 = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-training-3.svg"
      : "illustrations/heart/spot/miscellaneous-training-3.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ShareReport = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-share-report.svg"
      : "illustrations/heart/spot/miscellaneous-share-report.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Team = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-team.svg"
      : "illustrations/heart/spot/miscellaneous-team.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ExecutiveReportSharing = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-executive-report-sharing.svg"
      : "illustrations/heart/spot/miscellaneous-executive-report-sharing.svg"

  return <Base {...props} name={illustrationPath} />
}

export const ManagerReportSharing = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-manager-report-sharing.svg"
      : "illustrations/heart/spot/miscellaneous-manager-report-sharing.svg"

  return <Base {...props} name={illustrationPath} />
}

export const LeaderReportSharing = (props: SpotProps) => {
  const theme = useTheme()
  const illustrationPath =
    theme.themeKey === "zen"
      ? "illustrations/spot/miscellaneous-leader-report-sharing.svg"
      : "illustrations/heart/spot/miscellaneous-leader-report-sharing.svg"

  return <Base {...props} name={illustrationPath} />
}

export const Alarm = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Alarm")
  }
  return (
    <Base {...props} name="illustrations/heart/spot/miscellaneous-alarm.svg" />
  )
}

export const Fire = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Fire")
  }
  return (
    <Base {...props} name="illustrations/heart/spot/miscellaneous-fire.svg" />
  )
}

export const Fireworks = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Fireworks")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-fireworks.svg"
    />
  )
}

export const FullImport = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("FullImport")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-full-import.svg"
    />
  )
}

export const HrisImport = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("HrisImport")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-hris-import.svg"
    />
  )
}

export const PartialImport = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("PartialImport")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-partial-import.svg"
    />
  )
}

export const Starburst = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Starburst")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-starburst.svg"
    />
  )
}

export const Stop = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Stop")
  }
  return (
    <Base {...props} name="illustrations/heart/spot/miscellaneous-stop.svg" />
  )
}

export const TrafficCone = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("TrafficCone")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-traffic-cone.svg"
    />
  )
}

export const Trophy = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Trophy")
  }
  return (
    <Base {...props} name="illustrations/heart/spot/miscellaneous-trophy.svg" />
  )
}

export const UnderConstruction = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("UnderConstruction")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-under-construction.svg"
    />
  )
}

export const ValueAdd = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("ValueAdd")
  }
  return (
    <Base
      {...props}
      name="illustrations/heart/spot/miscellaneous-value-add.svg"
    />
  )
}

export const Recommendation = (props: SpotProps) => {
  const theme = useTheme()
  if (theme.themeKey === "zen") {
    noZenIllustrationWarning("Recommendation")
  }
  return (
    <Base {...props} name="illustrations/heart/spot/miscellaneous-shield.svg" />
  )
}
