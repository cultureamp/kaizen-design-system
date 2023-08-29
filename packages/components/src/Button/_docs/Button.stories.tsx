import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { TextField } from "@kaizen/draft-form"
import { LoadingInput } from "@kaizen/loading-skeleton"
import { AddIcon } from "~components/SVG/icons/AddIcon"
import { ArrowRightIcon } from "~components/SVG/icons/ArrowRightIcon"
import { ComponentDocsTemplate } from "~storybook/components/DocsContainer"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Button } from "../index"

const meta = {
  // Not to be released until full KAIO Migration
  // tags: ["autodocs"],
  title: "Components/Button",
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000,
    },
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "yarn add @kaizen/components",
      "import { Button } from `@kaizen/components`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/Button",
      figma:
        "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A17364",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button",
    },
  },
} satisfies Meta<typeof Button>

export default meta

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
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
 * <p>`Default`, `Primary`, `Destructive`, `Secondary`</p>
 * <p>If no `variant` is specified, a `Default` button will be rendered.</p>
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
export const Disabled: StoryObj<typeof meta> = {
  args: { disabled: true },
}

/**
 * <p>When a Button is supplied to the `icon` prop, it displays an icon.</p>
 * <p>`import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"`</p>
 * <p>Once the icons are imported, you can pass them directly into the Button component.</p>
 * <h3>IconPosition</h3>
 * <p>The consumer can specify the icon placement with the iconPosition prop, default position is start.</p>
 */
export const Icon: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Button label="Label" icon={<AddIcon role="presentation" />} />
        <Button
          label="Label"
          icon={<ArrowRightIcon role="presentation" />}
          iconPosition="end"
        />
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
    icon={<AddIcon role="presentation" />}
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
    icon={<AddIcon role="presentation" />}
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

/**
 * <p>Button now extends native HTML "form" attributes for `button`</p>
 * <p>You can use this to submit a `form` using `Button` with a matching form id</p>
 */
export const NativeFormButton: StoryFn = () => (
  <>
    <form className="mb-6" id="unique-form-id">
      <TextField labelText="Sample text field" defaultValue="content" />
    </form>
    <Button
      label="Submit"
      form="unique-form-id"
      formTarget="_blank"
      formAction="/"
      formMethod="get"
      formEncType="text/plain"
      formNoValidate={false}
      icon={<ArrowRightIcon role="presentation" />}
      iconPosition="end"
      type="submit"
    />
  </>
)
