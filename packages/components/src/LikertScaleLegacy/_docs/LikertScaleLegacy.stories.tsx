import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { LikertScaleLegacy } from '../index'
import { type Scale, type ScaleItem } from '../types'

const scale: Scale = [
  {
    value: -1,
    label: 'Not rated',
  },
  {
    value: 1,
    label: 'Strong Disagree',
  },
  {
    value: 2,
    label: 'Disagree',
  },
  {
    value: 3,
    label: 'Neither agree or disagree',
  },
  {
    value: 4,
    label: 'Agree',
  },
  {
    value: 5,
    label: 'Strongly agree',
  },
]

const meta = {
  title: 'Components/LikertScaleLegacy (deprecated)',
  component: LikertScaleLegacy,
  tags: ['deprecated'],
  args: {
    scale,
    labelId: 'labelId',
    selectedItem: scale[0],
    onSelect: (): void => undefined,
  },
} satisfies Meta<typeof LikertScaleLegacy>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
    return <LikertScaleLegacy {...args} selectedItem={selectedItem} onSelect={setSelectedItem} />
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
  const SatisfactionExample = () => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)

    return (
      <LikertScaleLegacy
        scale={[
          { value: -1, label: "Not rated" },
          { value: 1, label: "Strong Disagree" },
          { value: 2, label: "Disagree" },
          { value: 3, label: "Neither agree or disagree" },
          { value: 4, label: "Agree" },
          { value: 5, label: "Strongly agree" },
        ]},
        labelId: "labelId",
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
    )
  }
        `,
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const IsRequired: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
    const labelId = React.useId()
    return (
      <div>
        <VisuallyHidden id={labelId}>Likert scale label</VisuallyHidden>
        <LikertScaleLegacy
          {...args}
          labelId={labelId}
          selectedItem={selectedItem}
          onSelect={setSelectedItem}
        />
      </div>
    )
  },
  args: {
    isRequired: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)
    const likertScale = canvas.getByRole('radiogroup', { name: 'Likert scale label' })

    expect(likertScale).toHaveAttribute('aria-required', 'true')
  },
}
