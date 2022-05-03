import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { LoadingParagraph } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}/Loading Paragraph`,
  component: LoadingParagraph,
  parameters: {
    docs: {
      description: {
        component:
          'import { LoadingParagraph } from "@kaizen/loading-skeleton"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A1"
    ),
  },
  decorators: [withDesign],
}

export const DefaultLoadingParagraph = args => <LoadingParagraph {...args} />
DefaultLoadingParagraph.storyName = "Loading Paragraph"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
    <StoryWrapper.Row rowTitle="Paragraph">
      <div>
        <LoadingParagraph isReversed={isReversed} />
        <LoadingParagraph isReversed={isReversed} />
      </div>
      <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
        Kaizen is Culture Amp’s design system. It’s the single source of truth
        for our UX guidelines, design assets, and front-end code to help Culture
        Amp’s teams rapidly create a world-class experience.
      </Paragraph>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Paragraph Link">
      <div>
        <LoadingParagraph isLink isReversed={isReversed} />
        <LoadingParagraph isLink isReversed={isReversed} />
      </div>
      <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
        Kaizen is Culture Amp’s design system. It’s the single source of truth
        for our UX guidelines, design assets, and front-end code to help Culture
        Amp’s teams rapidly create a world-class experience.
      </Paragraph>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Paragraph - inline, width 30%">
      <div>
        <LoadingParagraph isInline width={30} isReversed={isReversed} />
        <LoadingParagraph isInline width={30} isReversed={isReversed} />
        <LoadingParagraph isInline width={30} isReversed={isReversed} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Kaizen is Culture Amp’s design system.
        </Paragraph>
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Kaizen is Culture Amp’s design system.
        </Paragraph>
        <Paragraph variant="body" color={isReversed ? "white" : "dark"}>
          Kaizen is Culture Amp’s design system.
        </Paragraph>
      </div>
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
