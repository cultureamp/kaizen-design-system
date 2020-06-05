import { Dropdown, Paragraph } from "@kaizen/component-library"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Button } from "../button"
import {
  NavigationTab,
  TitleBlockZen,
} from "../title-block-zen/KaizenDraft/TitleBlockZen"
const addIcon = require("@kaizen/component-library/icons/add.icon.svg").default
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
}

export const Default = () => (
  <TitleBlockZen
    title="Page title"
    surveyStatus={{ text: "Live", status: "live" }}
    primaryActions={[
      <Button label="Label" reversed icon={addIcon} />,
      <Button label="Label" primary reversed icon={addIcon} />,
    ]}
    secondaryActions={[
      <Button label="Label" secondary reversed icon={visibleIcon} />,
      <Button label="Label" secondary reversed icon={visibleIcon} />,
      <Dropdown reversedColor />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
    navigationTabs={[
      <NavigationTab text="Label" href="#" active />,
      <NavigationTab text="Label" href="#" />,
      <NavigationTab text="Label" href="#" />,
      <NavigationTab text="Label" href="#" />,
      <NavigationTab text="Label" href="#" />,
      <NavigationTab text="Label" href="#" />,
    ]}
  ></TitleBlockZen>
)

Default.story = {
  name: "Default",
}

export const AdminVariant = () => (
  <TitleBlockZen
    title="Page title"
    variant="admin"
    sectionTitle="Section title"
    sectionTitleDescription="Description of section can go here"
    primaryActions={[
      <Button label="Label" icon={addIcon} />,
      <Button label="Label" primary icon={addIcon} />,
    ]}
    secondaryActions={[
      <Button label="Label" secondary icon={visibleIcon} />,
      <Button label="Label" secondary icon={visibleIcon} />,
      <Dropdown />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
  ></TitleBlockZen>
)

AdminVariant.story = {
  name: "Admin variant",
}

export const EducationVariant = () => (
  <TitleBlockZen
    title="Page title"
    variant="education"
    sectionTitle="Section title"
    sectionTitleDescription="Description of section can go here"
    primaryActions={[<Button label="Label" primary icon={addIcon} />]}
    secondaryActions={[
      <Button label="Label" secondary icon={visibleIcon} />,
      <Button label="Label" secondary icon={visibleIcon} />,
      <Dropdown />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
  ></TitleBlockZen>
)

EducationVariant.story = {
  name: "Education variant",
}

export const Engagement = () => (
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

Engagement.story = {
  name: "Engagement",
}

export const Performance = () => (
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

Performance.story = {
  name: "Performance",
}
