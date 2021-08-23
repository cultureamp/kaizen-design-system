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
  <ProgressBar
    value={25}
    max={100}
    mood="positive"
    variant="loading"
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

export const PositiveFinished = _ => (
  <ProgressBar
    variant="loading"
    value={100}
    max={100}
    mood="positive"
    label="Label"
  />
)
PositiveFinished.story = {
  name: "Positive (100%)",
}

export const PositiveSubtext = _ => (
  <ProgressBar
    variant="loading"
    value={25}
    max={100}
    mood="positive"
    label="Label"
    subtext="Subtext"
  />
)
PositiveSubtext.story = {
  name: "Positive (with subtext)",
}

export const PositiveStatic = _ => (
  <ProgressBar
    variant="static"
    value={25}
    max={25}
    label="Label"
    mood="positive"
  />
)
PositiveStatic.story = {
  name: "Positive (static)",
}

export const Informative = _ => (
  <ProgressBar
    variant="loading"
    value={25}
    max={100}
    mood="informative"
    label="Label"
  />
)

export const Negative = _ => (
  <ProgressBar
    variant="loading"
    value={25}
    max={100}
    mood="negative"
    label="Label"
  />
)

export const Cautionary = _ => (
  <ProgressBar
    variant="loading"
    value={25}
    max={100}
    mood="cautionary"
    label="Label"
  />
)

export const NoLabel = _ => (
  <ProgressBar variant="loading" value={25} max={100} mood="positive" />
)
