import * as React from "react"

import { Icon, Link, Menu, NavigationBar } from "@kaizen/component-library"

const academyIcon = require("@kaizen/component-library/icons/academy.icon.svg")
  .default
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const supportIcon = require("@kaizen/component-library/icons/support.icon.svg")
  .default

export default {
  title: "NavigationBar (React)",
}

export const Default = () => (
  <NavigationBar>
    {{
      primary: [
        <Link text="Home" href="/" active />,
        <Link text="Surveys" href="/" />,
        <Link
          text="Performance"
          href="/"
          badge={{ kind: "new", text: "New" }}
        />,
        <Link
          text="Inbox"
          href="/"
          badge={{ kind: "notification", text: "5" }}
        />,
      ],
      secondary: [],
      final: [
        <Link
          icon={supportIcon}
          text="Support"
          href="http://academy.cultureamp.com/"
        />,
        <Link
          icon={academyIcon}
          text="Academy"
          href="http://academy.cultureamp.com/"
        />,
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
        </Menu>,
      ],
    }}
  </NavigationBar>
)

export const Loading = () => (
  <NavigationBar loading>
    {{
      primary: [<Link text="Home" href="/" active />],
      secondary: [
        <Link
          icon={academyIcon}
          text="Support"
          href="http://academy.cultureamp.com/"
        />,
      ],
      final: [
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
        </Menu>,
      ],
    }}
  </NavigationBar>
)

export const KaizenColors = () => (
  <NavigationBar colorScheme="kaizen">
    {{
      primary: [
        <Link text="Home" href="/" active />,
        <Link text="Guidelines" href="/" />,
        <Link text="Components" href="/" />,
        <Link text="Status" href="/" />,
        <Menu
          heading="Custom menu..."
          active={true}
          items={[
            {
              label: "About Culture Amp",
              url: "https://www.cultureamp.com/",
              active: true,
            },
            {
              label: "Contribute to this guide",
              url:
                "https://github.com/cultureamp/cultureamp-style-guide/tree/master/guide",
            },
          ]}
        />,
      ],
    }}
  </NavigationBar>
)

export const ContentColors = () => (
  <NavigationBar colorScheme="content">
    {{
      primary: [
        <Link text="Home" href="/" active />,
        <Link text="Surveys" href="/" />,
        <Link
          text="Performance"
          href="/"
          badge={{ kind: "new", text: "New" }}
        />,
        <Link
          text="Inbox"
          href="/"
          badge={{ kind: "notification", text: "55" }}
        />,
      ],

      secondary: [
        <Link
          icon={supportIcon}
          text="Support"
          href="http://academy.cultureamp.com/"
        />,
        <Link
          icon={academyIcon}
          text="Academy"
          href="http://academy.cultureamp.com/"
        />,
      ],
      final: [
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
        </Menu>,
      ],
    }}
  </NavigationBar>
)

export const MenuGroup = () => (
  <NavigationBar>
    {{
      primary: [
        <Link text="Home" href="/" active />,
        <Link text="Surveys" href="/" />,
        <Link
          text="Performance"
          href="/"
          badge={{ kind: "new", text: "New" }}
        />,
        <Menu
          heading="Admin"
          items={[
            {
              label: "Skills",
              url: "meh",
            },
            {
              label: "Self-reflections",
              url: "meh",
            },
            {
              title: "Manager requested feedback",
              items: [
                {
                  label: "Request history",
                  url: "meh",
                },
                {
                  label: "Request feedback",
                  url: "meh",
                },
              ],
            },
            {
              title: "Usage stats",
              items: [
                {
                  label: "Goal stats",
                  url: "meh",
                },
                {
                  label: "Feedback stats",
                  url: "meh",
                },
              ],
            },
          ]}
        />,
      ],
      secondary: [
        <Link
          icon={supportIcon}
          text="Support"
          href="http://academy.cultureamp.com/"
        />,
        <Link
          icon={academyIcon}
          text="Academy"
          href="http://academy.cultureamp.com/"
        />,
      ],
      final: [
        <Menu
          heading="Admin"
          items={[
            {
              label: "Skills",
              url: "meh",
            },
            {
              label: "Self-reflections",
              url: "meh",
            },
            {
              title: "Manager requested feedback",
              items: [
                {
                  label: "Request history",
                  url: "meh",
                },
                {
                  label: "Request feedback",
                  url: "meh",
                },
              ],
            },
            {
              title: "Usage stats",
              items: [
                {
                  label: "Goal stats",
                  url: "meh",
                },
                {
                  label: "Feedback stats",
                  url: "meh",
                },
              ],
            },
          ]}
        >
          <div
            style={{
              color: "white",
              fontFamily: "Ideal Sans A, sans-serif",
              marginRight: "20px",
              opacity: "0.8",
              fontWeight: "lighter",
              fontSize: "1rem",
            }}
          >
            Admin
          </div>
        </Menu>,
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
        </Menu>,
      ],
    }}
  </NavigationBar>
)

export const Empty = () => <NavigationBar />
