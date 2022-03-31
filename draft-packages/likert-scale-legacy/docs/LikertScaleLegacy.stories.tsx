import React, { useState } from "react"
import { Story } from "@storybook/react"
import {
  LikertScaleLegacy,
  Scale,
  ScaleItem,
} from "@kaizen/draft-likert-scale-legacy"
import { Box } from "@kaizen/component-library"
import { Heading } from "@kaizen/typography"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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
    value: -1,
    label: "Not rated",
  },
  {
    value: 1,
    label: "Strong Disagree",
  },
  {
    value: 2,
    label: "Disagree",
  },
  {
    value: 3,
    label: "Neither agree or disagree",
  },
  {
    value: 4,
    label: "Agree",
  },
  {
    value: 5,
    label: "Strongly agree",
  },
]

export const DefaultStory = args => {
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
        {...args}
      />
    </>
  )
}
DefaultStory.storyName = "Likert Scale"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <Box mt={2}>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Not rated">
        <LikertScaleLegacy
          scale={scale}
          automationId="123"
          labelId="1"
          selectedItem={scale[0]}
          onSelect={() => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Strongly disagree">
        <LikertScaleLegacy
          scale={scale}
          automationId="123"
          labelId="1"
          selectedItem={scale[1]}
          onSelect={() => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Disagree">
        <LikertScaleLegacy
          scale={scale}
          automationId="123"
          labelId="2"
          selectedItem={scale[2]}
          onSelect={() => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Neither agree or disagree">
        <LikertScaleLegacy
          scale={scale}
          automationId="123"
          labelId="3"
          selectedItem={scale[3]}
          onSelect={() => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Agree">
        <LikertScaleLegacy
          scale={scale}
          automationId="123"
          labelId="4"
          selectedItem={scale[4]}
          onSelect={() => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Strongly agree">
        <LikertScaleLegacy
          scale={scale}
          automationId="123"
          labelId="5"
          selectedItem={scale[5]}
          onSelect={() => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </Box>
)

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
