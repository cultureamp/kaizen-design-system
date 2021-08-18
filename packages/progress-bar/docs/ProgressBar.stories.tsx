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
    value={{ kind: "percentage", value: 25 }}
    mood="positive"
    variant="loading"
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
    value={{ kind: "percentage", value: 100 }}
    mood="positive"
  />
)
PositiveFinished.story = {
  name: "Positive (100%)",
}

export const PositiveSubtext = _ => (
  <ProgressBar
    variant="loading"
    value={{ kind: "percentage", value: 25 }}
    mood="positive"
    subtext="Subtext"
  />
)
PositiveSubtext.story = {
  name: "Positive (with subtext)",
}

export const PositiveStatic = _ => (
  <ProgressBar
    variant="static"
    value={{ kind: "percentage", value: 25 }}
    mood="positive"
  />
)
PositiveStatic.story = {
  name: "Positive (static)",
}

export const PositiveFraction = _ => (
  <ProgressBar
    variant="static"
    value={{ kind: "fraction", value: 3, max: 10 }}
    mood="positive"
  />
)
PositiveFraction.story = {
  name: "Positive (fraction, static)",
}

export const PositiveLabelExtraContent = _ => (
  <ProgressBar
    variant="static"
    value={{ kind: "percentage", value: 25 }}
    mood="positive"
    labelExtraContent="complete"
  />
)
PositiveLabelExtraContent.story = {
  name: "Positive (label extra content)",
}

export const PositiveLongNumber = _ => (
  <ProgressBar
    variant="loading"
    value={{ kind: "percentage", value: 33.33333333 }}
    mood="positive"
  />
)
PositiveLongNumber.story = {
  name: "Positive (value: 33.33333333)",
}

export const Informative = _ => (
  <ProgressBar
    variant="loading"
    value={{ kind: "percentage", value: 25 }}
    mood="informative"
  />
)

export const Negative = _ => (
  <ProgressBar
    variant="loading"
    value={{ kind: "percentage", value: 25 }}
    mood="negative"
  />
)

export const Cautionary = _ => (
  <ProgressBar
    variant="loading"
    value={{ kind: "percentage", value: 25 }}
    mood="cautionary"
  />
)
