import React from "react"
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks"
import { Meta, StoryFn } from "@storybook/react"
import { LinkTo } from "../../../storybook/components/LinkTo"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { Paragraph } from "../src/Paragraph/Paragraph"

export default {
  tags: ["autodocs"],
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: 'import { Paragraph } from "@kaizen/typography"',
      },
      page: (): JSX.Element => (
        <>
          <Title />
          <Description />
          <Documentation />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Paragraph>

const Documentation = (): JSX.Element => (
  <Paragraph tag="div" variant="body">
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
            <LinkTo pageId="components-box">
              <code>Box</code>
            </LinkTo>
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

export const DefaultStory: StoryFn<typeof Paragraph> = args => (
  <Paragraph {...args}>The quick brown fox jumps over the lazy dog.</Paragraph>
)
DefaultStory.storyName = "Paragraph"
DefaultStory.args = { variant: "body" }

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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
          <Paragraph variant="body" color={fontColour}>
            <strong>The quick brown fox jumps over the lazy dog.</strong>
          </Paragraph>
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
