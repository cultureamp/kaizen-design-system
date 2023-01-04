import React, { useState } from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Paragraph } from "@kaizen/typography"
import { Modal } from "../"
import { modalControls } from "./controls/modalControls"

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
  argTypes: {
    ...modalControls,
  },
}

export const DefaultStory: StoryFn<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />
      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
      >
        <Modal.Header>
          <Modal.Title id="my-modal-title">Generic content modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            tortor sit amet lorem sollicitudin placerat et quis mauris. Proin at
            orci ullamcorper, volutpat erat eget, facilisis lacus.
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
DefaultStory.storyName = "Modal"

DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  size: "md",
  accessibleLabelId: "my-modal-title",
  dismissOnBackdropClick: true,
  hideCloseButton: false,
}

export const ScrollStory: StoryFn<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
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
        <Modal.Header>
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
ScrollStory.storyName = "Scroll with Shadow"

ScrollStory.parameters = {
  docs: { source: { type: "code" } },
}
ScrollStory.args = {
  size: "md",
  accessibleLabelId: "my-modal-title",
  dismissOnBackdropClick: true,
  hideCloseButton: false,
}
