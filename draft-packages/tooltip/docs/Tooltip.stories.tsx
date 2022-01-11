import * as React from "react"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import { Tag } from "@kaizen/draft-tag"
import { Icon, Paragraph } from "@kaizen/component-library"
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

export const StickerSheet = () => (
  <div
    style={{
      marginTop: "100px",
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    }}
  >
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "5rem",
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
      <Tooltip
        position="above"
        text="Tooltip"
        mood="informative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="above"
        text="Tooltip"
        mood="positive"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="above"
        text="Tooltip"
        mood="negative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="above"
        text="Tooltip"
        mood="cautionary"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "5rem",
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
      <Tooltip
        position="below"
        text="Tooltip"
        mood="informative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="below"
        text="Tooltip"
        mood="positive"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="below"
        text="Tooltip"
        mood="negative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="below"
        text="Tooltip"
        mood="cautionary"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "5rem",
      }}
    >
      <Tooltip position="left" text="Tooltip" mood="default" isInitiallyVisible>
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="left"
        text="Tooltip"
        mood="informative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="left"
        text="Tooltip"
        mood="positive"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="left"
        text="Tooltip"
        mood="negative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="left"
        text="Tooltip"
        mood="cautionary"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "5rem",
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
      <Tooltip
        position="right"
        text="Tooltip"
        mood="informative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="right"
        text="Tooltip"
        mood="positive"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
      <Tooltip
        position="right"
        text="Tooltip"
        mood="negative"
        isInitiallyVisible
      >
        <Button label="Default" />
      </Tooltip>
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
)

export const OverflowScroll = props => (
  <>
    <p>
      Default Placement is' above'. Scroll horizontally or vertically to view
      the popper "flip" and move according to the space of the viewport.
      Ensuring the popper does not get cut off.
    </p>

    <div
      style={{
        display: "flex",
        width: "300px",
        maxHeight: "700px",
        overflow: "scroll",
        border: "solid black 2px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "500px",
          marginLeft: "200px",
          marginTop: "400px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Tooltip
            {...props}
            display="inline-block"
            text="This should not get cropped"
          >
            <Button label="Default" />
          </Tooltip>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          marginLeft: "200px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "100px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Tooltip
            {...props}
            display="inline"
            text="This should not get cropped"
          >
            <Icon icon={informationIcon} />
          </Tooltip>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          marginLeft: "200px",
          marginBottom: "500px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nulla quas corporis? Perspiciatis, ratione voluptas{" "}
            <Tooltip
              display="inline-block"
              text="This should not get cropped"
              {...props}
            >
              <Tag>ad veniam sapiente</Tag>
            </Tooltip>{" "}
            Maxime harum, ducimus maiores itaque pariatur quod vel porro
            mollitia. Lorem ipsum dolor sit{" "}
            <Tooltip display="inline" text="Open in new tab" {...props}>
              <a href="#">
                amet consectetur adipisicing elit Itaque obcaecati maxime
                molestiae blanditiis pariatur
              </a>
            </Tooltip>
            . Magni perspiciatis assumenda in adipisci, eaque commodi quidem
            dolore, tempore provident animi{" "}
          </Paragraph>
        </div>
      </div>
    </div>
  </>
)
