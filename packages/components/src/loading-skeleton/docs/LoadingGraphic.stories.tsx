import React from "react"
import { Icon } from "@components/Icon"
import configureIcon from "@icons/configure.icon.svg"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Avatar } from "@kaizen/draft-avatar"
import {
  BrandMomentPositiveOutro,
  Informative,
} from "@kaizen/draft-illustration"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

import { figmaEmbed } from "../../../storybook/helpers"
import { LoadingGraphic } from ".."

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}/Loading Graphic`,
  component: LoadingGraphic,
  parameters: {
    docs: {
      description: {
        component: 'import { LoadingGraphic } from "@kaizen/loading-skeleton"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A1"
    ),
  },
  decorators: [withDesign],
}

export const DefaultLoadingGraphic: ComponentStory<
  typeof LoadingGraphic
> = args => <LoadingGraphic {...args} />
DefaultLoadingGraphic.storyName = "Loading Graphic"
DefaultLoadingGraphic.args = { size: "xlarge" }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
    <StoryWrapper.Row rowTitle="Icon (small)">
      <LoadingGraphic size="small" isReversed={isReversed} />
      <div style={{ width: "20px" }}>
        <Icon
          icon={configureIcon}
          title="Warning"
          desc="Aliens approaching!"
          role="img"
          inheritSize={true}
        />
      </div>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Avatar (medium)">
      <LoadingGraphic size="medium" isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="medium"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Avatar (large)">
      <LoadingGraphic size="large" isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="large"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Avatar (x-large)">
      <LoadingGraphic size="xlarge" isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="xlarge"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Spot (xx-large)">
      <LoadingGraphic size="xxlarge" isReversed={isReversed} />
      <div style={{ width: "156px" }}>
        <Informative alt="informative-spot-image" />
      </div>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Scene (scene)">
      <LoadingGraphic size="scene" isReversed={isReversed} />
      <BrandMomentPositiveOutro alt="positive-outro" />
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
