import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { Button } from '~components/Button'
import { FieldMessage } from '~components/FieldMessage'
import { ContextModal } from '~components/Modal'
import { RadioField, RadioGroup } from '~components/Radio'
import { SingleSelect } from '../SingleSelect'
import { type SingleSelectOption } from '../types'
import { groupedMockItems, mixedMockItemsDisabled, singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect (Deprecated)',
  component: SingleSelect,
  argTypes: {
    items: {
      options: ['Single', 'Grouped'],
      control: { type: 'radio' },
      mapping: {
        Single: singleMockItems,
        Grouped: groupedMockItems,
      },
    },
    description: { type: 'string' },
    validationMessage: { type: 'string' },
  },
  args: {
    label: 'Label',
    items: singleMockItems,
    onFocus: undefined,
    onFocusChange: undefined,
    onOpenChange: undefined,
    onSelectionChange: undefined,
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
} satisfies Meta<typeof SingleSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const SingleItems: Story = {
  args: {
    items: singleMockItems,
  },
}

export const GroupedItems: Story = {
  args: {
    items: groupedMockItems,
  },
}

export const DisabledItems: Story = {
  args: {
    items: mixedMockItemsDisabled,
  },
}

export const SectionDivider: Story = {
  args: {
    items: [{ label: 'Customise...', value: 'custom' }, ...singleMockItems],
    children: ({ items }): JSX.Element[] =>
      items.map((item) => {
        if (item.type === 'item' && item.key === 'custom') {
          return (
            <React.Fragment key={item.key}>
              <SingleSelect.Option item={item} />
              <SingleSelect.SectionDivider />
            </React.Fragment>
          )
        }

        return <SingleSelect.ItemDefaultRender key={item.key} item={item} />
      }),
  },
  parameters: { docs: { source: { type: 'code' } } },
}

export const AdditionalProperties: Story = {
  render: (args) => (
    <SingleSelect<SingleSelectOption & { isFruit: boolean }>
      {...args}
      label="Custom"
      items={[
        { label: 'Bubblegum', value: 'bubblegum', isFruit: false },
        { label: 'Strawberry', value: 'strawberry', isFruit: true },
        { label: 'Chocolate', value: 'chocolate', isFruit: false },
        { label: 'Apple', value: 'apple', isFruit: true },
        { label: 'Lemon', value: 'lemon', isFruit: true },
      ]}
    >
      {({ items }): JSX.Element[] =>
        items.map((item) =>
          item.type === 'item' ? (
            <SingleSelect.Option
              key={item.key}
              item={{
                ...item,
                rendered: item.value?.isFruit ? `${item.rendered} (Fruit)` : item.rendered,
              }}
            />
          ) : (
            <SingleSelect.ItemDefaultRender key={item.key} item={item} />
          ),
        )
      }
    </SingleSelect>
  ),
  parameters: { docs: { source: { type: 'code' } } },
}

const sourceCodeCustomiseTrigger = `
<SingleSelect
  trigger={props => <SingleSelect.TriggerButton {...props} id="select--custom-trigger" />}
/>
`
export const CustomiseTrigger: Story = {
  args: {
    trigger: (props) => <SingleSelect.TriggerButton {...props} id="select--custom-trigger" />,
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomiseTrigger,
      },
    },
  },
}

export const Validation: Story = {
  render: (args) => (
    <div className="flex gap-16">
      <SingleSelect {...args} status="error" validationMessage="This is an error message" />
      <SingleSelect {...args} status="caution" validationMessage="This is a cautionary message" />
    </div>
  ),
}

export const FullWidth: Story = {
  args: { isFullWidth: true },
}

export const PortalContainer: Story = {
  render: (args) => {
    const portalContainerId = 'id--portal-container'

    const [isOpen, setIsOpen] = React.useState(false)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)
    return (
      <>
        <div className=" h-[500px] mb-24 block bg-gray-100 flex flex-col gap-16 justify-center items-center">
          Page content
          <button type="button" className="border border-gray-500" onClick={handleOpen}>
            Open Modal
          </button>
          <ContextModal
            isOpen={isOpen}
            onConfirm={handleClose}
            onDismiss={handleClose}
            title="Select test"
          >
            <div className="flex gap-24 bg-gray-200 p-12" id={portalContainerId}>
              <SingleSelect
                {...args}
                label="Select within a modal"
                id="id--select-inner"
                portalContainerId={portalContainerId}
              />
            </div>
          </ContextModal>
        </div>
      </>
    )
  },
  parameters: { docs: { source: { type: 'code' } } },
}

export const TouchDeviceTest: Story = {
  name: 'Touch Device Pointer Event (Manual Test)',
  render: (args) => {
    const [selected, setSelected] = React.useState('radio-1')
    return (
      <div>
        <p>
          On touch devices, the radios below were changing when selecting an option sitting above
          it.
          <br />
          At this time, we could not automate this test, so this story exists for manual testing.
        </p>
        <SingleSelect {...args} />
        <RadioGroup labelText="Radio group">
          <RadioField
            labelText="Label 1"
            name="radio-group"
            value="radio-value-1"
            onChange={() => setSelected('radio-1')}
            selectedStatus={selected === 'radio-1'}
          />
          <RadioField
            labelText="Label 2"
            name="radio-group"
            value="radio-value-2"
            onChange={() => setSelected('radio-2')}
            selectedStatus={selected === 'radio-2'}
          />
          <RadioField
            labelText="Label 3"
            name="radio-group"
            value="radio-value-3"
            onChange={() => setSelected('radio-3')}
            selectedStatus={selected === 'radio-3'}
          />
        </RadioGroup>
      </div>
    )
  },
}

export const RequiredSelect: Story = {
  args: {
    label: 'Required Select',
    isRequired: true,
    validationBehavior: 'native',
  },
}

export const ReversedSelect: Story = {
  args: {
    label: 'Reversed Select',
    isReversed: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-purple-700 p-16">
        <Story />
      </div>
    ),
  ],
  parameters: { backgrounds: { default: 'Purple 700' } },
}

export const SelectNativeValidationBehavior: Story = {
  parameters: {
    name: 'Required Select with native form validation',
  },
  args: {
    label: 'Required Select',
    isRequired: true,
    validationBehavior: 'native',
  },
  render: (args) => {
    const [hasSubmitted, setHasSubmitted] = React.useState(false)
    return (
      <div>
        <form
          className="flex flex-col gap-16"
          name="form-with-required-select"
          aria-describedby={hasSubmitted ? 'id--field-message-form' : undefined}
          onSubmit={(e) => {
            e.preventDefault()
            setHasSubmitted(true)
          }}
        >
          <SingleSelect {...args} isRequired />
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
        {hasSubmitted && (
          <FieldMessage
            id="id--field-message-form"
            classNameOverride="mt-8"
            status="success"
            message={'Form submitted!'}
          />
        )}
      </div>
    )
  },
}

export const NativeFormValidationWithoutSelectedVal: Story = {
  ...SelectNativeValidationBehavior,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const submitButton = canvas.getByRole('button', { name: 'Submit' })
    const requiredSelect = canvas.getByRole('combobox', { name: 'Required Select' })
    const form = await canvas.findByRole('form')

    await step('Select has aria-required attribute', async () => {
      expect(requiredSelect).toHaveAttribute('aria-required', 'true')
    })

    await step('Submit will not call onSubmit without a selected value', async () => {
      await userEvent.click(submitButton)
      await waitFor(() => {
        expect(form).toHaveAccessibleDescription('')
      })
    })
  },
}

export const NativeFormValidationWithSelectedVal: Story = {
  ...SelectNativeValidationBehavior,
  args: {
    selectedKey: 'short-black',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const submitButton = canvas.getByRole('button', { name: 'Submit' })
    const form = await canvas.findByRole('form')

    await step('Submit will call onSubmit with a selected value', async () => {
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(form).toHaveAccessibleDescription('Form submitted!')
      })
    })
  },
}
