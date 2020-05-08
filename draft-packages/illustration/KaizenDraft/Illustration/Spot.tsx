import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SpotName } from "../../types"
const styles = require("./style.module.scss")

export type SpotProps = {
  /**
   * Refer to the Spot Illustration Sticker Sheet in Zen UI Kit
   */
  name: SpotName

  /**
   * If there is context/text surrounding this illustration that provides alt text,
   * provide an empty string
   */
  alt: string

  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
}

/**
 * Spot illustrations are simple, informational visuals that assist users in their task.
 */
const Spot = ({
  name,
  alt,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: SpotProps) => {
  const className =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  return (
    <img
      {...otherProps}
      className={className}
      alt={alt}
      src={assetUrl(mapSpotNameToLocation(name))}
    />
  )
}

export const mapSpotNameToLocation = (name: SpotName) => {
  switch (name) {
    case "BenefitsSurvey":
      return "illustrations/spot/template-library-benefits-survey.svg"
    case "CustomSurvey":
      return "illustrations/spot/template-library-custom-survey.svg"
    case "CustomUnattributedSurvey":
      return "illustrations/spot/template-library-custom-unattributed-survey.svg"
    case "EngagementSurvey":
      return "illustrations/spot/template-library-engagement-survey.svg"
    case "InclusionSurvey":
      return "illustrations/spot/template-library-inclusion-survey.svg"
    case "QuickEngagementSurvey":
      return "illustrations/spot/template-library-quick-engagement-survey.svg"
    case "ValuesSurvey1":
      return "illustrations/spot/template-library-values-survey-1.svg"
    case "ValuesSurvey2":
      return "illustrations/spot/template-library-values-survey-2.svg"
    case "WellbeingSurvey1":
      return "illustrations/spot/template-library-wellbeing-survey-1.svg"
    case "WellbeingSurvey2":
      return "illustrations/spot/template-library-wellbeing-survey-2.svg"
    case "WellbeingSurvey3":
      return "illustrations/spot/template-library-wellbeing-survey-3.svg"
    case "ChangeReadiness":
      return "illustrations/spot/template-library-change-readiness.svg"
    case "ChangeSuccess":
      return "illustrations/spot/template-library-change-success.svg"
    case "CandidateSurvey":
      return "illustrations/spot/template-library-candidate-survey.svg"
    case "CustomOnboardSurvey":
      return "illustrations/spot/template-library-custom-onboard-survey.svg"
    case "ExitSurvey":
      return "illustrations/spot/template-library-exit-survey.svg"
    case "InternSurvey":
      return "illustrations/spot/template-library-intern-survey.svg"
    case "PhasedWeek1OnboardSurvey":
      return "illustrations/spot/template-library-phased-week-1-onboard-survey.svg"
    case "PhasedWeek5OnboardSurvey":
      return "illustrations/spot/template-library-phased-week-5-onboard-survey.svg"
    case "SinglePointOnboardSurvey":
      return "illustrations/spot/template-library-single-point-onboard-survey.svg"
    case "Individual360":
      return "illustrations/spot/template-library-individual-360.svg"
    case "Leadership360":
      return "illustrations/spot/template-library-leadership-360.svg"
    case "Manager360":
      return "illustrations/spot/template-library-manager-360.svg"
    case "TeamEffectiveness1":
      return "illustrations/spot/template-library-team-effectiveness-1.svg"
    case "TeamEffectiveness2":
      return "illustrations/spot/template-library-team-effectiveness-2.svg"
    case "AccountBasics":
      return "illustrations/spot/new-account-account-basics.svg"
    case "CompanyDetails":
      return "illustrations/spot/new-account-company-details.svg"
    case "EmployeeData":
      return "illustrations/spot/new-account-employee-data.svg"
    case "Gdpr":
      return "illustrations/spot/new-account-gdpr.svg"
    case "Timezone":
      return "illustrations/spot/new-account-timezone.svg"
    case "AddUser":
      return "illustrations/spot/new-account-add-user.svg"
    case "ViewReports":
      return "illustrations/spot/miscellaneous-view-reports.svg"
    case "ReadArticle":
      return "illustrations/spot/miscellaneous-read-article.svg"
    case "FastAction":
      return "illustrations/spot/miscellaneous-fast-action.svg"
    case "BaselineSurvey":
      return "illustrations/spot/miscellaneous-baseline-survey.svg"
    case "SpreadsheetTemplate":
      return "illustrations/spot/miscellaneous-spreadsheet-template.svg"
    case "AddImage":
      return "illustrations/spot/miscellaneous-add-image.svg"
    case "MeetingVoices":
      return "illustrations/spot/miscellaneous-meeting-voices.svg"
    case "Workshop":
      return "illustrations/spot/miscellaneous-workshop.svg"
    case "Video":
      return "illustrations/spot/miscellaneous-video.svg"
    case "ReportSharing":
      return "illustrations/spot/miscellaneous-report-sharing.svg"
    case "BlankSurvey":
      return "illustrations/spot/miscellaneous-blank-survey.svg"
    case "TakeAim":
      return "illustrations/spot/miscellaneous-take-aim.svg"
    case "Action":
      return "illustrations/spot/miscellaneous-action.svg"
    case "Training1":
      return "illustrations/spot/miscellaneous-training-1.svg"
    case "Training2":
      return "illustrations/spot/miscellaneous-training-2.svg"
    case "Training3":
      return "illustrations/spot/miscellaneous-training-3.svg"
    case "ShareReport":
      return "illustrations/spot/miscellaneous-share-report.svg"
    case "Team":
      return "illustrations/spot/miscellaneous-team.svg"
    case "ExecutiveReportSharing":
      return "illustrations/spot/miscellaneous-executive-report-sharing.svg"
    case "ManagerReportSharing":
      return "illustrations/spot/miscellaneous-manager-report-sharing.svg"
    case "LeaderReportSharing":
      return "illustrations/spot/miscellaneous-leader-report-sharing.svg"
    case "Cautionary":
      return "illustrations/spot/moods-cautionary.svg"
    case "Informative":
      return "illustrations/spot/moods-informative.svg"
    case "Negative":
      return "illustrations/spot/moods-negative.svg"
    case "PositiveMale":
      return "illustrations/spot/moods-positive-male.svg"
    case "PositiveFemale":
      return "illustrations/spot/moods-positive-female.svg"
    case "OneOnOne":
      return "illustrations/spot/manager-learning-1-on-1.svg"
    case "Productivity":
      return "illustrations/spot/manager-learning-productivity.svg"
    case "Strategy":
      return "illustrations/spot/manager-learning-strategy.svg"
    case "Resilience":
      return "illustrations/spot/manager-learning-resilience.svg"
    case "Coaching":
      return "illustrations/spot/manager-learning-coaching.svg"
    case "Feedback":
      return "illustrations/spot/manager-learning-feedback.svg"
    case "RemoteManager":
      return "illustrations/spot/manager-learning-remote-manager.svg"
    case "ManagerLearning":
      return "illustrations/spot/manager-learning-manager-learning.svg"
    case "Diagnostics":
      return "illustrations/spot/template-library-diagnostics.svg"
    default:
      // tslint:disable-next-line: no-console
      console.error("Kaizen Illustration - invalid name ", name)
      return ""
  }
}

export default Spot
