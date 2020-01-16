import { loadElmStories } from "@cultureamp/elm-storybook"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Button } from "../"
import { Text } from "../"
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

storiesOf("Modal (React)", module)
  .add("Confirmation (positive) (Kaizen Site Demo)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Confirmation (informative)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Confirmation (cautionary)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Confirmation (negative)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Input-edit (positive)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
                  inputValue="rod.leviton@cultureamp.com"
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
  ))

  .add("Input-edit (positive, rtl locale)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
                  inputValue="rod.leviton@cultureamp.com"
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
  ))

  .add("Input-edit (negative)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
                  inputValue="rod.leviton@cultureamp.com"
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
  ))

  .add("Information (with action)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Information (without action)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Information (with background)", () => (
    <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Generic modal (padded)", () => (
    <>
      <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Generic modal (unpadded)", () => (
    <>
      <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Generic modal (without action)", () => (
    <>
      <ModalStateContainer isInitiallyOpen={true}>
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
  ))

  .add("Test - scrolling modal and scrolling content", () => (
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
  ))

loadElmStories("Modal (Elm)", module, require("./ModalStories.elm"), [
  "Generic",
  "Confirmation (Informative)",
])
