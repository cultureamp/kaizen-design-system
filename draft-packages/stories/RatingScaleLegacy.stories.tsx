import React, { useState } from "react"

import {
  RatingScaleLegacy,
  Scale,
  ScaleItem,
} from "@kaizen/draft-rating-scale-legacy"
import { Heading } from "@kaizen/component-library"

export default {
  title: "RatingScaleLegacy (React)",
  component: RatingScaleLegacy,
  parameters: {
    info: {
      text: `
        import { RatingScale } from "@kaizen/draft-rating-scale-legacy";
      `,
    },
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

const pageStyles = {
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
      <div style={{ marginBottom: "40px" }}>
        <Heading variant="heading-4" id={labelId}>
          How would you rate this survey?
        </Heading>
      </div>
      <RatingScaleLegacy
        scale={scale}
        automationId="123"
        labelId={labelId} // Intended to match the id of the label
        selectedItem={selectedItem}
        onSelect={item => setSelectedItem(item)}
      />
    </div>
  )
}

DefaultStory.story = {
  name: "Default",
}

export const Reversed = () => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)

  return (
    <div
      style={{
        ...pageStyles,
        background: "#6B6E94",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <Heading variant="heading-4" color="white" id={labelId}>
          How would you rate this survey?
        </Heading>
      </div>
      <RatingScaleLegacy
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

Reversed.story = {
  name: "Reversed",
}
