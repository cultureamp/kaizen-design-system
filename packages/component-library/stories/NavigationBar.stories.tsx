import { storiesOf } from "@storybook/react"
import * as React from "react"

import {
  Icon,
  Link,
  Menu,
  NavigationBar,
} from "@kaizen/component-library"
const academyIcon = require("@kaizen/component-library/icons/academy.icon.svg")
  .default
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const supportIcon = require("@kaizen/component-library/icons/support.icon.svg")
  .default

storiesOf("NavigationBar (React)", module)
  .add("Default", () => (
    <NavigationBar>
      <Link text="Home" href="/" active />
      <Link text="Surveys" href="/" />
      <Link text="Performance" href="/" notificationText="New" />
      <Link
        icon={supportIcon}
        text="Support"
        href="http://academy.cultureamp.com/"
        secondary
      />
      <Link
        icon={academyIcon}
        text="Academy"
        href="http://academy.cultureamp.com/"
        secondary
      />
      <Menu
        heading="Custom menu..."
        items={[
          {
            label: "About Culture Amp",
            url: "https://www.cultureamp.com/",
          },
          {
            label: "Contribute to this guide",
            url:
              "https://github.com/cultureamp/cultureamp-style-guide/tree/master/guide",
          },
          {
            label: "Sign out",
            url: "http://localhost:3000/session/sign_out",
            method: "delete",
          },
          {
            label: "Stop Masquerading",
            url: "http://localhost:3000/admin/masquerade/",
            method: "delete",
          },
        ]}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "3px",
            color: "#F8A6AE",
          }}
        >
          <Icon icon={caMonogramIcon} title="Culture Amp Logo" inheritSize />
        </div>
      </Menu>
    </NavigationBar>
  ))

  .add("Loading", () => (
    <NavigationBar loading>
      <Link text="Home" href="/" active />
      <Link
        icon={academyIcon}
        text="Support"
        href="http://academy.cultureamp.com/"
        secondary
      />
      <Menu
        heading="Custom menu..."
        items={[
          {
            label: "About Culture Amp",
            url: "https://www.cultureamp.com/",
          },
          {
            label: "Contribute to this guide",
            url:
              "https://github.com/cultureamp/cultureamp-style-guide/tree/master/guide",
          },
        ]}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "3px",
            color: "#F8A6AE",
          }}
        >
          <Icon icon={caMonogramIcon} title="Culture Amp Logo" inheritSize />
        </div>
      </Menu>
    </NavigationBar>
  ))

  .add("Kaizen Colors", () => (
    <NavigationBar colorScheme="kaizen">
      <Link text="Home" href="/" active />
      <Link text="Guidelines" href="/" />
      <Link text="Components" href="/" />
      <Link text="Status" href="/" />
      <Menu
        heading="Custom menu..."
        items={[
          {
            label: "About Culture Amp",
            url: "https://www.cultureamp.com/",
          },
          {
            label: "Contribute to this guide",
            url:
              "https://github.com/cultureamp/cultureamp-style-guide/tree/master/guide",
          },
        ]}
      />
    </NavigationBar>
  ))

  .add("Empty", () => <NavigationBar />)
