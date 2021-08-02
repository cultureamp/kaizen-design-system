import * as React from "react"

import { Paragraph } from "@kaizen/component-library"
import { MenuItem, MenuContent } from "@kaizen/draft-menu"
import { Tag } from "@kaizen/draft-tag"
import { SplitButton } from "@kaizen/draft-split-button"
import { withDesign } from "storybook-addon-designs"
import { Button } from "@kaizen/draft-button"
import { Tooltip } from "@kaizen/draft-tooltip"
import isChromatic from "chromatic/isChromatic"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

/**
 * We should not be running visual regressions on these tooltip stories
 * until there is a clean way to trigger open states for the snapshots. See:
 * https://github.com/cultureamp/kaizen-design-system/issues/1375
 */
const openTooltipInChromatic = (story, config) => {
  if (isChromatic()) config.args.isInitiallyVisible = true
  return story()
}

export default {
  title: `${CATEGORIES.components}/Tooltip`,
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'import { Tooltip } from "@kaizen/draft-tooltip"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A90872"
    ),
  },
  decorators: [withDesign, openTooltipInChromatic],
}

export const DefaultBelowKaizenSiteDemo = props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Tooltip {...props} position="below" text="This is below the tooltip">
      {/* Using buttons, as so we can test the focus state.
         ie. the tooltip should show when any child is focused. */}
      <Button label="Below" />
    </Tooltip>
  </div>
)

DefaultBelowKaizenSiteDemo.storyName = "Default - Below (Kaizen Site Demo)"
DefaultBelowKaizenSiteDemo.parameters = {
  info: {
    text: `
    import { Tooltip } from "@kaizen/draft-tooltip"
    `,
  },
}

export const DefaultAbove = props => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <div style={{ display: "inline-block", position: "relative" }}>
      <Tooltip {...props} position="above" text="This is above the tooltip">
        {/* Using buttons, as so we can test the focus state.
         ie. the tooltip should show when any child is focused. */}
        <Button label="Above" />
      </Tooltip>
    </div>
  </div>
)
DefaultAbove.storyName = "Default - Above"

export const Inline = props => (
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
        <Tooltip
          {...props}
          display="inline-block"
          text="This is above the tooltip"
        >
          <Tag>ad veniam sapiente</Tag>
        </Tooltip>{" "}
        Maxime harum, ducimus maiores itaque pariatur quod vel porro mollitia.
        Lorem ipsum dolor sit{" "}
        <Tooltip {...props} display="inline" text="Open in new tab">
          <a href="#">
            amet consectetur adipisicing elit Itaque obcaecati maxime molestiae
            blanditiis pariatur
          </a>
        </Tooltip>
        . Magni perspiciatis assumenda in adipisci, eaque commodi quidem dolore,
        tempore provident animi{" "}
        <Tooltip
          {...props}
          display="inline-block"
          text="This is below the tooltip"
          position="below"
        >
          <Tag>veniam sapiente ad</Tag>
        </Tooltip>{" "}
      </Paragraph>
    </div>
  </div>
)

Inline.storyName = "Inline"

export const ArrowPositioning = props => (
  <div>
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      <Tooltip
        {...props}
        position="above"
        text="This is below the tooltip, despite it being set to position=above. This is because there is not enough room. Also note that the arrow is correctly positioned."
      >
        <Button label="Above" />
      </Tooltip>
    </div>
    <div style={{ position: "absolute", bottom: 0, right: 0 }}>
      <Tooltip
        {...props}
        position="below"
        text="This is above the tooltip, despite it being set to position=below. This is because there is not enough room. Also note that the arrow is correctly positioned."
      >
        <Button label="Bottom" />
      </Tooltip>
    </div>
  </div>
)

ArrowPositioning.storyName = "Arrow positioning"

export const OverflowScroll = props => (
  <div>
    <div style={{ overflowX: "scroll", width: "200px", height: "100px" }}>
      <div style={{ width: "500px", textAlign: "center" }}>
        <Tooltip
          {...props}
          position="below"
          display="inline-block"
          text="This should not get cropped"
          // Normally, you'd specify a div by ID, but since this is only in storybook,
          // using `body` is fine (I think). DO NOT USE "BODY" AS A VALUE IN PRODUCTION.
          portalSelector="body"
        >
          <Button label="Bottom" />
        </Tooltip>
      </div>
    </div>
    <p>
      Scroll the panel above, and hover over the button. Notice that the tooltip
      does not get cropped. Also notice that the tooltip arrow follows the
      button appropriately.
    </p>
  </div>
)

OverflowScroll.storyName = "overflow: scroll"

export const TooltipAboveDropdown = props => (
  <>
    <div>
      <SplitButton
        label="Test"
        dropdownAltText="test"
        dropdownContent={
          <MenuContent>
            <MenuItem
              onClick={e => undefined}
              label="Text to appear behind tooltip overlay"
            />
          </MenuContent>
        }
      />
    </div>
    <div style={{ paddingTop: "50px" }}>
      <Tooltip
        {...props}
        position="above"
        display="inline-block"
        text="Text to appear above the button dropdown text"
      >
        <Button label="Above" />
      </Tooltip>
    </div>
  </>
)
