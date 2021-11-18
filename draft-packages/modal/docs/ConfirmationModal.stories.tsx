import { Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import { ConfirmationModal } from "@kaizen/draft-modal"
import isChromatic from "chromatic/isChromatic"

import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

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
  title: `${CATEGORIES.components}/Modal/Confirmation Modal`,
  component: ConfirmationModal,
  parameters: {
    docs: {
      description: {
        component: "import { ConfirmationModal } from @kaizen/draft-modal",
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

export const ConfirmationModals = args => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ConfirmationModal
          isOpen={isOpen}
          type="informative"
          title="Informative modal title"
          onConfirm={close}
          onDismiss={close}
          confirmLabel="Label"
          {...args}
        >
          <Paragraph variant="body">
            Confirmation modals contain smaller pieces of content and can
            provide additional information to aide the user.
          </Paragraph>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)
