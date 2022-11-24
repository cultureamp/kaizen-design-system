import React from "react"
import { Story } from "@storybook/react"
import { Icon } from "@kaizen/component-library"
import translationIcon from "@kaizen/component-library/icons/translation.icon.svg"
import { Collapsible } from "@kaizen/draft-collapsible"
import { Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./Collapsible.stories.module.scss"

const ListItem = ({ children }: { children: JSX.Element }) => (
  <div className={styles.listItem}>{children}</div>
)

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
magna nisl, in cursus urna hendrerit et. Aenean semper, est non
feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
arcu quam a sapien. Donec in viverra urna.`

export default {
  title: `${CATEGORIES.components}/Collapsible/Single Collapsible`,
  component: Collapsible,
  parameters: {
    backgrounds: { default: "Gray 100" },
    docs: {
      description: {
        component:
          'import { Collapsible, CollapsibleGroup, ExpertAdviceCollapsible } from "@kaizen/draft-collapsible";',
      },
    },
  },
}

const SingleCollapsibleNoPadding = () => (
  <Collapsible
    id="collapsible-single"
    open
    noSectionPadding
    title="Single collapsible with no padding"
  >
    <ListItem>
      <Paragraph variant="body">Maybe you would like...</Paragraph>
    </ListItem>
    <ListItem>
      <Paragraph variant="body">
        ...content items separated with full length borders?
      </Paragraph>
    </ListItem>
    <ListItem>
      <Paragraph variant="body">
        In that case you should use the 'noSectionPadding' prop.
      </Paragraph>
    </ListItem>
  </Collapsible>
)

const SingleCollapsibleCustomHeader = () => (
  <Collapsible
    id="collapsible-single"
    open
    title="Custom header"
    variant="default"
    renderHeader={title => (
      <>
        <Icon icon={translationIcon} />
        <div style={{ flex: "1 0 auto", marginLeft: "1rem" }}>
          <Paragraph tag="span" variant="body">
            {title}
          </Paragraph>
        </div>
      </>
    )}
  >
    <Paragraph variant="body">
      You can create a custom header using the renderHeader prop.
    </Paragraph>
  </Collapsible>
)

const SingleCollapsibleLazyLoad = () => (
  <Collapsible id="collapsible-single" title="Single collapsible" lazyLoad>
    <Paragraph variant="body">
      This content won't be rendered until the collapsible is opened. This is
      particularly useful when you have data being queried inside your
      collapsible content.
    </Paragraph>
    <Paragraph variant="body">
      This has a necessary side effect of removing the height animation on open
      and close.
    </Paragraph>
  </Collapsible>
)

export const SingleCollapsibleKaizenSiteDemo = args => (
  <Collapsible id="collapsible-single" {...args}>
    <Paragraph variant="body">{lipsum}</Paragraph>
  </Collapsible>
)
SingleCollapsibleKaizenSiteDemo.storyName = "Collapsible"
SingleCollapsibleKaizenSiteDemo.args = {
  open: true,
  title: "Single Collapsible",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Single Collapsible"]} />
    <StoryWrapper.Row rowTitle="No Padding">
      <SingleCollapsibleNoPadding />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Custom Header">
      <SingleCollapsibleCustomHeader />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Lazy Load">
      <SingleCollapsibleLazyLoad />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Clear">
      <Collapsible id="collapsible-clear" variant="clear" title="Clear Variant">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
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
