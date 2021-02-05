import React, { CSSProperties, useState } from "react"

import {
  LikertScaleLegacy,
  Scale,
  ScaleItem,
} from "@kaizen/draft-likert-scale-legacy"
import { Heading } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "LikertScaleLegacy (React)",
  component: LikertScaleLegacy,
  parameters: {
    info: {
      text: `
        import { LikertScale } from "@kaizen/draft-likert-scale-legacy";
      `,
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

const pageStyles: CSSProperties = {
  padding: "24px 24px",
  width: "100%",
  boxSizing: "border-box",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}

export const DefaultStory = () => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)

  return (
    <div style={pageStyles}>
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
    <div
      style={{
        ...pageStyles,
        background: "#6B6E94",
      }}
    >
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
