import React from "react"
import { Base, BaseProps } from "./Base"
import { VideoPlayerProps, VideoPlayer } from "./Players/VideoPlayer"

export interface SceneProps
  extends Pick<BaseProps, "alt" | "classNameOverride"> {
  enableAspectRatio?: boolean
}

interface BaseAnimatedSceneProps
  extends SceneProps,
    Pick<VideoPlayerProps, "autoplay" | "loop"> {
  isAnimated?: boolean
}

interface AnimatedProps extends Omit<BaseAnimatedSceneProps, "alt"> {
  isAnimated: true
  alt?: never
}
interface NotAnimatedProps extends BaseAnimatedSceneProps {
  isAnimated?: false
  autoplay?: never
  loop?: never
}

export type AnimatedSceneProps = AnimatedProps | NotAnimatedProps

// Brand Moments

export const BrandMomentPositiveOutro: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
BrandMomentPositiveOutro.displayName = "BrandMomentPositiveOutro"

export const BrandMomentLogin: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
BrandMomentLogin.displayName = "BrandMomentLogin"

export const BrandMomentError: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
BrandMomentError.displayName = "BrandMomentError"

export const BrandMomentNewAccountOnboarding: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-new-account-onboarding.svg"
  />
)
BrandMomentNewAccountOnboarding.displayName = "BrandMomentNewAccountOnboarding"

export const BrandMomentUploadEmployeeData: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-upload-employee-data.svg"
  />
)
BrandMomentUploadEmployeeData.displayName = "BrandMomentUploadEmployeeData"

export const BrandMomentStarterKit: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/brand-moments-starter-kit.svg"
  />
)
BrandMomentStarterKit.displayName = "BrandMomentStarterKit"

// Empty States

export const EmptyStatesAction: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
EmptyStatesAction.displayName = "EmptyStatesAction"

export const EmptyStatesInformative: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
EmptyStatesInformative.displayName = "EmptyStatesInformative"

export const EmptyStatesNegative: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
EmptyStatesNegative.displayName = "EmptyStatesNegative"

export const EmptyStatesPositive: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
EmptyStatesPositive.displayName = "EmptyStatesPositive"

export const EmptyStatesNeutral: React.VFC<AnimatedSceneProps> = ({
  isAnimated,
  enableAspectRatio,
  alt,
  ...otherProps
}) => {
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
EmptyStatesNeutral.displayName = "EmptyStatesNeutral"

// Information Modals

export const Information360Upgrade: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-360-upgrade.svg"
  />
)
Information360Upgrade.displayName = "Information360Upgrade"

export const InformationDemographicFocus: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-demographic-focus.svg"
  />
)
InformationDemographicFocus.displayName = "InformationDemographicFocus"

export const InformationTurnoverCalculator: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-turnover-calculator.svg"
  />
)
InformationTurnoverCalculator.displayName = "InformationTurnoverCalculator"

export const InformationTurnoverForecast: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-turnover-forecast.svg"
  />
)
InformationTurnoverForecast.displayName = "InformationTurnoverForecast"

export const InformationEmergingTrends: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-emerging-trends.svg"
  />
)
InformationEmergingTrends.displayName = "InformationEmergingTrends"

export const InformationEmployeeLifecycle: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-employee-lifecycle.svg"
  />
)
InformationEmployeeLifecycle.displayName = "InformationEmployeeLifecycle"

export const InformationReportOwner: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-report-owner.svg"
  />
)
InformationReportOwner.displayName = "InformationReportOwner"

export const InformationReportOwnerByRule: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/information-modals-report-owner-by-rule.svg"
  />
)
InformationReportOwnerByRule.displayName = "InformationReportOwnerByRule"

// Miscellaneous

export const Collaboration: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-collaboration.svg"
  />
)
Collaboration.displayName = "Collaboration"

export const Communication: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-communications.svg"
  />
)
Communication.displayName = "Communication"

export const CompanyValues: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-company-values.svg"
  />
)
CompanyValues.displayName = "CompanyValues"

export const ConnectTheDots: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-connect-the-dots.svg"
  />
)
ConnectTheDots.displayName = "ConnectTheDots"

export const CultureLab: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-culture-lab.svg"
  />
)
CultureLab.displayName = "CultureLab"

export const TermsAgreement: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/miscellaneous-terms-agreement.svg"
  />
)
TermsAgreement.displayName = "TermsAgreement"

// Skills Coach

export const SkillsCoach1On1Meetings: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-1-on-1-meetings.svg"
  />
)
SkillsCoach1On1Meetings.displayName = "SkillsCoach1On1Meetings"

export const SkillsCoachCoaching: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-coaching.svg"
  />
)
SkillsCoachCoaching.displayName = "SkillsCoachCoaching"

export const SkillsCoachEmployeeDevelopment: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-employee-development.svg"
  />
)
SkillsCoachEmployeeDevelopment.displayName = "SkillsCoachEmployeeDevelopment"

export const SkillsCoachEssentialFeedback: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-feedback.svg"
  />
)
SkillsCoachEssentialFeedback.displayName = "SkillsCoachEssentialFeedback"

export const SkillsCoachEssentialProductivity: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-productivity.svg"
  />
)
SkillsCoachEssentialProductivity.displayName =
  "SkillsCoachEssentialProductivity"

export const SkillsCoachEssentialResilience: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-essential-resilience.svg"
  />
)
SkillsCoachEssentialResilience.displayName = "SkillsCoachEssentialResilience"

export const SkillsCoachInfluentialCommunication: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-influential-communication.svg"
  />
)
SkillsCoachInfluentialCommunication.displayName =
  "SkillsCoachInfluentialCommunication"

export const SkillsCoachLeadingChange: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-leading-change.svg"
  />
)
SkillsCoachLeadingChange.displayName = "SkillsCoachLeadingChange"

export const SkillsCoachFeedback: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-feedback.svg"
  />
)
SkillsCoachFeedback.displayName = "SkillsCoachFeedback"

export const SkillsCoachManagerHub: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-manager-hub.svg"
  />
)
SkillsCoachManagerHub.displayName = "SkillsCoachManagerHub"

export const SkillsCoachProductivity: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-productivity.svg"
  />
)
SkillsCoachProductivity.displayName = "SkillsCoachProductivity"

export const SkillsCoachRemoteManager: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-remote-manager.svg"
  />
)
SkillsCoachRemoteManager.displayName = "SkillsCoachRemoteManager"

export const SkillsCoachResilience: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-resilience.svg"
  />
)
SkillsCoachResilience.displayName = "SkillsCoachResilience"

export const SkillsCoachStrategy: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/skills-coach-strategy.svg"
  />
)
SkillsCoachStrategy.displayName = "SkillsCoachStrategy"

// Engagement

export const Programs: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-programs.svg"
  />
)
Programs.displayName = "Programs"

export const EngagementSurveySummaryFemale: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-survey-summary-female.svg"
  />
)
EngagementSurveySummaryFemale.displayName = "EngagementSurveySummaryFemale"

export const EngagementSurveySummaryMale: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/engagement-survey-summary-male.svg"
  />
)
EngagementSurveySummaryMale.displayName = "EngagementSurveySummaryMale"

export const SurveyOverviewClosed: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/survey-overview-closed.svg"
  />
)
SurveyOverviewClosed.displayName = "SurveyOverviewClosed"

export const SurveyGetStarted: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "portrait" : undefined}
    {...props}
    name="illustrations/heart/scene/getting-started.svg"
  />
)
SurveyGetStarted.displayName = "SurveyGetStarted"

export const PerformanceCompanySettings: React.VFC<SceneProps> = ({
  enableAspectRatio,
  ...props
}) => (
  <Base
    aspectRatio={enableAspectRatio ? "landscape" : undefined}
    {...props}
    name="illustrations/heart/scene/performance-company-settings.svg"
  />
)
PerformanceCompanySettings.displayName = "PerformanceCompanySettings"
