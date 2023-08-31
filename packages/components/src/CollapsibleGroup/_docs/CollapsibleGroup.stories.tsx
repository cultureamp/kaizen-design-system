import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Collapsible, CollapsibleProps } from "~components/Collapsible"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { CollapsibleGroup, CollapsibleGroupProps } from "../index"

const CollapsibleWrapped = (
  args: Omit<CollapsibleProps, "children" | "title">
): JSX.Element => (
  <Collapsible title="Title" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
    scelerisque sem, vel ultricies justo. Donec eu porttitor ante, nec gravida
    orci. Nulla facilisi. Cras varius erat id fermentum mattis. Mauris bibendum
    vestibulum erat, quis blandit metus viverra sit amet. Vivamus pretium vitae
    turpis ut condimentum. Sed vulputate magna nisl, in cursus urna hendrerit
    et. Aenean semper, est non feugiat sodales, nisl ligula aliquet lorem, sit
    amet scelerisque arcu quam a sapien. Donec in viverra urna.
  </Collapsible>
)

const CollapsibleGroupWrapped = (
  args: Omit<CollapsibleGroupProps, "children">
): JSX.Element => (
  <CollapsibleGroup {...args}>
    <CollapsibleWrapped key="collapsible-1" />
    <CollapsibleWrapped key="collapsible-2" />
    <CollapsibleWrapped key="collapsible-3" />
  </CollapsibleGroup>
)

const meta = {
  title: "Components/Collapsible/CollapsibleGroup",
  component: CollapsibleGroup,
  argTypes: {
    ...classNameOverrideArgType,
    separated: { control: "boolean" },
    noSectionPadding: { control: "boolean" },
    lazyLoad: { control: "boolean" },
    sticky: { control: "disabled" },
    onToggle: { control: "disabled" },
    children: { control: "disabled" },
  },
  parameters: { backgrounds: { default: "Gray 100" } },
  args: {
    children: [
      <Collapsible title="Title 1" key="Title 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Collapsible>,
      <Collapsible title="Title 2" key="Title 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Collapsible>,
      <Collapsible title="Title 3" key="Title 3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Collapsible>,
    ],
  },
} satisfies Meta<typeof CollapsibleGroup>

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
}

export const Separated: StoryFn<typeof CollapsibleGroup> = () => (
  <CollapsibleGroupWrapped separated />
)
