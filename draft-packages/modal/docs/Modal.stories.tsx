import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { InlineNotification } from "@kaizen/notification"
import { Button } from "@kaizen/draft-button"
import { TextField } from "@kaizen/draft-form"
import {
  ConfirmationModal,
  GenericModal,
  ContextModal,
  RoadblockModal,
  InputEditModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@kaizen/draft-modal"
import isChromatic from "chromatic/isChromatic"

import * as React from "react"
import lockIcon from "@kaizen/component-library/icons/lock.icon.svg"
import userIcon from "@kaizen/component-library/icons/user.icon.svg"
import { withDesign } from "storybook-addon-designs"
import { AddImage } from "@kaizen/draft-illustration"
import { figmaEmbed } from "../../../storybook/helpers"

import { CATEGORIES } from "../../../storybook/constants"
import styles from "./Modal.stories.scss"

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

const Padding = ({
  size = 1,
}: {
  size?: React.ComponentProps<typeof Box>["p"]
}) => (
  <Box pb={size} pr={size}>
    {" "}
  </Box>
)
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
  title: `${CATEGORIES.components}/Modal`,
  component: ConfirmationModal,
  parameters: {
    docs: {
      description: {
        component:
          "import { ConfirmationModal, GenericModal, ContextModal, InputEditModal, " +
          "ModalAccessibleDescription, ModalAccessibleLabel, ModalBody, ModalFooter, " +
          'ModalHeader } from "@kaizen/draft-modal"',
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
export const InputEditModals = () => (
  <>
    <Heading variant="heading-3" tag="h1">
      Input Edit Modal
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Postive
    </Heading>
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
          >
            <form>
              <div style={{ textAlign: "start" }}>
                <ModalAccessibleDescription>
                  <Paragraph variant="body">
                    Instructive text to drive user selection goes here.
                  </Paragraph>
                </ModalAccessibleDescription>
              </div>
              <div>
                <TextField
                  id="email"
                  inputType="email"
                  inputValue="mackenzie@example.com"
                  labelText="Email"
                  placeholder="Please enter your email"
                  onChange={() => undefined}
                  icon={userIcon}
                />
                <TextField
                  id="password"
                  inputType="password"
                  inputValue="123445555"
                  labelText="Password"
                  placeholder="Please enter your password"
                  onChange={() => undefined}
                  icon={lockIcon}
                  inline
                />
              </div>
            </form>
          </InputEditModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Postive Rtl Locale
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <InputEditModal
            isOpen={isOpen}
            type="positive"
            title="Input-edit modal title"
            localeDirection="rtl"
            onSubmit={close}
            onDismiss={close}
          >
            <form>
              <div style={{ textAlign: "start" }}>
                <ModalAccessibleDescription>
                  <Paragraph variant="body">
                    Instructive text to drive user selection goes here.
                  </Paragraph>
                </ModalAccessibleDescription>
              </div>
              <div>
                <TextField
                  id="email"
                  inputType="email"
                  inputValue="mackenzie@example.com"
                  labelText="Email"
                  placeholder="Please enter your email"
                  onChange={() => undefined}
                  icon={userIcon}
                />
                <TextField
                  id="password"
                  inputType="password"
                  inputValue="123445555"
                  labelText="Password"
                  placeholder="Please enter your password"
                  onChange={() => undefined}
                  icon={lockIcon}
                  inline
                />
              </div>
            </form>
          </InputEditModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Negative
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <InputEditModal
            isOpen={isOpen}
            type="negative"
            title="Input-edit modal title"
            onSubmit={close}
            onDismiss={close}
          >
            <form>
              <div style={{ textAlign: "start" }}>
                <ModalAccessibleDescription>
                  <Paragraph variant="body">
                    Instructive text to drive user selection goes here.
                  </Paragraph>
                </ModalAccessibleDescription>
              </div>
              <div>
                <TextField
                  id="email"
                  inputType="email"
                  inputValue="mackenzie@example.com"
                  labelText="Email"
                  placeholder="Please enter your email"
                  onChange={() => undefined}
                  icon={userIcon}
                />
                <TextField
                  id="password"
                  inputType="password"
                  inputValue="123445555"
                  labelText="Password"
                  placeholder="Please enter your password"
                  onChange={() => undefined}
                  icon={lockIcon}
                  inline
                />
              </div>
            </form>
          </InputEditModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Negative Rtl Locale
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <InputEditModal
            isOpen={isOpen}
            type="negative"
            title="Input-edit modal title"
            localeDirection="rtl"
            onSubmit={close}
            onDismiss={close}
          >
            <form>
              <div style={{ textAlign: "start" }}>
                <ModalAccessibleDescription>
                  <Paragraph variant="body">
                    Instructive text to drive user selection goes here.
                  </Paragraph>
                </ModalAccessibleDescription>
              </div>
              <div>
                <TextField
                  id="email"
                  inputType="email"
                  inputValue="mackenzie@example.com"
                  labelText="Email"
                  placeholder="Please enter your email"
                  onChange={() => undefined}
                  icon={userIcon}
                />
                <TextField
                  id="password"
                  inputType="password"
                  inputValue="123445555"
                  labelText="Password"
                  placeholder="Please enter your password"
                  onChange={() => undefined}
                  icon={lockIcon}
                  inline
                />
              </div>
            </form>
          </InputEditModal>
        </div>
      )}
    </ModalStateContainer>
  </>
)

// export const InputEditWorkingButton = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <InputEditModal
//           isOpen={isOpen}
//           type="positive"
//           title="Input-edit modal title"
//           onSubmit={close}
//           onDismiss={close}
//           submitWorking={{ label: "Submitting…" }}
//         >
//           <form>
//             <div style={{ textAlign: "center" }}>
//               <ModalAccessibleDescription>
//                 <Paragraph variant="body">
//                   Instructive text to drive user selection goes here.
//                 </Paragraph>
//               </ModalAccessibleDescription>
//               <Paragraph variant="body">
//                 Instructive text to drive user selection goes here.
//               </Paragraph>
//             </div>
//             <div>
//               <TextField
//                 id="email"
//                 inputType="email"
//                 inputValue="mackenzie@example.com"
//                 labelText="Email"
//                 placeholder="Please enter your email"
//                 onChange={() => undefined}
//                 icon={userIcon}
//               />
//               <TextField
//                 id="password"
//                 inputType="password"
//                 inputValue="123445555"
//                 labelText="Password"
//                 placeholder="Please enter your password"
//                 onChange={() => undefined}
//                 icon={lockIcon}
//                 inline
//               />
//             </div>
//           </form>
//         </InputEditModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// InputEditWorkingButton.storyName = "Input-edit w/ working button"

export const ConfirmationModals = () => (
  <>
    <Heading variant="heading-3" tag="h1">
      Informative
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Default
    </Heading>
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
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Prominent
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            isProminent
            type="informative"
            title="Informative modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-3" tag="h1">
      Positive
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Default
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            type="positive"
            title="Positive modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Prominent
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            isProminent
            type="positive"
            title="Positive modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-3" tag="h1">
      Cautionary
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Default
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            type="cautionary"
            title="Cautionary modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Prominent
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            isProminent
            type="cautionary"
            title="Cautionary modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-3" tag="h1">
      Assertive
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Default
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            type="assertive"
            title="Assertive modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Assertive confirmation modals tell users why they’re unable to
              proceed and what needs to happen first.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Prominent
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            isProminent
            type="assertive"
            title="Assertive modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Assertive confirmation modals tell users why they’re unable to
              proceed and what needs to happen first.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-3" tag="h1">
      Negative
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Default
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            type="negative"
            title="Negative modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
    <Heading variant="heading-5" tag="h2">
      Prominent
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ConfirmationModal
            isOpen={isOpen}
            isProminent
            type="negative"
            title="Negative modal title"
            onConfirm={close}
            onDismiss={close}
          >
            <Paragraph variant="body">
              Confirmation modals contain smaller pieces of content and can
              provide additional information to aide the user.
            </Paragraph>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
  </>
)

export const ConfirmationPositiveKaizenSiteDemo = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ConfirmationModal
          isOpen={isOpen}
          type="positive"
          title="Positive title"
          onConfirm={close}
          onDismiss={close}
        >
          <div style={{ textAlign: "center" }}>
            <Paragraph variant="body">
              Modals contain smaller pieces of content and can provide
              additional information to aid the user.
            </Paragraph>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationPositiveKaizenSiteDemo.story = {
  name: "Confirmation (positive) (Kaizen Site Demo)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=2272%3A18307"
    ),
  },
}

export const ContextModals = () => (
  <>
    <Heading variant="heading-3" tag="h1">
      Context Modals
    </Heading>
    <Heading variant="heading-5" tag="h2">
      Portrait
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ContextModal
            isOpen={isOpen}
            title="Context modal title (Portrait)"
            onConfirm={close}
            onDismiss={close}
            secondaryLabel="Cancel"
            onSecondaryAction={close}
            image={<AddImage alt="placeholder" />}
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
    <Heading variant="heading-5" tag="h2">
      Landscape
    </Heading>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <ContextModal
            isOpen={isOpen}
            title="Context modal title (Landscape)"
            onConfirm={close}
            onDismiss={close}
            secondaryLabel="Cancel"
            onSecondaryAction={close}
            isLandscape
            image={
              <div>
                <AddImage alt="placeholder" />
              </div>
            }
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
  </>
)

ContextModals.storyName = "Context Modals"
