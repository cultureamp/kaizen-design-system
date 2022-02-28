import React from "react"
import { Story } from "@storybook/react"
import { Heading } from "@kaizen/component-library"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
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
        <Button label="Label" icon={addIcon} reversed={isReversed} />
        <Button label="Label" icon={addIcon} disabled reversed={isReversed} />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          disabled
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" reversed={isReversed} />
        <Button label="Label" disabled reversed={isReversed} />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={meatballsIcon} label="Label" reversed={isReversed} />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          disabled
          reversed={isReversed}
        />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed={isReversed}
        />
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
        <Button label="Label" icon={addIcon} primary reversed={isReversed} />
        <Button
          label="Label"
          icon={addIcon}
          disabled
          primary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          primary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          disabled
          primary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" primary reversed={isReversed} />
        <Button label="Label" disabled primary reversed={isReversed} />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton
          icon={meatballsIcon}
          label="Label"
          primary
          reversed={isReversed}
        />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          disabled
          primary
          reversed={isReversed}
        />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed={isReversed}
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
        <Button
          label="Label"
          icon={trashIcon}
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          disabled
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          disabled
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" destructive reversed={isReversed} />
        <Button label="Label" disabled destructive reversed={isReversed} />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton
          icon={trashIcon}
          label="Label"
          destructive
          reversed={isReversed}
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          destructive
          reversed={isReversed}
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed={isReversed}
        />
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
          label="Label"
          icon={filterIcon}
          badge={{ text: "3", variant: "active" }}
          secondary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={filterIcon}
          disabled
          secondary
          badge={{ text: "3", variant: "active" }}
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={filterIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          badge={{ text: "3", variant: "active" }}
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} secondary reversed={isReversed} />
        <Button
          label="Label"
          icon={addIcon}
          disabled
          secondary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          secondary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          disabled
          secondary
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" secondary reversed={isReversed} />
        <Button label="Label" disabled secondary reversed={isReversed} />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton
          icon={trashIcon}
          label="Label"
          secondary
          reversed={isReversed}
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          secondary
          reversed={isReversed}
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed={isReversed}
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
        <Button
          label="Label"
          icon={trashIcon}
          secondary
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          disabled
          secondary
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          secondary
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          disabled
          secondary
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" secondary destructive reversed={isReversed} />
        <Button
          label="Label"
          disabled
          secondary
          destructive
          reversed={isReversed}
        />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton
          icon={trashIcon}
          label="Label"
          secondary
          destructive
          reversed={isReversed}
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          secondary
          destructive
          reversed={isReversed}
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed={isReversed}
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)
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
