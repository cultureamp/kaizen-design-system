import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'

import { Button as RACButton } from 'react-aria-components'
import { Icon } from '../../__next__/Icon'
import { FieldGroup, Picker, TreeItem, TreeItemContent } from '../index'

const meta = {
  title: 'Components/Picker',
  component: FieldGroup,
  decorators: [
    (Story) => (
      <div className="flex mt-[60px] gap-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FieldGroup>

export default meta

type Story = StoryObj<typeof meta>

export const SingleSelect: Story = {
  args: {
    labelText: 'Animals',
    size: 'medium',
    children: (
      <Picker
        items={[
          { id: '1', name: 'dog' },
          { id: '2', name: 'cat' },
          { id: '3', name: 'fish' },
        ]}
      >
        <Picker.ListBoxItem id="1" value={{ id: '1', name: 'dog' }}>
          dog
        </Picker.ListBoxItem>
        <Picker.ListBoxItem id="2" value={{ id: '2', name: 'cat' }}>
          cat
        </Picker.ListBoxItem>
        <Picker.ListBoxItem id="3" value={{ id: '3', name: 'fish' }}>
          fish
        </Picker.ListBoxItem>
      </Picker>
    ),
  },
}

export const MultiSelect: Story = {
  args: {
    labelText: 'Fruits',
    children: (
      <Picker
        multi={true}
        items={[
          { id: '1', name: 'apple' },
          { id: '2', name: 'orange' },
          { id: '3', name: 'watermelon' },
        ]}
      />
    ),
  },
}

export const ComboSelect: Story = {
  args: {
    inline: true,
    labelText: 'Books',
    validationMessage: 'This is a caution msg',
    status: 'caution',
    children: (
      <Picker
        search={true}
        items={[
          { id: '1', name: 'Harry Potter' },
          { id: '2', name: 'LOTR' },
          { id: '3', name: 'The Slap' },
        ]}
      >
        <Picker.ListBoxItem id="1" value={{ id: '1', name: 'Harry Potter' }}>
          Harry Potter
        </Picker.ListBoxItem>
        <Picker.ListBoxItem id="2" value={{ id: '2', name: 'LOTR' }}>
          LOTR
        </Picker.ListBoxItem>
        <Picker.ListBoxItem id="3" value={{ id: '3', name: 'The Slap' }}>
          The Slap
        </Picker.ListBoxItem>
      </Picker>
    ),
  },
}

export const ComboMultiSelect: Story = {
  args: {
    labelText: 'Dog Breeds',
    validationMessage: 'This is an error msg',
    status: 'error',
    children: (
      <Picker
        search={true}
        multi={true}
        items={[
          { id: '1', name: 'Bulldog' },
          { id: '2', name: 'Labrador' },
          { id: '3', name: 'Poodle' },
        ]}
      />
    ),
  },
}

export const NestedSelect: Story = {
  args: {
    labelText: 'Woods',
    size: 'medium',
    children: (
      <Picker
        nested={true}
        items={[
          { id: '1', name: 'dog' },
          { id: '2', name: 'cat' },
          { id: '3', name: 'fish' },
        ]}
      >
        <TreeItem id="1" textValue="pine">
          <TreeItemContent>
            <RACButton slot="chevron">
              <Icon name="keyboard_arrow_down" alt="expand list" />
            </RACButton>
            pine
          </TreeItemContent>
          <TreeItem id="2" textValue="Galician pine">
            <TreeItemContent>Galician pine</TreeItemContent>
          </TreeItem>
          <TreeItem id="3" textValue="Red pine">
            <TreeItemContent>Red pine</TreeItemContent>
          </TreeItem>
          <TreeItem id="4" textValue="Oregon pine">
            <TreeItemContent>Oregon pine</TreeItemContent>
          </TreeItem>
        </TreeItem>
        <TreeItem id="5" textValue="brich">
          <TreeItemContent>Birch</TreeItemContent>
        </TreeItem>
        <TreeItem id="6" textValue="rosewood">
          <TreeItemContent>Rose wood</TreeItemContent>
        </TreeItem>
      </Picker>
    ),
  },
}
