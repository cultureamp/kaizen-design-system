import React, { useState } from "react"

import { RatingScale, Scale, ScaleItem } from "@kaizen/draft-rating-scale"

export default {
  title: "RatingScale (React)",
  component: RatingScale,
  parameters: {
    info: {
      text: `
        import { RatingScale } from "@kaizen/draft-RatingScale";
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

export const DefaultStory = () => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>()

  return (
    <div style={{ margin: "48px 24px" }}>
      <RatingScale
        scale={scale}
        questionId="123"
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
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>()

  return (
    <div
      style={{
        padding: "48px 24px",
        width: "100%",
        height: "100vh",
        background: "#6B6E94",
      }}
    >
      <RatingScale
        scale={scale}
        questionId="123"
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
