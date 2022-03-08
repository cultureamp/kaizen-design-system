import React, { useState } from "react"
import { Story } from "@storybook/react"
import {
  LikertScaleLegacy,
  Scale,
  ScaleItem,
} from "@kaizen/draft-likert-scale-legacy"
import { Heading } from "@kaizen/typography"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { StoryRowHeader } from "../../../storybook/components/StoryWrapper/components/StoryRowHeader"

export default {
  title: `${CATEGORIES.components}/Likert Scale`,
  component: LikertScaleLegacy,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component:
          'import { LikertScale } from "@kaizen/draft-likert-scale-legacy";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A61902"
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

export const DefaultStory = () => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
  const labelId = "456"

  return (
    <>
      <div style={{ marginBottom: "40px" }} id={labelId}>
        <Heading variant="heading-4" color="dark">
          How would you rate this survey?
        </Heading>
      </div>
      <LikertScaleLegacy
        scale={scale}
        automationId="123"
        labelId={labelId} // Intended to match the id of the label
        selectedItem={selectedItem}
        onSelect={item => setSelectedItem(item)}
      />
    </>
  )
}
DefaultStory.storyName = "Default (Kaizen Demo)"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryRowHeader headings={[]} />
        <StoryWrapper.Row rowTitle="Very Poor">
          <LikertScaleLegacy
            scale={scale}
            automationId="123"
            labelId="456"
            selectedItem={scale[0]}
            onSelect={item => setSelectedItem(item)}
            reversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Poor">
          <LikertScaleLegacy
            scale={scale}
            automationId="123"
            labelId="456"
            selectedItem={scale[1]}
            onSelect={item => setSelectedItem(item)}
            reversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Fair">
          <LikertScaleLegacy
            scale={scale}
            automationId="123"
            labelId="456"
            selectedItem={scale[2]}
            onSelect={item => setSelectedItem(item)}
            reversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Good">
          <LikertScaleLegacy
            scale={scale}
            automationId="123"
            labelId="456"
            selectedItem={scale[3]}
            onSelect={item => setSelectedItem(item)}
            reversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Very Good">
          <LikertScaleLegacy
            scale={scale}
            automationId="123"
            labelId="456"
            selectedItem={scale[4]}
            onSelect={item => setSelectedItem(item)}
            reversed={isReversed}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
