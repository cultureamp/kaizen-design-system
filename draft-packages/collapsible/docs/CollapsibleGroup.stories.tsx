import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Collapsible, CollapsibleGroup } from "@kaizen/draft-collapsible"
import { Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
magna nisl, in cursus urna hendrerit et. Aenean semper, est non
feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
arcu quam a sapien. Donec in viverra urna.`

export default {
  tags: ["autodocs"],
  title: "Components/Collapsible/Collapsible Group",
  component: CollapsibleGroup,
  parameters: {
    backgrounds: { default: "Gray 100" },
    docs: {
      description: {
        component:
          'import { Collapsible, CollapsibleGroup, ExpertAdviceCollapsible } from "@kaizen/draft-collapsible";',
      },
    },
  },
} satisfies Meta<typeof CollapsibleGroup>

export const CollapsibleGroupDefault: StoryFn<
  typeof CollapsibleGroup
> = args => (
  <CollapsibleGroup {...args}>
    <Collapsible open title="First panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible title="Second panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible title="Third panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
  </CollapsibleGroup>
)
CollapsibleGroupDefault.storyName = "Collapsible Group"

const CollapsibleGroupVariantClear = (): JSX.Element => (
  <CollapsibleGroup>
    <Collapsible variant="clear" open title="First panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible variant="clear" title="Second panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible variant="clear" title="Third panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
  </CollapsibleGroup>
)

const CollapsibleGroupSeparated = (): JSX.Element => (
  <CollapsibleGroup separated>
    <Collapsible open title="First panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible title="Second panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible title="Third panel">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
  </CollapsibleGroup>
)

const CollapsibleGroupStickyHeaders = (): JSX.Element => (
  <CollapsibleGroup separated sticky={{ top: "0" }}>
    <Collapsible title="First panel" open>
      <Paragraph variant="body">{lipsum}</Paragraph>
      <Paragraph variant="body">{lipsum}</Paragraph>
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible title="Second panel" open>
      <Paragraph variant="body">{lipsum}</Paragraph>
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
    <Collapsible title="Third panel" open>
      <Paragraph variant="body">{lipsum}</Paragraph>
      <Paragraph variant="body">{lipsum}</Paragraph>
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
  </CollapsibleGroup>
)

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Collapsible Group"]} />
    <StoryWrapper.Row rowTitle="Clear">
      <CollapsibleGroupVariantClear />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Sticky Header">
      <CollapsibleGroupStickyHeaders />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Separated">
      <CollapsibleGroupSeparated />
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
