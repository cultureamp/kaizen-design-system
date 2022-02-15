import * as React from "react"
import { Base, BaseProps } from "./Base"
import { VideoPlayerProps, VideoPlayer } from "./Players/VideoPlayer"
import { SubsetBecomesNever } from "./types"

export type SceneProps = Pick<
  BaseProps,
  "alt" | "classNameAndIHaveSpokenToDST"
> & { enableAspectRatio?: boolean }
export type AnimatedProps = { isAnimated?: true } & Pick<
  VideoPlayerProps,
  "loop" | "autoplay"
> &
  SubsetBecomesNever<SceneProps, "alt"> & { enableAspectRatio?: boolean }
type NotAnimatedProps = { isAnimated: false } & SubsetBecomesNever<
  VideoPlayerProps,
  "autoplay" | "loop"
> &
  SceneProps & { enableAspectRatio?: boolean }

export type AnimatedSceneProps = AnimatedProps | NotAnimatedProps

// Brand Moments

export const BrandMomentPositiveOutro = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-positive-outro"
        source="illustrations/heart/scene/brand-moments-positive-outro"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-positive-outro.png"
    />
  )
}

export const BrandMomentLogin = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-login"
        source="illustrations/heart/scene/brand-moments-login"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-login.png"
    />
  )
}

export const BrandMomentError = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-error"
        source="illustrations/heart/scene/brand-moments-error"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-error.png"
    />
  )
}

export const BrandMomentNewAccountOnboarding = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-new-account-onboarding.svg"
  />
)

export const BrandMomentUploadEmployeeData = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-upload-employee-data.svg"
  />
)

export const BrandMomentStarterKit = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-starter-kit.svg"
  />
)

// Empty States

export const EmptyStatesAction = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-action"
        source="illustrations/heart/scene/empty-states-action"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-action.svg"
    />
  )
}

export const EmptyStatesInformative = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-informative"
        source="illustrations/heart/scene/empty-states-informative"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-informative.svg"
    />
  )
}

export const EmptyStatesNegative = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-negative"
        source="illustrations/heart/scene/empty-states-negative"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-negative.svg"
    />
  )
}

export const EmptyStatesPositive = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-positive"
        source="illustrations/heart/scene/empty-states-positive"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-positive.svg"
    />
  )
}

export const EmptyStatesNeutral = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  if (isAnimated) {
    return (
      <VideoPlayer
        aspectRatio={enableAspectRatio ? "landscape" : undefined}
        {...otherProps}
        fallback="illustrations/heart/scene/empty-states-neutral"
        source="illustrations/heart/scene/empty-states-neutral"
      />
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/empty-states-neutral.svg"
    />
  )
}

// Information Modals

export const Information360Upgrade = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-360-upgrade.svg"
  />
)

export const InformationDemographicFocus = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-demographic-focus.svg"
  />
)

export const InformationTurnoverCalculator = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-turnover-calculator.svg"
  />
)

export const InformationTurnoverForecast = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-turnover-forecast.svg"
  />
)

export const InformationEmergingTrends = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-emerging-trends.svg"
  />
)

export const InformationEmployeeLifecycle = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-employee-lifecycle.svg"
  />
)

export const InformationReportOwner = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-report-owner.svg"
  />
)

export const InformationReportOwnerByRule = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-report-owner-by-rule.svg"
  />
)

// Miscellaneous

export const Collaboration = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-collaboration.svg"
  />
)

export const Communication = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-communications.svg"
  />
)

export const CompanyValues = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-company-values.svg"
  />
)

export const ConnectTheDots = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-connect-the-dots.svg"
  />
)

export const CultureLab = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-culture-lab.svg"
  />
)

export const DataCatching = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-data-catching.svg"
  />
)

export const HumanityAtWork = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-humanity-at-work.svg"
  />
)

export const TermsAgreement = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-terms-agreement.svg"
  />
)

// Skills Coach

export const SkillsCoach1On1Meetings = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-1-on-1-meetings.svg"
  />
)

export const SkillsCoachCoaching = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-coaching.svg"
  />
)

export const SkillsCoachEmployeeDevelopment = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-employee-development.svg"
  />
)

export const SkillsCoachEssentialFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-feedback.svg"
  />
)

export const SkillsCoachEssentialProductivity = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-productivity.svg"
  />
)

export const SkillsCoachEssentialResilience = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-resilience.svg"
  />
)

export const SkillsCoachInfluentialCommunication = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-influential-communication.svg"
  />
)

export const SkillsCoachLeadingChange = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-leading-change.svg"
  />
)

export const SkillsCoachFeedback = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-feedback.svg"
  />
)

export const SkillsCoachManagerHub = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-manager-hub.svg"
  />
)

export const SkillsCoachProductivity = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-productivity.svg"
  />
)

export const SkillsCoachRemoteManager = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-remote-manager.svg"
  />
)

export const SkillsCoachResilience = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-resilience.svg"
  />
)

export const SkillsCoachStrategy = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-strategy.svg"
  />
)

// Engagement

export const Programs = ({ enableAspectRatio, ...props }: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-programs.svg"
  />
)

export const EngagementSurveySummaryFemale = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-survey-summary-female.svg"
  />
)

export const EngagementSurveySummaryMale = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-survey-summary-male.svg"
  />
)

export const SurveyOverviewClosed = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/survey-overview-closed.svg"
  />
)

export const SurveyGetStarted = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/getting-started.svg"
  />
)

export const PerformanceCompanySettings = ({
  enableAspectRatio,
  ...props
}: SceneProps) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/performance-company-settings.svg"
  />
)
