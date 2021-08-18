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
        component: 'Import { ProgressBar } from "@kaizen/progress-bar"',
      },
    },
  },
}

export const DefaultStory = _ => (
  <ProgressBar progressPercentage={25} mood="positive" />
)
DefaultStory.story = {
  name: "Positive (Kaizen Site Demo)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A20890"
    ),
  },
}

export const PositiveFinished = _ => (
  <ProgressBar progressPercentage={100} mood="positive" />
)
PositiveFinished.story = {
  name: "Positive (100%)",
}

export const PositiveSubtext = _ => (
  <ProgressBar progressPercentage={100} mood="positive" subtext="Subtext" />
)
PositiveSubtext.story = {
  name: "Positive (with subtext)",
}

export const Informative = _ => (
  <ProgressBar progressPercentage={25} mood="informative" />
)
export const Negative = _ => (
  <ProgressBar progressPercentage={25} mood="negative" />
)
export const Cautionary = _ => (
  <ProgressBar progressPercentage={25} mood="cautionary" />
)
