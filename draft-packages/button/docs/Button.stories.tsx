import { Heading } from "@kaizen/component-library"
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
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

const clickAction = () => alert("This shouldn't fire when button is working")

export const LightButtons = () => (
  <>
    <Heading variant="heading-3" tag="h1">
      Default
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Base
        </Heading>
        <br />
        <IconLeft icon={addIcon} />
        <br />
        <IconRight />
        <br />
        <Button label="Label" />
        <br />
        <IconButton icon={meatballsIcon} label="Label" />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <IconLeft disabled={true} icon={addIcon} />
        <br />
        <IconRight disabled={true} />
        <br />
        <Button label="Label" disabled={true} />
        <br />
        <IconButton icon={meatballsIcon} label="Label" disabled={true} />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Working
        </Heading>
        <br />
        <DefaultWorkingWithWorkingLabelVisible />
        <br />
        <DefaultWorkingOnEnd />
        <br />
        <DefaultWorking />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1">
      Primary
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Base
        </Heading>
        <br />
        <IconLeft primary={true} icon={addIcon} />
        <br />
        <IconRight primary={true} />
        <br />
        <Button label="Label" primary={true} />
        <br />
        <IconButton icon={configureIcon} label="Label" primary={true} />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <IconLeft disabled={true} primary={true} icon={addIcon} />
        <br />
        <IconRight disabled={true} primary={true} />
        <br />
        <Button label="Label" disabled={true} primary={true} />
        <br />
        <IconButton
          icon={configureIcon}
          label="Label"
          primary={true}
          disabled={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Working
        </Heading>
        <br />
        <IconLeftWorking disabled={true} primary={true} />
        <br />
        <IconRightWorking disabled={true} primary={true} />
        <br />
        <Button
          label="Label"
          disabled={true}
          primary={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1">
      Destructive
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Base
        </Heading>
        <br />
        <IconLeft destructive={true} icon={trashIcon} />
        <br />
        <IconRight destructive={true} />
        <br />
        <Button label="Label" destructive={true} icon={trashIcon} />
        <br />
        <IconButton label="Label" icon={trashIcon} destructive={true} />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <IconLeft destructive={true} icon={trashIcon} disabled={true} />
        <br />
        <IconRight destructive={true} disabled={true} />
        <br />
        <DestructiveDisabled />
        <br />
        <IconButton
          label="Label"
          icon={trashIcon}
          destructive={true}
          disabled={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Working
        </Heading>
        <br />
        <IconLeftWorking destructive={true} disabled={true} />
        <br />
        <IconRightWorking destructive={true} disabled={true} />
        <br />
        <DestructiveWorking />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1">
      Secondary
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Base
        </Heading>
        <br />
        <IconLeft
          badge={{ text: "3", variant: "active" }}
          icon={meatballsIcon}
          secondary={true}
        />
        <br />
        <IconLeft secondary={true} icon={addIcon} />
        <br />
        <IconRight iconPosition="end" secondary={true} icon={chevronDown} />
        <br />
        <Secondary />
        <br />
        <IconButton label="Label" icon={meatballsIcon} secondary={true} />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <IconLeft
          secondary={true}
          disabled={true}
          icon={filterIcon}
          badge={{ text: "3", variant: "active" }}
        />
        <br />
        <IconLeft secondary={true} disabled={true} icon={addIcon} />
        <br />
        <IconRight disabled={true} secondary={true} icon={chevronDown} />
        <br />
        <Secondary disabled={true} />
        <br />
        <IconButton
          label="Label"
          icon={meatballsIcon}
          disabled={true}
          secondary={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Working
        </Heading>
        <br />
        <IconLeftWorking
          disabled={true}
          badge={{ text: "3", variant: "active" }}
          secondary={true}
        />
        <br />
        <IconLeftWorking disabled={true} secondary={true} />
        <br />
        <IconRightWorking disabled={true} secondary={true} />
        <br />
        <Secondary
          disabled={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1">
      Secondary Destructive
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Base
        </Heading>
        <br />
        <SecondaryDestructiveIcon />
        <br />
        <Button label="Label" destructive={true} secondary={true} />
        <br />
        <IconButton
          label="Label"
          icon={trashIcon}
          secondary={true}
          destructive={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <SecondaryDestructiveIcon disabled={true} />
        <br />
        <Button
          label="Label"
          destructive={true}
          disabled={true}
          secondary={true}
        />
        <br />
        <IconButton
          label="Label"
          icon={trashIcon}
          disabled={true}
          secondary={true}
          destructive={true}
        />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Working
        </Heading>
        <br />
        <IconLeftWorking destructive={true} disabled={true} secondary={true} />
        <br />
        <Button
          label="Label"
          destructive={true}
          disabled={true}
          secondary={true}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </div>
    <br />
    <Heading variant="heading-3" tag="h1">
      Miscellaneous
    </Heading>
    <br />
    <Heading variant="heading-5" tag="h2">
      Full Width
    </Heading>
    <FullWidth />
    <FullWidthIcon />
    <FullWidthWorking />
    <Heading variant="heading-5" tag="h2">
      Hyperlink
    </Heading>
    <br />
    <Hyperlink />
    <Heading variant="heading-5" tag="h2">
      Hyperlink with onClick
    </Heading>
    <br />
    <HyperlinkWOnClick />
    <Heading variant="heading-5" tag="h2">
      Submit
    </Heading>
    <br />
    <TypeSubmit />
    <Heading variant="heading-5" tag="h2">
      Reset
    </Heading>
    <br />
    <TypeReset />
    <Heading variant="heading-5" tag="h2">
      Overflowing Label Text
    </Heading>
    <br />
    <OverflowingTextIconLabelTestCase />
    <Heading variant="heading-5" tag="h2">
      Overflowing Form Text
    </Heading>
    <br />
    <OverflowingTextFormTestCase />
    <Heading variant="heading-5" tag="h2">
      Multiple Buttons
    </Heading>
    <br />
    <MultipleButtons />
    <Heading variant="heading-5" tag="h2">
      Custom Component
    </Heading>
    <br />
    <CustomComponent />
    <Heading variant="heading-5" tag="h2">
      Hyperlink Icon
    </Heading>
    <br />
    <HyperlinkIcon />
    <Heading variant="heading-5" tag="h2">
      Hyperlink with onClick Icon
    </Heading>
    <br />
    <HyperlinkIconWOnClick />
    <Heading variant="heading-5" tag="h2">
      Icon Form (Discouraged)
    </Heading>
    <br />
    <IconFormDiscouraged />
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
        <IconLeftWorking disabled={true} primary={true} reversed={true} />
        <br />
        <IconRightWorking disabled={true} primary={true} reversed={true} />
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
        <Button
          label="Label"
          destructive={true}
          icon={trashIcon}
          reversed={true}
        />
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
        <IconLeftWorking destructive={true} disabled={true} reversed={true} />
        <br />
        <IconRightWorking destructive={true} disabled={true} reversed={true} />
        <br />
        <DestructiveWorking reversed={true} />
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
          disabled={true}
          badge={{ text: "3", variant: "active", reversed: true }}
          secondary={true}
          reversed={true}
        />
        <br />
        <IconLeftWorking disabled={true} secondary={true} reversed={true} />
        <br />
        <IconRightWorking disabled={true} secondary={true} reversed={true} />
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
  name: "Default Butoon (Kaizen Site Demo)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13861%3A65143"
    ),
  },
}

export const DefaultKaizenSiteDemoIcon = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    data-automation-id="demo-button"
  />
)

DefaultKaizenSiteDemoIcon.storyName = "Default Icon (Kaizen Site Demo)"

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
    iconPosition="end"
    {...args}
    working
    workingLabel="Submitting"
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
          working={working}
          workingLabel="Submitting"
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
    working
    workingLabel="Submitting"
    {...args}
  />
)

const DefaultWorkingOnEnd = args => (
  <Button
    label="Label"
    onClick={clickAction}
    working
    workingLabel="Submitting"
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
