import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { InlineNotification } from "@kaizen/notification"
import { Button } from "@kaizen/draft-button"
import { TextField } from "@kaizen/draft-form"
import {
  ConfirmationModal,
  GenericModal,
  InformationModal,
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
import { Negative, ExecutiveReportSharing } from "@kaizen/draft-illustration"
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
          "import { ConfirmationModal, GenericModal, InformationModal, InputEditModal, " +
          "ModalAccessibleDescription, ModalAccessibleLabel, ModalBody, ModalFooter, " +
          'ModalHeader } from "@kaizen/draft-modal"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A35440"
    ),
    chromatic: {
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
  },
  decorators: [withDesign, withMinHeight],
}

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

ConfirmationPositiveKaizenSiteDemo.story =
  "Confirmation (positive) (Kaizen Site Demo)"

export const ConfirmationInformative = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ConfirmationModal
          isOpen={isOpen}
          type="informative"
          title="Informative title"
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

ConfirmationInformative.story = "Confirmation (informative)"

export const ConfirmationCautionary = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ConfirmationModal
          isOpen={isOpen}
          type="cautionary"
          title="Cautionary title"
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

ConfirmationCautionary.story = "Confirmation (cautionary)"

export const ConfirmationNegative = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ConfirmationModal
          isOpen={isOpen}
          type="negative"
          title="Negative title"
          onConfirm={close}
          onDismiss={close}
        >
          <div style={{ textAlign: "center" }}>
            <Paragraph tag="p" variant="body">
              Modals contain smaller pieces of content and can provide
              additional information to aid the user.
            </Paragraph>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationNegative.story = "Confirmation (negative)"

export const ConfirmationWorkingButton = () => (
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
          confirmWorking={{ label: "Working…" }}
        >
          <div style={{ textAlign: "center" }}>
            <Paragraph tag="p" variant="body">
              Modals contain smaller pieces of content and can provide
              additional information to aid the user.
            </Paragraph>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationWorkingButton.storyName = "Confirmation w/ 'working' button"

export const InputEditPositive = () => (
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
            <div style={{ textAlign: "center" }}>
              <ModalAccessibleDescription>
                <Paragraph variant="body">
                  Instructive text to drive user selection goes here.
                </Paragraph>
              </ModalAccessibleDescription>
              <Paragraph variant="body">
                Instructive text to drive user selection goes here.
              </Paragraph>
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
)

InputEditPositive.story = "Input-edit (positive)"

export const InputEditPositiveRtlLocale = () => (
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
            <div style={{ textAlign: "center" }}>
              <ModalAccessibleDescription>
                <Paragraph tag="p" variant="body">
                  Instructive text to drive user selection goes here.
                </Paragraph>
              </ModalAccessibleDescription>
              <Paragraph tag="p" variant="body">
                Instructive text to drive user selection goes here.
              </Paragraph>
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
)

InputEditPositiveRtlLocale.storyName = "Input-edit (positive, rtl locale)"

export const InputEditNegative = () => (
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
            <div style={{ textAlign: "center" }}>
              <ModalAccessibleDescription>
                <Paragraph variant="body">
                  Instructive text to drive user selection goes here.
                </Paragraph>
              </ModalAccessibleDescription>
              <Paragraph variant="body">
                Instructive text to drive user selection goes here.
              </Paragraph>
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
)

InputEditNegative.storyName = "Input-edit (negative)"

export const InputEditWorkingButton = () => (
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
          submitWorking={{ label: "Submitting…" }}
        >
          <form>
            <div style={{ textAlign: "center" }}>
              <ModalAccessibleDescription>
                <Paragraph variant="body">
                  Instructive text to drive user selection goes here.
                </Paragraph>
              </ModalAccessibleDescription>
              <Paragraph variant="body">
                Instructive text to drive user selection goes here.
              </Paragraph>
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
)

InputEditWorkingButton.storyName = "Input-edit w/ working button"

export const InformationWithAction = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InformationModal
          isOpen={isOpen}
          title="Information modal title"
          onConfirm={close}
          onDismiss={close}
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
            </li>
          </ul>
          <Paragraph variant="body">
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Paragraph>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithAction.storyName = "Information (with action)"

export const InformationWithoutAction = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InformationModal
          isOpen={isOpen}
          title="Information modal title"
          onDismiss={close}
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
            </li>
          </ul>
          <Paragraph variant="body">
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Paragraph>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithoutAction.storyName = "Information (without action)"

export const InformationWithBackground = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InformationModal
          isOpen={isOpen}
          title="Information modal title"
          onDismiss={close}
          renderBackground={() => (
            <div className={styles.background}>
              <div className={styles.illustration} />
            </div>
          )}
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
            </li>
          </ul>
          <Paragraph variant="body">
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Paragraph>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithBackground.storyName = "Information (with background)"

export const InformationWithSecondaryAction = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InformationModal
          secondaryLabel="Keep using Edge"
          onSecondaryAction={close}
          confirmLabel="Open in Edge"
          onConfirm={close}
          isOpen={isOpen}
          title="Information modal title"
          onDismiss={close}
          renderBackground={() => (
            <div className={styles.background}>
              <div className={styles.illustration} />
            </div>
          )}
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Paragraph>
            </li>
            <li>
              <Paragraph variant="body">Lorem ipsum dolor sit amet.</Paragraph>
            </li>
          </ul>
          <Paragraph variant="body">
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Paragraph>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithSecondaryAction.storyName = "Information (with secondary action)"

export const InformationModalWithImage = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InformationModal
          secondaryLabel="Continue with current browser"
          onSecondaryAction={close}
          confirmLabel="Launch in Edge"
          onConfirm={close}
          isOpen={isOpen}
          title="You're using an outdated browser"
          onDismiss={close}
          image={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Negative alt="stock" />
              <div style={{ flex: "1" }} />
              <Paragraph variant="small" color="dark-reduced-opacity">
                Cool kids don't use IE11 just sayin
              </Paragraph>
            </div>
          }
        >
          <ModalAccessibleDescription>
            <Heading variant="heading-4">
              Internet Explorer 11 is no longer supported by Culture Amp
            </Heading>
          </ModalAccessibleDescription>
          <Padding />
          <Paragraph variant="body">
            You can continue to use Culture Amp, however some features may not
            display correctly. For the best experience, we recommend switching
            to Microsoft Edge, or a similar modern browser.
          </Paragraph>
          <Padding />
          <Paragraph variant="body">
            We've detected you already have Edge installed. Click the link below
            to continue your session in Edge.
          </Paragraph>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationModalWithImage.story =
  "Information (with image) - Outdated browser demo"

const InformationModalContent = () => (
  <>
    <ModalAccessibleDescription>
      <Heading variant="heading-4">
        The responses to these questions will be shared with Carlos Quintero:
      </Heading>
    </ModalAccessibleDescription>
    <Padding />
    <Paragraph variant="body">
      • What did this person achieve over the last 6 months? What specific
      impact did they have on the team’s goals?
    </Paragraph>
    <Padding />
    <Paragraph variant="body">
      • What progress have they made on their learning and development goals?
    </Paragraph>
    <Padding />
    <Paragraph variant="body">
      • What are 2-3 skills or competencies you'd like them to focus on for
      further development?
    </Paragraph>
  </>
)

export const InformationModalWithNotification = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <InformationModal
          secondaryLabel="Cancel"
          onSecondaryAction={close}
          confirmLabel="Share"
          onConfirm={close}
          isOpen={isOpen}
          title="Share review"
          onDismiss={close}
          contentHeader={
            <InlineNotification
              type="cautionary"
              title="Sharing"
              autohide={false}
              hideCloseIcon={true}
              noBottomMargin={true}
            >
              Once the review has been shared, it can't be unshared
            </InlineNotification>
          }
          image={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <ExecutiveReportSharing alt="stock" />
            </div>
          }
        >
          <InformationModalContent />
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationModalWithNotification.story =
  "Information (with Inline Notification)"

export const InformationModalWithWorkingButton = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <ModalStateContainer isInitiallyOpen={false}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <InformationModal
            secondaryLabel="Cancel"
            onSecondaryAction={() => {
              setIsLoading(false)
              close()
            }}
            confirmLabel="Share"
            onConfirm={() => {
              setIsLoading(true)
            }}
            isOpen={isOpen}
            title="Share review"
            onDismiss={() => {
              setIsLoading(false)
              close()
            }}
            confirmWorking={{ label: "Sharing review…" }}
            contentHeader={
              <InlineNotification
                type="cautionary"
                title="Sharing"
                autohide={false}
                hideCloseIcon={true}
                noBottomMargin={true}
              >
                Once the review has been shared, it can't be unshared
              </InlineNotification>
            }
            image={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <ExecutiveReportSharing alt="stock" />
              </div>
            }
          >
            <InformationModalContent />
          </InformationModal>
        </div>
      )}
    </ModalStateContainer>
  )
}

InformationModalWithWorkingButton.story = "Information (with working button)"

export const GenericModalPadded = () => (
  <>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <GenericModal
            isOpen={isOpen}
            onEscapeKeyup={close}
            onOutsideModalClick={close}
          >
            <div className={styles.genericModal}>
              <ModalHeader onDismiss={close}>
                <ModalAccessibleLabel>
                  Modal label and header
                </ModalAccessibleLabel>
              </ModalHeader>
              <ModalBody>
                <ModalAccessibleDescription>
                  Modal description
                </ModalAccessibleDescription>
                Body
              </ModalBody>
              <ModalFooter
                actions={[
                  {
                    label: "Confirm",
                    onClick: () => close(),
                  },
                ]}
              >
                Footer
              </ModalFooter>
            </div>
          </GenericModal>
        </div>
      )}
    </ModalStateContainer>
  </>
)

GenericModalPadded.storyName = "Generic modal (padded)"

export const GenericModalUnpadded = () => (
  <>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <GenericModal
            isOpen={isOpen}
            onEscapeKeyup={close}
            onOutsideModalClick={close}
          >
            <div className={styles.genericModal}>
              <ModalHeader onDismiss={close} unpadded>
                <ModalAccessibleLabel>
                  Modal label and header
                </ModalAccessibleLabel>
              </ModalHeader>
              <ModalBody unpadded>
                <ModalAccessibleDescription>
                  Modal description
                </ModalAccessibleDescription>
                Body
              </ModalBody>
              <ModalFooter
                actions={[
                  {
                    label: "Confirm",
                    onClick: () => close(),
                  },
                ]}
                unpadded
              >
                Footer
              </ModalFooter>
            </div>
          </GenericModal>
        </div>
      )}
    </ModalStateContainer>
  </>
)

GenericModalUnpadded.storyName = "Generic modal (unpadded)"

export const GenericModalWithoutAction = () => (
  <>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <Button label="Open modal" onClick={open} />
          <GenericModal
            isOpen={isOpen}
            onEscapeKeyup={close}
            onOutsideModalClick={close}
          >
            <div className={styles.genericModal}>
              <ModalHeader onDismiss={close}>
                <ModalAccessibleLabel>
                  Modal label and header
                </ModalAccessibleLabel>
              </ModalHeader>
              <ModalBody>
                <ModalAccessibleDescription>
                  Modal description
                </ModalAccessibleDescription>
                Body
              </ModalBody>
            </div>
          </GenericModal>
        </div>
      )}
    </ModalStateContainer>
  </>
)

GenericModalWithoutAction.storyName = "Generic modal (without action)"

export const TestScrollingModalAndScrollingContent = () => (
  <>
    <ModalStateContainer isInitiallyOpen={isChromatic()}>
      {({ open, close, isOpen }) => (
        <div>
          <div style={{ height: "500px", background: "whitesmoke" }}>
            Placeholder for long content that causes the page to scroll
          </div>
          <Button label="Open really long modal" onClick={open} />
          <div style={{ height: "1000px", background: "whitesmoke" }}>
            Placeholder for long content that causes the page to scroll
          </div>
          <ConfirmationModal
            isOpen={isOpen}
            type="negative"
            title="Negative title"
            onConfirm={close}
            onDismiss={close}
          >
            <div style={{ height: "900px", background: "whitesmoke" }}>
              Placeholder for long content that causes the modal to scroll
            </div>
          </ConfirmationModal>
        </div>
      )}
    </ModalStateContainer>
  </>
)

TestScrollingModalAndScrollingContent.storyName =
  "Test - scrolling modal and scrolling content"

export const NestedModal = () => (
  <ModalStateContainer isInitiallyOpen={false}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <ModalStateContainer isInitiallyOpen={false}>
          {internal => (
            <>
              <ConfirmationModal
                isOpen={isOpen}
                type="positive"
                title="Positive title"
                onConfirm={internal.open}
                onDismiss={close}
                confirmLabel={"Go deeper"}
              >
                <div style={{ textAlign: "center" }}>
                  <Paragraph variant="body">
                    Modals contain smaller pieces of content and can provide
                    additional information to aid the user.
                  </Paragraph>
                </div>
              </ConfirmationModal>
              <ConfirmationModal
                isOpen={internal.isOpen}
                type="negative"
                title="Inception"
                onConfirm={internal.close}
                onDismiss={internal.close}
              >
                <div style={{ textAlign: "center" }}>
                  <Paragraph variant="body">
                    Whoa, this is, like, deep.
                  </Paragraph>
                </div>
              </ConfirmationModal>
            </>
          )}
        </ModalStateContainer>
      </div>
    )}
  </ModalStateContainer>
)

NestedModal.storyName = "Nested confirmation modal"
NestedModal.parameters = {
  chromatic: { disable: true },
}

export const Roadblock = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        <RoadblockModal
          isOpen={isOpen}
          title="Roadblock title"
          onDismiss={close}
        >
          <div style={{ textAlign: "center" }}>
            <Paragraph variant="body">
              Tell users why they're unable to proceed and what needs to happen
              first.
            </Paragraph>
          </div>
        </RoadblockModal>
      </div>
    )}
  </ModalStateContainer>
)

Roadblock.storyName = "Roadblock"

export const MountAndUnmountControlledByParentModal = () => (
  <ModalStateContainer isInitiallyOpen={isChromatic()}>
    {({ open, close, isOpen }) => (
      <div>
        <Button label="Open modal" onClick={open} />
        {isOpen && (
          <RoadblockModal
            isOpen={isOpen}
            title="Roadblock title"
            onDismiss={close}
          >
            <div style={{ textAlign: "center" }}>
              <Paragraph variant="body">
                Tell users why they're unable to proceed and what needs to
                happen first.
              </Paragraph>
            </div>
          </RoadblockModal>
        )}
      </div>
    )}
  </ModalStateContainer>
)
