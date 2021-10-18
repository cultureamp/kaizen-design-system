import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import React, { useCallback, useRef, useState } from "react"
import { withDesign } from "storybook-addon-designs"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { Button, CustomButtonProps, ButtonRef } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

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
        component: 'import { Button } from "@kaizen/draft-button";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

const clickAction = () => alert("This shouldn't fire when button is working")

export const DefaultKaizenSiteDemo = args => <Button {...args} />
DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13861%3A65143"
    ),
  },
}

export const DefaultDisabled = args => (
  <Button label="Label" disabled={true} {...args} />
)
DefaultDisabled.story = {
  name: "Default, Disabled",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A99"
    ),
  },
}

export const DefaultWorking = () => {
  const [working, setWorking] = useState(false)
  return (
    <>
      <Button
        label="Click here to test"
        onClick={() => setWorking(!working)}
        primary
      />
      <div style={{ marginTop: "10px" }}>
        <Button
          label="Label"
          onClick={clickAction}
          working={working}
          workingLabel="Submitting"
          workingLabelHidden
        />
      </div>
    </>
  )
}
DefaultWorking.story = {
  name: "Default, Working",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A150"
    ),
  },
}

export const DefaultWorkingWithWorkingLabelVisible = () => (
  <Button
    label="Label"
    onClick={clickAction}
    working
    workingLabel="Submitting"
  />
)
DefaultWorkingWithWorkingLabelVisible.story = {
  name: "Default, Working with working label visible",
  parameters: {},
}

export const DefaultWorkingOnEnd = () => (
  <Button
    label="Label"
    onClick={clickAction}
    working
    workingLabel="Submitting"
    iconPosition="end" // Loading spinner sits in same spot as icon
  />
)
DefaultWorkingOnEnd.story = {
  name: "Default, Working with working label and spinner on right side",
  parameters: {},
}

export const Primary = args => <Button label="Label" primary={true} {...args} />
Primary.story = {
  name: "Primary",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13861%3A65609"
    ),
  },
}

export const PrimaryDisabled = args => (
  <Button label="Label" primary={true} disabled={true} {...args} />
)
PrimaryDisabled.story = {
  name: "Primary, Disabled",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A252"
    ),
  },
}

export const Destructive = args => (
  <Button label="Label" destructive={true} {...args} />
)
Destructive.story = {
  name: "Destructive",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A715",
    },
  },
}

export const SecondaryDestructive = args => (
  <Button label="Label" destructive={true} secondary={true} {...args} />
)
SecondaryDestructive.story = {
  name: "Secondary, Destructive",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1482",
    },
  },
}

export const SecondaryDestructiveIcon = args => (
  <Button
    label="Label"
    icon={trashIcon}
    destructive={true}
    secondary={true}
    {...args}
  />
)
SecondaryDestructiveIcon.story = {
  name: "Secondary, Destructive + Icon",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1542",
    },
  },
}

export const SecondaryDestructiveDisabled = args => (
  <Button
    label="Label"
    icon={trashIcon}
    destructive={true}
    secondary={true}
    disabled={true}
    {...args}
  />
)
SecondaryDestructiveDisabled.story = {
  name: "Secondary, Destructive + Icon, Disabled",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1554",
    },
  },
}

export const SecondaryDestructiveWorking = args => (
  <Button
    label="Label"
    icon={trashIcon}
    destructive={true}
    secondary={true}
    working={true}
    workingLabelHidden
    {...args}
  />
)
SecondaryDestructiveWorking.story = {
  name: "Secondary, Destructive + Icon, Working",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1534",
    },
  },
}

export const SecondaryWithBadge = args => (
  <Button
    label="Label"
    icon={filterIcon}
    secondary={true}
    badge={{ text: "3", variant: "active" }}
    workingLabelHidden
    {...args}
  />
)
SecondaryWithBadge.story = {
  name: "Secondary, w/ Badge",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=17582%3A671",
    },
  },
}

export const SecondaryWithBadgeDisabled = args => (
  <Button
    disabled
    label="Label"
    icon={filterIcon}
    secondary={true}
    badge={{ text: "3", variant: "active" }}
    workingLabelHidden
    {...args}
  />
)
SecondaryWithBadgeDisabled.story = {
  name: "Secondary, w/ Badge, Disabled",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=17582%3A678",
    },
  },
}

export const DestructiveDisabled = args => (
  <Button label="Label" destructive={true} disabled={true} {...args} />
)
DestructiveDisabled.story = {
  name: "Destructive, Disabled",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A707"
    ),
  },
}

export const PrimaryWorking = () => (
  <Button
    label="Label"
    primary={true}
    working
    workingLabel="Submitting"
    workingLabelHidden
  />
)
PrimaryWorking.story = {
  name: "Primary, Working",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A301"
    ),
  },
}

export const Secondary = args => (
  <Button label="Label" secondary={true} {...args} />
)
Secondary.story = {
  name: "Secondary",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1014"
    ),
  },
}

export const DestructiveWorking = () => (
  <Button
    label="Label"
    destructive={true}
    working
    workingLabel="Submitting"
    workingLabelHidden
  />
)
DestructiveWorking.story = {
  name: "Destructive, Working",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A659"
    ),
  },
}

export const SecondaryDisabled = args => (
  <Button label="Label" secondary={true} disabled={true} {...args} />
)
SecondaryDisabled.story = {
  name: "Secondary, Disabled",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1058"
    ),
  },
}

export const SecondaryWorking = () => (
  <Button
    label="Label"
    secondary={true}
    working={true}
    workingLabel="Submitting"
    workingLabelHidden
  />
)
SecondaryWorking.story = {
  name: "Secondary, Working",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1050"
    ),
  },
}

export const SecondaryWIcon = args => (
  <Button label="Configure" icon={configureIcon} secondary={true} {...args} />
)
SecondaryWIcon.story = {
  name: "Secondary w/ Icon",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1074"
    ),
  },
}

export const SecondaryWIconDisabled = args => (
  <Button
    label="Configure"
    icon={configureIcon}
    secondary={true}
    disabled={true}
    {...args}
  />
)
SecondaryWIconDisabled.story = {
  story: "Secondary w/ Icon, Disabled",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1066"
    ),
  },
}

export const IconLabel = args => (
  <Button label="Configure" icon={configureIcon} {...args} />
)
IconLabel.story = {
  name: "Icon + Label",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13861%3A65146"
    ),
  },
}

export const LabelIcon = args => (
  <Button label="Configure" icon={configureIcon} iconPosition="end" {...args} />
)
LabelIcon.story = {
  name: "Label + Icon",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13861%3A65134"
    ),
  },
}

export const FullWidth = args => (
  <Button label="Label" fullWidth={true} {...args} />
)
FullWidth.story = {
  name: "Full Width",
  parameters: {},
}

export const FullWidthIcon = args => (
  <Button label="Label" fullWidth={true} icon={configureIcon} {...args} />
)
FullWidthIcon.story = {
  name: "Full Width + Icon",
  parameters: {},
}

export const Hyperlink = args => (
  <Button label="Label" href="//example.com" {...args} />
)
Hyperlink.story = {
  name: "Hyperlink",
  parameters: {},
}

export const FullWidthWorking = () => (
  <Button
    label="Label"
    fullWidth={true}
    working
    workingLabel="Submitting"
    workingLabelHidden
  />
)
FullWidthWorking.story = {
  name: "Full Width Working",
  parameters: {},
}

export const HyperlinkWOnClick = args => (
  <Button
    label="Label"
    href="//example.com"
    onClick={() => alert("I am an onClick handler")}
    {...args}
  />
)
HyperlinkWOnClick.story = {
  name: "Hyperlink w/ onClick",
  parameters: {},
}

export const ReversedDefault = args => (
  <Button label="Label" reversed={true} {...args} />
)
ReversedDefault.story = {
  name: "Reversed, Default",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17179"
    ),
  },
}

export const ReversedDefaultDisabled = args => (
  <Button label="Label" reversed={true} disabled={true} {...args} />
)
ReversedDefaultDisabled.story = {
  name: "Reversed, Default, Disabled",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17183"
    ),
  },
}

export const ReversedDefaultWorking = () => (
  <Button
    label="Label"
    reversed={true}
    working={true}
    workingLabel="Submitting"
    workingLabelHidden
  />
)
ReversedDefaultWorking.story = {
  name: "Reversed, Default, Working",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17187"
    ),
  },
}

export const ReversedPrimary = args => (
  <Button
    label="Label"
    primary={true}
    disabled={false}
    reversed={true}
    {...args}
  />
)
ReversedPrimary.story = {
  name: "Reversed, Primary",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17191"
    ),
  },
}

export const ReversedPrimaryDisabled = args => (
  <Button
    label="Label"
    primary={true}
    reversed={true}
    disabled={true}
    {...args}
  />
)
ReversedPrimaryDisabled.story = {
  name: "Reversed, Primary, Disabled",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17203"
    ),
  },
}

export const ReversedPrimaryWorking = () => (
  <Button
    label="Label"
    primary={true}
    reversed={true}
    working={true}
    workingLabel="Submitting"
    workingLabelHidden
  />
)
ReversedPrimaryWorking.story = {
  name: "Reversed, Primary, Working",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17215"
    ),
  },
}

export const ReversedSecondary = args => (
  <Button label="Label" secondary={true} reversed={true} {...args} />
)
ReversedSecondary.story = {
  name: "Reversed, Secondary",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17195"
    ),
  },
}

export const ReversedSecondaryDisabled = args => (
  <Button
    label="Label"
    secondary={true}
    reversed={true}
    disabled={true}
    {...args}
  />
)
ReversedSecondaryDisabled.story = {
  name: "Reversed, Secondary, Disabled",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17195"
    ),
  },
}

export const ReversedSecondaryWorking = () => (
  <Button
    label="Label"
    secondary={true}
    reversed={true}
    working={true}
    workingLabel="Submitting"
    workingLabelHidden
  />
)
ReversedSecondaryWorking.story = {
  name: "Reversed, Secondary, Working",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17219"
    ),
  },
}

export const ReversedSecondaryWIcon = args => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    icon={configureIcon}
    {...args}
  />
)
ReversedSecondaryWIcon.story = {
  name: "Reversed, Secondary w/ Icon",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A16959"
    ),
  },
}

export const ReversedSecondaryWIconDisabled = args => (
  <Button
    label="Configure"
    secondary={true}
    reversed={true}
    disabled={true}
    icon={configureIcon}
    {...args}
  />
)
ReversedSecondaryWIconDisabled.story = {
  name: "Reversed, Secondary w/ Icon, Disabled",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A16975"
    ),
  },
}

export const ReversedSecondaryWithBadge = args => (
  <Button
    reversed
    label="Label"
    icon={filterIcon}
    secondary={true}
    badge={{ text: "3", reversed: true, variant: "default" }}
    workingLabelHidden
    {...args}
  />
)
ReversedSecondaryWithBadge.story = {
  name: "Reversed, Secondary w/ Badge",
  parameters: {
    ...reversedBg,
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=17582%3A671",
    },
  },
}

export const ReversedDestructive = args => (
  <Button label="Label" destructive={true} reversed={true} />
)
ReversedDestructive.story = {
  name: "Reversed, Destructive",
  parameters: {
    ...reversedBg,
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/%F0%9F%9A%ABUI-Kit%3A-Zen?node-id=13555%3A0",
    },
  },
}

export const ReversedDestructiveDisabled = args => (
  <Button
    label="Label"
    destructive={true}
    reversed={true}
    disabled={true}
    {...args}
  />
)
ReversedDestructiveDisabled.story = {
  name: "Reversed, Destructive, Disabled",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17203"
    ),
  },
}

export const ReversedDestructiveWorking = () => (
  <Button
    label="Label"
    destructive={true}
    reversed={true}
    working={true}
    workingLabel="Submitting"
    workingLabelHidden
  />
)
ReversedDestructiveWorking.story = {
  name: "Reversed, Destructive, Working",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A17215"
    ),
  },
}

export const ReversedDestructiveIcon = args => (
  <Button label="Label" icon={trashIcon} destructive={true} reversed={true} />
)
ReversedDestructiveIcon.story = {
  name: "Reversed, Destructive + Icon",
  parameters: {
    ...reversedBg,
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13865%3A1542",
    },
  },
}

export const TypeSubmit = args => (
  <Button label="Label" type="submit" {...args} />
)
TypeSubmit.story = {
  name: "Type, Submit",
  parameters: {},
}

export const TypeReset = args => <Button label="Label" type="reset" {...args} />
TypeReset.story = {
  name: "Type, Reset",
  parameters: {},
}

export const OverflowingTextIconLabelTestCase = args => (
  <div style={{ width: 120 }}>
    <Button
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      data-automation-id="demo-button"
      {...args}
    />
  </div>
)
OverflowingTextIconLabelTestCase.story = {
  name: "Overflowing text, Icon + Label (test case)",
  parameters: {},
}

export const OverflowingTextFormTestCase = args => (
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
OverflowingTextFormTestCase.story = {
  name: "Overflowing text, Form (test case)",
  parameters: {},
}

export const FocusExample = args => {
  const ref = useRef<ButtonRef>()
  const handleClick = useCallback(() => {
    ref.current?.focus()
  }, [])
  return (
    <>
      <Button label="Label" ref={ref} {...args} />
      <hr {...args} />
      <p>
        This story is to test the ability to imperatively call the `focus`
        function.
      </p>
      <button onClick={handleClick}>
        Click here to focus the button above
      </button>
    </>
  )
}
FocusExample.story = {
  name: "Focus example",
  parameters: {},
}

export const MultipleButtons = args => (
  <div>
    <Button label="Save" primary data-automation-id="demo-button-1" {...args} />
    <Button label="Exit" data-automation-id="demo-button-2" {...args} />
  </div>
)
MultipleButtons.story = {
  name: "Multiple Buttons",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14504%3A74951"
    ),
  },
}

export const CustomComponent = args => {
  const CustomLink = (buttonProps: CustomButtonProps) => (
    <a href={buttonProps.href} {...buttonProps} {...args} />
  )
  // ^ In actual usage - this would be a react-router <Link> component or similar

  return (
    <Button label="Custom component button" component={CustomLink} {...args} />
  )
}
CustomComponent.story = {
  name: "Custom Component",
  parameters: {},
}
