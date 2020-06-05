import { Dropdown, Paragraph } from "@kaizen/component-library"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Button } from "../button"
import {
  NavigationTab,
  TitleBlockZen,
} from "../title-block-zen/KaizenDraft/TitleBlockZen"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
const visibleIcon = require("@kaizen/component-library/icons/visible.icon.svg")
  .default
const commentIcon = require("@kaizen/component-library/icons/comment.icon.svg")
  .default
const starIcon = require("@kaizen/component-library/icons/star-on.icon.svg")
  .default
const reportSharingIcon = require("@kaizen/component-library/icons/report-sharing.icon.svg")
  .default
import { assetUrl } from "@kaizen/hosted-assets"

require("./TitleBlockZen.stories.scss")

export default {
  title: "TitleBlockZen (React)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria["700"],
        default: false,
      },
    ],
  },
}

export const TitleBlockZenDefault = () => (
  <TitleBlockZen
    title="Baseline Engagement Survey"
    surveyStatus={{ text: "Live", status: "live" }}
    primaryActions={[
      <Button label="Label" reversed />,
      <Button label="Label" primary reversed />,
    ]}
    secondaryActions={[
      <Button
        label="Share report"
        secondary
        reversed
        icon={reportSharingIcon}
      />,
      <Dropdown label="Export" reversedColor controlAction />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
    navigationTabs={[
      <NavigationTab text="Summary" href="#" />,
      <NavigationTab
        text="Insight"
        href="#"
        handleClick={event => {
          alert("Label clicked!")
        }}
      />,
      <NavigationTab text="Participation" href="#" />,
      <NavigationTab text="Questions" href="#" active />,
      <NavigationTab text="Heatmap" href="#" />,
      <NavigationTab text="Comments" href="#" />,
    ]}
  ></TitleBlockZen>
)

TitleBlockZenDefault.story = {
  name: "Default",
}

export const TitleBlockZenPerformance = () => (
  <TitleBlockZen
    title="Blanca Wheeler"
    primaryActions={[
      <Button label="Request feedback" reversed />,
      <Button label="Give feedback" primary reversed />,
    ]}
    secondaryActions={[
      <Button label="Quick comment" secondary reversed icon={commentIcon} />,
      <Button label="Review skills" secondary reversed icon={starIcon} />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
    avatar={<img alt="avatar image" src={assetUrl("site/empty-state.png")} />}
    subtitle="Marketing Associate"
    navigationTabs={[
      <NavigationTab text="Feedback" href="#" active />,
      <NavigationTab
        text="Self-reflection"
        href="#"
        handleClick={event => {
          alert("Self-reflection clicked!")
        }}
      />,
      <NavigationTab text="Goal" href="#" />,
      <NavigationTab text="Evaluations" href="#" />,
      <NavigationTab text="Notes" href="#" />,
    ]}
  ></TitleBlockZen>
)

TitleBlockZenPerformance.story = {
  name: "TitleBlock (Performance)",
}
