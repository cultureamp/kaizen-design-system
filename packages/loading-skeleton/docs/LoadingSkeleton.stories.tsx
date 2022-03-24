import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { HumanityAtWork, Informative } from "@kaizen/draft-illustration"
import { GuidanceBlock } from "@kaizen/draft-guidance-block"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { LoadingHeading, LoadingParagraph } from "../src/LoadingSkeleton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}/Loading Skeleton`,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component:
          'import { LoadingHeading, LoadingParagraph } from "@kaizen/loading-skeleton"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A1"
    ),
  },
  decorators: [withDesign],
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const GUIDANCE_BLOCK_TEXT = {
    title: "This is the Guidance block title",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
      "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
  }

  const GUIDANCE_BLOCK_LOADING = {
    title: (<LoadingHeading variant="heading-3" />) as any,
    description: (
      <div>
        <LoadingParagraph />
        <LoadingParagraph />
      </div>
    ),
  }

  const GUIDANCE_BLOCK_ACTION = {
    primary: {
      label: "Action",
    },
  }

  return (
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
      <StoryWrapper.Row rowTitle="Guidance Block - Spot">
        <GuidanceBlock
          illustration={<Informative alt="informative-spot-image" />}
          text={GUIDANCE_BLOCK_LOADING}
          actions={GUIDANCE_BLOCK_ACTION}
        />
        <GuidanceBlock
          illustration={<Informative alt="informative-spot-image" />}
          text={GUIDANCE_BLOCK_TEXT}
          actions={GUIDANCE_BLOCK_ACTION}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Guidance Block - Scene">
        <GuidanceBlock
          illustration={<HumanityAtWork alt="humanity-at-work" />}
          text={GUIDANCE_BLOCK_LOADING}
          actions={GUIDANCE_BLOCK_ACTION}
          illustrationType="scene"
        />
        <GuidanceBlock
          illustration={<HumanityAtWork alt="humanity-at-work" />}
          text={GUIDANCE_BLOCK_TEXT}
          actions={GUIDANCE_BLOCK_ACTION}
          illustrationType="scene"
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
