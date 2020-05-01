import { Button } from "@kaizen/component-library/components/Button"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { TitleBlock } from "@kaizen/draft-title-block"
import * as React from "react"
import { Paragraph } from "@kaizen/component-library"

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport"
require("./TitleBlock.stories.scss")

const stickyContainerStyle = {
  width: "100%",
  height: "2000px",
}

export default {
  title: "TitleBlock (React)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria["700"],
        default: true,
      },
    ],
  },
}

export const WithTitle = () => <TitleBlock title="Reports" />

WithTitle.story = {
  name: "with Title",
}

export const WithBreadcrumb = () => (
  <TitleBlock
    title="Home"
    breadcrumb={{ path: "#", text: "Back to reports" }}
  />
)

WithBreadcrumb.story = {
  name: "with breadcrumb",
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
  name: "with toolbar",
}

export const WithTag = () => (
  <TitleBlock title="Home" surveyStatus={{ status: "live", text: "Live" }} />
)

WithTag.story = {
  name: "with tag",
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
  name: "sticky",
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
  name: "admin variant",
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
  name: "education variant",
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

export const NoBottomBorder = () => (
  <TitleBlock
    title="Admin"
    variant="admin"
    noBottomBorder
    breadcrumb={{ path: "#", text: "Back to Home" }}
  />
)

NoBottomBorder.story = {
  name: "no bottom border",
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
  name: "with title",
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
  name: "small mobile kitchen sink",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
}
