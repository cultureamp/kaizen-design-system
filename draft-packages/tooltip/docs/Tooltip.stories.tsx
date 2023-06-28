/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Decorator, Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { Button, IconButton } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { Tag } from "@kaizen/draft-tag"
import { Tooltip } from "@kaizen/draft-tooltip"
import { Paragraph, Heading } from "@kaizen/typography"

const openTooltipInChromatic: Decorator = (Story, { args }) => {
  if (isChromatic()) args.isInitiallyVisible = true
  return <Story />
}

export default {
  tags: ["autodocs"],
  title: "Components/Tooltip",
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
  },
  decorators: [openTooltipInChromatic],
} satisfies Meta<typeof Tooltip>

export const DefaultKaizenSiteDemo: StoryFn<typeof Tooltip> = props => (
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

export const WithNoAnimationDelay: StoryFn<typeof Tooltip> = props => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <Tooltip {...props} text="Tooltip label" animationDuration={0}>
      <Button label="Fast tooltip" />
    </Tooltip>
  </div>
)
WithNoAnimationDelay.storyName = "With no animation delay"

export const StickerSheet: StoryFn<typeof Tooltip> = props => (
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

export const OverflowScroll: StoryFn<typeof Tooltip> = props => (
  <>
    <p>
      Default Placement is &apos;above&apos;. Scroll horizontally or vertically
      to view the Tooltip &quot;flip&quot; and move according to the space of
      the viewport. Ensuring the Tooltip does not get cut off.
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
            <Icon icon={informationIcon} title="Info" />
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
          <Paragraph tag="div" variant="body">
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

export const visibilityComparison: StoryFn<typeof Tooltip> = props => {
  const [isVisible, setIsVisble] = React.useState(false)
  const [isVisible2, setIsVisble2] = React.useState(false)
  const [isVisible3, setIsVisble3] = React.useState(false)
  return (
    <div className="flex gap-8">
      <Tooltip {...props} text="Tooltip not open label">
        <Button label="Open default tooltip" />
      </Tooltip>
      <Tooltip {...props} text="Tooltip open label" isInitiallyVisible>
        <Button label="Open visible tooltip" />
      </Tooltip>

      {/* simulated tooltip wrapper */}
      <div
        className=" inline-flex content-center relative"
        aria-describedby="description"
      >
        <button
          onFocus={() => setIsVisble(true)}
          onBlur={() => setIsVisble(false)}
          onMouseOut={() => setIsVisble(false)}
          onMouseOver={() => setIsVisble(true)}
          type="button"
        >
          vanilla tooltip
        </button>
        <div
          className={
            isVisible
              ? "inline-block absolute top-[105%] shadow-sm p-5 w-[100%]"
              : "hidden"
          }
          id="description"
          role="tooltip"
        >
          Vanilla tooltip description
        </div>
      </div>
      <div className="inline-flex content-center relative">
        <button
          onFocus={() => setIsVisble2(true)}
          onBlur={() => setIsVisble2(false)}
          onMouseOut={() => setIsVisble2(false)}
          onMouseOver={() => setIsVisble2(true)}
          type="button"
          aria-describedby="interactable-description"
        >
          interactable vanilla tooltip
        </button>
        <div
          className={
            isVisible2
              ? "inline-block absolute top-[105%] shadow-sm p-5 w-[100%]"
              : "hidden"
          }
          id="interactable-description"
          role="tooltip"
        >
          Interactable tooltip description
        </div>
      </div>
      <div
        className="inline-flex content-center relative"
        aria-labelledby="hidden-description"
      >
        <button
          onFocus={() => setIsVisble3(true)}
          onBlur={() => setIsVisble3(false)}
          onMouseOut={() => setIsVisble3(false)}
          onMouseOver={() => setIsVisble3(true)}
          type="button"
        >
          hidden label tooltip
        </button>
        <p className="sr-only" id="hidden-description">
          hidden sr only label that mocks the descriptiuon
        </p>
        <div
          aria-hidden
          className={
            isVisible3
              ? "inline-block absolute top-[105%] shadow-sm p-5 w-[100%]"
              : "hidden"
          }
        >
          This won't be read to the screen reader (but in reality would be the
          exact same text)
        </div>
      </div>
    </div>
  )
}

visibilityComparison.storyName = "testVisible"
visibilityComparison.parameters = {
  info: {
    text: 'import { Tooltip } from "@kaizen/draft-tooltip"',
  },
}
