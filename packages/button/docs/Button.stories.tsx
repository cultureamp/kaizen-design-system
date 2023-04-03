import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { LoadingInput } from "@kaizen/loading-skeleton"
import { CustomDocsContainer } from "../../../storybook/CustomDocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { Button } from ".."

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    docs: {
      container: CustomDocsContainer,
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
} satisfies Meta<typeof Button>

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Primary: StoryFn<typeof Button> = args => <Button {...args} />
Primary.storyName = "Button Playground"
Primary.parameters = {
  docs: {
    canvas: {
      sourceState: "shown",
    },
  },
}

const VariantsTemplate: StoryFn<{ isReversed?: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Button label="Default" reversed={isReversed} />
        <Button label="Primary" primary reversed={isReversed} />
        <Button label="Destructive" destructive reversed={isReversed} />
        <Button label="Secondary" secondary reversed={isReversed} />
        {!isReversed && (
          <Button label="Secondary Destructive" secondary destructive />
        )}
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * `Default`, `Primary`, `Destructive`, `Secondary`
 * <p>If no `variant` is specified, a `Default` button will be rendered. </p>
 * <p>For more information on when to use each variant, check out the [Component guidelines](https://cultureamp.design/components/button/).</p>
 */
export const Variants = VariantsTemplate.bind({})

export const Reversed = VariantsTemplate.bind({})
Reversed.args = { isReversed: true }
Reversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

/**
 * A disabled Button prevents user interaction. It doesn’t appear in the tab order, can’t receive focus, and may not read aloud by a screenreader.
 */
export const Disabled: StoryFn = () => <Button label="Label" disabled />

/**
 * <p>When a Button is supplied to the `icon` prop, it displays an icon.</p>
 * `import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"`
 * <p>Once the icons are imported, you can pass them directly into the Button component.</p>
 * <h3>IconPosition</h3>
 * <p>The consumer can specify the icon placement with the iconPosition prop, default position is start. </p>
 */
export const Icon: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Button label="Label" icon={addIcon} />
        <Button label="Label" icon={arrowRight} iconPosition="end" />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * You can display a `Badge` component within the button using the `badge` prop.
 */
export const Badge: StoryFn = () => (
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

export const FullWidth: StoryFn = () => (
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
export const Working: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Button label="Label" working workingLabel="Submitting" />
        <Button
          label="Label"
          working
          workingLabel="Submitting"
          workingLabelHidden
        />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * <p>Use the LoadingInput component from the loading-skeleton package. Please refer to the LoadingInput Component guidelines.</p>
 * `import { LoadingInput } from "@kaizen/loading-skeleton"`
 */
export const Loading: StoryFn = () => <LoadingInput isAnimated width={13} />
