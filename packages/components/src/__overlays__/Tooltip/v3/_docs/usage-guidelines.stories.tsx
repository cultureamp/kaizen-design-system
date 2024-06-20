import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { within, expect, userEvent } from "@storybook/test"
import { Button, IconButton } from "~components/Button"
import { FieldMessage } from "~components/FieldMessage"
import { AddIcon, InformationIcon, QuestionIcon } from "~components/Icon"
import { Input } from "~components/Input"
import { Label } from "~components/Label"
import { Tag } from "~components/__future__/Tag"
import { Focusable } from "~components/__utilities__/v3"
import { ToggleTip, Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Overlays/Tooltip/v3/Usage Guidelines",
  component: Tooltip,
  args: {
    defaultOpen: true,
  },
  parameters: {
    docs: {
      layout: "centered",
      subtitle:
        "Tooltips show contextual help or information about specific components when a user hovers or focuses on them.",
      argTypes: {
        include: ["defaultOpen", "placement"],
        sort: "requiredFirst",
      },
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <TooltipTrigger>
      <IconButton
        label="Add something"
        icon={<AddIcon role="presentation" />}
        primary
        // Negate the aria description (added by RAC) as it should be the
        // same as the accessible name, therefore no need to duplicate it
        aria-describedby={null}
      />
      <Tooltip>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const DoFieldTooltip: Story = {
  render: () => (
    <div>
      <Label>Password</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
            // Negate the aria description (added by RAC) as it should be the
            // same as the accessible name, therefore no need to duplicate it
            aria-describedby={null}
          />
          <Tooltip>Contact customer support for help</Tooltip>
        </TooltipTrigger>
      </div>
      <FieldMessage message="Password must be at least 8 characters" />
    </div>
  ),
}

export const DontFieldTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <div>
      <Label>Password</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
          />
          <Tooltip>Password must be at least 8 characters</Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  ),
}

export const DoConcise: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <div>
      <Label>Email</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
          />
          <Tooltip>Enter your email to help us find your account</Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  ),
}

export const DontConcise: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <div>
      <Label>Email</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
          />
          <Tooltip>
            The email field is required. Your email address will be used as an
            identifier when we search for your account and we will also use it
            to send you confirmation numbers via email.
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  ),
}

// export const OnButton: Story = {
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Button label="Button with tooltip" />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const OnLink: Story = {
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Button label="Button with tooltip" href="#" />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const OnButtonWithDesc: Story = {
//   render: args => (
//     <>
//       <TooltipTrigger>
//         <IconButton
//           label="(TESTING) Add label"
//           icon={<AddIcon role="presentation" />}
//           primary
//           aria-describedby="blah"
//         />
//         <Tooltip {...args}>Tooltip content</Tooltip>
//       </TooltipTrigger>
//       <div id="blah">Custom description</div>
//     </>
//   ),
// }

// export const OnIconButton: Story = {
//   render: args => (
//     <TooltipTrigger>
//       <IconButton
//         label="Add something"
//         icon={<AddIcon role="presentation" />}
//         primary
//         // Negate the aria description (added by RAC) as it should be the
//         // same as the accessible name, therefore no need to duplicate it
//         aria-describedby={null}
//       />
//       <Tooltip {...args}>Add something</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const OnDisabledButton: Story = {
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Button label="Button with tooltip" disabled />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const OnCustomButtonAnchor: Story = {
//   name: "On Button with custom <a>",
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Button
//         label="Button with tooltip"
//         component={props => (
//           // eslint-disable-next-line jsx-a11y/anchor-is-valid
//           <a {...props} href="#" style={{ padding: "0 1rem" }}>
//             Custom Link with tooltip
//           </a>
//         )}
//       />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const OnCustomButton: Story = {
//   name: "On Button with custom <button>",
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Button
//         label="Button with tooltip"
//         component={props => <button type="button" {...props} />}
//       />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const OnCustomFocusableElement: Story = {
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Focusable>
//         <Tag>Non-interactive element</Tag>
//       </Focusable>
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

// export const PlacementLeft: Story = {
//   ...OnButton,
//   args: { placement: "left" },
// }

// export const PlacementRight: Story = {
//   ...OnButton,
//   args: { placement: "right" },
// }

// export const PlacementTop: Story = {
//   ...OnButton,
//   args: { placement: "top" },
// }

// export const PlacementBottom: Story = {
//   ...OnButton,
//   args: { placement: "bottom" },
// }

// export const ReversedColors: Story = {
//   render: args => (
//     <TooltipTrigger {...args}>
//       <Button label="Button with tooltip" reversed={true} />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
//   parameters: {
//     reverseColors: true,
//   },
// }

// export const ToggleTipStory: Story = {
//   name: "ToggleTip",
//   args: { defaultOpen: false },
//   render: args => (
//     <TooltipTrigger {...args}>
//       <ToggleTip>
//         <InformationIcon role="img" aria-label="Information" />
//       </ToggleTip>
//       <Tooltip
//         {...args}
//         style={{ display: "flex", textAlign: "left", alignItems: "center" }}
//       >
//         <InformationIcon
//           role="presentation"
//           style={{ marginRight: "0.25rem" }}
//         />
//         With rich content
//       </Tooltip>
//     </TooltipTrigger>
//   ),
//   play: async ({ canvasElement, step }) => {
//     const canvas = within(canvasElement.parentElement!)
//     // focus
//     await userEvent.tab()
//     await expect(canvas.queryByRole("tooltip")).toBeNull()

//     await step("Enter toggles", async () => {
//       await userEvent.keyboard("{enter}")
//       await expect(canvas.getByRole("tooltip")).toBeVisible()
//       await userEvent.keyboard("{enter}")
//       await expect(canvas.queryByRole("tooltip")).toBeNull()
//     })
//     await step("Space toggles", async () => {
//       await userEvent.keyboard(" ")
//       await expect(canvas.getByRole("tooltip")).toBeVisible()
//       await userEvent.keyboard(" ")
//       await expect(canvas.queryByRole("tooltip")).toBeNull()
//     })
//     await step("Pointer toggles", async () => {
//       const button = canvasElement.getElementsByTagName("button")[0]
//       await userEvent.click(button)
//       await expect(canvas.getByRole("tooltip")).toBeVisible()
//       await userEvent.click(button)
//       await expect(canvas.queryByRole("tooltip")).toBeNull()
//     })
//     await step("Escape closes", async () => {
//       await userEvent.keyboard("{enter}")
//       await userEvent.keyboard("{Escape}")
//       await expect(canvas.queryByRole("tooltip")).toBeNull()
//     })

//     // leave open for screenshot
//     await userEvent.keyboard("{enter}")
//   },
// }
