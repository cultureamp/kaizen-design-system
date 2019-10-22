import { Icon, Text } from "@cultureamp/kaizen-component-library"
import {
  Collapsible,
  CollapsibleGroup,
} from "@cultureamp/kaizen-component-library/draft"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const styles = require("./Collapsible.stories.scss")
const translationIcon = require("@cultureamp/kaizen-component-library/icons/translation.icon.svg")
  .default

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

storiesOf("Collapsible", module)
  .add("Single collapsible", () => (
    <div style={{ margin: "1rem", width: "40rem" }}>
      <Collapsible id="collapsible-single" open title="Single collapsible">
        <Text tag="p">{lipsum}</Text>
      </Collapsible>
    </div>
  ))
  .add("Single collapsible (no padding)", () => (
    <div style={{ margin: "1rem", width: "40rem" }}>
      <Collapsible
        id="collapsible-single"
        open
        noSectionPadding
        title="Single collapsible with no padding"
      >
        <ListItem>
          <Text tag="p" inline>
            Maybe you would like...
          </Text>
        </ListItem>
        <ListItem>
          <Text tag="p" inline>
            ...content items separated with full length borders?
          </Text>
        </ListItem>
        <ListItem>
          <Text tag="p" inline>
            In that case you should use the 'noSectionPadding' prop.
          </Text>
        </ListItem>
      </Collapsible>
    </div>
  ))
  .add("Single collapsible (custom header)", () => (
    <div style={{ margin: "1rem", width: "40rem" }}>
      <Collapsible
        id="collapsible-single"
        open
        title="Custom header"
        renderHeader={title => (
          <>
            <Icon icon={translationIcon} />
            <div style={{ flex: "1 0 auto", marginLeft: "1rem" }}>
              <Text tag="span" style="heading" inheritBaseline>
                {title}
              </Text>
            </div>
          </>
        )}
      >
        <Text tag="p">
          You can create a custom header using the renderHeader prop.
        </Text>
      </Collapsible>
    </div>
  ))
  .add("Single collapsible (lazy load)", () => (
    <div style={{ margin: "1rem", width: "40rem" }}>
      <Collapsible id="collapsible-single" title="Single collapsible" lazyLoad>
        <Text tag="p">
          This content won't be rendered until the collapsible is opened. This
          is particularly useful when you have data being queried inside your
          collapsible content.
        </Text>
        <Text tag="p">
          This has a necessary side effect of removing the height animation on
          open and close.
        </Text>
      </Collapsible>
    </div>
  ))
  .add("Collapsible group", () => (
    <div style={{ margin: "1rem", width: "40rem" }}>
      <CollapsibleGroup>
        <Collapsible id="collapsible-separate-1" open title="First panel">
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-2" title="Second panel">
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-3" title="Third panel">
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
      </CollapsibleGroup>
    </div>
  ))
  .add("Collapsible group (separated)", () => (
    <div style={{ margin: "1rem", width: "40rem" }}>
      <CollapsibleGroup separated>
        <Collapsible id="collapsible-separate-1" open title="First panel">
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-2" title="Second panel">
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-3" title="Third panel">
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
      </CollapsibleGroup>
    </div>
  ))
  .add("Collapsible group (sticky headers)", () => (
    <div style={{ margin: "4rem", width: "40rem" }}>
      <CollapsibleGroup separated sticky={{ top: "0" }}>
        <Collapsible id="collapsible-separate-1" title="First panel" open>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-2" title="Second panel" open>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-3" title="Third panel" open>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-4" title="Forth panel" open>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
        <Collapsible id="collapsible-separate-5" title="Fifth panel" open>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
          <Text tag="p">{lipsum}</Text>
        </Collapsible>
      </CollapsibleGroup>
    </div>
  ))
  .add("Collapsible group (callback on open/close)", () => {
    return (
      <div style={{ margin: "1rem", width: "40rem" }}>
        <CollapsibleGroup onToggle={action("Collapsible toggled")}>
          <Collapsible id="collapsible-separate-1" open title="First panel">
            <Text tag="p">{lipsum}</Text>
          </Collapsible>
          <Collapsible id="collapsible-separate-2" title="Second panel">
            <Text tag="p">{lipsum}</Text>
          </Collapsible>
          <Collapsible id="collapsible-separate-3" title="Third panel">
            <Text tag="p">{lipsum}</Text>
          </Collapsible>
        </CollapsibleGroup>
      </div>
    )
  })
