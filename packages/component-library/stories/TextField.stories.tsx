import { loadElmStories } from "@cultureamp/elm-storybook"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { TextField } from "@cultureamp/kaizen-component-library/draft"
const lockIcon = require("@cultureamp/kaizen-component-library/icons/lock.icon.svg")
  .default
const userIcon = require("@cultureamp/kaizen-component-library/icons/user.icon.svg")
  .default

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "100%", margin: 10 }}>{children}</div>
)

storiesOf("TextField (React)", module)
  .add("Default (Kaizen Site Demo)", () => (
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
        description="Valid email addresses must have an @ and a suffix."
      />
    </ExampleContainer>
  ))
  .add("Default, Inline", () => (
    <ExampleContainer>
      <TextField
        id="email"
        inputType="email"
        inputValue=""
        labelText="Email"
        placeholder="Please enter your email"
        onChange={action("user input")}
        inline={true}
        description="Valid email addresses must have an @ and a suffix."
      />
    </ExampleContainer>
  ))
  .add("Default, Icon", () => (
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
  ))
  .add("Default, Disabled", () => (
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
  ))
  .add("Default, Disabled w/ value", () => (
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
  ))
  .add("Default, Disabled + Icon", () => (
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
  ))
  .add("Default, Success", () => (
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
  ))
  .add("Default, Success + Icon", () => (
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
  ))
  .add("Default, Error", () => (
    <ExampleContainer>
      <TextField
        id="email"
        inputType="email"
        inputValue="super_cool999@hotmail.com"
        labelText="Email"
        placeholder="Please enter your email"
        onChange={action("user input")}
        status="error"
        validationMessage="Your email address looks like it’s from 1996."
      />
    </ExampleContainer>
  ))
  .add("Default, Error + Icon", () => (
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
  ))
  .add("Default, Multiple Fields", () => (
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
  ))
  .add("Default, Multiple Fields, Error", () => (
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
        validationMessage="Please enter a valid email address."
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
        validationMessage="The password entered does not correctly match the provided email address."
      />
    </ExampleContainer>
  ))
  .add("Reversed", () => (
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
  ))
  .add("Reversed, Icon", () => (
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
  ))
  .add("Reversed, Disabled", () => (
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
  ))
  .add("Reversed, Disabled w/ value", () => (
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
  ))
  .add("Reversed, Disabled + Icon", () => (
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
  ))
  .add("Reversed,  Success", () => (
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
  ))
  .add("Reversed, Success + Icon", () => (
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
  ))

  .add("Reversed, Error", () => (
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
        validationMessage="Your email address looks like it’s from 1996."
      />
    </ExampleContainer>
  ))
  .add("Reversed, Error + Icon", () => (
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
        validationMessage="Your email address looks like it’s from 1996."
      />
    </ExampleContainer>
  ))
  .add("Reversed, Multiple Fields", () => (
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
  ))
  .add("Reversed, Multiple Fields w/ Error", () => (
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
        validationMessage="Please enter a valid email address."
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
        validationMessage="The password entered does not correctly match the provided email addrress."
        reversed={true}
      />
    </ExampleContainer>
  ))
  .add("Default, Focus/Blur events", () => (
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
        description="Valid email addresses must have an @ and a suffix."
      />
    </ExampleContainer>
  ))

loadElmStories("TextField (Elm)", module, require("./TextFieldStories.elm"), [
  "Default",
])
