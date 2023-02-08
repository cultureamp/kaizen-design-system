import React from "react"
import { ComponentStory } from "@storybook/react"
import { Modal } from "@kaizen/modal"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Modal/Subcomponents`,
  component: Modal.Body,
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

export const Body: ComponentStory<typeof Modal.Body> = props => (
  <Modal.Body {...props}>
    <Paragraph variant="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at tortor
      sit amet lorem sollicitudin placerat et quis mauris. Proin at orci
      ullamcorper, volutpat erat eget, facilisis lacus. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Sed rutrum, libero malesuada ornare porttitor, metus diam scelerisque
      mauris, sit amet mollis lorem tortor iaculis risus. Vestibulum et
      fringilla sem. Cras placerat lectus a auctor facilisis. Cras ac porta
      diam. Donec auctor risus non ligula scelerisque accumsan. Mauris molestie
      tortor quis lectus euismod, non tincidunt ligula egestas. Phasellus at
      nibh lobortis, porttitor lectus tempor, lobortis augue. Quisque augue
      dolor, hendrerit tincidunt dapibus et, tempus eget turpis. Suspendisse
      pharetra tincidunt lobortis.
    </Paragraph>
  </Modal.Body>
)

Body.args = {
  hasFormControls: true,
}
