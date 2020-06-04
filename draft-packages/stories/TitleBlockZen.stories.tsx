import { Dropdown, Paragraph } from "@kaizen/component-library"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Button } from "../button"
import {
  NavigationTab,
  TitleBlock,
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

const stickyContainerStyle = {
  width: "100%",
  height: "2000px",
}

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

export const WithTitle = () => <TitleBlock title="Reports" />

WithTitle.story = {
  name: "TitleBlock with Title",
}

export const WithBreadcrumb = () => (
  <TitleBlock
    title="Home"
    breadcrumb={{ path: "#", text: "Back to reports" }}
  />
)

WithBreadcrumb.story = {
  name: "TitleBlock with breadcrumb",
}

export const WithToolbar = () => (
  <TitleBlock
    title="Home"
    toolbar={[
      <Button label="Action" reversed />,
      <Button label="Action 2" primary reversed />,
    ]}
  />
)

WithToolbar.story = {
  name: "TitleBlock with toolbar",
}

export const WithTag = () => (
  <TitleBlock title="Home" surveyStatus={{ status: "live", text: "Live" }} />
)

WithTag.story = {
  name: "TitleBlock with tag",
}

export const Sticky = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      sticky
      breadcrumb={{ path: "#", text: "Back to home" }}
      toolbar={[
        <Button label="Action" reversed />,
        <Button label="Action 2" primary reversed />,
      ]}
    />
    <div style={{ padding: "6rem", paddingTop: "8rem", maxWidth: "650px" }}>
      <Paragraph variant="body" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquam ipsum sit amet tortor sodales malesuada quis a nisi. Sed porta
        ullamcorper velit a scelerisque. Aliquam erat volutpat. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Proin ac vulputate mi. Vestibulum vitae pulvinar nibh. Cras
        congue, lorem tincidunt porta laoreet, mauris nunc elementum metus, at
        aliquet erat est eget odio. Vestibulum pretium ac massa id pretium. Nam
        convallis tincidunt lorem at elementum. Integer rhoncus nulla sit amet
        mollis placerat. Ut ullamcorper tortor eget metus sodales imperdiet.
        Proin sagittis porttitor lectus vitae vestibulum. Fusce lacinia mollis
        ullamcorper. Quisque sed molestie ex. Mauris dapibus neque eu dictum
      </Paragraph>
    </div>
  </div>
)

Sticky.story = {
  name: "TitleBlock sticky",
}

export const AdminVariant = () => (
  <TitleBlock
    title="Admin"
    variant="admin"
    breadcrumb={{ path: "#", text: "Back to home" }}
    toolbar={[
      <Button label="Action" reversed />,
      <Button label="Action 2" primary reversed />,
    ]}
    surveyStatus={{ status: "live", text: "Live" }}
  />
)

AdminVariant.story = {
  name: "TitleBlock admin variant",
  parameters: {
    backgrounds: [
      {
        name: "White",
        value: colorTokens.kz.color.white,
        default: true,
      },
    ],
  },
}

export const EducationVariant = () => (
  <TitleBlock
    title="How to tie up your shoelaces"
    variant="education"
    breadcrumb={{ path: "#", text: "Back to tutorials" }}
    toolbar={[<Button label="Action" />, <Button label="Action 2" primary />]}
  />
)

EducationVariant.story = {
  name: "TitleBlock education variant",
  parameters: {
    backgrounds: [
      {
        name: "Cluny 200",
        value: colorTokens.kz.color.cluny["200"],
        default: true,
      },
    ],
  },
}

export const NoBottomSeparator = () => (
  <TitleBlock
    title="Admin"
    variant="admin"
    noBottomSeparator
    breadcrumb={{ path: "#", text: "Back to Home" }}
  />
)

NoBottomSeparator.story = {
  name: "TitleBlock no bottom separator",
  parameters: {
    backgrounds: [
      {
        name: "White",
        value: colorTokens.kz.color.white,
        default: true,
      },
    ],
  },
}

WithTitle.story = {
  name: "TitleBlock with title",
}

export const DesktopKitchenSink = () => (
  <TitleBlock
    title="Home"
    breadcrumb={{ path: "#", text: "Back to reports" }}
    surveyStatus={{ status: "live", text: "Live" }}
    toolbar={[
      <Button label="Action" reversed />,
      <Button label="Action 2" primary reversed />,
    ]}
  />
)

DesktopKitchenSink.story = {
  name: "TitleBlock desktop kitchen sink",
}

export const SmallMobileKitchenSink = () => (
  <TitleBlock
    title="Home"
    breadcrumb={{ path: "#", text: "Back to reports" }}
    surveyStatus={{ status: "live", text: "Live" }}
    toolbar={[
      <Button label="Action" reversed />,
      <Button label="Action 2" primary reversed />,
    ]}
  />
)

SmallMobileKitchenSink.story = {
  name: "TitleBlock small mobile kitchen sink",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
}

export const TabletKitchenSink = () => (
  <TitleBlock
    title="Home"
    breadcrumb={{ path: "#", text: "Back to reports" }}
    surveyStatus={{ status: "live", text: "Live" }}
    toolbar={[
      <Button label="Action" reversed />,
      <Button label="Action 2" primary reversed />,
    ]}
  />
)

TabletKitchenSink.story = {
  name: "TitleBlock tablet kitchen sink",
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
}
