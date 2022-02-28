import React from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers/figmaEmbed"
import { ProgressBar } from "../index"

export default {
  title: `${CATEGORIES.components}/ProgressBar`,
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'import { ProgressBar } from "@kaizen/progress-bar"',
      },
    },
  },
}

export const DefaultStory = () => (
  <ProgressBar
    value={25}
    max={100}
    mood="positive"
    isAnimating={true}
    label="25%"
  />
)
DefaultStory.story = {
  name: "Positive (Kaizen Site Demo)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A20890"
    ),
  },
}

export const PositiveSubtext = () => (
  <ProgressBar
    isAnimating={false}
    value={25}
    max={100}
    mood="positive"
    label="Label"
    subtext="Subtext"
  />
)
PositiveSubtext.storyName = "Positive (with subtext)"
PositiveSubtext.parameters = { chromatic: { disable: false } }

export const PositiveAnimating = () => (
  <ProgressBar
    isAnimating={true}
    value={25}
    max={25}
    label="Label"
    mood="positive"
  />
)
PositiveAnimating.storyName = "Positive (isAnimating)"

export const Informative = () => (
  <ProgressBar
    isAnimating={false}
    value={25}
    max={100}
    mood="informative"
    label="Label"
  />
)
Informative.parameters = { chromatic: { disable: false } }

export const Negative = () => (
  <ProgressBar
    isAnimating={false}
    value={25}
    max={100}
    mood="negative"
    label="Label"
  />
)
Negative.parameters = { chromatic: { disable: false } }

export const Cautionary = () => (
  <ProgressBar
    isAnimating={false}
    value={25}
    max={100}
    mood="cautionary"
    label="Label"
  />
)
Cautionary.parameters = { chromatic: { disable: false } }

export const NoLabel = () => (
  <ProgressBar isAnimating={true} value={25} max={100} mood="positive" />
)
NoLabel.parameters = { chromatic: { disable: false } }
