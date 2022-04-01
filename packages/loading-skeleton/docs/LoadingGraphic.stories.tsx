import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { HumanityAtWork, Informative } from "@kaizen/draft-illustration"
import { Icon } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import { Avatar } from "@kaizen/draft-avatar"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { LoadingGraphic } from "../src/LoadingSkeleton"

import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}/Loading Graphic`,
  component: LoadingGraphic,
  parameters: {
    chromatic: { disable: false },
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

export const DefaultLoadingGraphic = args => <LoadingGraphic {...args} />
DefaultLoadingGraphic.storyName = "Loading Graphic"
DefaultLoadingGraphic.args = { width: 7.75 }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Loading Skeleton", "Example"]} />
    <StoryWrapper.Row rowTitle="Icon (small)">
      <LoadingGraphic width={1.25} isReversed={isReversed} />
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
      <LoadingGraphic width={3} isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="medium"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Avatar (large)">
      <LoadingGraphic width={4.5} isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="large"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Avatar (x-large)">
      <LoadingGraphic width={6} isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="xlarge"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Avatar (xx-large)">
      <LoadingGraphic width={7.75} isReversed={isReversed} />
      <Avatar
        fullName="Jane Doe"
        disableInitials={false}
        isCurrentUser
        size="xxlarge"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Spot (xxx-large)">
      <LoadingGraphic width={9.75} isReversed={isReversed} />
      <div style={{ width: "156px" }}>
        <Informative alt="informative-spot-image" />
      </div>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Scene (xxxx-large)">
      <LoadingGraphic width={35} isReversed={isReversed} />
      <HumanityAtWork alt="humanity-at-work" />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
