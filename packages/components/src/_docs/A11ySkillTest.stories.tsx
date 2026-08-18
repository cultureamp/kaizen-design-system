import React, { useEffect, useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Card } from '~components/Card'
import { Heading } from '~components/Heading'
import { Icon } from '~components/Icon'
import { GenericModal } from '~components/Modal'
import { SearchField } from '~components/SearchField'
import { Text } from '~components/Text'
import { TextField } from '~components/TextField'
import { TitleBlock } from '~components/TitleBlock'
import styles from './A11ySkillTest.module.css'

type Metric = {
  id: string
  name: string
  score: string
  trend: string
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
    document.title = 'Culture Amp'
  }, [])

  return (
    <div className={styles.page}>
      <TitleBlock
        title="Priya Raman"
        renderSectionTitle={({ sectionTitle }): JSX.Element => (
          <Heading variant="heading-3" tag="h3">
            {sectionTitle}
          </Heading>
        )}
        sectionTitle="Latest survey results"
      />

      <div className={styles.header}>
        <div aria-hidden="true">
          <Button variant="secondary" onPress={(): void => undefined}>
            Export
          </Button>
        </div>
      </div>

      <div className={styles.toolbar}>
        <SearchField secondary labelText="Filter metrics" placeholder="Filter metrics" />
        <Button variant="tertiary" className={styles.plainButton} onPress={(): void => undefined}>
          Reset
        </Button>
        <div className={styles.editAffordance} onClick={(): void => setIsNoteModalOpen(true)}>
          <Icon name="edit" isPresentational />
          Edit profile
        </div>
      </div>

      <Text variant="body" classNameOverride={styles.summary}>
        Senior Product Designer, Design Platform — Melbourne, Australia. Joined March 2021. Reports
        to Alex Chen. Last review completed 14 April 2026.
      </Text>

      <div className={styles.grid}>
        {metrics.slice(0, 3).map((metric) => (
          <div key={metric.id} className={styles.gridItem}>
            <Card>
              <div className={styles.cardBody}>
                <Heading variant="heading-4" tag="h4">
                  {metric.name}
                </Heading>
                <Text variant="body">{metric.score}</Text>
                <span className={styles.mutedIcon}>
                  <Icon
                    name={metric.trend === 'up' ? 'trending_up' : 'trending_down'}
                    isPresentational
                  />
                </span>
                <div className={styles.rowActions}>
                  <Button size="small" variant="secondary" onPress={(): void => undefined}>
                    View
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {metrics.slice(3).map((metric) => (
          <div key={metric.id} className={styles.gridItem}>
            <Card>
              <div className={styles.cardBody}>
                <Heading variant="heading-4" tag="h4">
                  {metric.name}
                </Heading>
                <Text variant="body" classNameOverride={styles.mutedText}>
                  {metric.score}
                </Text>
                <span className={styles.mutedIcon}>
                  <Icon
                    name={metric.trend === 'up' ? 'trending_up' : 'trending_down'}
                    isPresentational
                  />
                </span>
                <div className={styles.rowActions}>
                  <a href="#latest-survey-results">Click here</a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Heading variant="heading-4" tag="h4" classNameOverride={styles.mutedHeading}>
        Manager notes
      </Heading>
      <TextField labelText="Notes" />
      <Text variant="small">Use the format YYYY-MM-DD when referencing a review date.</Text>

      <div className={styles.rowActions}>
        <Button onPress={(): void => setIsNoteModalOpen(true)}>Add note</Button>
      </div>

      <GenericModal
        isOpen={isNoteModalOpen}
        focusLockDisabled
        onEscapeKeyup={(): void => setIsNoteModalOpen(false)}
      >
        <div className={styles.modalBody}>
          <Heading variant="heading-3" tag="div">
            Add a note
          </Heading>
          <TextField labelText="Note" />
          <div className={styles.modalActions}>
            <Button onPress={(): void => setIsNoteModalOpen(false)}>Save</Button>
            <Button variant="secondary" onPress={(): void => setIsNoteModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </GenericModal>
    </div>
  )
}

const meta = {
  title: 'Pages/A11y Skill Test',
  tags: ['skip-test'],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'heading-order', enabled: true }],
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BrokenPage: Story = {
  render: () => <EmployeeProfilePage />,
}
