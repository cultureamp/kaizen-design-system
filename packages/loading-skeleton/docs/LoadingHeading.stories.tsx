import React from "react"
import { StoryFn } from "@storybook/react"
import { Heading } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { LoadingHeading } from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Loading States/Loading Headings",
  component: LoadingHeading,
  parameters: {
    docs: {
      description: {
        component: 'import { LoadingHeading } from "@kaizen/loading-skeleton"',
      },
    },
  },
}

export const DefaultLoadingHeading: StoryFn<typeof LoadingHeading> = args => (
  <LoadingHeading {...args} />
)
DefaultLoadingHeading.storyName = "Loading Heading"
DefaultLoadingHeading.args = { variant: "heading-1" }

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
    <StoryWrapper.Row rowTitle="Display 0">
      <LoadingHeading variant="display-0" isReversed={isReversed} />
      <Heading variant="display-0" color={isReversed ? "white" : "dark"}>
        Display-0
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading 1">
      <LoadingHeading variant="heading-1" isReversed={isReversed} />
      <Heading variant="heading-1" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading 2">
      <LoadingHeading variant="heading-2" isReversed={isReversed} />
      <Heading variant="heading-2" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading 3">
      <LoadingHeading variant="heading-3" isReversed={isReversed} />
      <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading 4">
      <LoadingHeading variant="heading-4" isReversed={isReversed} />
      <Heading variant="heading-4" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading 5">
      <LoadingHeading variant="heading-5" isReversed={isReversed} />
      <Heading variant="heading-5" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading 6">
      <LoadingHeading variant="heading-6" isReversed={isReversed} />
      <Heading variant="heading-6" color={isReversed ? "white" : "dark"}>
        Heading
      </Heading>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Heading Link">
      <LoadingHeading variant="heading-1" isLink isReversed={isReversed} />
      <Heading variant="heading-1" color={isReversed ? "white" : "dark"}>
        Heading Link
      </Heading>
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
