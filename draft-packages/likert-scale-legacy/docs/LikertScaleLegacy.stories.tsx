import React, { useState } from "react"
import { StoryFn } from "@storybook/react"
import {
  LikertScaleLegacy,
  Scale,
  ScaleItem,
} from "@kaizen/draft-likert-scale-legacy"
import { Heading } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Likert Scale",
  component: LikertScaleLegacy,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component:
          'import { LikertScale } from "@kaizen/draft-likert-scale-legacy";',
      },
    },
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

export const DefaultStory: StoryFn<typeof LikertScaleLegacy> = args => {
  const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)

  return (
    <>
      <div style={{ marginBottom: "40px" }} id={args.labelId}>
        <Heading variant="heading-4" color="dark">
          How would you rate this survey?
        </Heading>
      </div>
      <LikertScaleLegacy
        {...args}
        automationId="123"
        scale={scale}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
    </>
  )
}
DefaultStory.storyName = "Likert Scale"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  labelId: "456",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const SectionHeading = ({ heading }: { heading: string }): JSX.Element => (
    <Heading variant="heading-3" tag="h1" color={isReversed ? "white" : "dark"}>
      {heading}
    </Heading>
  )

  return (
    <StoryWrapper isReversed={isReversed}>
      <SectionHeading heading="Likert Scale" />
      <StoryWrapper.Row rowTitle="Not rated">
        <LikertScaleLegacy
          scale={scale}
          labelId="1"
          selectedItem={scale[0]}
          onSelect={(): void => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Strongly disagree">
        <LikertScaleLegacy
          scale={scale}
          labelId="1"
          selectedItem={scale[1]}
          onSelect={(): void => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Disagree">
        <LikertScaleLegacy
          scale={scale}
          labelId="2"
          selectedItem={scale[2]}
          onSelect={(): void => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Neither agree or disagree">
        <LikertScaleLegacy
          scale={scale}
          labelId="3"
          selectedItem={scale[3]}
          onSelect={(): void => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Agree">
        <LikertScaleLegacy
          scale={scale}
          labelId="4"
          selectedItem={scale[4]}
          onSelect={(): void => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Strongly agree">
        <LikertScaleLegacy
          scale={scale}
          labelId="5"
          selectedItem={scale[5]}
          onSelect={(): void => undefined}
          reversed={isReversed}
        />
      </StoryWrapper.Row>

      <SectionHeading heading="Validation" />
      <StoryWrapper.Row rowTitle="Error">
        <LikertScaleLegacy
          scale={scale}
          labelId="Error state"
          selectedItem={scale[0]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          validationMessage="Error message here"
          status="error"
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
