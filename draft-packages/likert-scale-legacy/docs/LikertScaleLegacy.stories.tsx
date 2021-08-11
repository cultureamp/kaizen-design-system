import React, { useState } from "react"

import {
  LikertScaleLegacy,
  Scale,
  ScaleItem,
} from "@kaizen/draft-likert-scale-legacy"
import { Heading } from "@kaizen/component-library"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Likert Scale`,
  component: LikertScaleLegacy,
  parameters: {
    docs: {
      description: {
        component:
          'import { LikertScale } from "@kaizen/draft-likert-scale-legacy";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A61902"
    ),
  },
}

const scale: Scale = [
  {
    value: 1,
    label: "Very poor",
  },
  {
    value: 2,
    label: "Poor",
  },
  {
    value: 3,
    label: "Fair",
  },
  {
    value: 4,
    label: "Good",
  },
  {
    value: 5,
    label: "Very good",
  },
]

const labelId = "456"

export const DefaultStory = () => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)

  return (
    <div>
      <div style={{ marginBottom: "40px" }} id={labelId}>
        <Heading variant="heading-4">How would you rate this survey?</Heading>
      </div>
      <LikertScaleLegacy
        scale={scale}
        automationId="123"
        labelId={labelId} // Intended to match the id of the label
        selectedItem={selectedItem}
        onSelect={item => setSelectedItem(item)}
      />
    </div>
  )
}

DefaultStory.storyName = "Default"

export const Reversed = () => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)

  return (
    <div>
      <div style={{ marginBottom: "40px" }} id={labelId}>
        <Heading variant="heading-4" color="white">
          How would you rate this survey?
        </Heading>
      </div>
      <LikertScaleLegacy
        scale={scale}
        automationId="123"
        labelId={labelId} // Intended to match the id of the label
        selectedItem={selectedItem}
        onSelect={item => setSelectedItem(item)}
        reversed
      />
    </div>
  )
}

Reversed.storyName = "Reversed"
Reversed.parameters = { backgrounds: { default: "Purple 700" } }
