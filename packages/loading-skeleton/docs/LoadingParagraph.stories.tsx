import React from "react"
import { StoryFn } from "@storybook/react"
import { Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { LoadingParagraph } from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Loading States/Loading Paragraph",
  component: LoadingParagraph,
  parameters: {
    docs: {
      description: {
        component:
          'import { LoadingParagraph } from "@kaizen/loading-skeleton"',
      },
    },
  },
}

export const DefaultLoadingParagraph: StoryFn<
  typeof LoadingParagraph
> = args => <LoadingParagraph {...args} />
DefaultLoadingParagraph.storyName = "Loading Paragraph"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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
