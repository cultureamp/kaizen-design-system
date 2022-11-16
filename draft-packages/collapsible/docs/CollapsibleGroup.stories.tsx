import React from "react"
import { Box } from "@kaizen/component-library"
import { Collapsible, CollapsibleGroup } from "@kaizen/draft-collapsible"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
magna nisl, in cursus urna hendrerit et. Aenean semper, est non
feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
arcu quam a sapien. Donec in viverra urna.`

export default {
  title: `${CATEGORIES.components}/Collapsible/Collapsible Group`,
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
}

export const CollapsibleGroupDefault = () => (
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
CollapsibleGroupDefault.storyName = "Collapsible group"

export const CollapsibleGroupVariantClear = () => (
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
CollapsibleGroupVariantClear.storyName = "Collapsible group (clear variant)"
CollapsibleGroupVariantClear.parameters = { chromatic: { disable: false } }

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
CollapsibleGroupSeparated.parameters = { chromatic: { disable: false } }

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
