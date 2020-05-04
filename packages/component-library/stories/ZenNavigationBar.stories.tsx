import * as React from "react"

import { Icon } from "@kaizen/component-library"
import {
  Link,
  Menu,
  ZenNavigationBar,
} from "@kaizen/component-library/draft/Kaizen/ZenNavigationBar"

const caIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const academyIcon = require("@kaizen/component-library/icons/academy.icon.svg")
  .default
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const supportIcon = require("@kaizen/component-library/icons/support.icon.svg")
  .default

export default {
  title: "ZenNavigationBar (React)",
}

const handleNavigationChange = event => {
  event.preventDefault()
}

const accountMenuBtn = (
  <div
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "7px",
      color: "#F8A6AE",
    }}
  >
    <Icon icon={caMonogramIcon} title="Culture Amp Logo" inheritSize />
  </div>
)

const mobileHeaderComponent = (
  <div
    style={{
      width: "100%",
      padding: "24px 12px",
      backgroundColor: "#E6F0F7",
      color: "#0168B3",
      fontFamily: "sans-serif",
      boxSizing: "border-box",
    }}
  >
    Switch to performance
  </div>
)

const footerComponent = (
  <div
    style={{
      borderTop: "1px solid #eee",
      height: "inherit",
      backgroundColor: "#fff",
    }}
  >
    Footer test
  </div>
)

export const Default = () => (
  <ZenNavigationBar onNavigationChange={handleNavigationChange}>
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
          {accountMenuBtn}
        </Menu>,
      ],
    }}
  </ZenNavigationBar>
)

export const Loading = () => (
  <ZenNavigationBar loading>
    {{
      primary: [<Link text="Home" href="/" active />],
      secondary: [],
      final: [
        <Link
          icon={academyIcon}
          text="Support"
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
          ]}
        >
          {accountMenuBtn}
        </Menu>,
      ],
    }}
  </ZenNavigationBar>
)

export const ContentColors = () => (
  <ZenNavigationBar
    onNavigationChange={handleNavigationChange}
    colorScheme="content"
  >
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
          icon={supportIcon}
          text="Inbox"
          href="/"
          badge={{ kind: "notification", text: "55" }}
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
          {accountMenuBtn}
        </Menu>,
      ],
    }}
  </ZenNavigationBar>
)

export const MenuGroup = () => (
  <ZenNavigationBar
    onNavigationChange={handleNavigationChange}
    headerComponent={{
      mobile: <span>Mobile</span>,
      desktop: (
        <Menu
          icon={caIcon}
          opaque
          heading="Engagement"
          items={[
            {
              title: "Switch To",
              items: [
                {
                  label: "Skills",
                  url: "meh",
                  showArrowIcon: true,
                },
              ],
            },
          ]}
        />
      ),
    }}
  >
    {{
      primary: [
        <Link text="Home" href="/" active />,
        <Link text="Surveys" href="/" />,
        <Link
          text="Performance"
          href="/"
          badge={{ kind: "new", text: "New" }}
        />,
      ],
      secondary: [
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
          {accountMenuBtn}
        </Menu>,
      ],
    }}
  </ZenNavigationBar>
)

export const WithFooterAndHeaderComponents = () => (
  <ZenNavigationBar
    onNavigationChange={handleNavigationChange}
    footerComponent={footerComponent}
    headerComponent={{
      mobile: mobileHeaderComponent,
      desktop: (
        <Menu
          icon={caIcon}
          opaque
          heading="Engagement"
          items={[
            {
              title: "Switch To",
              items: [
                {
                  label: "Skills",
                  url: "meh",
                  showArrowIcon: true,
                },
              ],
            },
          ]}
        />
      ),
    }}
  >
    {{
      primary: [
        <Link text="Home" href="/" active />,
        <Link text="Surveys" href="/" />,
        <Link
          text="Performance"
          href="/"
          badge={{ kind: "new", text: "New" }}
        />,
      ],
      secondary: [
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
          {accountMenuBtn}
        </Menu>,
      ],
    }}
  </ZenNavigationBar>
)

export const Empty = () => <ZenNavigationBar />
