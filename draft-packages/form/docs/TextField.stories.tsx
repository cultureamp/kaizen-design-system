import colorTokens from "@kaizen/design-tokens/tokens/color.json"

import React, { useCallback, useRef } from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { withDesign } from "storybook-addon-designs"

import { TextField } from "@kaizen/draft-form"
import lockIcon from "@kaizen/component-library/icons/lock.icon.svg"
import userIcon from "@kaizen/component-library/icons/user.icon.svg"
import { figmaEmbed } from "../../../storybook/helpers"

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "98%", margin: "1%" }}>{children}</div>
)

const ReversedBg = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export default {
  title: "TextField (React)",
  component: TextField,
  parameters: {
    info: {
      text: `
      import { TextField } from "@kaizen/draft-form"
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14363%3A67837"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText={
        <div>
          This is a label with a{" "}
          <a href="http://google.com" target="_blank">
            link
          </a>
        </div>
      }
      placeholder="Please enter your email"
      onChange={() => undefined}
      description="Valid email addresses must have an @ and a suffix"
    />
  </ExampleContainer>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultInline = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      inline={true}
      description="Valid email addresses must have an @ and a suffix"
    />
  </ExampleContainer>
)

DefaultInline.storyName = "Default, Inline"

export const DefaultIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
    />
  </ExampleContainer>
)

DefaultIcon.storyName = "Default, Icon"

export const DefaultDisabled = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      disabled={true}
    />
  </ExampleContainer>
)

DefaultDisabled.storyName = "Default, Disabled"

export const DefaultDisabledWValue = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="craig@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      disabled={true}
    />
  </ExampleContainer>
)

DefaultDisabledWValue.storyName = "Default, Disabled w/ value"

export const DefaultDisabledIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      disabled={true}
    />
  </ExampleContainer>
)

DefaultDisabledIcon.storyName = "Default, Disabled + Icon"

export const DefaultSuccess = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="rod@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      status="success"
    />
  </ExampleContainer>
)

DefaultSuccess.storyName = "Default, Success"

export const DefaultSuccessIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="marc@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      status="success"
    />
  </ExampleContainer>
)

DefaultSuccessIcon.storyName = "Default, Success + Icon"

export const DefaultError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="super_cool999@hotmail.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      status="error"
      validationMessage="Your email address looks like it’s from 1996"
    />
  </ExampleContainer>
)

DefaultError.storyName = "Default, Error"

export const DefaultErrorIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="hello@oops"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      status="error"
    />
  </ExampleContainer>
)

DefaultErrorIcon.storyName = "Default, Error + Icon"

export const DefaultMultipleFields = () => (
  <ExampleContainer>
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
    />
  </ExampleContainer>
)

DefaultMultipleFields.storyName = "Default, Multiple Fields"

export const DefaultMultipleFieldsError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      status="error"
      inputType="email"
      inputValue="mackenzie@example.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      validationMessage="Please enter a valid email address"
    />
    <TextField
      id="password"
      status="error"
      inputType="password"
      inputValue="123445555"
      labelText="Password"
      placeholder="Please enter your password"
      onChange={() => undefined}
      icon={lockIcon}
      validationMessage="The password entered does not correctly match the provided email address"
    />
  </ExampleContainer>
)

DefaultMultipleFieldsError.storyName = "Default, Multiple Fields, Error"

export const Reversed = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
    />
  </ExampleContainer>
)

Reversed.parameters = {
  ...ReversedBg,
}

export const ReversedIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
      icon={userIcon}
    />
  </ExampleContainer>
)

ReversedIcon.storyName = "Reversed, Icon"
ReversedIcon.parameters = { ...ReversedBg }

export const ReversedDisabled = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
      disabled={true}
    />
  </ExampleContainer>
)

ReversedDisabled.storyName = "Reversed, Disabled"
ReversedDisabled.parameters = { ...ReversedBg }

export const ReversedDisabledWValue = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="craig@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
      disabled={true}
    />
  </ExampleContainer>
)

ReversedDisabledWValue.storyName = "Reversed, Disabled w/ value"
ReversedDisabledWValue.parameters = { ...ReversedBg }

export const ReversedDisabledIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
      icon={userIcon}
      disabled={true}
    />
  </ExampleContainer>
)

ReversedDisabledIcon.storyName = "Reversed, Disabled + Icon"
ReversedDisabledIcon.parameters = { ...ReversedBg }

export const ReversedSuccess = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="seb@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
      status="success"
    />
  </ExampleContainer>
)

ReversedSuccess.storyName = "Reversed,  Success"
ReversedSuccess.parameters = { ...ReversedBg }

export const ReversedSuccessIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="rod@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      reversed={true}
      status="success"
    />
  </ExampleContainer>
)

ReversedSuccessIcon.storyName = "Reversed, Success + Icon"
ReversedSuccessIcon.parameters = { ...ReversedBg }

export const ReversedError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="hello@oops"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      reversed={true}
      status="error"
      validationMessage="Your email address looks like it’s from 1996"
    />
  </ExampleContainer>
)

ReversedError.storyName = "Reversed, Error"
ReversedError.parameters = { ...ReversedBg }

export const ReversedErrorIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="hello@oops"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      reversed={true}
      status="error"
      validationMessage="Your email address looks like it’s from 1996"
    />
  </ExampleContainer>
)

ReversedErrorIcon.storyName = "Reversed, Error + Icon"
ReversedErrorIcon.parameters = { ...ReversedBg }

export const ReversedMultipleFields = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="mackenzie@example.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      reversed={true}
    />
    <TextField
      id="password"
      inputType="password"
      inputValue="123445555"
      labelText="Password"
      placeholder="Please enter your password"
      onChange={() => undefined}
      icon={lockIcon}
      reversed={true}
    />
  </ExampleContainer>
)

ReversedMultipleFields.storyName = "Reversed, Multiple Fields"
ReversedMultipleFields.parameters = { ...ReversedBg }

export const ReversedMultipleFieldsWError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      status="error"
      inputType="email"
      inputValue="mackenzie@example.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={() => undefined}
      icon={userIcon}
      validationMessage="Please enter a valid email address"
      reversed={true}
    />
    <TextField
      id="password"
      status="error"
      inputType="password"
      inputValue="123445555"
      labelText="Password"
      placeholder="Please enter your password"
      onChange={() => undefined}
      icon={lockIcon}
      validationMessage="The password entered does not correctly match the provided email addrress"
      reversed={true}
    />
  </ExampleContainer>
)

ReversedMultipleFieldsWError.storyName = "Reversed, Multiple Fields w/ Error"
ReversedMultipleFieldsWError.parameters = { ...ReversedBg }

export const DefaultFocusBlurEvents = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText={
        <div>
          This is a label with a{" "}
          <a href="http://google.com" target="_blank">
            link
          </a>
        </div>
      }
      placeholder="Please enter your email"
      onFocus={() => undefined}
      onBlur={() => undefined}
      onChange={() => undefined}
      description="Valid email addresses must have an @ and a suffix"
    />
  </ExampleContainer>
)

DefaultFocusBlurEvents.storyName = "Default, Focus/Blur events"

// More info about uncontrolled components:
//   https://reactjs.org/docs/uncontrolled-components.html
export const DefaultUncontrolled = () => {
  const ref = useRef<HTMLInputElement>(null)
  // This is just to confirm that the ref is working correctly
  const onSubmit = useCallback(e => {
    e.preventDefault()
    alert(`Entered text: ${ref.current && ref.current.value}`)
  }, [])

  return (
    <ExampleContainer>
      <form onSubmit={onSubmit}>
        <TextField
          id="uncontrolled"
          inputType="text"
          inputRef={ref}
          labelText="This is an uncontrolled text field"
          placeholder="Placeholder text"
          description="Press ENTER to test the inputRef property"
        />
      </form>
    </ExampleContainer>
  )
}

DefaultUncontrolled.storyName = "Default, Uncontrolled"

export const DefaultWithHtmlDescription = () => {
  const description = (
    <>
      The description may contain a link to further details - we recommended
      opening the link in a new tab with an
      <span style={{ position: "relative" }}>
        <Tooltip position="above" text="opens in new tab">
          <a
            href="https://cultureamp.design/guidelines/link-vs-button/#opens-in-new-tab-tooltip"
            target="_blank"
          >
            "opens in new tab" tooltip{" "}
          </a>
        </Tooltip>
      </span>
    </>
  )

  return (
    <ExampleContainer>
      <TextField
        id="default-with-html-description"
        labelText="This a text field with a HTML description"
        description={description}
      />
    </ExampleContainer>
  )
}

DefaultWithHtmlDescription.storyName = "Default w HTML description"
