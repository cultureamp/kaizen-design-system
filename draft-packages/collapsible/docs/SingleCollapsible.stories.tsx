import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { IconButton } from "@kaizen/button"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import kebabIcon from "@kaizen/component-library/icons/kebab.icon.svg"
import { Collapsible } from "@kaizen/draft-collapsible"
import { Heading, Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import styles from "./Collapsible.stories.module.scss"

const ListItem = ({ children }: { children: JSX.Element }): JSX.Element => (
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
  tags: ["autodocs"],
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    backgrounds: { default: "Gray 100" },
    docs: {
      description: {
        component: 'import { Collapsible } from "@kaizen/draft-collapsible";',
      },
    },
  },
} satisfies Meta<typeof Collapsible>

const SingleCollapsibleNoPadding = (): JSX.Element => (
  <Collapsible open noSectionPadding title="Single collapsible with no padding">
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
        In that case you should use the &apos;noSectionPadding&apos; prop.
      </Paragraph>
    </ListItem>
  </Collapsible>
)

const SingleCollapsibleCustomHeader = (): JSX.Element => (
  <Collapsible
    open
    title="Custom header"
    variant="default"
    renderHeader={(title): JSX.Element => (
      <>
        <div style={{ flex: "1 0 auto" }}>
          <Heading variant="heading-4" tag="span">
            {title}
          </Heading>
        </div>
        <IconButton
          icon={addIcon}
          label="Add item"
          onClick={(event): void => {
            // When adding extra actions you have to stop propagation to avoid this triggering the collapse/uncollapsible behaviour
            event.stopPropagation()
          }}
        />
        <IconButton
          icon={kebabIcon}
          label="More actions"
          onClick={(event): void => {
            // When adding extra actions you have to stop propagation to avoid this triggering the collapse/uncollapsible behaviour
            event.stopPropagation()
          }}
        />
      </>
    )}
  >
    <Paragraph variant="body">
      You can create a custom header using the renderHeader prop.
    </Paragraph>
  </Collapsible>
)

const SingleCollapsibleLazyLoad = (): JSX.Element => (
  <Collapsible title="Single collapsible" lazyLoad>
    <Paragraph variant="body">
      This content won&apos;t be rendered until the collapsible is opened. This
      is particularly useful when you have data being queried inside your
      collapsible content.
    </Paragraph>
    <Paragraph variant="body">
      This has a necessary side effect of removing the height animation on open
      and close.
    </Paragraph>
  </Collapsible>
)

export const SingleCollapsibleKaizenSiteDemo: StoryFn<
  typeof Collapsible
> = args => (
  <Collapsible {...args}>
    <Paragraph variant="body">{lipsum}</Paragraph>
  </Collapsible>
)
SingleCollapsibleKaizenSiteDemo.storyName = "Collapsible"
SingleCollapsibleKaizenSiteDemo.args = {
  open: true,
  title: "Single Collapsible",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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
      <Collapsible variant="clear" title="Clear Variant">
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
