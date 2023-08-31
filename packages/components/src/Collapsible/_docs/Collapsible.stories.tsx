import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Heading, Paragraph } from "@kaizen/typography"
import { AddIcon } from "~components/SVG/icons/AddIcon"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { Collapsible } from "../index"

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: { ...classNameOverrideArgType },
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
    nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
    mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
    sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
    magna nisl, in cursus urna hendrerit et. Aenean semper, est non
    feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
    arcu quam a sapien. Donec in viverra urna.`,
  },
  parameters: {
    backgrounds: { default: "Gray 100" },
  },
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    title: "Single Collapsible",
  },
  parameters: {
    backgrounds: { default: "Gray 100" },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const NoPadding: StoryFn<typeof Collapsible> = () => (
  <Collapsible open noSectionPadding title="No padding">
    <Paragraph variant="body">
      In that case you should use the &apos;noSectionPadding&apos; prop.
    </Paragraph>
  </Collapsible>
)

export const Clear: StoryFn<typeof Collapsible> = () => (
  <Collapsible open variant="clear" title="Clear">
    <Paragraph variant="body">The header becomes clear</Paragraph>
  </Collapsible>
)

export const CustomHeader: StoryFn<typeof Collapsible> = () => (
  <Collapsible
    open
    title="Custom header"
    renderHeader={title => (
      <Heading variant="heading-4" tag="span">
        <span className="flex gap-8 items-center">
          <AddIcon role="presentation" /> {title}
        </span>
      </Heading>
    )}
  >
    <Paragraph variant="body">
      You can create a custom header using the renderHeader prop.
    </Paragraph>
  </Collapsible>
)

export const Sticky: StoryFn<typeof Collapsible> = () => (
  <Collapsible open title="Sticky header" sticky={{ top: "-1px" }}>
    This does not work in Storybook docs, so use this as a code example only.
  </Collapsible>
)
