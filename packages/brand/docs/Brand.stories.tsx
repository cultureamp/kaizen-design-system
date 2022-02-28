import React from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers/figmaEmbed"
import { Brand } from "../src/Brand/Brand"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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
  },
}

export const DefaultSiteDemo = args => (
  <Brand
    alt="Culture Amp"
    variant="logo-horizontal"
    reversed={false}
    {...args}
  />
)
DefaultSiteDemo.story = {
  name: "Default (Kaizen Demo)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const StickerSheetDefault = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Default"]} />
    <StoryWrapper.Row rowTitle="Logo Horizontal">
      <Brand alt="Culture Amp" variant="logo-horizontal" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Logo Vertical">
      <Brand alt="Culture Amp" variant="logo-vertical" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Enso">
      <Brand alt="Culture Amp" variant="enso" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Collective Intelligence">
      <Brand alt="Collective Intelligence" variant="collective-intelligence" />
    </StoryWrapper.Row>
  </StoryWrapper>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = () => (
  <StoryWrapper isReversed>
    <StoryWrapper.RowHeader headings={["Default"]} />
    <StoryWrapper.Row rowTitle="Logo Horizontal">
      <Brand alt="Culture Amp" variant="logo-horizontal" reversed />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Logo Vertical">
      <Brand alt="Culture Amp" variant="logo-vertical" reversed />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Enso">
      <Brand alt="Culture Amp" variant="enso" reversed />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Collective Intelligence">
      <Brand
        alt="Collective Intelligence"
        variant="collective-intelligence"
        reversed
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
  chromatic: { disable: false },
}
