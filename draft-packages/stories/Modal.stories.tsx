import { Paragraph } from "@kaizen/component-library"
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

import * as React from "react"
import lockIcon from "@kaizen/component-library/icons/lock.icon.svg"
import userIcon from "@kaizen/component-library/icons/user.icon.svg"

import styles from "./Modal.stories.scss"

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
  title: "Modal (React)",
  component: ConfirmationModal,
  parameters: {
    info: {
      text: `
      import { ConfirmationModal, GenericModal, InformationModal, InputEditModal, ModalAccessibleDescription, ModalAccessibleLabel, ModalBody, ModalFooter, ModalHeader } from "@kaizen/draft-modal"
      `,
    },
  },
}

export const ConfirmationPositiveKaizenSiteDemo = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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

ConfirmationPositiveKaizenSiteDemo.storyName =
  "Confirmation (positive) (Kaizen Site Demo)"

export const ConfirmationInformative = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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

ConfirmationInformative.storyName = "Confirmation (informative)"

export const ConfirmationCautionary = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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

ConfirmationCautionary.storyName = "Confirmation (cautionary)"

export const ConfirmationNegative = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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

ConfirmationNegative.storyName = "Confirmation (negative)"

export const InputEditPositive = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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

InputEditPositive.storyName = "Input-edit (positive)"

export const InputEditPositiveRtlLocale = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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
  <ModalStateContainer isInitiallyOpen={false}>
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

export const InformationWithAction = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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
  <ModalStateContainer isInitiallyOpen={false}>
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
  <ModalStateContainer isInitiallyOpen={false}>
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

export const GenericModalPadded = () => (
  <>
    <ModalStateContainer isInitiallyOpen={false}>
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
                    action: () => close(),
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
    <ModalStateContainer isInitiallyOpen={false}>
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
                    action: () => close(),
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
    <ModalStateContainer isInitiallyOpen={false}>
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
    <ModalStateContainer isInitiallyOpen={false}>
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

export const Roadblock = () => (
  <ModalStateContainer isInitiallyOpen={false}>
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
