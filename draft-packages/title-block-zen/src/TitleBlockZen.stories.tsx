import { Box, Heading, Paragraph } from "@kaizen/component-library"
import * as React from "react"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import commentIcon from "@kaizen/component-library/icons/comment.icon.svg"
import starIcon from "@kaizen/component-library/icons/star-on.icon.svg"
import reportSharingIcon from "@kaizen/component-library/icons/report-sharing.icon.svg"
import arrowForwardIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import { assetUrl } from "@kaizen/hosted-assets"
import styles from "./TitleBlockZen.stories.scss"
import { NavigationTab, TitleBlockZen } from "."

export default {
  title: "TitleBlockZen (React)",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "-1rem" }}>{children}</div>
)

const SECONDARY_ACTIONS = [
  {
    label: "Secondary menu",
    menuItems: [
      {
        onClick: () => {
          alert("test")
        },
        label: "Secondary menu action 1",
      },
      {
        onClick: () => {
          alert("test")
        },
        label: "Secondary menu action 2",
        icon: starIcon,
      },
    ],
  },
  {
    onClick: () => {
      alert("test")
    },
    href: "foo",
    label: "Secondary action",
  },
]

export const Default = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Primary link",
        icon: addIcon,
        disabled: true,
        href: "#",
      }}
      defaultAction={{
        label: "Default link",
        href: "#",
      }}
      secondaryActions={SECONDARY_ACTIONS}
      secondaryOverflowMenuItems={[
        {
          action: () => {
            alert("test")
          },
          label: "Overflow action 1",
          icon: starIcon,
        },
        {
          action: "#",
          label: "Overflow link 1",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
      ]}
    />
  </Container>
)

Default.storyName = "Default"

export const WithBadge = () => {
  const [badgeCount, setBadgeCount] = React.useState(1)
  return (
    <Container>
      <TitleBlockZen
        title="Page title"
        surveyStatus={{ text: "Live", status: "live" }}
        primaryAction={{
          label: "Click Me",
          icon: arrowForwardIcon,
          iconPosition: "end",
          href: "#",
          onClick: () => setBadgeCount(b => b + 1),
          badge: {
            text: String(badgeCount),
            animateChange: true,
          },
        }}
        defaultAction={{
          label: "Default link",
          onClick: () => setBadgeCount(b => b + 1),
          href: "#",
        }}
        breadcrumb={{
          path: "#",
          text: "Back to home",
          handleClick: event => {
            alert("breadcrumb clicked!")
          },
        }}
      />
    </Container>
  )
}

WithBadge.storyName = "With Primary Action Badge"

export const WithDefaultTag = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Due July 8, 2030", status: "default" }}
      primaryAction={{
        label: "Click Me",
        icon: arrowForwardIcon,
        iconPosition: "end",
        href: "#",
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
    />
  </Container>
)

WithDefaultTag.storyName = "With Default Survey Status (Tag)"

export const AdminWithDefaultTag = () => (
  <Container>
    <TitleBlockZen
      variant="admin"
      title="Page title"
      surveyStatus={{ text: "Due July 8, 2030", status: "default" }}
      primaryAction={{
        label: "Click Me",
        icon: arrowForwardIcon,
        iconPosition: "end",
        href: "#",
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
    />
  </Container>
)

AdminWithDefaultTag.storyName = "Admin With Default Survey Status (Tag)"

export const DefaultWithMenuButton = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Menu button",
        menuItems: [
          {
            action: "#",
            label: "Item 1",
          },
          {
            action: () => {
              alert("Item 2 clicked")
            },
            label: "Item 2",
          },
          {
            action: "#",
            label: "Item 3",
          },
        ],
      }}
      defaultAction={{
        label: "Label",
        icon: addIcon,
      }}
      secondaryActions={SECONDARY_ACTIONS}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
      ]}
    />
  </Container>
)

DefaultWithMenuButton.storyName = "Default (Menu Button)"

export const AdminVariant = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      variant="admin"
      sectionTitle="Default questions"
      sectionTitleDescription={
        "Default questions are surfaced automatically for " +
        "managers when requesting feedback about their teams from colleagues. " +
        "Default questions are editable by managers."
      }
      primaryAction={{
        label: "Primary link",
        href: "#",
      }}
      defaultAction={{ label: "Default link", href: "#" }}
      secondaryActions={SECONDARY_ACTIONS}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
    />
  </Container>
)

AdminVariant.storyName = "Admin variant"
export const AdminVariantWithNavTabs = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      variant="admin"
      primaryAction={{ label: "Primary link", href: "#" }}
      defaultAction={{ label: "Default link", href: "#" }}
      secondaryActions={SECONDARY_ACTIONS}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active variant="admin" />,
        <NavigationTab text="Label" href="#" variant="admin" />,
        <NavigationTab text="Label" href="#" variant="admin" />,
        <NavigationTab text="Label" href="#" variant="admin" />,
        <NavigationTab text="Label" href="#" variant="admin" />,
        <NavigationTab text="Label" href="#" variant="admin" />,
      ]}
    />
  </Container>
)

AdminVariantWithNavTabs.storyName = "Admin variant with Navigation Tabs"

export const EducationVariant = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      variant="education"
      sectionTitle="Section title"
      sectionTitleDescription="Description of section can go here"
      primaryAction={{
        label: "Label",
      }}
      secondaryActions={SECONDARY_ACTIONS}
      secondaryOverflowMenuItems={[
        {
          action: () => {
            alert("test")
          },
          label: "Overflow action 1",
          icon: starIcon,
        },
        {
          action: "#",
          label: "Overflow link 1",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
    />
  </Container>
)

EducationVariant.storyName = "Education variant"

export const Engagement = () => (
  <Container>
    <TitleBlockZen
      title="Baseline Engagement Survey"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Label",
        icon: addIcon,
        href: "#",
      }}
      defaultAction={{
        label: "Label",
        icon: addIcon,
        href: "#",
      }}
      secondaryActions={SECONDARY_ACTIONS}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Summary" href="#" />,
        <NavigationTab
          text="Insight"
          href="#"
          handleClick={event => {
            alert("Label clicked!")
          }}
        />,
        <NavigationTab text="Participation" href="#" />,
        <NavigationTab text="Questions" href="#" active />,
        <NavigationTab text="Heatmap" href="#" />,
        <NavigationTab text="Comments" href="#" />,
      ]}
    />
  </Container>
)

Engagement.storyName = "Engagement"

export const Performance = () => (
  <Container>
    <TitleBlockZen
      title="Blanca Wheeler"
      subtitle="Director of Stuff and Things"
      avatar={<img alt="avatar image" src={assetUrl("site/empty-state.png")} />}
      primaryAction={{
        href: "#",
        label: "Request feedback",
      }}
      defaultAction={{
        href: "#",
        label: "Give feedback",
      }}
      secondaryActions={[
        {
          onClick: () => {
            alert("test")
          },
          label: "Quick comment",
          icon: commentIcon,
        },
        {
          onClick: () => {
            alert("test")
          },
          label: "Review skills",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Feedback" href="#" active />,
        <NavigationTab
          text="Self-reflection"
          href="#"
          handleClick={event => {
            alert("Self-reflection clicked!")
          }}
        />,
        <NavigationTab text="Goal" href="#" />,
        <NavigationTab text="Evaluations" href="#" />,
        <NavigationTab text="Notes" href="#" />,
      ]}
    />
  </Container>
)

Performance.storyName = "Performance"

export const LongLabels = () => (
  <Container>
    <TitleBlockZen
      title="Wolfeschlegelsteino Hausenbergerdorffsch Hausenbergerdorffsch"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Feedback anfordern",
        href: "#",
        onClick: () => {
          alert("test")
        },
      }}
      defaultAction={{
        label: "Feedback geben",
        href: "#",
      }}
      secondaryActions={[
        {
          label: "Schneller Kommentar",
          onClick: () => {
            alert("test")
          },
          icon: commentIcon,
        },
        {
          label: "Fähigkeiten überprüfen",
          onClick: () => {
            alert("test")
          },
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Drehen Sie sich um und kehren Sie zur Startseite zurück",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      avatar={<img alt="avatar image" src={assetUrl("site/empty-state.png")} />}
      subtitle="Wissenschaftlicher Mitarbeiter (Habilitation)"
      navigationTabs={[
        <NavigationTab text="Feedback" href="#" active />,
        <NavigationTab
          text="Selbstreflexion"
          href="#"
          handleClick={event => {
            alert("Self-reflection clicked!")
          }}
        />,
        <NavigationTab text="Tor" href="#" />,
        <NavigationTab text="Bewertungen" href="#" />,
        <NavigationTab text="Anmerkungen" href="#" />,
      ]}
    />
  </Container>
)

const MENU_LINKS = [
  {
    label: "Primary menu link 1",
    action: "#",
  },
  {
    label: "Primary menu link 2",
    action: "#",
  },
  {
    label: "Primary menu action 1",
    action: () => {
      alert("test")
    },
    icon: reportSharingIcon,
  },
  {
    label: "Primary menu action 2",
    action: () => {
      alert("test")
    },
    icon: starIcon,
  },
]

export const DefaultWithContent = () => (
  <Container>
    <div>
      <TitleBlockZen
        title="Page title"
        surveyStatus={{ text: "Live", status: "live" }}
        primaryAction={{
          label: "Primary menu",
          menuItems: MENU_LINKS,
        }}
        defaultAction={{
          label: "Default link",
          icon: addIcon,
          href: "#",
        }}
        secondaryActions={SECONDARY_ACTIONS}
        handleHamburgerClick={() => {
          alert("Hamburger clicked")
        }}
        breadcrumb={{
          path: "#",
          text: "Back to home",
          handleClick: event => {
            alert("breadcrumb clicked!")
          },
        }}
        navigationTabs={[
          <NavigationTab text="Label" href="#" active />,
          <NavigationTab text="Label" href="#" />,
          <NavigationTab text="Label" href="#" />,
          <NavigationTab text="Label" href="#" />,
          <NavigationTab text="Label" href="#" />,
          <NavigationTab text="Label" href="#" />,
        ]}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.contentContainer}>
          <Box my={2}>
            <Heading variant="heading-1">Placeholder heading</Heading>
          </Box>
          <Box my={1}>
            <Paragraph variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              semper odio vitae sem gravida rutrum. Praesent vel sapien eget
              eros dictum luctus scelerisque eu nibh. Etiam ullamcorper lobortis
              gravida. Suspendisse massa tortor, ultricies et ipsum at, iaculis
              bibendum est. Mauris vestibulum interdum ultricies. Proin sed elit
              lacinia, malesuada leo in, auctor enim. Suspendisse venenatis,
              tortor vel eleifend cursus, metus sem luctus nunc, at maximus
              magna metus at mi. Curabitur porttitor dignissim ante, sit amet
              tincidunt nibh elementum convallis. Morbi accumsan rutrum elit
              eget sagittis. Pellentesque id quam at enim dictum placerat sit
              amet in purus. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse quam elit,
              facilisis sit amet libero vitae, congue rutrum nisi. Ut non
              aliquet ex.
            </Paragraph>
          </Box>
          <Box my={1}>
            <Paragraph variant="body">
              Aenean bibendum leo sit amet nisi pellentesque, vitae semper nunc
              interdum. Nullam in felis porta, aliquam neque ut, viverra sapien.
              Proin gravida diam sit amet bibendum viverra. Duis ligula erat,
              pretium vel faucibus ac, vestibulum nec ligula. Nullam eleifend
              leo non mauris facilisis, sed placerat lectus consectetur.
              Curabitur rutrum elementum lobortis. Donec risus enim, tempus
              rutrum venenatis et, mattis vel sem. Vivamus sed tempus justo,
              quis ultricies metus. Etiam vitae ante interdum, tempor quam in,
              auctor sem. Pellentesque blandit sem lorem, ut imperdiet velit
              lobortis sed. Cras aliquam finibus suscipit. Vestibulum tempus,
              est at egestas scelerisque, ante quam interdum risus, a ultricies
              mi nibh eget est.
            </Paragraph>
          </Box>
          <Box my={1}>
            <Paragraph variant="body">
              Nulla et malesuada ligula, at euismod turpis. Curabitur ut tempus
              ante. Nulla sit amet tellus eu neque volutpat volutpat. Mauris
              vitae fermentum eros. Aliquam semper nisl ac turpis vestibulum
              mattis. Curabitur ultrices pellentesque sapien, vitae vulputate
              ipsum. In imperdiet dapibus magna, non ultricies lorem dictum non.
              Mauris pretium erat eu elit laoreet, ac egestas ipsum aliquet.
              Nullam cursus massa felis, et luctus felis semper elementum. Nulla
              facilisi. In hac habitasse platea dictumst. Curabitur urna nibh,
              tincidunt nec facilisis sit amet, finibus nec lorem. Morbi
              hendrerit volutpat augue eget condimentum. Ut a fringilla augue,
              quis finibus dui.
            </Paragraph>
          </Box>
          <Box my={1}>
            <Paragraph variant="body">
              Etiam fermentum cursus massa non fermentum. Proin quis pharetra
              enim. Phasellus fringilla sollicitudin auctor. Nunc tempor orci ac
              nunc convallis dictum vel eget est. Sed eget placerat ante, quis
              venenatis felis. Nulla varius varius lacus, quis consequat ex
              placerat et. In consequat vestibulum tincidunt. Vivamus nibh leo,
              mollis nec venenatis ac, pharetra id dui. Cras ullamcorper ante a
              neque sodales, non tempus nisl sagittis. Etiam in odio sagittis,
              hendrerit arcu et, rutrum metus.
            </Paragraph>
          </Box>
          <Box my={1}>
            <Paragraph variant="body">
              Morbi eu mollis mauris, eleifend convallis nisi. Quisque malesuada
              nisi ut leo tincidunt sodales. Nulla in accumsan diam. Nullam
              egestas sed eros at luctus. Fusce eget elit quis nunc viverra
              efficitur at et sem. Sed eget nisi et orci commodo hendrerit nec
              in quam. Suspendisse condimentum tristique dignissim. Nunc sit
              amet tortor efficitur, pellentesque ex at, placerat risus. Cras
              elit ex, venenatis sit amet purus eget, mollis viverra justo.
              Quisque sollicitudin ipsum non mi rutrum, feugiat hendrerit enim
              malesuada. Ut massa enim, commodo non dapibus pharetra, viverra
              sed erat.
            </Paragraph>
          </Box>
        </div>
      </div>
    </div>
  </Container>
)

DefaultWithContent.storyName = "Default with content"

export const DefaultNoSecondary = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Primary link",
        icon: addIcon,
        href: "#",
      }}
      defaultAction={{
        label: "Default link",
        href: "#",
      }}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
      ]}
    />
  </Container>
)

DefaultNoSecondary.storyName = "Default (no secondary actions)"

export const DefaultOnlyPrimary = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Primary link",
        icon: addIcon,
        href: "#",
      }}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
      ]}
    />
  </Container>
)

DefaultOnlyPrimary.storyName = "Default (only primary action)"

export const DefaultWithReportSwitcher = () => (
  <Container>
    <TitleBlockZen
      title="Baseline Engagement Survey"
      surveyStatus={{ text: "Live", status: "live" }}
      pageSwitcherSelect={{
        placeholder: "Placeholder",
        isSearchable: false,
        isDisabled: false,
        options: [
          {
            value: "survey3",
            label: "Administrator Report",
          },
          {
            value: "survey1",
            label: "Other Report",
          },
          {
            value: "survey2",
            label: "Other Report: Redux",
          },
        ],
        defaultValue: {
          value: "survey3",
          label: "Administrator Report",
        },
      }}
      primaryAction={{
        label: "Primary link",
        icon: addIcon,
        href: "#",
      }}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
      ]}
    />
  </Container>
)

DefaultWithReportSwitcher.storyName = "Default with report switcher"

export const DefaultNoLink = () => (
  <Container>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Primary link",
        icon: addIcon,
        disabled: true,
        href: "#",
      }}
      defaultAction={{
        label: "Default link",
        href: "#",
      }}
      secondaryActions={SECONDARY_ACTIONS}
      secondaryOverflowMenuItems={[
        {
          action: () => {
            alert("test")
          },
          label: "Overflow action 1",
          icon: starIcon,
        },
        {
          action: "#",
          label: "Overflow link 1",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab text="Label" href="#" active />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
        <NavigationTab text="Label" href="#" />,
      ]}
    />
  </Container>
)

DefaultNoLink.storyName = "Default (no link in breadcrumb)"

export const DefaultOnlyLongTitle = () => (
  <Container>
    <TitleBlockZen
      title='Page title that is over the "long title" character threshold and goes way longer than usual'
      subtitle="Subtitle goes here"
      handleHamburgerClick={() => {
        alert("Hamburger clicked")
      }}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
    />
  </Container>
)

DefaultOnlyLongTitle.storyName = "Default (only long title)"

export const DefaultCollapsedNavigation = () => (
  <Container>
    <>
      <TitleBlockZen
        title="Page title"
        subtitle="Subtitle goes here"
        handleHamburgerClick={() => {
          alert("Hamburger clicked")
        }}
        breadcrumb={{
          path: "#",
          text: "Back to home",
          handleClick: event => {
            alert("breadcrumb clicked!")
          },
        }}
        collapseNavigationAreaWhenPossible
      />
      <div className={styles.fakeSkirtContainerWithBackground}>
        <div className={styles.fakeSkirtContent}>
          <Paragraph variant="body" color="white-reduced-opacity">
            I am some text that should feel nicely butted up
          </Paragraph>
        </div>
      </div>
    </>
  </Container>
)

DefaultCollapsedNavigation.storyName = "Default (collapsed navigation)"

export const DefaultCollapsedNavigationCard = () => (
  <Container>
    <>
      <TitleBlockZen
        title="Page title"
        subtitle="Subtitle goes here"
        handleHamburgerClick={() => {
          alert("Hamburger clicked")
        }}
        breadcrumb={{
          path: "#",
          text: "Back to home",
          handleClick: event => {
            alert("breadcrumb clicked!")
          },
        }}
        collapseNavigationAreaWhenPossible
      />
      <div className={styles.fakeSkirtContainerWithBackground}>
        <div className={styles.fakeSkirtContent}>
          <div className={styles.fakeSkirtCard}>
            <Paragraph variant="body">
              I am a card that should feel nicely butted up
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  </Container>
)

DefaultCollapsedNavigationCard.story = {
  name: "Default (collapsed navigation with card)",
}

export const AdminVariantNavigation = () => (
  <Container>
    <>
      <TitleBlockZen
        variant="admin"
        title="Page title"
        subtitle="Subtitle goes here"
        handleHamburgerClick={() => {
          alert("Hamburger clicked")
        }}
        breadcrumb={{
          path: "#",
          text: "Back to home",
          handleClick: event => {
            alert("breadcrumb clicked!")
          },
        }}
        collapseNavigationAreaWhenPossible
      />
      <div className={styles.fakeSkirtContainer}>
        <div className={styles.fakeSkirtContent}>
          <Paragraph variant="body">
            I am some text that should feel tightly butted up to the nav space.
            The responsibility for the admin variant is to move things down
            yourself if you need to.
          </Paragraph>
        </div>
      </div>
    </>
  </Container>
)

AdminVariantNavigation.storyName = "Admin (collapsed navigation)"
