import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { action } from "@storybook/addon-actions"
import React, { useCallback, useRef } from "react"

import { TextField } from "@kaizen/draft-form"
const lockIcon = require("@kaizen/component-library/icons/lock.icon.svg")
  .default
const userIcon = require("@kaizen/component-library/icons/user.icon.svg")
  .default

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "98%", margin: "1%" }}>{children}</div>
)

const ReversedBg = {
  parameters: {
    backgrounds: [{ value: colorTokens.kz.color.wisteria[700], default: true }],
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
  },
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
      onChange={action("user input")}
      description="Valid email addresses must have an @ and a suffix"
    />
  </ExampleContainer>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const DefaultInline = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      inline={true}
      description="Valid email addresses must have an @ and a suffix"
    />
  </ExampleContainer>
)

DefaultInline.story = {
  name: "Default, Inline",
}

export const DefaultIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
    />
  </ExampleContainer>
)

DefaultIcon.story = {
  name: "Default, Icon",
}

export const DefaultDisabled = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      disabled={true}
    />
  </ExampleContainer>
)

DefaultDisabled.story = {
  name: "Default, Disabled",
}

export const DefaultDisabledWValue = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="craig@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      disabled={true}
    />
  </ExampleContainer>
)

DefaultDisabledWValue.story = {
  name: "Default, Disabled w/ value",
}

export const DefaultDisabledIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
      disabled={true}
    />
  </ExampleContainer>
)

DefaultDisabledIcon.story = {
  name: "Default, Disabled + Icon",
}

export const DefaultSuccess = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="rod@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      status="success"
    />
  </ExampleContainer>
)

DefaultSuccess.story = {
  name: "Default, Success",
}

export const DefaultSuccessIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="marc@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
      status="success"
    />
  </ExampleContainer>
)

DefaultSuccessIcon.story = {
  name: "Default, Success + Icon",
}

export const DefaultError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="super_cool999@hotmail.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      status="error"
      validationMessage="Your email address looks like it’s from 1996"
    />
  </ExampleContainer>
)

DefaultError.story = {
  name: "Default, Error",
}

export const DefaultErrorIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="hello@oops"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
      status="error"
    />
  </ExampleContainer>
)

DefaultErrorIcon.story = {
  name: "Default, Error + Icon",
}

export const DefaultMultipleFields = () => (
  <ExampleContainer>
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
    />
  </ExampleContainer>
)

DefaultMultipleFields.story = {
  name: "Default, Multiple Fields",
}

export const DefaultMultipleFieldsError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      status="error"
      inputType="email"
      inputValue="mackenzie@example.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
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
      onChange={action("user input")}
      icon={lockIcon}
      validationMessage="The password entered does not correctly match the provided email address"
    />
  </ExampleContainer>
)

DefaultMultipleFieldsError.story = {
  name: "Default, Multiple Fields, Error",
}

export const Reversed = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      reversed={true}
    />
  </ExampleContainer>
)

Reversed.story = {
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
      onChange={action("user input")}
      reversed={true}
      icon={userIcon}
    />
  </ExampleContainer>
)

ReversedIcon.story = {
  name: "Reversed, Icon",
  ...ReversedBg,
}

export const ReversedDisabled = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      reversed={true}
      disabled={true}
    />
  </ExampleContainer>
)

ReversedDisabled.story = {
  name: "Reversed, Disabled",
  ...ReversedBg,
}

export const ReversedDisabledWValue = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="craig@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      reversed={true}
      disabled={true}
    />
  </ExampleContainer>
)

ReversedDisabledWValue.story = {
  name: "Reversed, Disabled w/ value",
  ...ReversedBg,
}

export const ReversedDisabledIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue=""
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      reversed={true}
      icon={userIcon}
      disabled={true}
    />
  </ExampleContainer>
)

ReversedDisabledIcon.story = {
  name: "Reversed, Disabled + Icon",
  ...ReversedBg,
}

export const ReversedSuccess = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="seb@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      reversed={true}
      status="success"
    />
  </ExampleContainer>
)

ReversedSuccess.story = {
  name: "Reversed,  Success",
  ...ReversedBg,
}

export const ReversedSuccessIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="rod@cultureamp.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
      reversed={true}
      status="success"
    />
  </ExampleContainer>
)

ReversedSuccessIcon.story = {
  name: "Reversed, Success + Icon",
  ...ReversedBg,
}

export const ReversedError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="hello@oops"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      reversed={true}
      status="error"
      validationMessage="Your email address looks like it’s from 1996"
    />
  </ExampleContainer>
)

ReversedError.story = {
  name: "Reversed, Error",
  ...ReversedBg,
}

export const ReversedErrorIcon = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="hello@oops"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
      reversed={true}
      status="error"
      validationMessage="Your email address looks like it’s from 1996"
    />
  </ExampleContainer>
)

ReversedErrorIcon.story = {
  name: "Reversed, Error + Icon",
  ...ReversedBg,
}

export const ReversedMultipleFields = () => (
  <ExampleContainer>
    <TextField
      id="email"
      inputType="email"
      inputValue="mackenzie@example.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
      icon={userIcon}
      reversed={true}
    />
    <TextField
      id="password"
      inputType="password"
      inputValue="123445555"
      labelText="Password"
      placeholder="Please enter your password"
      onChange={action("user input")}
      icon={lockIcon}
      reversed={true}
    />
  </ExampleContainer>
)

ReversedMultipleFields.story = {
  name: "Reversed, Multiple Fields",
  ...ReversedBg,
}

export const ReversedMultipleFieldsWError = () => (
  <ExampleContainer>
    <TextField
      id="email"
      status="error"
      inputType="email"
      inputValue="mackenzie@example.com"
      labelText="Email"
      placeholder="Please enter your email"
      onChange={action("user input")}
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
      onChange={action("user input")}
      icon={lockIcon}
      validationMessage="The password entered does not correctly match the provided email addrress"
      reversed={true}
    />
  </ExampleContainer>
)

ReversedMultipleFieldsWError.story = {
  name: "Reversed, Multiple Fields w/ Error",
  ...ReversedBg,
}

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
      onFocus={action("onFocus fired")}
      onBlur={action("onBlur fired")}
      onChange={action("user input")}
      description="Valid email addresses must have an @ and a suffix"
    />
  </ExampleContainer>
)

DefaultFocusBlurEvents.story = {
  name: "Default, Focus/Blur events",
}

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

DefaultUncontrolled.story = {
  name: "Default, Uncontrolled",
}
