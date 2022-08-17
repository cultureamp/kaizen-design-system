import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { LoadingHeading } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}/Loading Headings`,
  component: LoadingHeading,
  parameters: {
    docs: {
      description: {
        component: 'import { LoadingHeading } from "@kaizen/loading-skeleton"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A1"
    ),
  },
  decorators: [withDesign],
}

export const DefaultLoadingHeading = args => <LoadingHeading {...args} />
DefaultLoadingHeading.storyName = "Loading Heading"
DefaultLoadingHeading.args = { variant: "heading-1" }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
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
