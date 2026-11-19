import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Icon } from '~components/Icon'
import { RadioField } from '~components/Radio'
import { Text } from '~components/Text'
import { Well } from '~components/Well'
import { TitleBlock } from '../index'

const meta = {
  title: 'Components/TitleBlock/TitleBlock tests',
  component: TitleBlock,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Page title',
    sticky: true,
    secondaryActions: [
      {
        label: 'Secondary menu',
        menuItems: [
          { onClick: (): void => undefined, label: 'Secondary menu action 1' },
          {
            onClick: (): void => undefined,
            label: 'Secondary menu action 2',
            icon: <Icon name="star" isPresentational isFilled />,
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof TitleBlock>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Regression (visual): menus in the row below the separator of a sticky
 * TitleBlock must paint above positioned page content that follows it.
 */
export const StickyMenuAbovePageContent: Story = {
  parameters: {
    chromatic: { disable: false },
  },
  render: (args) => (
    // No app-chrome nav above the TitleBlock here, so zero the offset (as
    // AppChrome does) to stop the sticky title row covering the row below.
    <div style={{ display: 'contents', ['--app-chrome-sticky-offset' as string]: '0px' }}>
      <TitleBlock {...args} />
      <div
        data-testid="page-content"
        style={{
          position: 'relative',
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '1.5rem',
        }}
      >
        <Well color="purple">
          <div style={{ padding: '1.5rem' }}>
            <Text variant="body">
              This content mirrors a consumer page: a purple Well followed by rating questions built
              from RadioField, which is position: relative.
            </Text>
          </div>
        </Well>
        {[1, 2].map((question) => (
          <div key={question} style={{ position: 'relative', marginBlockStart: '2rem' }}>
            <Text variant="body">
              <strong>{question}. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
            </Text>
            <div
              role="radiogroup"
              aria-label={`Question ${question} rating`}
              style={{
                marginBlockStart: '1rem',
                padding: '0.5rem 1rem',
                border: '1px solid var(--color-gray-500)',
                borderRadius: '7px',
              }}
            >
              {['Lorem ipsum', 'Dolor sit amet', 'Consectetur adipiscing', 'Sed do eiusmod'].map(
                (option) => (
                  <RadioField
                    key={option}
                    name={`question-${question}`}
                    value={option}
                    labelText={option}
                    onChange={() => undefined}
                  />
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  // Opens the menu for the Chromatic snapshot. Wait for fonts first so the
  // TitleBlock layout has settled before MenuV1 positions the dropdown.
  play: async ({ canvasElement }) => {
    await document.fonts.ready
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Secondary menu' }))
  },
}
