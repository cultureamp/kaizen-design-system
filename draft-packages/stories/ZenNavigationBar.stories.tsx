import * as React from "react"

import { Button, Icon } from "@kaizen/component-library"
import { Link, Menu, ZenNavigationBar } from "@kaizen/draft-zen-navigation-bar"
import { ColorScheme } from "@kaizen/draft-zen-navigation-bar/KaizenDraft/ZenNavigationBar/types"
import caIcon from "@kaizen/component-library/icons/ca-monogram.icon.svg"
import academyIcon from "@kaizen/component-library/icons/academy.icon.svg"
import supportIcon from "@kaizen/component-library/icons/support.icon.svg"

export default {
  title: "ZenNavigationBar (React)",
}

const handleNavigationChange = event => {
  event.preventDefault()
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "-1rem", minHeight: "150px" }}>{children}</div>
)

const accountMenuBtn = (
  <div
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "7px",
      color: "#F8A6AE",
      width: "100%",
      height: "100%",
    }}
  >
    <Icon icon={caIcon} title="Culture Amp Logo" inheritSize />
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
  <Container>
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
        ],
        secondary: [
          <Link
            text="Inbox"
            href="/"
            badge={{ kind: "notification", text: "5" }}
          />,
        ],
        final: [
          <Link
            icon={supportIcon}
            text="Support"
            href="http://academy.cultureamp.com/"
          />,
          <Link
            tooltip="Opens in new tab"
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
  </Container>
)

export const Loading = () => (
  <Container>
    <ZenNavigationBar loading>
      {{
        primary: [<Link text="Home" href="/" active />],
        secondary: [
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
  </Container>
)

export const ContentColors = () => (
  <Container>
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
        secondary: [
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
  </Container>
)

export const AdminColours = () => {
  const [currentTheme, setCurrentTheme] = React.useState<ColorScheme>("admin")
  return (
    <Container>
      <ZenNavigationBar
        onNavigationChange={handleNavigationChange}
        colorScheme={currentTheme}
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
          secondary: [
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
      <div style={{ paddingTop: "5rem" }}>
        <Button
          label="Default Theme"
          disabled={currentTheme === "cultureamp"}
          onClick={() => setCurrentTheme("cultureamp")}
        />
        <Button
          label="Admin Theme"
          disabled={currentTheme === "admin"}
          onClick={() => setCurrentTheme("admin")}
        />
      </div>
    </Container>
  )
}

export const WithFooterAndHeaderComponents = () => (
  <Container>
    <ZenNavigationBar
      onNavigationChange={handleNavigationChange}
      footerComponent={footerComponent}
      colorScheme="admin"
      headerComponent={{
        mobile: mobileHeaderComponent,
        desktop: (
          <Menu
            icon={caIcon}
            opaque
            heading="Performance"
            items={[
              {
                title: "Switch To",
                items: [
                  {
                    label: "Engagement",
                    url: "/",
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
          <Link text="Performance" href="/" />,
        ],
        secondary: [
          <Menu
            heading="Admin"
            showIndicator
            items={[
              {
                label: "Skills",
                url: "/",
              },
              {
                label: "Self-reflections",
                url: "/",
              },
              {
                title: "Manager requested feedback",
                items: [
                  {
                    label: "Request history",
                    url: "/",
                  },
                  {
                    label: "Request feedback",
                    url: "/",
                  },
                ],
              },
              {
                title: "Usage stats",
                items: [
                  {
                    label: "Goal stats",
                    url: "/",
                  },
                  {
                    label: "Feedback stats",
                    url: "/",
                    badge: {
                      kind: "new",
                      text: "New",
                    },
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
            active
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
  </Container>
)
