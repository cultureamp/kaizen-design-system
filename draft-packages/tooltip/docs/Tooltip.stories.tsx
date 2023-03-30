/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { DecoratorFunction } from "@storybook/addons"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { Tag } from "@kaizen/draft-tag"
import { Tooltip } from "@kaizen/draft-tooltip"
import { Paragraph, Heading } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const openTooltipInChromatic: DecoratorFunction = (story, config) => {
  if (isChromatic()) config.args.isInitiallyVisible = true
  return story()
}

export default {
  title: `${CATEGORIES.components}/Tooltip`,
  component: Tooltip,
  parameters: {
    /**
     * To cater for false positives when the tooltip renders
     * with a different alignment (controlled by react-popper).
     */
    chromatic: { diffThreshold: 1 },
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
} as ComponentMeta<typeof Tooltip>

export const DefaultKaizenSiteDemo: ComponentStory<typeof Tooltip> = props => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <Tooltip {...props} text="Tooltip label">
      {/* Using buttons, as so we can test the focus state.
         ie. the tooltip should show when any child is focused. */}
      <Button label="Default" />
    </Tooltip>
  </div>
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.parameters = {
  info: {
    text: 'import { Tooltip } from "@kaizen/draft-tooltip"',
  },
}

export const WithNoAnimationDelay: ComponentStory<typeof Tooltip> = props => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <Tooltip {...props} text="Tooltip label" animationDuration={0}>
      <Button label="Fast tooltip" />
    </Tooltip>
  </div>
)
WithNoAnimationDelay.storyName = "With no animation delay"

export const StickerSheet: ComponentStory<typeof Tooltip> = props => (
  <div
    style={{
      marginTop: "100px",
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    }}
  >
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-5" tag="h2">
        {" "}
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Default
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Informative
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Positive
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Highlight
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Cautionary
      </Heading>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Top
      </Heading>
      <Tooltip {...props} position="above" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="above"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="above" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="above"
        text="Tooltip label"
        mood="highlight"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="above"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Bottom
      </Heading>
      <Tooltip {...props} position="below" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="below"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="below" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="below"
        text="Tooltip label"
        mood="highlight"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="below"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Left
      </Heading>
      <Tooltip {...props} position="left" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="left"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="left" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="left" text="Tooltip label" mood="highlight">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="left"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Right
      </Heading>
      <Tooltip {...props} position="right" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="right"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="right" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="right"
        text="Tooltip label"
        mood="highlight"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="right"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
  </div>
)
StickerSheet.parameters = { chromatic: { disable: false } }

export const OverflowScroll: ComponentStory<typeof Tooltip> = props => (
  <>
    <p>
      Default Placement is 'above'. Scroll horizontally or vertically to view
      the Tooltip "flip" and move according to the space of the viewport.
      Ensuring the Tooltip does not get cut off.
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
          <Tooltip {...props} display="inline-block" text="Tooltip label">
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
          <Tooltip {...props} display="inline" text="Tooltip label">
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
            <Tooltip {...props} display="inline-block" text="Tooltip label">
              <Tag>ad veniam sapiente</Tag>
            </Tooltip>{" "}
            Maxime harum, ducimus maiores itaque pariatur quod vel porro
            mollitia. Lorem ipsum dolor sit{" "}
            <Tooltip {...props} display="inline" text="Open in new tab">
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
