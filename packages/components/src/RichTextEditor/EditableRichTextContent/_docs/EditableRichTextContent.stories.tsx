import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '~components/Button'
import { RichTextEditor, type EditorContentArray, type RichTextEditorProps } from '../../index'
import { EditableRichTextContent } from '../index'
import defaultContent from './defaultContent.json'

const meta = {
  title: 'Components/RichTextEditor/EditableRichTextContent',
  component: EditableRichTextContent,
  args: {
    content: [],
    labelText: 'Label',
    onClick: fn(),
  },
  argTypes: {
    content: { control: false },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<typeof EditableRichTextContent>

export default meta

type Story = StoryObj<typeof meta>

const EditableRichTextContentTemplate: Story = {
  render: (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [readRteData, setReadRTEData] = useState<EditorContentArray>(props.content)
    const [editRteData, setEditRTEData] = useState<EditorContentArray>([])

    const handleOnChange: RichTextEditorProps['onChange'] = (editorState) =>
      setEditRTEData(editorState.toJSON().doc.content)

    const handleContentClick = (): void => {
      setEditRTEData(readRteData)
      setEditMode(true)
    }
    const handleCancel = (): void => setEditMode(false)
    const handleSave = (): void => {
      setReadRTEData(editRteData)
      setEditMode(false)
    }

    if (editMode) {
      return (
        <>
          <RichTextEditor
            labelText={props.labelText}
            controls={[
              { name: 'bold', group: 'inline' },
              { name: 'italic', group: 'inline' },
              { name: 'underline', group: 'inline' },
              { name: 'orderedList', group: 'list' },
              { name: 'bulletList', group: 'list' },
              { name: 'link', group: 'link' },
            ]}
            defaultValue={editRteData}
            onChange={handleOnChange}
          />
          <div className="flex justify-end mt-12 gap-8">
            <Button label="Cancel" secondary onClick={handleCancel} />
            <Button label="Save" primary onClick={handleSave} />
          </div>
        </>
      )
    }

    return (
      <EditableRichTextContent
        onClick={handleContentClick}
        content={readRteData}
        labelText={props.labelText}
      />
    )
  },
  args: {
    content: defaultContent,
  },
}

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
  },
}

export const UsageExample: Story = {
  ...EditableRichTextContentTemplate,
}
