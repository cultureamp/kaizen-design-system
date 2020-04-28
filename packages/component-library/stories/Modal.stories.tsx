import { action } from "@storybook/addon-actions"
import * as React from "react"
import { Button, Text } from "../"
import { TextField } from "../draft/Kaizen/Form/TextField"
import {
  ConfirmationModal,
  GenericModal,
  InformationModal,
  InputEditModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../draft/Kaizen/Modal"
const lockIcon = require("../icons/lock.icon.svg").default
const userIcon = require("../icons/user.icon.svg").default

const styles = require("./Modal.stories.scss")

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
            <Text tag="p" style="lede" inline>
              Additional subtext to aid the user can be added here.
            </Text>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationPositiveKaizenSiteDemo.story = {
  name: "Confirmation (positive) (Kaizen Site Demo)",
}

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
            <Text tag="p" style="lede" inline>
              Additional subtext to aid the user can be added here.
            </Text>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationInformative.story = {
  name: "Confirmation (informative)",
}

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
            <Text tag="p" style="lede" inline>
              Additional subtext to aid the user can be added here.
            </Text>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationCautionary.story = {
  name: "Confirmation (cautionary)",
}

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
            <Text tag="p" style="lede" inline>
              Additional subtext to aid the user can be added here.
            </Text>
          </div>
        </ConfirmationModal>
      </div>
    )}
  </ModalStateContainer>
)

ConfirmationNegative.story = {
  name: "Confirmation (negative)",
}

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
                <Text tag="p" inline>
                  Instructive text to drive user selection goes here.
                </Text>
              </ModalAccessibleDescription>
              <Text tag="p">
                Instructive text to drive user selection goes here.
              </Text>
            </div>
            <div>
              <TextField
                id="email"
                inputType="email"
                inputValue="mackenzie@example.com"
                labelText="Email"
                placeholder="Please enter your email"
                onChange={action("user input")}
                icon={userIcon}
              />
              <TextField
                id="password"
                inputType="password"
                inputValue="123445555"
                labelText="Password"
                placeholder="Please enter your password"
                onChange={action("user input")}
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

InputEditPositive.story = {
  name: "Input-edit (positive)",
}

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
                <Text tag="p" inline>
                  Instructive text to drive user selection goes here.
                </Text>
              </ModalAccessibleDescription>
              <Text tag="p">
                Instructive text to drive user selection goes here.
              </Text>
            </div>
            <div>
              <TextField
                id="email"
                inputType="email"
                inputValue="mackenzie@example.com"
                labelText="Email"
                placeholder="Please enter your email"
                onChange={action("user input")}
                icon={userIcon}
              />
              <TextField
                id="password"
                inputType="password"
                inputValue="123445555"
                labelText="Password"
                placeholder="Please enter your password"
                onChange={action("user input")}
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

InputEditPositiveRtlLocale.story = {
  name: "Input-edit (positive, rtl locale)",
}

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
                <Text tag="p" inline>
                  Instructive text to drive user selection goes here.
                </Text>
              </ModalAccessibleDescription>
              <Text tag="p">
                Instructive text to drive user selection goes here.
              </Text>
            </div>
            <div>
              <TextField
                id="email"
                inputType="email"
                inputValue="mackenzie@example.com"
                labelText="Email"
                placeholder="Please enter your email"
                onChange={action("user input")}
                icon={userIcon}
              />
              <TextField
                id="password"
                inputType="password"
                inputValue="123445555"
                labelText="Password"
                placeholder="Please enter your password"
                onChange={action("user input")}
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

InputEditNegative.story = {
  name: "Input-edit (negative)",
}

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
            <Text tag="p">
              Intro defining what the modal is trying to explain or depict.
              Intro defining what the modal is trying to explain or depict.
            </Text>
          </ModalAccessibleDescription>
          <ul>
            <li>
              <Text tag="div">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </li>
            <li>
              <Text tag="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Text>
            </li>
            <li>
              <Text tag="div">Lorem ipsum dolor sit amet.</Text>
            </li>
          </ul>
          <Text tag="p" inline>
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Text>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithAction.story = {
  name: "Information (with action)",
}

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
            <Text tag="p">
              Intro defining what the modal is trying to explain or depict.
              Intro defining what the modal is trying to explain or depict.
            </Text>
          </ModalAccessibleDescription>
          <ul>
            <li>
              <Text tag="div">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </li>
            <li>
              <Text tag="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Text>
            </li>
            <li>
              <Text tag="div">Lorem ipsum dolor sit amet.</Text>
            </li>
          </ul>
          <Text tag="p" inline>
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Text>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithoutAction.story = {
  name: "Information (without action)",
}

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
            <Text tag="p">
              Intro defining what the modal is trying to explain or depict.
              Intro defining what the modal is trying to explain or depict.
            </Text>
          </ModalAccessibleDescription>
          <ul>
            <li>
              <Text tag="div">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </li>
            <li>
              <Text tag="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi.
              </Text>
            </li>
            <li>
              <Text tag="div">Lorem ipsum dolor sit amet.</Text>
            </li>
          </ul>
          <Text tag="p" inline>
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Text>
        </InformationModal>
      </div>
    )}
  </ModalStateContainer>
)

InformationWithBackground.story = {
  name: "Information (with background)",
}

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

GenericModalPadded.story = {
  name: "Generic modal (padded)",
}

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

GenericModalUnpadded.story = {
  name: "Generic modal (unpadded)",
}

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

GenericModalWithoutAction.story = {
  name: "Generic modal (without action)",
}

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

TestScrollingModalAndScrollingContent.story = {
  name: "Test - scrolling modal and scrolling content",
}
