import * as React from "react"

import { Paragraph } from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import { withDesign } from "storybook-addon-designs"
import { Tooltip } from "@kaizen/draft-tooltip"
import { figmaEmbed } from "../../../storybook/helpers"
import { Button } from "@kaizen/draft-button"

export default {
  title: "Tooltip (React)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A90872"
    ),
  },
  decorators: [withDesign],
}

export const DefaultBelowKaizenSiteDemo = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Tooltip position="below" text="This is below the tooltip">
      <Tag inline={true}>Below</Tag>
    </Tooltip>
  </div>
)

DefaultBelowKaizenSiteDemo.storyName = "Default - Below (Kaizen Site Demo)"
DefaultBelowKaizenSiteDemo.component = Tooltip

DefaultBelowKaizenSiteDemo.parameters = {
  info: {
    text: `
    import { Tooltip } from "@kaizen/draft-tooltip"
    `,
  },
}

export const DefaultAbove = () => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <div style={{ display: "inline-block", position: "relative" }}>
      <Tooltip position="above" text="This is above the tooltip">
        {/* Using buttons, as so we can test the focus state.
         ie. the tooltip should show when any child is focused. */}
        <Button label="Above" />
      </Tooltip>
    </div>
  </div>
)

DefaultAbove.storyName = "Default - Above"

export const Inline = () => (
  <div
    style={{
      margin: "100px",
      display: "flex",
      justifyContent: "center",
      width: "400px",
    }}
  >
    <div style={{ display: "inline-block", position: "relative" }}>
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nulla
        quas corporis? Perspiciatis, ratione voluptas{" "}
        <Tooltip inline text="This is above the tooltip">
          <Tag>ad veniam sapiente</Tag>
        </Tooltip>{" "}
        Maxime harum, ducimus maiores itaque pariatur quod vel porro mollitia.
        Lorem ipsum dolor sit{" "}
        <Tooltip inline text="Open in new tab">
          <a href="#">
            amet consectetur adipisicing elit Itaque obcaecati maxime molestiae
            blanditiis pariatur
          </a>
        </Tooltip>
        . Magni perspiciatis assumenda in adipisci, eaque commodi quidem dolore,
        tempore provident animi{" "}
        <Tooltip inline text="This is below the tooltip" position="below">
          <Tag>veniam sapiente ad</Tag>
        </Tooltip>{" "}
      </Paragraph>
    </div>
  </div>
)

Inline.storyName = "Inline"
