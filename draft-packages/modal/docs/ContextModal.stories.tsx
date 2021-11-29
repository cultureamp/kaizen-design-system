import { Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import { ContextModal, ModalAccessibleDescription } from "@kaizen/draft-modal"
import isChromatic from "chromatic/isChromatic"
import classNames from "classnames"

import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { AddImage } from "@kaizen/draft-illustration"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./ContextModal.stories.scss"

// Add additional height to the stories when running in Chromatic only.
// Modals have fixed position and would be cropped from snapshot tests.
// Setting height to 100vh ensures we capture as much content of the
// modal, as it's height responds to the content within it.
const withMinHeight = Story => {
  if (!isChromatic()) return <Story />
  return (
    <div style={{ minHeight: "100vh" }}>
      <Story />
    </div>
  )
}
class ModalStateContainer extends React.Component<
  {
    isInitiallyOpen: boolean
    children: (renderProps: {
      open: () => void
      close: () => void
      isOpen: boolean
    }) => React.ReactNode
  },
  { isOpen: boolean }
> {
  state = { isOpen: this.props.isInitiallyOpen }
  open = () => this.setState({ isOpen: true })
  close = () => this.setState({ isOpen: false })
  render() {
    return this.props.children({
      open: this.open,
      close: this.close,
      isOpen: this.state.isOpen,
    })
  }
}

export default {
  title: `${CATEGORIES.components}/Modal/Context Modal`,
  component: ContextModal,
  parameters: {
    docs: {
      description: {
        component:
          "import { ContextModal, " +
          "ModalAccessibleDescription" +
          '} from "@kaizen/draft-modal"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A35440"
    ),
    chromatic: {
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
  },
  decorators: [withDesign, withMinHeight],
}

export const ContextModals = args => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ContextModal
          isOpen={isOpen}
          title="Context modal title"
          onConfirm={close}
          onDismiss={close}
          secondaryLabel="Cancel"
          onSecondaryAction={close}
          confirmLabel="Label"
          image={
            <AddImage
              classNameAndIHaveSpokenToDST={
                args.isLandscape ? styles.landscape : ""
              }
              alt="placeholder"
            />
          }
          {...args}
        >
          <ModalAccessibleDescription>
            <Paragraph variant="body">
              Intro defining what the modal is trying to explain or depict.
              Intro defining what the modal is trying to explain or depict.
            </Paragraph>
          </ModalAccessibleDescription>
          <ul>
            <li>
              <Paragraph variant="body">
                Key point to the benefits of the feature
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">
                Key point to the benefits of the feature
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">
                Key point to the benefits of the feature
              </Paragraph>
            </li>
          </ul>
          <Paragraph variant="body">
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Paragraph>
        </ContextModal>
      </div>
    )}
  </ModalStateContainer>
)
