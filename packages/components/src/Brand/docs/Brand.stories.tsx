import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { StoryWrapper } from "../../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../../storybook/constants"
import { figmaEmbed } from "../../../../../storybook/helpers/figmaEmbed"
import { Brand } from "../../../src/Brand/Brand"

export default {
  title: `${CATEGORIES.components}/Brand`,
  component: Brand,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component: 'Import { Brand } from "@kaizen/brand"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const DefaultStory: ComponentStory<typeof Brand> = args => (
  <Brand {...args} />
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  alt: "Culture Amp",
  variant: "logo-horizontal",
  reversed: false,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.Row rowTitle="Logo Horizontal">
      <Brand
        alt="Culture Amp"
        variant="logo-horizontal"
        reversed={isReversed}
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Logo Vertical">
      <Brand alt="Culture Amp" variant="logo-vertical" reversed={isReversed} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Enso">
      <Brand alt="Culture Amp" variant="enso" reversed={isReversed} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Collective Intelligence">
      <div style={{ width: "200px" }}>
        <Brand
          alt="Collective Intelligence"
          variant="collective-intelligence"
          reversed={isReversed}
        />
      </div>
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
