import React, { HTMLAttributes } from "react"
import { ComponentMeta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { ChildStyler, OverrideClassName } from "../index"
import { ChildStylerTwo } from "../src/ChildStyler/ChildStylerTwo"
import { ExampleChild, TestChild } from "../src/ChildStyler/TestComponents"
import { StylerOptions } from "../src/ChildStyler/utils"

export default {
  title: `${CATEGORIES.components}/ChildStyler`,
  component: ChildStyler,
  parameters: {
    docs: {
      description: {
        component: 'import { ChildStyler } from "@kaizen/component-base"',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof ChildStyler>

const StoryChild: React.VFC<
  OverrideClassName<HTMLAttributes<HTMLParagraphElement>>
> = ({ classNameOverride, ...restProps }) => (
  <p className={classNameOverride} {...restProps} />
)

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["COLUMN 1", "COLUMN 2", "COLUMN 3"]} />
    <StoryWrapper.Row rowTitle="ROW 1">
      <ChildStyler>
        <div>Test div</div>
      </ChildStyler>
      <ChildStyler>
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
      <ChildStyler>
        <StoryChild>Test StoryChild</StoryChild>
      </ChildStyler>
    </StoryWrapper.Row>

    <StoryWrapper.Row rowTitle="ROW 2">
      <ChildStyler margin="none">
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
      <ChildStyler margin="1">
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
      <ChildStyler margin="xs">
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
    </StoryWrapper.Row>

    <StoryWrapper.Row rowTitle="ROW 3">
      <ChildStyler margin={{ top: "xs", right: "xs" }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
      <ChildStyler margin={{ bottom: "xs", left: "xs" }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
      <ChildStyler margin={{ top: "xs", left: "none" }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStyler>
    </StoryWrapper.Row>

    <StoryWrapper.Row rowTitle="TWO - ROW 1">
      <ChildStylerTwo options={{ margin: "none" }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStylerTwo>
      <ChildStylerTwo options={{ margin: "1" }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStylerTwo>
      <ChildStylerTwo options={{ margin: "xs" }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStylerTwo>
    </StoryWrapper.Row>

    <StoryWrapper.Row rowTitle="TWO - ROW 2">
      <ChildStylerTwo options={{ margin: { top: "xs", right: "xs" } }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStylerTwo>
      <ChildStylerTwo options={{ margin: { bottom: "xs", left: "xs" } }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStylerTwo>
      <ChildStylerTwo options={{ margin: { top: "xs", left: "none" } }}>
        <TestChild>Test TestChild</TestChild>
      </ChildStylerTwo>
    </StoryWrapper.Row>

    <StoryWrapper.Row rowTitle="TWO - ROW 2">
      <ChildStylerTwo options={{ margin: { top: "xs", right: "xs" } }}>
        <Paragraph variant="body">Test Paragraph</Paragraph>
      </ChildStylerTwo>
      <ChildStylerTwo options={{ margin: { bottom: "xs", left: "xs" } }}>
        <Paragraph variant="body">Test Paragraph</Paragraph>
      </ChildStylerTwo>
      <ChildStylerTwo options={{ margin: { top: "xs", left: "none" } }}>
        <Paragraph variant="body">Test Paragraph</Paragraph>
      </ChildStylerTwo>
    </StoryWrapper.Row>

    <StoryWrapper.Row rowTitle="In component">
      <ExampleChild margin="xs" classNameOverride="OVERRIDE">
        Example child
      </ExampleChild>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
