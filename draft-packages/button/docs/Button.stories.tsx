import { Heading, Box } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  StorybookGridWrapper,
  StorybookColWrapper,
} from "../../../storybook/components/storybook-wrapper"

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

export const DefaultKaizenSiteDemo = args => <Button {...args} />
DefaultKaizenSiteDemo.story = {
  name: "Default Button (Kaizen Site Demo)",
}

export const LightButtons = () => (
  <>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1">
        Default
      </Heading>
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
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
        <StorybookColWrapper title="Base">
          <IconLeft icon={addIcon} />
          <IconRight />
          <Button label="Label" />
          <IconButton icon={meatballsIcon} label="Label" />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled">
          <IconLeft disabled={true} icon={addIcon} />
          <IconRight disabled={true} />
          <Button label="Label" disabled={true} />
          <IconButton icon={meatballsIcon} label="Label" disabled={true} />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working">
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
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
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
        <StorybookColWrapper title="Base">
          <IconLeft icon={addIcon} primary />
          <IconRight primary />
          <Button label="Label" primary />
          <IconButton icon={meatballsIcon} label="Label" primary />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled">
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
        <StorybookColWrapper title="Working">
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
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
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
        <StorybookColWrapper title="Base">
          <IconLeft icon={addIcon} destructive />
          <IconRight destructive />
          <Button label="Label" destructive />
          <IconButton icon={meatballsIcon} label="Label" destructive />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled">
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
        <StorybookColWrapper title="Working">
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
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
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
        <StorybookColWrapper title="Base">
          <IconLeft icon={addIcon} secondary />
          <IconRight secondary />
          <Button label="Label" secondary />
          <IconButton icon={meatballsIcon} label="Label" secondary />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled">
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
        <StorybookColWrapper title="Working">
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
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
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
        <StorybookColWrapper title="Base">
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
        <StorybookColWrapper title="Disabled">
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
        <StorybookColWrapper title="Working">
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
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1" color="white">
        Default
      </Heading>
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" isReversed>
          <IconLeft icon={addIcon} reversed />
          <IconRight reversed />
          <Button label="Label" reversed />
          <IconButton icon={meatballsIcon} label="Label" reversed />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" isReversed>
          <IconLeft disabled={true} icon={addIcon} reversed />
          <IconRight disabled={true} reversed />
          <Button label="Label" disabled={true} reversed />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            reversed
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" isReversed>
          <DefaultWorkingWithWorkingLabelVisible reversed />
          <DefaultWorkingOnEnd reversed />
          <DefaultWorkingOnEnd reversed />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            reversed
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1" color="white">
        Primary
      </Heading>
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" isReversed>
          <IconLeft icon={addIcon} primary reversed />
          <IconRight primary reversed />
          <Button label="Label" primary reversed />
          <IconButton icon={meatballsIcon} label="Label" primary reversed />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" isReversed>
          <IconLeft disabled={true} icon={addIcon} primary reversed />
          <IconRight disabled={true} primary reversed />
          <Button label="Label" disabled={true} primary reversed />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            primary
            reversed
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" isReversed>
          <DefaultWorkingWithWorkingLabelVisible primary reversed />
          <DefaultWorkingOnEnd primary reversed />
          <DefaultWorkingOnEnd primary reversed />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            primary
            reversed
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1" color="white">
        Destructive
      </Heading>
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" isReversed>
          <IconLeft icon={addIcon} destructive reversed />
          <IconRight destructive reversed />
          <Button label="Label" destructive reversed />
          <IconButton icon={meatballsIcon} label="Label" destructive reversed />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" isReversed>
          <IconLeft disabled={true} icon={addIcon} destructive reversed />
          <IconRight disabled={true} destructive reversed />
          <Button label="Label" disabled={true} destructive reversed />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            destructive
            reversed
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" isReversed>
          <DefaultWorkingWithWorkingLabelVisible destructive reversed />
          <DefaultWorkingOnEnd destructive reversed />
          <DefaultWorkingOnEnd destructive reversed />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            destructive
            reversed
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1" color="white">
        Secondary
      </Heading>
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" isReversed>
          <IconLeft icon={addIcon} secondary reversed />
          <IconRight secondary reversed />
          <Button label="Label" secondary reversed />
          <IconButton icon={meatballsIcon} label="Label" secondary reversed />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" isReversed>
          <IconLeft disabled={true} icon={addIcon} secondary reversed />
          <IconRight disabled={true} secondary reversed />
          <Button label="Label" disabled={true} secondary reversed />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            secondary
            reversed
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" isReversed>
          <DefaultWorkingWithWorkingLabelVisible secondary reversed />
          <DefaultWorkingOnEnd secondary reversed />
          <DefaultWorkingOnEnd secondary reversed />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            secondary
            reversed
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
    <Box mb={3}>
      <Heading variant="heading-3" tag="h1" color="white">
        Secondary Destructive
      </Heading>
      <StorybookGridWrapper>
        <StorybookColWrapper isSideHeader>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Left
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Right
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            No Icon
          </Heading>
          <Heading variant="heading-5" tag="h2" color="white">
            Icon Only
          </Heading>
        </StorybookColWrapper>
        <StorybookColWrapper title="Base" isReversed>
          <IconLeft icon={addIcon} secondary destructive reversed />
          <IconRight secondary destructive reversed />
          <Button label="Label" secondary destructive reversed />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            secondary
            destructive
            reversed
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Disabled" isReversed>
          <IconLeft
            disabled={true}
            icon={addIcon}
            secondary
            destructive
            reversed
          />
          <IconRight disabled={true} secondary destructive reversed />
          <Button
            label="Label"
            disabled={true}
            secondary
            destructive
            reversed
          />
          <IconButton
            icon={meatballsIcon}
            label="Label"
            disabled={true}
            secondary
            destructive
            reversed
          />
        </StorybookColWrapper>
        <StorybookColWrapper title="Working" isReversed>
          <DefaultWorkingWithWorkingLabelVisible
            secondary
            destructive
            reversed
          />
          <DefaultWorkingOnEnd secondary destructive reversed />
          <DefaultWorkingOnEnd secondary destructive reversed />
          <IconButton
            label="Label"
            disabled={true}
            working
            workingLabel="Submitting"
            workingLabelHidden
            secondary
            destructive
            reversed
          />
        </StorybookColWrapper>
      </StorybookGridWrapper>
    </Box>
  </>
)

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
