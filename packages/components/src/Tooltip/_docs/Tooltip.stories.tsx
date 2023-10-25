import React from "react"
import { Decorator, Meta, StoryFn, StoryObj } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { Tag } from "../../Tag"
import { Button, InformationIcon, Text } from "../../index"
import { Tooltip } from "../index"

const openTooltipInChromatic: Decorator = (Story, { args }) => {
  if (isChromatic()) args.isInitiallyVisible = true
  return <Story />
}

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    text: "Example tooltip text.",
  },
  decorators: [openTooltipInChromatic],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      <Tooltip {...args}>
        <Button label="Hover or focus me" />
      </Tooltip>
    </div>
  ),
}

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
            <InformationIcon role="img" aria-label="Info" />
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
          <Text tag="div" variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nulla quas corporis? Perspiciatis, ratione voluptas{" "}
            <Tooltip {...props} display="inline-block" text="Tooltip label">
              <Tag>ad veniam sapiente</Tag>
            </Tooltip>{" "}
            Maxime harum, ducimus maiores itaque pariatur quod vel porro
            mollitia. Lorem ipsum dolor sit{" "}
            <Tooltip {...props} display="inline" text="Open in new tab">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">
                amet consectetur adipisicing elit Itaque obcaecati maxime
                molestiae blanditiis pariatur
              </a>
            </Tooltip>
            . Magni perspiciatis assumenda in adipisci, eaque commodi quidem
            dolore, tempore provident animi{" "}
          </Text>
        </div>
      </div>
    </div>
  </>
)
