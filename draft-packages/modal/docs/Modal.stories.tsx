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

// export const ConfirmationWorkingButton = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ConfirmationModal
//           isOpen={isOpen}
//           type="positive"
//           title="Positive title"
//           onConfirm={close}
//           onDismiss={close}
//           confirmWorking={{ label: "Working…" }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <Paragraph tag="p" variant="body">
//               Modals contain smaller pieces of content and can provide
//               additional information to aid the user.
//             </Paragraph>
//           </div>
//         </ConfirmationModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// ConfirmationWorkingButton.storyName = "Confirmation w/ 'working' button"

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
            orientation="portrait"
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
            islandscape
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
  </>
)

ContextModals.storyName = "Context Modals"

// export const ContextWithoutAction = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ContextModal
//           isOpen={isOpen}
//           title="Context modal title"
//           onDismiss={close}
//         >
//           <ModalAccessibleDescription>
//             <Paragraph variant="body">
//               Intro defining what the modal is trying to explain or depict.
//               Intro defining what the modal is trying to explain or depict.
//             </Paragraph>
//           </ModalAccessibleDescription>
//           <ul>
//             <li>
//               <Paragraph variant="body">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//               </Paragraph>
//             </li>
//             <li>
//               <Paragraph variant="body">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eligendi.
//               </Paragraph>
//             </li>
//             <li>
//               <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
//             </li>
//           </ul>
//           <Paragraph variant="body">
//             More information to conclude can go here. More information to
//             conclude can go here. More information to conclude can go here.
//           </Paragraph>
//         </ContextModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// ContextWithoutAction.storyName = "Context (without action)"

// export const ContextWithBackground = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ContextModal
//           isOpen={isOpen}
//           title="Context modal title"
//           onDismiss={close}
//           renderBackground={() => (
//             <div className={styles.background}>
//               <div className={styles.illustration} />
//             </div>
//           )}
//         >
//           <ModalAccessibleDescription>
//             <Paragraph variant="body">
//               Intro defining what the modal is trying to explain or depict.
//               Intro defining what the modal is trying to explain or depict.
//             </Paragraph>
//           </ModalAccessibleDescription>
//           <ul>
//             <li>
//               <Paragraph variant="body">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//               </Paragraph>
//             </li>
//             <li>
//               <Paragraph variant="body">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eligendi.
//               </Paragraph>
//             </li>
//             <li>
//               <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
//             </li>
//           </ul>
//           <Paragraph variant="body">
//             More information to conclude can go here. More information to
//             conclude can go here. More information to conclude can go here.
//           </Paragraph>
//         </ContextModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// ContextWithBackground.storyName = "Context (with background)"

// export const ContextWithSecondaryAction = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ContextModal
//           secondaryLabel="Keep using Edge"
//           onSecondaryAction={close}
//           confirmLabel="Open in Edge"
//           onConfirm={close}
//           isOpen={isOpen}
//           title="Context modal title"
//           onDismiss={close}
//           renderBackground={() => (
//             <div className={styles.background}>
//               <div className={styles.illustration} />
//             </div>
//           )}
//         >
//           <ModalAccessibleDescription>
//             <Paragraph variant="body">
//               Intro defining what the modal is trying to explain or depict.
//               Intro defining what the modal is trying to explain or depict.
//             </Paragraph>
//           </ModalAccessibleDescription>
//           <ul>
//             <li>
//               <Paragraph variant="body">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//               </Paragraph>
//             </li>
//             <li>
//               <Paragraph variant="body">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eligendi.
//               </Paragraph>
//             </li>
//             <li>
//               <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
//             </li>
//           </ul>
//           <Paragraph variant="body">
//             More information to conclude can go here. More information to
//             conclude can go here. More information to conclude can go here.
//           </Paragraph>
//         </ContextModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// ContextWithSecondaryAction.storyName = "Context (with secondary action)"

// export const ContextModalWithImage = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ContextModal
//           secondaryLabel="Continue with current browser"
//           onSecondaryAction={close}
//           confirmLabel="Launch in Edge"
//           onConfirm={close}
//           isOpen={isOpen}
//           title="You're using an outdated browser"
//           onDismiss={close}
//           image={
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 height: "100%",
//               }}
//             >
//               <Negative alt="stock" />
//               <div style={{ flex: "1" }} />
//               <Paragraph variant="small" color="dark-reduced-opacity">
//                 Cool kids don't use IE11 just sayin
//               </Paragraph>
//             </div>
//           }
//         >
//           <ModalAccessibleDescription>
//             <Heading variant="heading-4">
//               Internet Explorer 11 is no longer supported by Culture Amp
//             </Heading>
//           </ModalAccessibleDescription>
//           <Padding />
//           <Paragraph variant="body">
//             You can continue to use Culture Amp, however some features may not
//             display correctly. For the best experience, we recommend switching
//             to Microsoft Edge, or a similar modern browser.
//           </Paragraph>
//           <Padding />
//           <Paragraph variant="body">
//             We've detected you already have Edge installed. Click the link below
//             to continue your session in Edge.
//           </Paragraph>
//         </ContextModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// ContextModalWithImage.story = {
//   name: "Context (with image) - Outdated browser demo",
//   parameters: {
//     ...figmaEmbed(
//       "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1620%3A114"
//     ),
//   },
// }

// const ContextModalContent = () => (
//   <>
//     <ModalAccessibleDescription>
//       <Heading variant="heading-4">
//         The responses to these questions will be shared with Carlos Quintero:
//       </Heading>
//     </ModalAccessibleDescription>
//     <Padding />
//     <Paragraph variant="body">
//       • What did this person achieve over the last 6 months? What specific
//       impact did they have on the team’s goals?
//     </Paragraph>
//     <Padding />
//     <Paragraph variant="body">
//       • What progress have they made on their learning and development goals?
//     </Paragraph>
//     <Padding />
//     <Paragraph variant="body">
//       • What are 2-3 skills or competencies you'd like them to focus on for
//       further development?
//     </Paragraph>
//   </>
// )

// export const ContextModalWithNotification = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ContextModal
//           secondaryLabel="Cancel"
//           onSecondaryAction={close}
//           confirmLabel="Share"
//           onConfirm={close}
//           isOpen={isOpen}
//           title="Share review"
//           onDismiss={close}
//           contentHeader={
//             <InlineNotification
//               type="cautionary"
//               title="Sharing"
//               autohide={false}
//               hideCloseIcon={true}
//               noBottomMargin={true}
//             >
//               Once the review has been shared, it can't be unshared
//             </InlineNotification>
//           }
//           image={
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 height: "100%",
//               }}
//             >
//               <ExecutiveReportSharing alt="stock" />
//             </div>
//           }
//         >
//           <ContextModalContent />
//         </ContextModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// ContextModalWithNotification.story = {
//   name: "Context (with Inline Notification)",
//   parameters: {
//     ...figmaEmbed(
//       "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1620%3A114"
//     ),
//   },
// }

// export const ContextModalWithWorkingButton = () => {
//   const [isLoading, setIsLoading] = React.useState(false)
//   return (
//     <ModalStateContainer isInitiallyOpen={false}>
//       {({ open, close, isOpen }) => (
//         <div>
//           <Button label="Open modal" onClick={open} />
//           <ContextModal
//             secondaryLabel="Cancel"
//             onSecondaryAction={() => {
//               setIsLoading(false)
//               close()
//             }}
//             confirmLabel="Share"
//             onConfirm={() => {
//               setIsLoading(true)
//             }}
//             isOpen={isOpen}
//             title="Share review"
//             onDismiss={() => {
//               setIsLoading(false)
//               close()
//             }}
//             confirmWorking={{ label: "Sharing review…" }}
//             contentHeader={
//               <InlineNotification
//                 type="cautionary"
//                 title="Sharing"
//                 autohide={false}
//                 hideCloseIcon={true}
//                 noBottomMargin={true}
//               >
//                 Once the review has been shared, it can't be unshared
//               </InlineNotification>
//             }
//             image={
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   textAlign: "center",
//                   height: "100%",
//                 }}
//               >
//                 <ExecutiveReportSharing alt="stock" />
//               </div>
//             }
//           >
//             <ContextModalContent />
//           </ContextModal>
//         </div>
//       )}
//     </ModalStateContainer>
//   )
// }

// ContextModalWithWorkingButton.story = {
//   name: "Context (with working button)",
//   parameters: {
//     ...figmaEmbed(
//       "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1620%3A114"
//     ),
//   },
// }

// export const GenericModalPadded = () => (
//   <>
//     <ModalStateContainer isInitiallyOpen={isChromatic()}>
//       {({ open, close, isOpen }) => (
//         <div>
//           <Button label="Open modal" onClick={open} />
//           <GenericModal
//             isOpen={isOpen}
//             onEscapeKeyup={close}
//             onOutsideModalClick={close}
//           >
//             <div className={styles.genericModal}>
//               <ModalHeader onDismiss={close}>
//                 <ModalAccessibleLabel>
//                   Modal label and header
//                 </ModalAccessibleLabel>
//               </ModalHeader>
//               <ModalBody>
//                 <ModalAccessibleDescription>
//                   Modal description
//                 </ModalAccessibleDescription>
//                 Body
//               </ModalBody>
//               <ModalFooter
//                 actions={[
//                   {
//                     label: "Confirm",
//                     onClick: () => close(),
//                   },
//                 ]}
//               >
//                 Footer
//               </ModalFooter>
//             </div>
//           </GenericModal>
//         </div>
//       )}
//     </ModalStateContainer>
//   </>
// )

// GenericModalPadded.storyName = "Generic modal ()"

// export const GenericModalUn = () => (
//   <>
//     <ModalStateContainer isInitiallyOpen={isChromatic()}>
//       {({ open, close, isOpen }) => (
//         <div>
//           <Button label="Open modal" onClick={open} />
//           <GenericModal
//             isOpen={isOpen}
//             onEscapeKeyup={close}
//             onOutsideModalClick={close}
//           >
//             <div className={styles.genericModal}>
//               <ModalHeader onDismiss={close} un>
//                 <ModalAccessibleLabel>
//                   Modal label and header
//                 </ModalAccessibleLabel>
//               </ModalHeader>
//               <ModalBody un>
//                 <ModalAccessibleDescription>
//                   Modal description
//                 </ModalAccessibleDescription>
//                 Body
//               </ModalBody>
//               <ModalFooter
//                 actions={[
//                   {
//                     label: "Confirm",
//                     onClick: () => close(),
//                   },
//                 ]}
//                 un
//               >
//                 Footer
//               </ModalFooter>
//             </div>
//           </GenericModal>
//         </div>
//       )}
//     </ModalStateContainer>
//   </>
// )

// GenericModalUn.storyName = "Generic modal (un)"

// export const GenericModalWithoutAction = () => (
//   <>
//     <ModalStateContainer isInitiallyOpen={isChromatic()}>
//       {({ open, close, isOpen }) => (
//         <div>
//           <Button label="Open modal" onClick={open} />
//           <GenericModal
//             isOpen={isOpen}
//             onEscapeKeyup={close}
//             onOutsideModalClick={close}
//           >
//             <div className={styles.genericModal}>
//               <ModalHeader onDismiss={close}>
//                 <ModalAccessibleLabel>
//                   Modal label and header
//                 </ModalAccessibleLabel>
//               </ModalHeader>
//               <ModalBody>
//                 <ModalAccessibleDescription>
//                   Modal description
//                 </ModalAccessibleDescription>
//                 Body
//               </ModalBody>
//             </div>
//           </GenericModal>
//         </div>
//       )}
//     </ModalStateContainer>
//   </>
// )

// GenericModalWithoutAction.storyName = "Generic modal (without action)"

// export const TestScrollingModalAndScrollingContent = () => (
//   <>
//     <ModalStateContainer isInitiallyOpen={isChromatic()}>
//       {({ open, close, isOpen }) => (
//         <div>
//           <div style={{ height: "500px", background: "whitesmoke" }}>
//             Placeholder for long content that causes the page to scroll
//           </div>
//           <Button label="Open really long modal" onClick={open} />
//           <div style={{ height: "1000px", background: "whitesmoke" }}>
//             Placeholder for long content that causes the page to scroll
//           </div>
//           <ConfirmationModal
//             isOpen={isOpen}
//             type="negative"
//             title="Negative title"
//             onConfirm={close}
//             onDismiss={close}
//           >
//             <div style={{ height: "900px", background: "whitesmoke" }}>
//               Placeholder for long content that causes the modal to scroll
//             </div>
//           </ConfirmationModal>
//         </div>
//       )}
//     </ModalStateContainer>
//   </>
// )

// TestScrollingModalAndScrollingContent.storyName =
//   "Test - scrolling modal and scrolling content"

// export const NestedModal = () => (
//   <ModalStateContainer isInitiallyOpen={false}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <ModalStateContainer isInitiallyOpen={false}>
//           {internal => (
//             <>
//               <ConfirmationModal
//                 isOpen={isOpen}
//                 type="positive"
//                 title="Positive title"
//                 onConfirm={internal.open}
//                 onDismiss={close}
//                 confirmLabel={"Go deeper"}
//               >
//                 <div style={{ textAlign: "center" }}>
//                   <Paragraph variant="body">
//                     Modals contain smaller pieces of content and can provide
//                     additional information to aid the user.
//                   </Paragraph>
//                 </div>
//               </ConfirmationModal>
//               <ConfirmationModal
//                 isOpen={internal.isOpen}
//                 type="negative"
//                 title="Inception"
//                 onConfirm={internal.close}
//                 onDismiss={internal.close}
//               >
//                 <div style={{ textAlign: "center" }}>
//                   <Paragraph variant="body">
//                     Whoa, this is, like, deep.
//                   </Paragraph>
//                 </div>
//               </ConfirmationModal>
//             </>
//           )}
//         </ModalStateContainer>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// NestedModal.storyName = "Nested confirmation modal"
// NestedModal.parameters = {
//   chromatic: { disable: true },
// }

// export const Roadblock = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         <RoadblockModal
//           isOpen={isOpen}
//           title="Roadblock title"
//           onDismiss={close}
//         >
//           <div style={{ textAlign: "center" }}>
//             <Paragraph variant="body">
//               Tell users why they're unable to proceed and what needs to happen
//               first.
//             </Paragraph>
//           </div>
//         </RoadblockModal>
//       </div>
//     )}
//   </ModalStateContainer>
// )

// Roadblock.storyName = "Roadblock"

// export const MountAndUnmountControlledByParentModal = () => (
//   <ModalStateContainer isInitiallyOpen={isChromatic()}>
//     {({ open, close, isOpen }) => (
//       <div>
//         <Button label="Open modal" onClick={open} />
//         {isOpen && (
//           <RoadblockModal
//             isOpen={isOpen}
//             title="Roadblock title"
//             onDismiss={close}
//           >
//             <div style={{ textAlign: "center" }}>
//               <Paragraph variant="body">
//                 Tell users why they're unable to proceed and what needs to
//                 happen first.
//               </Paragraph>
//             </div>
//           </RoadblockModal>
//         )}
//       </div>
//     )}
//   </ModalStateContainer>
// )
