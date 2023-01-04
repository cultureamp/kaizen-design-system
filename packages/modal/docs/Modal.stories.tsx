import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Modal } from "@kaizen/modal"
import { Heading, Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

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
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=10458%3A45652"
    ),
  },
  argTypes: {},
}

export const DefaultStory: ComponentStory<typeof Modal> = props => {
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
        turpis. Suspendisse pharetra tincidunt lobortis.{" "}
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
        turpis. Suspendisse pharetra tincidunt lobortis.{" "}
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
        turpis. Suspendisse pharetra tincidunt lobortis.{" "}
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
        turpis. Suspendisse pharetra tincidunt lobortis.{" "}
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
        turpis. Suspendisse pharetra tincidunt lobortis.{" "}
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
        turpis. Suspendisse pharetra tincidunt lobortis.{" "}
      </Paragraph>
      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={() => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <Modal.Header>
          <Heading variant="heading-3" id="my-modal-title">
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
        </Modal.Body>
        <Modal.Footer>
          <Modal.Actions>
            <Button
              secondary
              label="Cancel"
              onClick={() => setModalOpen(false)}
            />
            <Button
              primary
              label="Some action"
              onClick={() => setModalOpen(false)}
            />
          </Modal.Actions>
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
}
