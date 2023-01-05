import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { InformationReportOwnerByRule } from "@kaizen/draft-illustration"
import { Modal } from "@kaizen/modal"
import { Heading, Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { HeaderMood } from "../src/Modal/components/Header"
import styles from "./Modal.stories.module.scss"

export default {
  title: `${CATEGORIES.components}/Modal`,
  component: Modal,
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
}

export const DefaultStory: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const [mood, setMood] = useState<HeaderMood>()
  return (
    <>
      <Button label="Open modal" onClick={() => setModalOpen(true)} />
      {/* TODO - Find a nicer way to toggle the sub component props of the Header Mood */}
      <Paragraph variant="body">Update Mood:</Paragraph>
      <select
        name="moods"
        id="moods"
        onChange={e => setMood(e.target.value as HeaderMood)}
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
        onDismiss={() => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <Modal.Header mood={mood}>
          <Heading variant="heading-3" tag="div" id="my-modal-title">
            Some heading
          </Heading>
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
          <Modal.Actions>
            <Modal.ActionButton
              label="Tertiary"
              isAlignedStart
              secondary
              onClick={() => setModalOpen(false)}
            />
            <Modal.ActionButton
              secondary
              label="Secondary"
              onClick={() => setModalOpen(false)}
            />
            <Modal.ActionButton
              primary
              label="Primary"
              onClick={() => setModalOpen(false)}
            />
          </Modal.Actions>
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
}

export const FormModal: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  return (
    <>
      <Button label="Open modal" onClick={() => setModalOpen(true)} />
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
        onDismiss={() => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <Modal.Header>
          <Heading variant="heading-3" tag="div" id="my-modal-title">
            Create Skill
          </Heading>
        </Modal.Header>
        <Modal.Body classNameOverride={styles.grayBackground}>
          <TextField
            id="text-default"
            inputType="text"
            labelText="Name"
            placeholder="Placeholder Text"
          />
          <TextField id="text-email" inputType="email" labelText="Email" />
          <TextAreaField id="text-area-default" labelText="Description" />
        </Modal.Body>
        <Modal.Footer classNameOverride={styles.grayBackground}>
          <Modal.Actions>
            <Modal.ActionButton
              primary
              label="Done"
              onClick={() => setModalOpen(false)}
            />
          </Modal.Actions>
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
      <Button label="Open modal" onClick={() => setModalOpen(true)} />
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
        onDismiss={() => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <div style={{ backgroundColor: "#dfc9ea" }}>
          <InformationReportOwnerByRule alt="" />
        </div>
        <Modal.Header>
          <Heading variant="heading-3" tag="div" id="my-modal-title">
            Introducing a new feature
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <Paragraph variant="body">
            Instructive text to drive user selection goes here.
          </Paragraph>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Actions>
            <Modal.ActionButton
              primary
              label="Done"
              onClick={() => setModalOpen(false)}
            />
          </Modal.Actions>
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
