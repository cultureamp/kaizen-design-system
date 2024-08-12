import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ProgressBar, ProgressBarProps } from "../index"

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  args: {
    value: 25,
    max: 100,
    color: "green",
    isAnimating: false,
    label: "25%",
    isReversed: false,
  },
  argTypes: {
    mood: { control: false },
  },
} satisfies Meta<typeof ProgressBar>

const a11yExclusions = {
  a11y: {
    config: {
      rules: [
        {
          // `label` is an optional prop so this has no accessible title by default. For now consumers can pass in `aria-labelledby` or `aria-label`, which can provide an accessible title.
          id: "aria-progressbar-name",
          enabled: false,
        },
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    ...a11yExclusions,
  },
}

const colors = [
  {
    title: "Blue",
    props: { color: "blue" },
  },
  {
    title: "Green",
    props: { color: "green" },
  },
  {
    title: "Red",
    props: { color: "red" },
  },
  {
    title: "Yellow",
    props: { color: "yellow" },
  },
] satisfies Array<{ title: string; props: Partial<ProgressBarProps> }>

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      {colors.map(({ title, props }) => (
        <ProgressBar
          key={title}
          {...props}
          value={3}
          max={5}
          label={title}
        />
      ))}
    </div>
  ),
  parameters: {
    ...a11yExclusions,
  },
}

export const IsAnimating: Story = {
  args: { isAnimating: true },
  parameters: {
    ...a11yExclusions,
  },
}

export const ValueAndMax: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <ProgressBar
        color="green"
        value={3}
        max={5}
        label="3/5"
        isAnimating={false}
        isReversed={false}
      />
      <ProgressBar
        color="green"
        value={60}
        max={100}
        label="60%"
        isAnimating={false}
        isReversed={false}
      />
    </div>
  ),
  parameters: {
    ...a11yExclusions,
  },
}

export const Reversed: Story = {
  parameters: {
    backgrounds: { default: "Purple 700" },
    ...a11yExclusions,
  },
  args: { isReversed: true },
}

export const AccessibleName: Story = {
  args: { "aria-label": "Development goals" },
}
