import React, { useState } from "react"
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

export const StickerSheetDefault = () => (
  <>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1">
        Default
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} />
        <Button label="Label" icon={addIcon} disabled />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button label="Label" icon={arrowRight} iconPosition="end" />
        <Button label="Label" icon={arrowRight} iconPosition="end" disabled />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" />
        <Button label="Label" disabled />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={meatballsIcon} label="Label" />
        <IconButton icon={meatballsIcon} label="Label" disabled />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1">
        Primary
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} primary />
        <Button label="Label" icon={addIcon} disabled primary />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button label="Label" icon={arrowRight} iconPosition="end" primary />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          disabled
          primary
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" primary />
        <Button label="Label" disabled primary />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={meatballsIcon} label="Label" primary />
        <IconButton icon={meatballsIcon} label="Label" disabled primary />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1">
        Destructive
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={trashIcon} destructive />
        <Button label="Label" icon={trashIcon} disabled destructive />
        <Button
          label="Label"
          icon={trashIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button label="Label" icon={trashIcon} iconPosition="end" destructive />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          disabled
          destructive
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" destructive />
        <Button label="Label" disabled destructive />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={trashIcon} label="Label" destructive />
        <IconButton icon={trashIcon} label="Label" disabled destructive />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1">
        Secondary
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Badge">
        <Button
          label="Label"
          icon={filterIcon}
          badge={{ text: "3", variant: "active" }}
          secondary
        />
        <Button
          label="Label"
          icon={filterIcon}
          disabled
          secondary
          badge={{ text: "3", variant: "active" }}
        />
        <Button
          label="Label"
          icon={filterIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          badge={{ text: "3", variant: "active" }}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} secondary />
        <Button label="Label" icon={addIcon} disabled secondary />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button label="Label" icon={chevronDown} iconPosition="end" secondary />
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          disabled
          secondary
        />
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" secondary />
        <Button label="Label" disabled secondary />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={trashIcon} label="Label" secondary />
        <IconButton icon={trashIcon} label="Label" disabled secondary />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1">
        Secondary Destructive
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={trashIcon} secondary destructive />
        <Button label="Label" icon={trashIcon} disabled secondary destructive />
        <Button
          label="Label"
          icon={trashIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          secondary
          destructive
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          disabled
          secondary
          destructive
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
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" secondary destructive />
        <Button label="Label" disabled secondary destructive />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={trashIcon} label="Label" secondary destructive />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          secondary
          destructive
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = () => (
  <>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1" color="white">
        Default
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} reversed />
        <Button label="Label" icon={addIcon} disabled reversed />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button label="Label" icon={arrowRight} iconPosition="end" reversed />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          disabled
          reversed
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" reversed />
        <Button label="Label" disabled reversed />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={meatballsIcon} label="Label" reversed />
        <IconButton icon={meatballsIcon} label="Label" disabled reversed />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          reversed
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1" color="white">
        Primary
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} primary reversed />
        <Button label="Label" icon={addIcon} disabled primary reversed />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          primary
          reversed
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          disabled
          primary
          reversed
        />
        <Button
          label="Label"
          icon={arrowRight}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" primary reversed />
        <Button label="Label" disabled primary reversed />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={meatballsIcon} label="Label" primary reversed />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          disabled
          primary
          reversed
        />
        <IconButton
          icon={meatballsIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          primary
          reversed
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1" color="white">
        Destructive
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={trashIcon} destructive reversed />
        <Button label="Label" icon={trashIcon} disabled destructive reversed />
        <Button
          label="Label"
          icon={trashIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          destructive
          reversed
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          disabled
          destructive
          reversed
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" destructive reversed />
        <Button label="Label" disabled destructive reversed />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={trashIcon} label="Label" destructive reversed />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          destructive
          reversed
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          destructive
          reversed
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1" color="white">
        Secondary
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Badge">
        <Button
          label="Label"
          icon={filterIcon}
          badge={{ text: "3", variant: "active" }}
          secondary
          reversed
        />
        <Button
          label="Label"
          icon={filterIcon}
          disabled
          secondary
          reversed
          badge={{ text: "3", variant: "active" }}
        />
        <Button
          label="Label"
          icon={filterIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed
          badge={{ text: "3", variant: "active" }}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={addIcon} secondary reversed />
        <Button label="Label" icon={addIcon} disabled secondary reversed />
        <Button
          label="Label"
          icon={addIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          secondary
          reversed
        />
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          disabled
          secondary
          reversed
        />
        <Button
          label="Label"
          icon={chevronDown}
          iconPosition="end"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" secondary reversed />
        <Button label="Label" disabled secondary reversed />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton icon={trashIcon} label="Label" secondary reversed />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          secondary
          reversed
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          reversed
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed>
      <Heading variant="heading-3" tag="h1" color="white">
        Secondary Destructive
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled", "Working"]} />
      <StoryWrapper.Row rowTitle="Icon Left">
        <Button label="Label" icon={trashIcon} secondary destructive reversed />
        <Button
          label="Label"
          icon={trashIcon}
          disabled
          secondary
          destructive
          reversed
        />
        <Button
          label="Label"
          icon={trashIcon}
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Right">
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          secondary
          destructive
          reversed
        />
        <Button
          label="Label"
          icon={trashIcon}
          iconPosition="end"
          disabled
          secondary
          destructive
          reversed
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
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Icon">
        <Button label="Label" secondary destructive reversed />
        <Button label="Label" disabled secondary destructive reversed />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Icon Only">
        <IconButton
          icon={trashIcon}
          label="Label"
          secondary
          destructive
          reversed
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          disabled
          secondary
          destructive
          reversed
        />
        <IconButton
          icon={trashIcon}
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
          secondary
          destructive
          reversed
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"

StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}
