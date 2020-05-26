import * as React from "react"

import {
  GlobalNotification,
  Icon,
  Layout,
  Link,
  Menu,
  NavigationBar,
  Text,
  ToastNotification,
} from "@kaizen/component-library"
const academyIcon = require("@kaizen/component-library/icons/academy.icon.svg")
  .default
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default
const supportIcon = require("@kaizen/component-library/icons/support.icon.svg")
  .default
import { TitleBlock } from "@kaizen/draft-title-block"

export default {
  title: "Layout (React)",
}

export const Default = () => (
  <div
    style={{
      flexGrow: 1,
    }}
  >
    <Layout>
      <Layout.NavigationBar>
        <NavigationBar>
          {{
            primary: [
              <Link text="Home" href="/" active />,
              <Link text="Surveys" href="/" />,
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
                ]}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "3px",
                    color: "#F8A6AE",
                  }}
                >
                  <Icon
                    icon={caMonogramIcon}
                    title="Culture Amp Logo"
                    inheritSize
                  />
                </div>
              </Menu>,
            ],
          }}
        </NavigationBar>
      </Layout.NavigationBar>

      <Layout.Sidebar>
        <Text tag="h2">Actions</Text>
        <Text tag="p">Go here...</Text>

        <Text tag="h2">Filters</Text>
        <Text tag="p">Go here...</Text>
        <Text tag="p">
          Note: Usually the navigation bar and sidebar will not scroll as the
          main page content scrolls, but we have disabled the fixed positioning
          for this demo.
        </Text>
      </Layout.Sidebar>

      <Layout.Header>
        <GlobalNotification type="affirmative" automationId="notification1">
          Welcome back!
        </GlobalNotification>
      </Layout.Header>
      <Layout.Footer>
        <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
          <Text tag="p" style="small">
            © Culture Amp 2019
          </Text>
        </div>
      </Layout.Footer>
      <Layout.Toasts>
        <ToastNotification
          automationId="notification1"
          type="affirmative"
          title="Success!"
        >
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded.
          <a href="/">Manage users is now available</a>
        </ToastNotification>
      </Layout.Toasts>
      <Layout.Announcers>Announcers</Layout.Announcers>

      <div>
        <Text tag="h1">This is a Page Title (H1)</Text>
        <Text tag="p" style="lede">
          Dr. Brené Brown, author of Daring Greatly, is a research professor
          from the University of Houston who studies human emotions, including
          shame and vulnerability.
        </Text>

        <Text tag="p">
          In a March 2012 TED talk, she said, “Vulnerability is not weakness,
          and that myth is profoundly dangerous.” She went on to say that after
          12 years of research, she has actually determined that vulnerability
          is “our most accurate measurement of courage.”
        </Text>
      </div>
    </Layout>
  </div>
)

export const WithTitleBlock = () => (
  <div
    style={{
      flexGrow: 1,
    }}
  >
    <Layout>
      <Layout.NavigationBar>
        <NavigationBar>
          {{
            primary: [
              <Link text="Home" href="/" active />,
              <Link text="Surveys" href="/" />,
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
                ]}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "3px",
                    color: "#F8A6AE",
                  }}
                >
                  <Icon
                    icon={caMonogramIcon}
                    title="Culture Amp Logo"
                    inheritSize
                  />
                </div>
              </Menu>,
            ],
          }}
        </NavigationBar>
      </Layout.NavigationBar>
      <Layout.Footer>
        <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
          <Text tag="p" style="small">
            © Culture Amp 2019
          </Text>
        </div>
      </Layout.Footer>
      <div style={{ height: "1000rem", paddingTop: "3rem" }}>
        <TitleBlock
          title="Home"
          subtitle="Subtitle goes here"
          breadcrumb={{ path: "#", text: "Back to reports" }}
        />
      </div>
    </Layout>
  </div>
)

WithTitleBlock.story = {
  name: "With TitleBlock",
}
