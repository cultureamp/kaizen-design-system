import React, { ReactNode } from "react"
import { StoryObj, Meta } from "@storybook/react"
import { TextField } from "@kaizen/draft-form"
import { LoadingInput } from "@kaizen/loading-skeleton"
import { AddIcon, ArrowRightIcon } from "~components/Icon"
import { Button } from "../index"

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  args: {
    label: "Label",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * <p>`Default`, `Primary`, `Destructive`, `Secondary`</p>
 * <p>If no `variant` is specified, a `Default` button will be rendered.</p>
 */
export const Variants: Story = {
  render: ({ reversed }) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button label="Default" reversed={reversed} />
      <Button label="Primary" primary reversed={reversed} />
      <Button label="Destructive" destructive reversed={reversed} />
      <Button label="Secondary" secondary reversed={reversed} />
      {!reversed && (
        <Button label="Secondary Destructive" secondary destructive />
      )}
    </div>
  ),
  parameters: { controls: { disable: true } },
}

export const Reversed: Story = {
  ...Variants,
  args: { reversed: true },
  parameters: {
    ...Variants.parameters,
    backgrounds: { default: "Purple 700" },
  },
}

/**
 * A disabled Button prevents user interaction. It doesn’t appear in the tab order, can’t receive focus, and may not read aloud by a screenreader.
 */
export const Disabled: Story = {
  args: { disabled: true },
}

/**
 * <p>When a Button is supplied to the `icon` prop, it displays an icon.</p>
 * <p>`import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"`</p>
 * <p>Once the icons are imported, you can pass them directly into the Button component.</p>
 * <h3>IconPosition</h3>
 * <p>The consumer can specify the icon placement with the iconPosition prop, default position is start.</p>
 */
export const Icon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button label="Label" icon={<AddIcon role="presentation" />} />
      <Button
        label="Label"
        icon={<ArrowRightIcon role="presentation" />}
        iconPosition="end"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/**
 * You can display a `Badge` component within the button using the `badge` prop.
 */
export const Badge: Story = {
  args: {
    badge: { text: "3", variant: "active" },
    secondary: true,
  },
}

/**
 * Buttons can be stretched to fill the full width of their container.
 */
export const FullWidth: Story = {
  args: { fullWidth: true },
}

const WorkingWrapper = ({ children }: { children: ReactNode }): JSX.Element => (
  <div style={{ display: "flex", gap: "1rem" }}>{children}</div>
)

/**
 * <p>The `working` prop should be used in situations where a button action triggers a change in UI state but needs to wait for a server response, such as submitting a form</p>
 * <p>In conjuction use the `workingLabel` prop to update the label of the button when the working state is triggered.</p>
 * <p>Alternatively use the `workingLabelHidden` prop to hide the button label all together.</p>
 */
export const Working: Story = {
  render: () => (
    <WorkingWrapper>
      <Button label="Label" working workingLabel="Submitting" />
      <Button
        label="Label"
        working
        workingLabel="Submitting"
        workingLabelHidden
      />
    </WorkingWrapper>
  ),
  parameters: { controls: { disable: true } },
}

/**
 * <p>Use the LoadingInput component from the loading-skeleton package. Please refer to the LoadingInput Component guidelines.</p>
 * `import { LoadingInput } from "@kaizen/loading-skeleton"`
 */
export const Loading: Story = {
  render: () => <LoadingInput isAnimated width={13} />,
  parameters: { controls: { disable: true } },
}

/**
 * <p>Button extends native HTML "form" attributes for `button`.</p>
 * <p>You can use this to submit a `form` using `Button` with a matching form id.</p>
 */
export const NativeFormButton: Story = {
  render: () => (
    <>
      <form className="mb-6" id="unique-form-id">
        <TextField labelText="Sample text field" defaultValue="content" />
      </form>
      <Button
        label="Submit"
        type="submit"
        form="unique-form-id"
        formTarget="_blank"
        formAction="/"
        formMethod="get"
        formEncType="text/plain"
        formNoValidate={false}
      />
    </>
  ),
  parameters: { controls: { disable: true } },
}
