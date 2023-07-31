import React from "react"
import { StoryFn } from "@storybook/react"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { LoadingInput, LoadingHeading } from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Loading States/Loading Input",
  component: LoadingInput,
  parameters: {
    docs: {
      description: {
        component: 'import { LoadingInput } from "@kaizen/loading-skeleton"',
      },
    },
  },
}

export const DefaultLoadingInput: StoryFn<typeof LoadingInput> = args => (
  <LoadingInput {...args} />
)
DefaultLoadingInput.storyName = "Loading Input"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
    <StoryWrapper.Row rowTitle="TextField">
      <div>
        <LoadingHeading variant="heading-6" width={10} />
        <LoadingInput isReversed={isReversed} />
      </div>
      <TextField inputType="email" labelText="Default" reversed={isReversed} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Text Area Field (custom height)">
      <div>
        <LoadingHeading variant="heading-6" width={10} />
        <LoadingInput isReversed={isReversed} height={100} />
      </div>
      <TextAreaField labelText="Default" reversed={isReversed} />
    </StoryWrapper.Row>
  </StoryWrapper>
)

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
