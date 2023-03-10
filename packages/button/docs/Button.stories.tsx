import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { LoadingInput } from "@kaizen/loading-skeleton"
import { CustomDocsContainer } from "../../../storybook/CustomDocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { Button, ButtonProps } from ".."

const IS_CHROMATIC = isChromatic()

const meta: Meta<typeof Button> = {
  title: "Components/Button/Button",
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    docs: {
      container: CustomDocsContainer,
      description: {
        story:
          "Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.",
      },
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/button",
      "import { Button } from `@kaizen/button`",
    ],
    packageName: "@kaizen/button",
    sourceCodeLink:
      "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/button",
    figmaLink:
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A17364",
    alternatives: ["icon-button"],
  },
}
export default meta

type Story = StoryFn<ButtonProps>

export const Primary: Story = args => <Button {...args} />
Primary.storyName = "Playground"
Primary.parameters = {
  docs: {
    canvas: {
      sourceState: "shown",
    },
  },
}

/**
 * `Default`, `Primary`, `Destructive`, `Secondary`
 * <p>If no `variant` is specified, a `Default` button will be rendered. </p>
 * <p>For more information on when to use each variant, check out the [Component guidelines](https://cultureamp.design/components/button/)</p>
 */
export const Variants: Story = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Default" />
      <Button label="Primary" primary />
      <Button label="Destructive" destructive />
      <Button label="Secondary" secondary />
      <Button label="Secondary Destructive" secondary destructive />
    </StickerSheet.Row>
  </StickerSheet>
)

export const Reversed: Story = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Default" reversed />
      <Button label="Primary" primary reversed />
      <Button label="Destructive" destructive reversed />
      <Button label="Secondary" secondary reversed />
      <Button label="Secondary Destructive" secondary destructive reversed />
    </StickerSheet.Row>
  </StickerSheet>
)
Reversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

/**
 * A disabled Button prevents user interaction. It doesn’t appear in the tab order, can’t receive focus, and may not read aloud by a screenreader.
 */
export const Disabled: Story = () => <Button label="Label" disabled />

/**
 * <p>When a Button is supplied to the `icon` prop, it displays an icon.</p>
 * `import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"`
 * <p>Once the icons are imported, you can pass them directly into the Button component.</p>
 * <h3>IconPosition</h3>
 * <p>The consumer can specify the icon placement with the iconPosition prop, default position is start. </p>
 */
export const Icon: Story = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Label" icon={addIcon} />
      <Button label="Label" icon={arrowRight} iconPosition="end" />
    </StickerSheet.Row>
  </StickerSheet>
)

/**
 * You can display a `Badge` component within the button using the `badge` prop.
 */
export const Badge: Story = () => (
  <Button
    label="Label"
    icon={filterIcon}
    badge={{ text: "3", variant: "active" }}
    secondary
  />
)

/**
 * Buttons can be stretched to fill the full width of their container.
 */

export const FullWidth: Story = () => (
  <Button
    label="Label"
    icon={filterIcon}
    badge={{ text: "3", variant: "active" }}
    secondary
  />
)

/**
 * <p>The `working` prop should be used in situations where a button action triggers a change in UI state but needs to wait for a server response, such as submitting a form</p>
 * <p>In conjuction use the `workingLabel` prop to update the label of the button when the working state is triggered.</p>
 * <p>Alternatively use the `workingLabelHidden` prop to hide the button label all together.</p>
 */
export const Working: Story = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Label" working workingLabel="Submitting" />
      <Button
        label="Label"
        working
        workingLabel="Submitting"
        workingLabelHidden
      />
    </StickerSheet.Row>
  </StickerSheet>
)

/**
 * <p>Use the LoadingInput component from the loading-skeleton package. Please refer to the LoadingInput Component guidelines.</p>
 * `import { LoadingInput } from "@kaizen/loading-skeleton"`
 */
export const Skeleton: Story = () => <LoadingInput isAnimated width={13} />

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const REVERSED__VARIANT_PROPS: Array<{
    title: string
    props: ButtonProps
  }> = [
    {
      title: "Default",
      props: {
        label: "Label",
      },
    },
    {
      title: "Primary",
      props: {
        label: "Label",
        primary: true,
      },
    },
    {
      title: "Destructive",
      props: {
        label: "Label",
        destructive: true,
      },
    },
    {
      title: "Secondary",
      props: {
        label: "Label",
        secondary: true,
      },
    },
  ]

  const VARIANTS_PROPS: Array<{
    title: string
    props: ButtonProps
  }> = isReversed
    ? REVERSED__VARIANT_PROPS
    : [
        ...REVERSED__VARIANT_PROPS,
        {
          title: "Secondary Destructive",
          props: {
            label: "Label",
            secondary: true,
            destructive: true,
          },
        },
      ]

  const WORKING_PROPS: ButtonProps = {
    label: "Label",
    working: true,
    workingLabel: "Submitting",
    workingLabelHidden: true,
  }

  const ICON_LEFT_PROPS: ButtonProps = {
    label: "Label",
    icon: addIcon,
  }

  const ICON_RIGHT_PROPS: ButtonProps = {
    label: "Label",
    icon: arrowRight,
    iconPosition: "end",
  }

  const BADGE_PROPS: ButtonProps = {
    label: "Label",
    badge: { text: "4" },
  }
  const BADGE_LEFT_PROPS: ButtonProps = {
    ...BADGE_PROPS,
    icon: filterIcon,
  }

  const BADGE_RIGHT_PROPS: ButtonProps = {
    ...BADGE_PROPS,
    icon: arrowRight,
    iconPosition: "end",
  }

  return (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Hover", "Active", "Focus", "Disabled"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <Button reversed={isReversed} {...props} />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-hover"
                {...props}
              />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-active"
                {...props}
              />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-focus"
                {...props}
              />
              <Button reversed={isReversed} {...props} disabled />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>

      {IS_CHROMATIC && (
        <StickerSheet isReversed={isReversed} heading="Form (to be deprecated)">
          <StickerSheet.Header
            headings={[
              "Base",
              "Hover",
              "Active",
              "Focus",
              "Disabled",
              "Working",
              "Working Focus",
            ]}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            {VARIANTS_PROPS.map(({ title, props }) => (
              <StickerSheet.Row key={title} rowTitle={title}>
                <Button reversed={isReversed} {...props} form />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-hover"
                  {...props}
                  form
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-active"
                  {...props}
                  form
                />
                <Button
                  reversed={isReversed}
                  classNameOverride="story__button-focus"
                  {...props}
                  form
                />
                <Button reversed={isReversed} {...props} disabled form />
                <Button
                  reversed={isReversed}
                  {...props}
                  form
                  {...WORKING_PROPS}
                />
                <Button
                  reversed={isReversed}
                  {...props}
                  form
                  classNameOverride="story__button-focus"
                  {...WORKING_PROPS}
                />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
      )}

      <StickerSheet
        isReversed={isReversed}
        heading="Working / With Icon / With Badge"
      >
        <StickerSheet.Header
          headings={[
            "Working",
            "Working (Focus)",
            "Icon Left",
            "Icon Right",
            "Icon Left with Badge",
            "Icon Right with Badge",
          ]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <Button reversed={isReversed} {...props} {...WORKING_PROPS} />
              <Button
                reversed={isReversed}
                classNameOverride="story__button-focus"
                {...props}
                {...WORKING_PROPS}
              />
              <Button reversed={isReversed} {...props} {...ICON_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...ICON_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_LEFT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_RIGHT_PROPS} />
              <Button reversed={isReversed} {...props} {...BADGE_PROPS} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
  docs: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  // Removes from the docs list
  docs: { disable: true },
}
