import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { LoadingParagraph } from "../index"

const meta = {
  title: "Components/Loading states/LoadingParagraph",
  component: LoadingParagraph,
} satisfies Meta<typeof LoadingParagraph>

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

export const Animated: Story = {
  args: { isAnimated: true },
}

export const Reversed: Story = {
  args: { isReversed: true },
}

export const Link: Story = {
  args: { isLink: true },
}

export const MultiLineExample: Story = {
  render: () => (
    <>
      <div>
        <LoadingParagraph />
        <LoadingParagraph />
      </div>
      <Text variant="body">
        Kaizen is Culture Amp’s design system. It’s the single source of truth
        for our UX guidelines, design assets, and front-end code to help Culture
        Amp’s teams rapidly create a world-class experience.
      </Text>
    </>
  ),
}

export const MultiColumnExample: Story = {
  render: () => (
    <>
      <div>
        <LoadingParagraph isInline width={30} />
        <LoadingParagraph isInline width={30} />
        <LoadingParagraph isInline width={30} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <Text variant="body">Kaizen is Culture Amp’s design system.</Text>
        <Text variant="body">Kaizen is Culture Amp’s design system.</Text>
        <Text variant="body">Kaizen is Culture Amp’s design system.</Text>
      </div>
    </>
  ),
}
