import React, { useEffect, useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Card } from '~components/Card'
import { Heading } from '~components/Heading'
import { Icon } from '~components/Icon'
import { GenericModal, ModalAccessibleLabel } from '~components/Modal'
import { SearchField } from '~components/SearchField'
import { Text } from '~components/Text'
import { TextField } from '~components/TextField'
import { TitleBlock } from '~components/TitleBlock'
import { VisuallyHidden } from '~components/VisuallyHidden'
import styles from './A11yPassingTest.module.css'

type Metric = {
  id: string
  name: string
  score: string
  trend: 'up' | 'down'
}

const metrics: Metric[] = [
  { id: 'engagement', name: 'Engagement', score: '82%', trend: 'up' },
  { id: 'enablement', name: 'Enablement', score: '74%', trend: 'up' },
  { id: 'alignment', name: 'Alignment', score: '69%', trend: 'down' },
  { id: 'development', name: 'Development', score: '77%', trend: 'up' },
  { id: 'leadership', name: 'Leadership', score: '61%', trend: 'down' },
  { id: 'wellbeing', name: 'Wellbeing', score: '88%', trend: 'up' },
]

const EmployeeProfilePage = (): JSX.Element => {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'Priya Raman, employee profile - Culture Amp'
  }, [])

  return (
    <>
      <TitleBlock
        title="Priya Raman"
        sectionTitle="Latest survey results"
        renderSectionTitle={({ sectionTitle }): JSX.Element => (
          <Heading variant="heading-2" tag="h2" color="white">
            {sectionTitle}
          </Heading>
        )}
      />

      <main className={styles.page}>
        <div className={styles.toolbar}>
          <SearchField labelText="Filter metrics" />
          <Button variant="tertiary" onPress={(): void => undefined}>
            Reset filters
          </Button>
          <Button
            variant="tertiary"
            icon={<Icon name="edit" isPresentational />}
            onPress={(): void => undefined}
          >
            Edit profile
          </Button>
          <Button variant="secondary" onPress={(): void => undefined}>
            Export profile
          </Button>
        </div>

        <Text variant="body" classNameOverride={styles.summary}>
          Senior Product Designer, Design Platform — Melbourne, Australia. Joined March 2021.
          Reports to Alex Chen. Last review completed 14 April 2026.
        </Text>

        {/* `list-style: none` makes WebKit drop list semantics, so the role is restored
            deliberately. jsx-a11y calls it redundant; VoiceOver disagrees. */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul role="list" className={styles.grid}>
          {metrics.map((metric) => (
            <Card key={metric.id} tag="li">
              <div className={styles.cardBody}>
                <Heading variant="heading-4" tag="h3">
                  {metric.name}
                </Heading>
                <Text variant="body">{metric.score}</Text>
                <span className={styles.trend}>
                  <Icon
                    name={metric.trend === 'up' ? 'trending_up' : 'trending_down'}
                    alt={metric.trend === 'up' ? 'Trending up' : 'Trending down'}
                  />
                </span>
                <Button size="small" variant="secondary" onPress={(): void => undefined}>
                  View
                  <VisuallyHidden> {metric.name} results</VisuallyHidden>
                </Button>
              </div>
            </Card>
          ))}
        </ul>

        <Heading variant="heading-2" tag="h2">
          Manager notes
        </Heading>
        <div className={styles.notes}>
          <TextField
            labelText="Notes"
            description="Use the format YYYY-MM-DD when referencing a review date."
          />
          <Button onPress={(): void => setIsNoteModalOpen(true)}>Add note</Button>
        </div>
      </main>

      <GenericModal
        isOpen={isNoteModalOpen}
        onEscapeKeyup={(): void => setIsNoteModalOpen(false)}
        onOutsideModalClick={(): void => setIsNoteModalOpen(false)}
      >
        <div className={styles.modalBody}>
          <ModalAccessibleLabel>
            <Heading variant="heading-3" tag="h2">
              Add a note
            </Heading>
          </ModalAccessibleLabel>
          <TextField labelText="Note" />
          <div className={styles.modalActions}>
            <Button onPress={(): void => setIsNoteModalOpen(false)}>Save note</Button>
            <Button variant="secondary" onPress={(): void => setIsNoteModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </GenericModal>
    </>
  )
}

const meta = {
  title: 'Pages/A11y Passing Test',
  tags: ['skip-test'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [{ id: 'heading-order', enabled: true }],
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const PassingPage: Story = {
  render: () => <EmployeeProfilePage />,
}
