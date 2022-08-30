import React from "react"
import { Story } from "@storybook/react"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { Heading } from "../"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.typography}/Heading`,
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'import { Heading } from "@kaizen/typography"',
      },
    },
  },
}

export const Display0 = args => (
  <Heading {...args}>Have the courage to be vulnerable.</Heading>
)
Display0.storyName = "Heading"
Display0.args = { variant: "heading-1", color: "dark" }
Display0.parameters = {
  chromatic: { disable: false },
}
const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Default"]} />
      <StoryWrapper.Row rowTitle="Display 0">
        <Heading variant="display-0" color={isReversed ? "white" : "dark"}>
          Let's create a better world of work
        </Heading>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Heading 1">
        <Heading variant="heading-1" color={isReversed ? "white" : "dark"}>
          Have the courage to be vulnerable.
        </Heading>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Heading 2">
        <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
          Learn faster through feedback.
        </Heading>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Heading 3">
        <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
          Trust people to make decisions.
        </Heading>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Heading 4">
        <Heading variant="heading-4" color={isReversed ? "white" : "dark"}>
          Amplify others.
        </Heading>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Heading 5">
        <Heading variant="heading-5" color={isReversed ? "white" : "dark"}>
          An employee experience that people love.
        </Heading>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Heading 6">
        <Heading variant="heading-6" color={isReversed ? "white" : "dark"}>
          Discover the power of humanity at work.
        </Heading>
      </StoryWrapper.Row>
    </StoryWrapper>
    {!isReversed ? (
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Dark", "Dark Reduced Opacity", "Positive", "Negative"]}
        />
        <StoryWrapper.Row rowTitle="Colours">
          <Heading variant="heading-6" color="dark">
            Discover the power of humanity at work.
          </Heading>
          <Heading variant="heading-6" color="dark-reduced-opacity">
            Discover the power of humanity at work.
          </Heading>
          <Heading variant="heading-6" color="positive">
            Discover the power of humanity at work.
          </Heading>
          <Heading variant="heading-6" color="negative">
            Discover the power of humanity at work.
          </Heading>
        </StoryWrapper.Row>
      </StoryWrapper>
    ) : (
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["White", "White Reduced Opacity"]} />
        <StoryWrapper.Row rowTitle="Colours">
          <Heading variant="heading-6" color="white">
            Discover the power of humanity at work.
          </Heading>
          <Heading variant="heading-6" color="white-reduced-opacity">
            Discover the power of humanity at work.
          </Heading>
        </StoryWrapper.Row>
      </StoryWrapper>
    )}
  </>
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
