import { Heading, Box } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import React, { useState } from "react"
import { withDesign } from "storybook-addon-designs"
import { Button, CustomButtonProps, IconButton } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  StorybookGridWrapper,
  StorybookColWrapper,
} from "../../../storybook/components/storybook-wrapper"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Button`,
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Button, IconButton } from "@kaizen/draft-button";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

const clickAction = () => alert("This shouldn't fire when button is working")

export const LightButtons = () => (
  <>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1">
        Default
      </Heading>
      <StorybookGridWrapper numCols="5">
        <StorybookColWrapper numRows="4" isSideHeader>
          <Heading variant="heading-5" tag="h2">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" numRows="4">
          <IconLeft icon={addIcon} />
          <IconRight />
          <Button label="Label" />
          <IconButton icon={meatballsIcon} label="Label" />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" numRows="4">
          <IconLeft disabled={true} icon={addIcon} />
          <IconRight disabled={true} />
          <Button label="Label" disabled={true} />
          <IconButton icon={meatballsIcon} label="Label" disabled={true} />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" numRows="4">
          <DefaultWorkingWithWorkingLabelVisible />
          <DefaultWorkingOnEnd />
          <DefaultWorkingOnEnd />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1">
        Primary
      </Heading>
      <StorybookGridWrapper numCols="5">
        <StorybookColWrapper numRows="4" isSideHeader>
          <Heading variant="heading-5" tag="h2">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" numRows="4">
          <IconLeft icon={addIcon} primary />
          <IconRight primary />
          <Button label="Label" primary />
          <IconButton icon={meatballsIcon} label="Label" primary />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" numRows="4">
          <IconLeft disabled={true} icon={addIcon} primary />
          <IconRight disabled={true} primary />
          <Button label="Label" disabled={true} primary />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            primary
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" numRows="4">
          <DefaultWorkingWithWorkingLabelVisible primary />
          <DefaultWorkingOnEnd primary />
          <DefaultWorkingOnEnd primary />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            primary
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1">
        Destructive
      </Heading>
      <StorybookGridWrapper numCols="5">
        <StorybookColWrapper numRows="4" isSideHeader>
          <Heading variant="heading-5" tag="h2">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" numRows="4">
          <IconLeft icon={addIcon} destructive />
          <IconRight destructive />
          <Button label="Label" destructive />
          <IconButton icon={meatballsIcon} label="Label" destructive />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" numRows="4">
          <IconLeft disabled={true} icon={addIcon} destructive />
          <IconRight disabled={true} destructive />
          <Button label="Label" disabled={true} destructive />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            destructive
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" numRows="4">
          <DefaultWorkingWithWorkingLabelVisible destructive />
          <DefaultWorkingOnEnd destructive />
          <DefaultWorkingOnEnd destructive />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            destructive
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1">
        Secondary
      </Heading>
      <StorybookGridWrapper numCols="5">
        <StorybookColWrapper numRows="4" isSideHeader>
          <Heading variant="heading-5" tag="h2">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" numRows="4">
          <IconLeft icon={addIcon} secondary />
          <IconRight secondary />
          <Button label="Label" secondary />
          <IconButton icon={meatballsIcon} label="Label" secondary />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" numRows="4">
          <IconLeft disabled={true} icon={addIcon} secondary />
          <IconRight disabled={true} secondary />
          <Button label="Label" disabled={true} secondary />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            secondary
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" numRows="4">
          <DefaultWorkingWithWorkingLabelVisible secondary />
          <DefaultWorkingOnEnd secondary />
          <DefaultWorkingOnEnd secondary />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            secondary
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1">
        Secondary Destructive
      </Heading>
      <StorybookGridWrapper numCols="5">
        <StorybookColWrapper numRows="4" isSideHeader>
          <Heading variant="heading-5" tag="h2">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" numRows="4">
          <IconLeft icon={addIcon} secondary destructive />
          <IconRight secondary destructive />
          <Button label="Label" secondary destructive />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            secondary
            destructive
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" numRows="4">
          <IconLeft disabled={true} icon={addIcon} secondary destructive />
          <IconRight disabled={true} secondary destructive />
          <Button label="Label" disabled={true} secondary destructive />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            secondary
            destructive
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" numRows="4">
          <DefaultWorkingWithWorkingLabelVisible secondary destructive />
          <DefaultWorkingOnEnd secondary destructive />
          <DefaultWorkingOnEnd secondary destructive />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            secondary
            destructive
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
  </>
)

export const ReversedButtons = () => (
  <>
    <Heading variant="heading-3" tag="h1" color="white">
      Default
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Base
        </Heading>
        <br />
        <IconLeft reversed={true} icon={addIcon} />
        <br />
        <IconRight reversed={true} />
        <br />
        <Button label="Label" reversed={true} />
        <br />
        <IconButton icon={meatballsIcon} label="Label" reversed={true} />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Disabled
        </Heading>
        <br />
        <IconLeft disabled={true} reversed={true} icon={addIcon} />
        <br />
        <IconRight disabled={true} reversed={true} />
        <br />
        <Button label="Label" disabled={true} reversed={true} />
        <br />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          disabled={true}
          reversed={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Working
        </Heading>
        <br />
        <DefaultWorkingWithWorkingLabelVisible reversed={true} />
        <br />
        <DefaultWorkingOnEnd reversed={true} />
        <br />
        <DefaultWorking reversed={true} />
        <br />
        <IconButton
          label="Label"
          reversed={true}
          disabled={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1" color="white">
      Primary
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Base
        </Heading>
        <br />
        <IconLeft primary={true} reversed={true} />
        <br />
        <IconRight primary={true} reversed={true} />
        <br />
        <Button label="Label" primary={true} reversed={true} />
        <br />
        <IconButton
          icon={addIcon}
          label="Label"
          primary={true}
          reversed={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Disabled
        </Heading>
        <br />
        <IconLeft disabled={true} primary={true} reversed={true} />
        <br />
        <IconRight disabled={true} primary={true} reversed={true} />
        <br />
        <Button label="Label" disabled={true} primary={true} reversed={true} />
        <br />
        <IconButton
          icon={addIcon}
          label="Label"
          primary={true}
          disabled={true}
          reversed={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Working
        </Heading>
        <br />
        <IconLeftWorking primary={true} reversed={true} />
        <br />
        <IconRightWorking primary={true} reversed={true} />
        <br />
        <Button
          label="Label"
          disabled={true}
          primary={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed={true}
        />
        <br />
        <IconButton
          label="Label"
          reversed={true}
          primary={true}
          disabled={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1" color="white">
      Destructive
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Base
        </Heading>
        <br />
        <IconLeft destructive={true} icon={trashIcon} reversed={true} />
        <br />
        <IconRight destructive={true} reversed={true} />
        <br />
        <Button label="Label" destructive={true} reversed={true} />
        <br />
        <IconButton
          label="Label"
          icon={trashIcon}
          reversed={true}
          destructive={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Disabled
        </Heading>
        <br />
        <IconLeft
          destructive={true}
          icon={trashIcon}
          disabled={true}
          reversed={true}
        />
        <br />
        <IconRight destructive={true} disabled={true} reversed={true} />
        <br />
        <DestructiveDisabled reversed={true} />
        <br />
        <IconButton
          label="Label"
          icon={trashIcon}
          destructive={true}
          disabled={true}
          reversed={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Working
        </Heading>
        <br />
        <IconLeftWorking destructive={true} reversed={true} />
        <br />
        <IconRightWorking destructive={true} reversed={true} />
        <br />
        <DestructiveWorking reversed={true} />
        <br />
        <IconButton
          label="Label"
          destructive={true}
          primary={true}
          disabled={true}
          reversed={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1" color="white">
      Secondary
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Base
        </Heading>
        <br />
        <IconLeft
          badge={{ text: "3", reversed: true }}
          secondary={true}
          reversed={true}
          icon={filterIcon}
        />
        <br />
        <IconLeft secondary={true} reversed={true} icon={addIcon} />
        <br />
        <IconRight
          iconPosition="end"
          secondary={true}
          reversed={true}
          icon={chevronDown}
        />
        <br />
        <Secondary reversed={true} />
        <br />
        <IconButton
          label="Label"
          icon={meatballsIcon}
          secondary={true}
          reversed={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Disabled
        </Heading>
        <br />
        <IconLeft
          secondary={true}
          disabled={true}
          badge={{ text: "3", reversed: true }}
          reversed={true}
          icon={filterIcon}
        />
        <br />
        <IconLeft
          secondary={true}
          disabled={true}
          reversed={true}
          icon={addIcon}
        />
        <br />
        <IconRight
          disabled={true}
          icon={chevronDown}
          secondary={true}
          reversed={true}
        />
        <br />
        <Secondary disabled={true} reversed={true} />
        <br />
        <IconButton
          label="Label"
          icon={meatballsIcon}
          disabled={true}
          secondary={true}
          reversed={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Working
        </Heading>
        <br />
        <IconLeftWorking
          badge={{ text: "3", variant: "active", reversed: true }}
          secondary={true}
          reversed={true}
        />
        <br />
        <IconLeftWorking secondary={true} reversed={true} />
        <br />
        <IconRightWorking secondary={true} reversed={true} />
        <br />
        <Secondary
          disabled={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed={true}
        />
        <br />
        <IconRightWorking
          disabled={true}
          secondary={true}
          reversed={true}
          working
        />
      </div>
    </div>
    <br />
    <br />
    <Heading variant="heading-3" tag="h1" color="white">
      Miscellaneous
    </Heading>
    <br />
    <Heading variant="heading-5" tag="h2" color="white">
      Full Width
    </Heading>
    <FullWidth reversed={true} />
    <FullWidthIcon reversed={true} />
    <FullWidthWorking reversed={true} />
    <br />
    <Heading variant="heading-5" tag="h2" color="white">
      Hyperlink
    </Heading>
    <br />
    <Hyperlink reversed={true} />
    <br />
    <Heading variant="heading-5" tag="h2" color="white">
      Hyperlink with onClick
    </Heading>
    <br />
    <HyperlinkWOnClick reversed={true} />
    <br />
    <Heading variant="heading-5" tag="h2" color="white">
      Submit
    </Heading>
    <br />
    <TypeSubmit reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Reset
    </Heading>
    <br />
    <TypeReset reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Overflowing Label Text
    </Heading>
    <br />
    <OverflowingTextIconLabelTestCase reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Overflowing Form Text
    </Heading>
    <br />
    <OverflowingTextFormTestCase reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Multiple Buttons
    </Heading>
    <br />
    <MultipleButtons reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Custom Component
    </Heading>
    <br />
    <CustomComponent reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Hyperlink Icon
    </Heading>
    <br />
    <HyperlinkIcon reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Hyperlink with onClick Icon
    </Heading>
    <br />
    <HyperlinkIconWOnClick reversed={true} />
    <Heading variant="heading-5" tag="h2" color="white">
      Icon Form (Discouraged)
    </Heading>
    <br />
    <IconFormDiscouraged reversed={true} />
  </>
)
export const DefaultKaizenSiteDemo = args => <Button {...args} />
DefaultKaizenSiteDemo.story = {
  name: "Default Button (Kaizen Site Demo)",
}

ReversedButtons.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

// Default Button
const IconLeft = args => <Button label="Label" icon={configureIcon} {...args} />

const IconRight = args => (
  <Button label="Label" icon={arrowRight} iconPosition="end" {...args} />
)
const IconLeftWorking = args => (
  <Button
    label="Label"
    icon={configureIcon}
    disabled={true}
    {...args}
    working
    workingLabel="Submitting"
    workingLabelHidden
  />
)

const IconRightWorking = args => (
  <Button
    label="Label"
    icon={configureIcon}
    disabled={true}
    iconPosition="end"
    {...args}
    working
    workingLabelHidden
  />
)

const DefaultWorking = args => {
  const [working, setWorking] = useState(false)
  return (
    <>
      <Button
        label="Click here to test"
        onClick={() => setWorking(!working)}
        {...args}
        primary
      />
      <div style={{ marginTop: "10px" }}>
        <Button
          label="Label"
          onClick={clickAction}
          disabled={true}
          working={working}
          workingLabelHidden
          {...args}
        />
      </div>
    </>
  )
}

const DefaultWorkingWithWorkingLabelVisible = args => (
  <Button
    label="Label"
    onClick={clickAction}
    disabled={true}
    working
    {...args}
  />
)

const DefaultWorkingOnEnd = args => (
  <Button
    label="Label"
    onClick={clickAction}
    disabled={true}
    working
    iconPosition="end" // Loading spinner sits in same spot as icon
    {...args}
  />
)
const SecondaryDestructiveIcon = args => (
  <Button
    label="Label"
    icon={trashIcon}
    destructive={true}
    secondary={true}
    {...args}
  />
)

const DestructiveDisabled = args => (
  <Button label="Label" destructive={true} disabled={true} {...args} />
)

const Secondary = args => <Button label="Label" secondary={true} {...args} />

const DestructiveWorking = args => (
  <Button
    label="Label"
    destructive={true}
    disabled={true}
    working
    workingLabel="Submitting"
    workingLabelHidden
    {...args}
  />
)

const FullWidth = args => <Button label="Label" fullWidth={true} {...args} />

const FullWidthIcon = args => (
  <Button label="Label" fullWidth={true} icon={configureIcon} {...args} />
)

const Hyperlink = args => (
  <Button label="Label" href="//example.com" {...args} />
)

const FullWidthWorking = args => (
  <Button
    label="Label"
    fullWidth={true}
    disabled={true}
    working
    workingLabel="Submitting"
    workingLabelHidden
    {...args}
  />
)

const HyperlinkWOnClick = args => (
  <Button
    label="Label"
    href="//example.com"
    onClick={() => alert("I am an onClick handler")}
    {...args}
  />
)

const TypeSubmit = args => <Button label="Submit" type="submit" {...args} />

const TypeReset = args => <Button label="Reset" type="reset" {...args} />

const OverflowingTextIconLabelTestCase = args => (
  <div style={{ width: 120 }}>
    <Button
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
      {...args}
    />
  </div>
)

const OverflowingTextFormTestCase = args => (
  <div style={{ width: 120 }}>
    <Button
      form
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
      {...args}
    />
  </div>
)

const MultipleButtons = args => (
  <div>
    <Button label="Save" primary data-automation-id="demo-button-1" {...args} />
    <Button label="Exit" data-automation-id="demo-button-2" {...args} />
  </div>
)

const CustomComponent = args => {
  const CustomLink = (buttonProps: CustomButtonProps) => (
    <a href={buttonProps.href} {...buttonProps} {...args} />
  )
  // ^ In actual usage - this would be a react-router <Link> component or similar

  return (
    <Button label="Custom component button" component={CustomLink} {...args} />
  )
}
// Icon Button
const HyperlinkIcon = args => (
  <IconButton
    icon={configureIcon}
    label="Label"
    href="//example.com"
    {...args}
  />
)

const HyperlinkIconWOnClick = args => (
  <IconButton
    icon={configureIcon}
    label="Label"
    href="//example.com"
    onClick={() => undefined}
    {...args}
  />
)

const IconFormDiscouraged = args => (
  <IconButton icon={configureIcon} label="Label" form={true} {...args} />
)
