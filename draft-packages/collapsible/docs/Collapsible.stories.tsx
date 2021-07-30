import { Icon, Paragraph, Box } from "@kaizen/component-library"
import { Collapsible, CollapsibleGroup } from "@kaizen/draft-collapsible"

import * as React from "react"
import translationIcon from "@kaizen/component-library/icons/translation.icon.svg"
import styles from "./Collapsible.stories.scss"

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
  title: "Collapsible (React)",
  component: Collapsible,
  parameters: {
    backgrounds: { default: "Gray 100" },
    docs: {
      description: {
        component:
          'import { Collapsible, CollapsibleGroup } from "@kaizen/draft-collapsible";',
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

// eslint-disable-next-line no-underscore-dangle
export const _CollapsibleGroup = () => (
  <Box m={1}>
    <CollapsibleGroup>
      <Collapsible id="collapsible-separate-1" open title="First panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-2" title="Second panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-3" title="Third panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
    </CollapsibleGroup>
  </Box>
)

_CollapsibleGroup.storyName = "Collapsible group"
SingleCollapsibleLazyLoad.storyName = "Single collapsible (lazy load)"

// eslint-disable-next-line no-underscore-dangle
export const _CollapsibleClearVariantGroup = () => (
  <Box m={1}>
    <CollapsibleGroup>
      <Collapsible
        variant="clear"
        id="collapsible-separate-1"
        open
        title="First panel"
      >
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible
        variant="clear"
        id="collapsible-separate-2"
        title="Second panel"
      >
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible
        variant="clear"
        id="collapsible-separate-3"
        title="Third panel"
      >
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
    </CollapsibleGroup>
  </Box>
)

_CollapsibleClearVariantGroup.storyName = "Collapsible group (clear variant)"

export const CollapsibleGroupSeparated = () => (
  <Box m={1}>
    <CollapsibleGroup separated>
      <Collapsible id="collapsible-separate-1" open title="First panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-2" title="Second panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-3" title="Third panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
    </CollapsibleGroup>
  </Box>
)

CollapsibleGroupSeparated.storyName = "Collapsible group (separated)"

export const CollapsibleGroupStickyHeaders = () => (
  <div style={{ margin: "4rem", width: "40rem" }}>
    <CollapsibleGroup separated sticky={{ top: "0" }}>
      <Collapsible id="collapsible-separate-1" title="First panel" open>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-2" title="Second panel" open>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-3" title="Third panel" open>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-4" title="Forth panel" open>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-5" title="Fifth panel" open>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
    </CollapsibleGroup>
  </div>
)

CollapsibleGroupStickyHeaders.storyName = "Collapsible group (sticky headers)"

export const CollapsibleGroupCallbackOnOpenClose = () => (
  <Box m={1}>
    <CollapsibleGroup onToggle={() => undefined}>
      <Collapsible id="collapsible-separate-1" open title="First panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-2" title="Second panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
      <Collapsible id="collapsible-separate-3" title="Third panel">
        <Paragraph variant="body">{lipsum}</Paragraph>
      </Collapsible>
    </CollapsibleGroup>
  </Box>
)

CollapsibleGroupCallbackOnOpenClose.storyName =
  "Collapsible group (callback on open/close)"
