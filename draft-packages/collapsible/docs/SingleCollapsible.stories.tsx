import React from "react"
import { Icon, Box } from "@kaizen/component-library"
import translationIcon from "@kaizen/component-library/icons/translation.icon.svg"
import { Collapsible } from "@kaizen/draft-collapsible"
import { Paragraph } from "@kaizen/typography"
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
  title: `${CATEGORIES.components}/Collapsible`,
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

export const SingleCollapsibleKaizenSiteDemo = () => (
  <Box m={1}>
    <Collapsible id="collapsible-single" open title="Single collapsible">
      <Paragraph variant="body">{lipsum}</Paragraph>
    </Collapsible>
  </Box>
)
SingleCollapsibleKaizenSiteDemo.storyName =
  "Single collapsible (Kaizen Site Demo)"

export const SingleCollapsibleNoPadding = () => (
  <Box m={1}>
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
  </Box>
)
SingleCollapsibleNoPadding.storyName = "Single collapsible (no padding)"
SingleCollapsibleNoPadding.parameters = { chromatic: { disable: false } }

export const SingleCollapsibleCustomHeader = () => (
  <Box m={1}>
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
  </Box>
)
SingleCollapsibleCustomHeader.storyName = "Single collapsible (custom header)"
SingleCollapsibleCustomHeader.parameters = { chromatic: { disable: false } }

export const SingleCollapsibleLazyLoad = () => (
  <Box m={1}>
    <Collapsible id="collapsible-single" title="Single collapsible" lazyLoad>
      <Paragraph variant="body">
        This content won't be rendered until the collapsible is opened. This is
        particularly useful when you have data being queried inside your
        collapsible content.
      </Paragraph>
      <Paragraph variant="body">
        This has a necessary side effect of removing the height animation on
        open and close.
      </Paragraph>
    </Collapsible>
  </Box>
)
SingleCollapsibleLazyLoad.storyName = "Single collapsible (lazy load)"
