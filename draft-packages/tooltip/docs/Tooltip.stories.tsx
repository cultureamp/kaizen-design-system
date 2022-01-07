import * as React from "react"

import { Paragraph } from "@kaizen/component-library"
import { MenuItem } from "@kaizen/draft-menu"
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
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A90872"
    ),
  },
  decorators: [withDesign, openTooltipInChromatic],
}

export const DefaultKaizenSiteDemo = props => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <Tooltip {...props} text="This is below the tooltip">
      {/* Using buttons, as so we can test the focus state.
         ie. the tooltip should show when any child is focused. */}
      <Button label="Default" />
    </Tooltip>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.parameters = {
  info: {
    text: `
    import { Tooltip } from "@kaizen/draft-tooltip"
    `,
  },
}

export const DesignSheet = props => (
  <div
    style={{
      marginTop: "100px",
      display: "grid",
      justifyContent: "center",
      rowGap: "5rem",
    }}
  >
    <div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="above"
          text="Tooltip"
          mood="default"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="above"
          text="Tooltip"
          mood="informative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          {...props}
          position="above"
          text="Tooltip"
          mood="positive"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="above"
          text="Tooltip"
          mood="negative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="above"
          text="Tooltip"
          mood="cautionary"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
    </div>
    <div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="below"
          text="Tooltip"
          mood="default"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="below"
          text="Tooltip"
          mood="informative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          {...props}
          position="below"
          text="Tooltip"
          mood="positive"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="below"
          text="Tooltip"
          mood="negative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "2rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="below"
          text="Tooltip"
          mood="cautionary"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
    </div>
    <div
      style={{
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="left"
          text="Tooltip"
          mood="default"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="left"
          text="Tooltip"
          mood="informative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          {...props}
          position="left"
          text="Tooltip"
          mood="positive"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="left"
          text="Tooltip"
          mood="negative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="left"
          text="Tooltip"
          mood="cautionary"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
    </div>
    <div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="right"
          text="Tooltip"
          mood="default"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="right"
          text="Tooltip"
          mood="informative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          {...props}
          position="right"
          text="Tooltip"
          mood="positive"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="right"
          text="Tooltip"
          mood="negative"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "inline-block",
          marginRight: "7rem",
          position: "relative",
        }}
      >
        <Tooltip
          position="right"
          text="Tooltip"
          mood="cautionary"
          isInitiallyVisible
        >
          <Button label="Default" />
        </Tooltip>
      </div>
    </div>
  </div>
)
DesignSheet.storyName = "Design Sheet"

export const OverflowScroll = props => (
  <div
    id="portalSelectorStory"
    style={{
      width: "300px",
      height: "800px",
      overflow: "scroll",
      textAlign: "center",
      position: "relative",
      overscrollBehavior: "contain",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        width: "300px",
        height: "300px",
        textAlign: "center",
        position: "relative",
        paddingTop: "100px",
        paddingLeft: "200px",
      }}
    >
      <Tooltip
        {...props}
        display="inline-block"
        text="This should not get cropped"
        isInitiallyVisible
      >
        <Button label="Bottom" />
      </Tooltip>
    </div>
    <div
      style={{
        width: "1000px",
        height: "1000px",
      }}
    >
      <p>
        Scroll the panel above, and hover over the button. Notice that the
        tooltip does not get cropped. Also notice that the tooltip arrow follows
        the button appropriately.
      </p>
    </div>
  </div>
)

const portalSelectorElement = document.querySelector("#portalSelectorStory")

if (portalSelectorElement) portalSelectorElement.scrollTop = 820

OverflowScroll.storyName = "overflow: scroll"
