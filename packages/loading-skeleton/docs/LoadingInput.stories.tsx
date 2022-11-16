import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { LoadingInput, LoadingHeading } from ".."

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}/Loading Input`,
  component: LoadingInput,
  parameters: {
    docs: {
      description: {
        component: 'import { LoadingInput } from "@kaizen/loading-skeleton"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A1"
    ),
  },
  decorators: [withDesign],
}

export const DefaultLoadingInput = args => <LoadingInput {...args} />
DefaultLoadingInput.storyName = "Loading Input"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
    <StoryWrapper.Row rowTitle="TextField">
      <div>
        <LoadingHeading variant="heading-6" width={10} />
        <LoadingInput isReversed={isReversed} />
      </div>
      <TextField
        id="text-default"
        inputType="email"
        labelText="Default"
        reversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Text Area Field (custom height)">
      <div>
        <LoadingHeading variant="heading-6" width={10} />
        <LoadingInput isReversed={isReversed} height={100} />
      </div>
      <TextAreaField
        id="text-default"
        labelText="Default"
        reversed={isReversed}
      />
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
