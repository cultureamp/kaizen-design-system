import React from "react"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Paragraph } from "../src/Paragraph/Paragraph"

export default {
  title: `Components/${SUB_CATEGORIES.typography}/Paragraph`,
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: 'import { Paragraph } from "@kaizen/typography"',
      },
      page: (): JSX.Element => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Documentation />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A1288"
    ),
  },
  decorators: [withDesign],
}

const Documentation = (): JSX.Element => (
  <Paragraph variant="body">
    <ul>
      <li>
        There is no variant for bold text. You can use{" "}
        <code>&#x3C;strong&#x3E;</code> tags for this purpose and it will have
        the correct font weight applied.
      </li>
      <li>
        Use the <code>color</code> prop to change the text color. This prop is
        typed to restrict values to a designer-approved palette. Do not modify
        color by targeting the element via CSS from outside the{" "}
        <code>Paragraph</code> component, because this causes problems in future
        rebrands when our colors change.
      </li>
      <li>
        If you want to apply margin or padding to a <code>Paragraph</code>, you
        can either
        <ul>
          <li>wrap it in a new div with margin or padding applied, or</li>
          <li>
            wrap it in the{" "}
            <a href="/?path=/story/box-react--box-default">
              <code>Box</code>
            </a>{" "}
            component, which gives you a no-CSS way to create spacing.
          </li>
        </ul>
      </li>
      <li>
        Design-related documentation is available on the{" "}
        <a href="https://cultureamp.design/guidelines/typography/">
          Typography guidlines on the Kaizen Site
        </a>
        .
      </li>
    </ul>
  </Paragraph>
)

export const Body: ComponentStory<typeof Paragraph> = args => (
  <Paragraph {...args}>The quick brown fox jumps over the lazy dog.</Paragraph>
)
Body.storyName = "Paragraph"
Body.args = { variant: "body" }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const fontColour = isReversed ? "white" : "dark"

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.Row rowTitle="Intro Lede">
          <Paragraph variant="intro-lede" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Paragraph>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Body">
          <Paragraph variant="body" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Paragraph>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Body strong">
          <strong>
            <Paragraph variant="body" color={fontColour}>
              The quick brown fox jumps over the lazy dog.
            </Paragraph>
          </strong>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Small">
          <Paragraph variant="small" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Paragraph>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Extra small">
          <Paragraph variant="extra-small" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Paragraph>
        </StoryWrapper.Row>
        {!isReversed ? (
          <>
            <StoryWrapper.Row rowTitle="Dark Reduced Opacity">
              <Paragraph variant="intro-lede" color="dark-reduced-opacity">
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StoryWrapper.Row>
            <StoryWrapper.Row rowTitle="Positive">
              <Paragraph variant="intro-lede" color="positive">
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StoryWrapper.Row>
            <StoryWrapper.Row rowTitle="Negative">
              <Paragraph variant="intro-lede" color="negative">
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StoryWrapper.Row>
          </>
        ) : (
          <StoryWrapper.Row rowTitle="White Reduced Opacity">
            <Paragraph variant="intro-lede" color="white-reduced-opacity">
              The quick brown fox jumps over the lazy dog.
            </Paragraph>
          </StoryWrapper.Row>
        )}
      </StoryWrapper>
    </>
  )
}

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
