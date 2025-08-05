import React, { type FunctionComponent } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import isChromatic from 'chromatic'
import { Text } from '~components/Text'
import { Button } from '~components/__next__/Button'
import { Icon } from '~components/__next__/Icon'
import {
  DialogMenu,
  DialogMenuHeader,
  DialogMenuItem,
  DialogMenuPopover,
  DialogMenuTrigger,
} from '../index'

const meta = {
  title: 'Components/DialogMenu/DialogMenu (next)',
  component: DialogMenuTrigger,
  args: {
    defaultOpen: isChromatic(),
    children: <></>,
  },
  subcomponents: {
    DialogMenu,
    DialogMenuItem,
    DialogMenuPopover,
    DialogMenuHeader,
  } as Record<string, FunctionComponent<any>>,
} satisfies Meta<typeof DialogMenuTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <DialogMenuTrigger {...args}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <DialogMenuPopover>
        <DialogMenu>
          <DialogMenuItem icon={<Icon name="bookmark" isPresentational />}>Save</DialogMenuItem>
          <DialogMenuItem icon={<Icon name="edit" isPresentational isFilled />}>
            Edit
          </DialogMenuItem>
          <DialogMenuItem icon={<Icon name="arrow_upward" isPresentational />}>
            Move up
          </DialogMenuItem>
          <DialogMenuItem icon={<Icon name="arrow_downward" isPresentational />}>
            Move down
          </DialogMenuItem>
          <DialogMenuItem icon={<Icon name="delete" isPresentational isFilled />}>
            Delete
          </DialogMenuItem>
        </DialogMenu>
      </DialogMenuPopover>
    </DialogMenuTrigger>
  ),
}

export const Basic: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <DialogMenuTrigger {...args}>
      <Button>Actions</Button>
      <DialogMenuPopover>
        <DialogMenu>
          <DialogMenuItem>Save</DialogMenuItem>
          <DialogMenuItem>Edit</DialogMenuItem>
          <DialogMenuItem>Delete</DialogMenuItem>
        </DialogMenu>
      </DialogMenuPopover>
    </DialogMenuTrigger>
  ),
}

export const DisabledItems: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <DialogMenuTrigger {...args}>
      <Button>Actions</Button>
      <DialogMenuPopover>
        <DialogMenu>
          <DialogMenuItem>Save</DialogMenuItem>
          <DialogMenuItem isDisabled>Edit</DialogMenuItem>
          <DialogMenuItem>Delete</DialogMenuItem>
        </DialogMenu>
      </DialogMenuPopover>
    </DialogMenuTrigger>
  ),
}

// export const WithSections: Story = {
//   render: ({ defaultOpen: _, ...args }) => (
//     <DialogMenuTrigger {...args}>
//       <Button>Actions</Button>
//       <DialogMenuPopover>
//         <DialogMenu>
//           <DialogMenuSection>
//             <DialogMenuHeader>Basic Actions</DialogMenuHeader>
//             <DialogMenuItem>Save</DialogMenuItem>
//             <DialogMenuItem>Edit</DialogMenuItem>
//           </DialogMenuSection>
//           <DialogMenuSection>
//             <DialogMenuHeader>Danger Zone</DialogMenuHeader>
//             <DialogMenuItem>Delete</DialogMenuItem>
//           </DialogMenuSection>
//         </DialogMenu>
//       </DialogMenuPopover>
//     </DialogMenuTrigger>
//   ),
// }

export const Controlled: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <DialogMenuTrigger {...args}>
      <Button>Actions</Button>
      <DialogMenuPopover>
        <DialogMenu>
          <DialogMenuItem id="save">Save</DialogMenuItem>
          <DialogMenuItem id="edit">Edit</DialogMenuItem>
          <DialogMenuItem id="delete">Delete</DialogMenuItem>
        </DialogMenu>
      </DialogMenuPopover>
    </DialogMenuTrigger>
  ),
}

export const RichContent: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <DialogMenuTrigger {...args}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <DialogMenuPopover>
        <DialogMenu>
          <DialogMenuItem>
            <div>Save</div>
            <Text tag="div" variant="extra-small">
              Saves all data
            </Text>
          </DialogMenuItem>
          <DialogMenuItem>
            <div>Edit</div>
            <Text tag="div" variant="extra-small">
              Adjust the name and description
            </Text>
          </DialogMenuItem>
          <DialogMenuItem>
            Delete
            <Text tag="div" variant="extra-small">
              Completely remove, cannot be undone
            </Text>
          </DialogMenuItem>
        </DialogMenu>
      </DialogMenuPopover>
    </DialogMenuTrigger>
  ),
}

export const WithLinksAndButtons: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <DialogMenuTrigger {...args}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <DialogMenuPopover>
        <DialogMenu>
          <DialogMenuItem onPress={() => alert('Button: Save clicked')}>
            Save (Button)
          </DialogMenuItem>
          <DialogMenuItem href="/edit" target="_blank">
            Edit (Link)
          </DialogMenuItem>
          <DialogMenuItem href="/help" target="_blank" icon={<Icon name="help" isPresentational />}>
            Help (Link with Icon)
          </DialogMenuItem>
          <DialogMenuItem
            onPress={() => alert('Button: Delete clicked')}
            icon={<Icon name="delete" isPresentational />}
          >
            Delete (Button with Icon)
          </DialogMenuItem>
        </DialogMenu>
      </DialogMenuPopover>
    </DialogMenuTrigger>
  ),
}

export const ButtonDialogMenuPattern: Story = {
  name: 'Button + DialogMenu Pattern',
  render: ({ defaultOpen: _, ...args }) => (
    <div className="flex gap-4">
      <Button size="large" variant="secondary">
        Edit Survey
      </Button>
      <DialogMenuTrigger {...args}>
        <Button
          size="large"
          icon={<Icon name="more_horiz" isPresentational />}
          variant="secondary"
          hasHiddenLabel
        >
          More surveys
        </Button>
        <DialogMenuPopover>
          <DialogMenu>
            <DialogMenu>
              <DialogMenuItem>Survey 1</DialogMenuItem>
              <DialogMenuItem>Survey 2</DialogMenuItem>
              <DialogMenuItem>Survey 3</DialogMenuItem>
              <DialogMenuItem>Survey 4</DialogMenuItem>
            </DialogMenu>
          </DialogMenu>
        </DialogMenuPopover>
      </DialogMenuTrigger>
    </div>
  ),
}
