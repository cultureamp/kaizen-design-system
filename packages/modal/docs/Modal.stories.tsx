import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { InformationReportOwnerByRule } from "@kaizen/draft-illustration"
import { Modal } from "@kaizen/modal"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { HeaderMood } from "../src/Modal/components/Header"

export default {
  title: `${CATEGORIES.components}/Modal`,
  component: Modal,
  subcomponents: {
    Header: Modal.Header,
    Body: Modal.Body,
    Footer: Modal.Footer,
    "Action Button": Modal.ActionButton,
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Modal } from "@kaizen/modal"',
      },
    },
  },
} as ComponentMeta<typeof Modal>

export const DefaultStory: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const [mood, setMood] = useState<HeaderMood>()
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />
      {/* TODO - Find a nicer way to toggle the sub component props of the Header Mood */}
      <Paragraph variant="body">Update Mood:</Paragraph>
      <select
        name="moods"
        id="moods"
        onChange={(e): void => setMood(e.target.value as HeaderMood)}
      >
        <option value="" selected>
          Default
        </option>
        <option value="positive">Positive</option>
        <option value="informative">Informative</option>
        <option value="negative">Negative</option>
        <option value="cautionary">Cautionary</option>
        <option value="assertive">Assertive</option>
      </select>

      <Paragraph variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
        tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
        orci ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed rutrum, libero malesuada ornare porttitor, metus diam
        scelerisque mauris, sit amet mollis lorem tortor iaculis risus.
        Vestibulum et fringilla sem. Cras placerat lectus a auctor facilisis.
        Cras ac porta diam. Donec auctor risus non ligula scelerisque accumsan.
        Mauris molestie tortor quis lectus euismod, non tincidunt ligula
        egestas. Phasellus at nibh lobortis, porttitor lectus tempor, lobortis
        augue. Quisque augue dolor, hendrerit tincidunt dapibus et, tempus eget
        turpis. Suspendisse pharetra tincidunt lobortis.
      </Paragraph>
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
        tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
        orci ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed rutrum, libero malesuada ornare porttitor, metus diam
        scelerisque mauris, sit amet mollis lorem tortor iaculis risus.
        Vestibulum et fringilla sem. Cras placerat lectus a auctor facilisis.
        Cras ac porta diam. Donec auctor risus non ligula scelerisque accumsan.
        Mauris molestie tortor quis lectus euismod, non tincidunt ligula
        egestas. Phasellus at nibh lobortis, porttitor lectus tempor, lobortis
        augue. Quisque augue dolor, hendrerit tincidunt dapibus et, tempus eget
        turpis. Suspendisse pharetra tincidunt lobortis.
      </Paragraph>
      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
      >
        <Modal.Header mood={mood}>
          <Modal.Title id="my-modal-title">Some Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
            orci ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Sed rutrum, libero malesuada ornare porttitor, metus
            diam scelerisque mauris, sit amet mollis lorem tortor iaculis risus.
            Vestibulum et fringilla sem. Cras placerat lectus a auctor
            facilisis. Cras ac porta diam. Donec auctor risus non ligula
            scelerisque accumsan. Mauris molestie tortor quis lectus euismod,
            non tincidunt ligula egestas. Phasellus at nibh lobortis, porttitor
            lectus tempor, lobortis augue. Quisque augue dolor, hendrerit
            tincidunt dapibus et, tempus eget turpis. Suspendisse pharetra
            tincidunt lobortis.
          </Paragraph>
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
            orci ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Sed rutrum, libero malesuada ornare porttitor, metus
            diam scelerisque mauris, sit amet mollis lorem tortor iaculis risus.
            Vestibulum et fringilla sem. Cras placerat lectus a auctor
            facilisis. Cras ac porta diam. Donec auctor risus non ligula
            scelerisque accumsan. Mauris molestie tortor quis lectus euismod,
            non tincidunt ligula egestas. Phasellus at nibh lobortis, porttitor
            lectus tempor, lobortis augue. Quisque augue dolor, hendrerit
            tincidunt dapibus et, tempus eget turpis. Suspendisse pharetra
            tincidunt lobortis.
          </Paragraph>
        </Modal.Body>
        <Modal.Footer>
          <Modal.ActionButton
            label="Tertiary"
            isAlignedStart
            secondary
            onClick={(): void => setModalOpen(false)}
          />
          <Modal.ActionButton
            secondary
            label="Secondary"
            onClick={(): void => setModalOpen(false)}
          />
          <Modal.ActionButton
            primary
            label="Primary"
            onClick={(): void => setModalOpen(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  size: "md",
  accessibleLabelId: "my-modal-title",
}

export const FormModal: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
        tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
        orci ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed rutrum, libero malesuada ornare porttitor, metus diam
        scelerisque mauris, sit amet mollis lorem tortor iaculis risus.
        Vestibulum et fringilla sem. Cras placerat lectus a auctor facilisis.
        Cras ac porta diam. Donec auctor risus non ligula scelerisque accumsan.
        Mauris molestie tortor quis lectus euismod, non tincidunt ligula
        egestas. Phasellus at nibh lobortis, porttitor lectus tempor, lobortis
        augue. Quisque augue dolor, hendrerit tincidunt dapibus et, tempus eget
        turpis. Suspendisse pharetra tincidunt lobortis.
      </Paragraph>
      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <Modal.Header>
          <Modal.Title id="my-modal-title">Create Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body hasFormControls>
          <TextField
            id="text-default"
            inputType="text"
            labelText="Name"
            placeholder="Placeholder Text"
          />
          <TextField id="text-email" inputType="email" labelText="Email" />
          <TextAreaField id="text-area-default" labelText="Description" />
        </Modal.Body>
        <Modal.Footer hasFormControls>
          <Modal.ActionButton
            primary
            label="Done"
            onClick={(): void => setModalOpen(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}
FormModal.parameters = {
  docs: { source: { type: "code" } },
}
FormModal.args = {
  size: "md",
}

export const FeatureModal: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
        tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
        orci ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed rutrum, libero malesuada ornare porttitor, metus diam
        scelerisque mauris, sit amet mollis lorem tortor iaculis risus.
        Vestibulum et fringilla sem. Cras placerat lectus a auctor facilisis.
        Cras ac porta diam. Donec auctor risus non ligula scelerisque accumsan.
        Mauris molestie tortor quis lectus euismod, non tincidunt ligula
        egestas. Phasellus at nibh lobortis, porttitor lectus tempor, lobortis
        augue. Quisque augue dolor, hendrerit tincidunt dapibus et, tempus eget
        turpis. Suspendisse pharetra tincidunt lobortis.
      </Paragraph>
      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <div style={{ backgroundColor: "#dfc9ea" }}>
          <InformationReportOwnerByRule alt="" />
        </div>
        <Modal.Header>
          <Modal.Title id="my-modal-title">
            Introducing a new feature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph variant="body">
            Instructive text to drive user selection goes here.
          </Paragraph>
        </Modal.Body>
        <Modal.Footer>
          <Modal.ActionButton
            primary
            label="Done"
            onClick={(): void => setModalOpen(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}
FeatureModal.parameters = {
  docs: { source: { type: "code" } },
}
FeatureModal.args = {
  size: "md",
}
