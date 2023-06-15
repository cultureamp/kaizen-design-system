import React from "react"
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks"
import { Meta, StoryFn } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { Heading, Paragraph } from "../"

export default {
  tags: ["autodocs"],
  title: "Components/Typography/Heading",
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'import { Heading } from "@kaizen/typography"',
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
} satisfies Meta<typeof Heading>

export const DefaultStory: StoryFn<typeof Heading> = args => (
  <Heading {...args}>Have the courage to be vulnerable.</Heading>
)
DefaultStory.storyName = "Heading"
DefaultStory.args = { variant: "heading-1", color: "dark" }

const Documentation = (): JSX.Element => (
  <Paragraph tag="div" variant="body">
    <ul>
      <li>
        The <code>variant</code> prop is required, but the <code>tag</code> prop
        is not. If no <code>tag</code> prop is provided, <code>Heading</code>{" "}
        will attempt to render the appropriate tag based on the chosen{" "}
        <code>variant</code>. This cannot be relied on to give you the right tag
        in 100% of cases, so we recommend manually choosing the appropriate tag
        for your situation.
      </li>
      <li>
        Use the <code>color</code> prop to change the text color. This prop is
        typed to restrict values to a designer-approved palette. Do not modify
        color by targeting the element via CSS from outside the{" "}
        <code>Heading</code> component, because this causes problems in future
        rebrands when our colors change.
      </li>
      <li>
        <strong>Semantic, logical HTML should always take priority</strong> when
        deciding which <code>tag</code> to use:
        <ul>
          <li>
            Heading elements should never skip a level, e.g. an <code>h2</code>{" "}
            followed by an <code>h4</code> should be avoided.
          </li>
          <li>
            The main heading on the page that accurately summarizes the page
            should be an <code>h1</code>.
          </li>
          <li>
            A <code>Heading</code> should not have a bigger <code>tag</code>{" "}
            than another visually smaller <code>Heading</code>.
          </li>
          <li>
            <strong>
              Illogical heading orders will cause pages to fail WCAG compliance
              tests &amp; audits.
            </strong>
          </li>
        </ul>
      </li>
    </ul>
  </Paragraph>
)

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const fontColour = isReversed ? "white" : "dark"
  return (
    <>
      <StoryWrapper isReversed={isReversed} hasRowDivider>
        <StoryWrapper.Row rowTitle="Display 0">
          <Heading variant="display-0" color={fontColour}>
            Let&apos;s create a better world of work
          </Heading>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Heading 1">
          <div>
            <Heading variant="heading-1" color={fontColour}>
              Have the courage to be vulnerable.
            </Heading>
            <Heading variant="heading-1" color={fontColour}>
              Be authentic, ask for help, be willing to fail, create open
              environments.
            </Heading>
          </div>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Heading 2">
          <div>
            <Heading variant="heading-2" color={fontColour}>
              Learn faster through feedback.
            </Heading>
            <Heading variant="heading-2" color={fontColour}>
              Seek feedback, give feedback responsibly, respond constructively,
              learn continuously.
            </Heading>
          </div>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Heading 3">
          <div>
            <Heading variant="heading-3" color={fontColour}>
              Trust people to make decisions.
            </Heading>
            <Heading variant="heading-3" color={fontColour}>
              Provide constructive feedback, support decisions, be accountable,
              delegate decisions.
            </Heading>
          </div>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Heading 4">
          <div>
            <Heading variant="heading-4" color={fontColour}>
              Amplify others.
            </Heading>
            <Heading variant="heading-4" color={fontColour}>
              Recognise others, succeed together, grow others, create
              opportunities.
            </Heading>
          </div>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Heading 5">
          <div>
            <Heading variant="heading-5" color={fontColour}>
              An employee experience that people love.
            </Heading>
            <Heading variant="heading-5" color={fontColour}>
              Get the employee engagement, performance and development tools and
              insights you need to build a category-defining culture.
            </Heading>
          </div>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Heading 6">
          <Heading variant="heading-6" color={fontColour}>
            Discover the power of humanity at work.
          </Heading>
        </StoryWrapper.Row>
      </StoryWrapper>
      {!isReversed ? (
        <StoryWrapper isReversed={isReversed} hasColumnDivider>
          <StoryWrapper.RowHeader
            headings={["Dark", "Dark Reduced Opacity", "Positive", "Negative"]}
          />
          <StoryWrapper.Row rowTitle="Colours">
            <Heading variant="heading-6" color="dark">
              Discover the power of humanity at work.
            </Heading>
            <Heading variant="heading-6" color="dark-reduced-opacity">
              Discover the power of humanity at work.
            </Heading>
            <Heading variant="heading-6" color="positive">
              Discover the power of humanity at work.
            </Heading>
            <Heading variant="heading-6" color="negative">
              Discover the power of humanity at work.
            </Heading>
          </StoryWrapper.Row>
        </StoryWrapper>
      ) : (
        <StoryWrapper isReversed={isReversed} hasColumnDivider>
          <StoryWrapper.RowHeader
            headings={["White", "White Reduced Opacity"]}
          />
          <StoryWrapper.Row rowTitle="Colours">
            <Heading variant="heading-6" color="white">
              Discover the power of humanity at work.
            </Heading>
            <Heading variant="heading-6" color="white-reduced-opacity">
              Discover the power of humanity at work.
            </Heading>
          </StoryWrapper.Row>
        </StoryWrapper>
      )}
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
