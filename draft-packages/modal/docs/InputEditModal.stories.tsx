import { Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import { Select } from "@kaizen/draft-select"
import { InputEditModal, ModalAccessibleDescription } from "@kaizen/draft-modal"
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
  title: `${CATEGORIES.components}/Modal/Input Edit Modal`,
  component: InputEditModal,
  parameters: {
    docs: {
      description: {
        component:
          "import { InputEditModal, " +
          "ModalAccessibleDescription" +
          ' } from "@kaizen/draft-modal"',
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

const options = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime", isDisabled: true },
  { value: "Rafa", label: "Rafa" },
  { value: "Elaine", label: "Elaine" },
  { value: "Julio", label: "Julio" },
  { value: "Priyanka", label: "Priyanka" },
  { value: "Prince", label: "Prince" },
  { value: "Charith", label: "Charith" },
  { value: "Nick", label: "Nick" },
]

export const InputEditModals = args => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InputEditModal
          isOpen={isOpen}
          type="positive"
          title="Input-edit modal title"
          onSubmit={close}
          onDismiss={close}
          submitLabel="Label"
          {...args}
        >
          <ModalAccessibleDescription>
            <Paragraph variant="body">
              Instructive text to drive user selection goes here.
            </Paragraph>
          </ModalAccessibleDescription>
          <Select
            options={options}
            placeholder="Placeholder"
            isSearchable={false}
            isDisabled={false}
            defaultValue={options[0]}
          />
        </InputEditModal>
      </div>
    )}
  </ModalStateContainer>
)
