import React from "react"
import { Story } from "@storybook/react"
import { Heading } from "@kaizen/component-library"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import chevronLeft from "@kaizen/component-library/icons/chevron-left.icon.svg"

import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton, ButtonProps } from ".."
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/Button`,
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    chromatic: { disable: false },
    docs: {
      description: {
        component:
          'import { Button, IconButton } from "@kaizen/button". This Button supersedes "@kaizen/draft-button".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = args => <Button {...args} />
DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Demo)",
}

export const DefaultKaizenDemoIcon = args => (
  <IconButton {...args} icon={trashIcon} />
)
DefaultKaizenDemoIcon.storyName = "Default Icon (Kaizen Demo)"
DefaultKaizenDemoIcon.parameters = { chromatic: { disable: false } }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const ICON_LEFT_PROPS: ButtonProps = {
    label: "Label",
    icon: addIcon,
    reversed: isReversed,
  }

  const ICON_RIGHT_PROPS: ButtonProps = {
    label: "Label",
    icon: arrowRight,
    iconPosition: "end",
    reversed: isReversed,
  }

  const NO_ICON_PROPS: ButtonProps = {
    label: "Label",
    reversed: isReversed,
  }

  const ICON_ONLY_PROPS: ButtonProps = {
    label: "Label",
    icon: chevronLeft,
    reversed: isReversed,
  }

  const WORKING_PROPS: ButtonProps = {
    label: "Label",
    working: true,
    workingLabel: "Submitting",
    workingLabelHidden: true,
  }

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Default
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
        <StoryWrapper.Row rowTitle="Icon Left">
          <Button {...ICON_LEFT_PROPS} />
          <Button {...ICON_LEFT_PROPS} disabled />
          <Button {...ICON_LEFT_PROPS} {...WORKING_PROPS} />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Right">
          <Button {...ICON_RIGHT_PROPS} />
          <Button {...ICON_RIGHT_PROPS} disabled />
          <Button {...ICON_RIGHT_PROPS} {...WORKING_PROPS} />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="No Icon">
          <Button {...NO_ICON_PROPS} />
          <Button {...NO_ICON_PROPS} disabled />
          <Button {...NO_ICON_PROPS} {...WORKING_PROPS} />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Only">
          <IconButton {...ICON_ONLY_PROPS} icon={meatballsIcon} />
          <IconButton {...ICON_ONLY_PROPS} icon={meatballsIcon} disabled />
          <IconButton {...ICON_ONLY_PROPS} {...WORKING_PROPS} />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Primary
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
        <StoryWrapper.Row rowTitle="Icon Left">
          <Button {...ICON_LEFT_PROPS} primary />
          <Button {...ICON_LEFT_PROPS} disabled primary />
          <Button {...ICON_LEFT_PROPS} {...WORKING_PROPS} primary />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Right">
          <Button {...ICON_RIGHT_PROPS} primary />
          <Button {...ICON_RIGHT_PROPS} disabled primary />
          <Button {...ICON_RIGHT_PROPS} {...WORKING_PROPS} primary />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="No Icon">
          <Button {...NO_ICON_PROPS} primary />
          <Button {...NO_ICON_PROPS} disabled primary />
          <Button {...NO_ICON_PROPS} {...WORKING_PROPS} primary />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Only">
          <IconButton {...ICON_ONLY_PROPS} icon={meatballsIcon} primary />
          <IconButton
            {...ICON_ONLY_PROPS}
            icon={meatballsIcon}
            disabled
            primary
          />
          <IconButton
            {...ICON_ONLY_PROPS}
            icon={meatballsIcon}
            {...WORKING_PROPS}
            primary
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Destructive
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
        <StoryWrapper.Row rowTitle="Icon Left">
          <Button {...ICON_LEFT_PROPS} destructive />
          <Button {...ICON_LEFT_PROPS} disabled destructive />
          <Button {...ICON_LEFT_PROPS} {...WORKING_PROPS} destructive />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="No Icon">
          <Button {...NO_ICON_PROPS} destructive />
          <Button {...NO_ICON_PROPS} disabled destructive />
          <Button {...NO_ICON_PROPS} {...WORKING_PROPS} destructive />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Only">
          <IconButton {...ICON_ONLY_PROPS} destructive />
          <IconButton {...ICON_ONLY_PROPS} disabled destructive />
          <IconButton {...ICON_ONLY_PROPS} {...WORKING_PROPS} destructive />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Secondary
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
        <StoryWrapper.Row rowTitle="Badge">
          <Button
            {...ICON_LEFT_PROPS}
            icon={filterIcon}
            badge={{ text: "3", variant: "active" }}
            secondary
          />
          <Button
            {...ICON_LEFT_PROPS}
            icon={filterIcon}
            disabled
            secondary
            badge={{ text: "3", variant: "active" }}
          />
          <Button
            {...ICON_LEFT_PROPS}
            icon={filterIcon}
            {...WORKING_PROPS}
            secondary
            badge={{ text: "3", variant: "active" }}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Left">
          <Button {...ICON_LEFT_PROPS} secondary />
          <Button {...ICON_LEFT_PROPS} disabled secondary />
          <Button {...ICON_LEFT_PROPS} {...WORKING_PROPS} secondary />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Right">
          <Button {...ICON_RIGHT_PROPS} icon={chevronDown} secondary />
          <Button {...ICON_RIGHT_PROPS} icon={chevronDown} disabled secondary />
          <Button
            {...ICON_RIGHT_PROPS}
            icon={chevronDown}
            {...WORKING_PROPS}
            secondary
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="No Icon">
          <Button {...NO_ICON_PROPS} secondary />
          <Button {...NO_ICON_PROPS} disabled secondary />
          <Button {...NO_ICON_PROPS} {...WORKING_PROPS} secondary />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Only">
          <IconButton {...ICON_ONLY_PROPS} icon={filterIcon} secondary />
          <IconButton
            {...ICON_ONLY_PROPS}
            icon={filterIcon}
            disabled
            secondary
          />
          <IconButton
            {...ICON_ONLY_PROPS}
            icon={filterIcon}
            {...WORKING_PROPS}
            secondary
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Secondary Destructive
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
        <StoryWrapper.Row rowTitle="Icon Left">
          <Button {...ICON_LEFT_PROPS} icon={trashIcon} secondary destructive />
          <Button
            {...ICON_LEFT_PROPS}
            icon={trashIcon}
            disabled
            secondary
            destructive
          />
          <Button
            {...ICON_LEFT_PROPS}
            icon={trashIcon}
            {...WORKING_PROPS}
            secondary
            destructive
          />
        </StoryWrapper.Row>

        <StoryWrapper.Row rowTitle="No Icon">
          <Button {...NO_ICON_PROPS} secondary destructive />
          <Button {...NO_ICON_PROPS} disabled secondary destructive />
          <Button {...NO_ICON_PROPS} {...WORKING_PROPS} secondary destructive />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Icon Only">
          <IconButton {...ICON_ONLY_PROPS} secondary destructive />
          <IconButton {...ICON_ONLY_PROPS} disabled secondary destructive />
          <IconButton
            {...ICON_ONLY_PROPS}
            {...WORKING_PROPS}
            secondary
            destructive
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
