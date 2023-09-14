import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Heading, Paragraph } from "@kaizen/typography"
import { AddIcon } from "~components/Icons"
import { Collapsible } from "../index"

const meta = {
  title: "KAIO-staging/Collapsibles/Collapsible",
  component: Collapsible,
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

export const NoPadding: Story = {
  args: {
    title: "No padding",
  },
  render: ({ title }) => (
    <Collapsible open noSectionPadding title={title}>
      <Paragraph variant="body">
        In that case you should use the &apos;noSectionPadding&apos; prop.
      </Paragraph>
    </Collapsible>
  ),
}

export const Clear: Story = {
  args: {
    title: "Clear",
  },
  render: ({ title }) => (
    <Collapsible open variant="clear" title={title}>
      <Paragraph variant="body">The header becomes clear</Paragraph>
    </Collapsible>
  ),
}

export const CustomHeader: Story = {
  args: {
    title: "Custom header",
  },
  render: ({ title: standardTitle }) => (
    <Collapsible
      open
      title={standardTitle}
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
  ),
}

export const Sticky: Story = {
  args: {
    title: "Sticky header",
  },
  render: ({ title }) => (
    <Collapsible open title={title} sticky={{ top: "-1px" }}>
      This does not work in Storybook docs, so use this as a code example only.
    </Collapsible>
  ),
}
