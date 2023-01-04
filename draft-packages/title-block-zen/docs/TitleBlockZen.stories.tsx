import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Box } from "@kaizen/component-library"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowForwardIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import commentIcon from "@kaizen/component-library/icons/comment.icon.svg"
import reportSharingIcon from "@kaizen/component-library/icons/report-sharing.icon.svg"
import starIcon from "@kaizen/component-library/icons/star-on.icon.svg"
import { Container, Content, Skirt, SkirtCard } from "@kaizen/draft-page-layout"
import { assetUrl } from "@kaizen/hosted-assets"
import { Heading, Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { NavigationTab, TitleBlockZen } from ".."
import styles from "./TitleBlockZen.stories.module.scss"

const TESTING_VIEWPORTS = [320, 768, 1200]

export default {
  title: `${CATEGORIES.components}/Title Block`,
  parameters: {
    chromatic: { viewports: TESTING_VIEWPORTS },
    docs: {
      description: {
        component:
          'import { TitleBlockZen } from "@kaizen/draft-title-block-zen"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=4619%3A17068"
    ),
  },
  decorators: [withDesign],
}

const OffsetPadding = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => <div style={{ margin: "-1rem" }}>{children}</div>

const SECONDARY_ACTIONS = [
  {
    label: "Secondary menu",
    menuItems: [
      {
        onClick: (): void => alert("test"),
        label: "Secondary menu action 1",
      },
      {
        onClick: (): void => alert("test"),
        label: "Secondary menu action 2",
        icon: starIcon,
      },
    ],
  },
  {
    onClick: (): void => alert("test"),
    href: "foo",
    label: "Secondary action",
  },
]

const DefaultTemplate: ComponentStory<typeof TitleBlockZen> = args => (
  <OffsetPadding>
    <TitleBlockZen {...args} />
  </OffsetPadding>
)

export const Default: ComponentStory<typeof TitleBlockZen> =
  DefaultTemplate.bind({})
Default.args = {
  title: "Page title",
  surveyStatus: { text: "Live", status: "live" },
  primaryAction: {
    label: "Primary link",
    icon: addIcon,
    disabled: true,
    href: "#",
  },
  defaultAction: {
    label: "Default link",
    href: "#",
  },
  secondaryActions: SECONDARY_ACTIONS,
  secondaryOverflowMenuItems: [
    {
      action: (): void => alert("test"),
      label: "Overflow action 1",
      icon: starIcon,
    },
    {
      action: "#",
      label: "Overflow link 1",
      icon: starIcon,
    },
  ],
  handleHamburgerClick: (): void => alert("Hamburger clicked"),
  breadcrumb: {
    path: "#",
    text: "Back to home",
    handleClick: (): void => alert("breadcrumb clicked!"),
  },
  navigationTabs: [
    <NavigationTab text="Label" href="#" active />,
    <NavigationTab text="Label" href="#" />,
    <NavigationTab text="Label" href="#" />,
    <NavigationTab text="Label" href="#" />,
    <NavigationTab text="Label" href="#" />,
    <NavigationTab text="Label" href="#" />,
  ],
}

export const WithBadge: Story = () => {
  const [badgeCount, setBadgeCount] = React.useState(1)
  return (
    <OffsetPadding>
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
          handleClick: () => alert("breadcrumb clicked!"),
        }}
      />
    </OffsetPadding>
  )
}
WithBadge.storyName = "With Primary Action Badge"
WithBadge.parameters = { chromatic: { disable: false } }

export const WithDefaultTag: Story = () => (
  <OffsetPadding>
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
        handleClick: () => alert("breadcrumb clicked!"),
      }}
    />
  </OffsetPadding>
)
WithDefaultTag.storyName = "With Default Survey Status (Tag)"
WithDefaultTag.parameters = { chromatic: { disable: false } }

export const AdminWithDefaultTag: Story = () => (
  <OffsetPadding>
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
        handleClick: () => alert("breadcrumb clicked!"),
      }}
    />
  </OffsetPadding>
)
AdminWithDefaultTag.storyName = "Admin With Default Survey Status (Tag)"
AdminWithDefaultTag.parameters = { chromatic: { disable: false } }

export const DefaultWithMenuButton: Story = () => (
  <OffsetPadding>
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
            action: () => alert("Item 2 clicked"),
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
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
  </OffsetPadding>
)
DefaultWithMenuButton.storyName = "Default (Menu Button)"
DefaultWithMenuButton.parameters = { chromatic: { disable: false } }

export const AdminVariant: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Page title"
      variant="admin"
      sectionTitle="Default questions"
      subtitle={
        <Paragraph variant="body">
          This is a <a href="/">link</a>
        </Paragraph>
      }
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
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
    />
  </OffsetPadding>
)
AdminVariant.storyName = "Admin variant"
AdminVariant.parameters = { chromatic: { disable: false } }

export const AdminVariantWithNavTabs: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Page title"
      variant="admin"
      primaryAction={{ label: "Primary link", href: "#" }}
      defaultAction={{ label: "Default link", href: "#" }}
      secondaryActions={SECONDARY_ACTIONS}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
  </OffsetPadding>
)
AdminVariantWithNavTabs.storyName = "Admin variant with Navigation Tabs"
AdminVariantWithNavTabs.parameters = { chromatic: { disable: false } }

export const EducationVariant: Story = () => (
  <OffsetPadding>
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
          action: () => alert("test"),
          label: "Overflow action 1",
          icon: starIcon,
        },
        {
          action: "#",
          label: "Overflow link 1",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
    />
    <Skirt variant="education">
      <SkirtCard>
        <Box p={1}>
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            semper odio vitae sem gravida rutrum. Praesent vel sapien eget eros
            dictum luctus scelerisque eu nibh. Etiam ullamcorper lobortis
            gravida. Suspendisse massa tortor, ultricies et ipsum at, iaculis
            bibendum est. Mauris vestibulum interdum ultricies. Proin sed elit
            lacinia, malesuada leo in, auctor enim. Suspendisse venenatis,
            tortor vel eleifend cursus, metus sem luctus nunc, at maximus magna
            metus at mi. Curabitur porttitor dignissim ante, sit amet tincidunt
            nibh elementum convallis. Morbi accumsan rutrum elit eget sagittis.
            Pellentesque id quam at enim dictum placerat sit amet in purus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Suspendisse quam elit, facilisis sit amet
            libero vitae, congue rutrum nisi. Ut non aliquet ex.
          </Paragraph>
        </Box>
      </SkirtCard>
    </Skirt>
  </OffsetPadding>
)
EducationVariant.storyName = "Education variant"
EducationVariant.parameters = { chromatic: { disable: false } }

export const Engagement: Story = () => (
  <OffsetPadding>
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
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      navigationTabs={[
        <NavigationTab text="Summary" href="#" />,
        <NavigationTab
          text="Insight"
          href="#"
          handleClick={(): void => alert("Label clicked!")}
        />,
        <NavigationTab text="Participation" href="#" />,
        <NavigationTab text="Questions" href="#" active />,
        <NavigationTab text="Heatmap" href="#" />,
        <NavigationTab text="Comments" href="#" />,
      ]}
    />
  </OffsetPadding>
)
Engagement.parameters = { chromatic: { disable: false } }

export const Performance: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Blanca Wheeler"
      subtitle="Director of Stuff and Things"
      avatar={<img alt="" src={assetUrl("site/empty-state.png")} />}
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
          onClick: () => alert("test"),
          label: "Quick comment",
          icon: commentIcon,
        },
        {
          onClick: () => alert("test"),
          label: "Review skills",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      navigationTabs={[
        <NavigationTab text="Feedback" href="#" active />,
        <NavigationTab
          text="Self-reflection"
          href="#"
          handleClick={(): void => alert("Self-reflection clicked!")}
        />,
        <NavigationTab text="Goal" href="#" />,
        <NavigationTab text="Evaluations" href="#" />,
        <NavigationTab text="Notes" href="#" />,
      ]}
    />
  </OffsetPadding>
)
Performance.parameters = { chromatic: { disable: false } }

export const PerformanceWithAvatarProps: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Blanca Wheeler"
      subtitle="Director of Stuff and Things"
      avatar={{
        avatarSrc: assetUrl("site/empty-state.png"),
        fullName: "Blanca Wheeler",
      }}
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
          onClick: () => alert("test"),
          label: "Quick comment",
          icon: commentIcon,
        },
        {
          onClick: () => alert("test"),
          label: "Review skills",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      navigationTabs={[
        <NavigationTab text="Feedback" href="#" active />,
        <NavigationTab
          text="Self-reflection"
          href="#"
          handleClick={(): void => alert("Self-reflection clicked!")}
        />,
        <NavigationTab text="Goal" href="#" />,
        <NavigationTab text="Evaluations" href="#" />,
        <NavigationTab text="Notes" href="#" />,
      ]}
    />
  </OffsetPadding>
)
PerformanceWithAvatarProps.storyName = "Performance with AvatarProps"

export const PerformanceWithEmptyAvatarProps: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Blanca Wheeler"
      subtitle="Director of Stuff and Things"
      avatar={{}}
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
          onClick: () => alert("test"),
          label: "Quick comment",
          icon: commentIcon,
        },
        {
          onClick: () => alert("test"),
          label: "Review skills",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      navigationTabs={[
        <NavigationTab text="Feedback" href="#" active />,
        <NavigationTab
          text="Self-reflection"
          href="#"
          handleClick={(): void => alert("Self-reflection clicked!")}
        />,
        <NavigationTab text="Goal" href="#" />,
        <NavigationTab text="Evaluations" href="#" />,
        <NavigationTab text="Notes" href="#" />,
      ]}
    />
  </OffsetPadding>
)
PerformanceWithEmptyAvatarProps.storyName = "Performance with Empty AvatarProps"

export const LongLabels: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Wolfeschlegelsteino Hausenbergerdorffsch Hausenbergerdorffsch"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Feedback anfordern",
        href: "#",
        onClick: (): void => alert("test"),
      }}
      defaultAction={{
        label: "Feedback geben",
        href: "#",
      }}
      secondaryActions={[
        {
          label: "Schneller Kommentar",
          onClick: () => alert("test"),
          icon: commentIcon,
        },
        {
          label: "Fähigkeiten überprüfen",
          onClick: () => alert("test"),
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Drehen Sie sich um und kehren Sie zur Startseite zurück",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      avatar={<img alt="" src={assetUrl("site/empty-state.png")} />}
      subtitle="Wissenschaftlicher Mitarbeiter (Habilitation)"
      navigationTabs={[
        <NavigationTab text="Feedback" href="#" active />,
        <NavigationTab
          text="Selbstreflexion"
          href="#"
          handleClick={(): void => alert("Self-reflection clicked!")}
        />,
        <NavigationTab text="Tor" href="#" />,
        <NavigationTab text="Bewertungen" href="#" />,
        <NavigationTab text="Anmerkungen" href="#" />,
      ]}
    />
  </OffsetPadding>
)
LongLabels.parameters = { chromatic: { disable: false } }

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
    action: (): void => alert("test"),
    icon: reportSharingIcon,
  },
  {
    label: "Primary menu action 2",
    action: (): void => alert("test"),
    icon: starIcon,
  },
]

export const DefaultWithContent: Story = () => (
  <OffsetPadding>
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
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
    <Container>
      <Content classNameOverride={styles.contentContainer}>
        <Box my={2}>
          <Heading variant="heading-1">Placeholder heading</Heading>
        </Box>
        <Box my={1}>
          <Paragraph variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            semper odio vitae sem gravida rutrum. Praesent vel sapien eget eros
            dictum luctus scelerisque eu nibh. Etiam ullamcorper lobortis
            gravida. Suspendisse massa tortor, ultricies et ipsum at, iaculis
            bibendum est. Mauris vestibulum interdum ultricies. Proin sed elit
            lacinia, malesuada leo in, auctor enim. Suspendisse venenatis,
            tortor vel eleifend cursus, metus sem luctus nunc, at maximus magna
            metus at mi. Curabitur porttitor dignissim ante, sit amet tincidunt
            nibh elementum convallis. Morbi accumsan rutrum elit eget sagittis.
            Pellentesque id quam at enim dictum placerat sit amet in purus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Suspendisse quam elit, facilisis sit amet
            libero vitae, congue rutrum nisi. Ut non aliquet ex.
          </Paragraph>
        </Box>
        <Box my={1}>
          <Paragraph variant="body">
            Aenean bibendum leo sit amet nisi pellentesque, vitae semper nunc
            interdum. Nullam in felis porta, aliquam neque ut, viverra sapien.
            Proin gravida diam sit amet bibendum viverra. Duis ligula erat,
            pretium vel faucibus ac, vestibulum nec ligula. Nullam eleifend leo
            non mauris facilisis, sed placerat lectus consectetur. Curabitur
            rutrum elementum lobortis. Donec risus enim, tempus rutrum venenatis
            et, mattis vel sem. Vivamus sed tempus justo, quis ultricies metus.
            Etiam vitae ante interdum, tempor quam in, auctor sem. Pellentesque
            blandit sem lorem, ut imperdiet velit lobortis sed. Cras aliquam
            finibus suscipit. Vestibulum tempus, est at egestas scelerisque,
            ante quam interdum risus, a ultricies mi nibh eget est.
          </Paragraph>
        </Box>
        <Box my={1}>
          <Paragraph variant="body">
            Nulla et malesuada ligula, at euismod turpis. Curabitur ut tempus
            ante. Nulla sit amet tellus eu neque volutpat volutpat. Mauris vitae
            fermentum eros. Aliquam semper nisl ac turpis vestibulum mattis.
            Curabitur ultrices pellentesque sapien, vitae vulputate ipsum. In
            imperdiet dapibus magna, non ultricies lorem dictum non. Mauris
            pretium erat eu elit laoreet, ac egestas ipsum aliquet. Nullam
            cursus massa felis, et luctus felis semper elementum. Nulla
            facilisi. In hac habitasse platea dictumst. Curabitur urna nibh,
            tincidunt nec facilisis sit amet, finibus nec lorem. Morbi hendrerit
            volutpat augue eget condimentum. Ut a fringilla augue, quis finibus
            dui.
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
            efficitur at et sem. Sed eget nisi et orci commodo hendrerit nec in
            quam. Suspendisse condimentum tristique dignissim. Nunc sit amet
            tortor efficitur, pellentesque ex at, placerat risus. Cras elit ex,
            venenatis sit amet purus eget, mollis viverra justo. Quisque
            sollicitudin ipsum non mi rutrum, feugiat hendrerit enim malesuada.
            Ut massa enim, commodo non dapibus pharetra, viverra sed erat.
          </Paragraph>
        </Box>
      </Content>
    </Container>
  </OffsetPadding>
)
DefaultWithContent.storyName = "Default with content"
DefaultWithContent.parameters = { chromatic: { disable: false } }

export const DefaultNoSecondary: Story = () => (
  <OffsetPadding>
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
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
    {/* <Skirt>
      <SkirtCard> */}
    <Box p={1}>
      <Box mb={1}>
        <Heading variant="heading-1">Placeholder heading</Heading>
      </Box>
      <Box my={1}>
        <Paragraph variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
          odio vitae sem gravida rutrum. Praesent vel sapien eget eros dictum
          luctus scelerisque eu nibh. Etiam ullamcorper lobortis gravida.
          Suspendisse massa tortor, ultricies et ipsum at, iaculis bibendum est.
          Mauris vestibulum interdum ultricies. Proin sed elit lacinia,
          malesuada leo in, auctor enim. Suspendisse venenatis, tortor vel
          eleifend cursus, metus sem luctus nunc, at maximus magna metus at mi.
          Curabitur porttitor dignissim ante, sit amet tincidunt nibh elementum
          convallis. Morbi accumsan rutrum elit eget sagittis. Pellentesque id
          quam at enim dictum placerat sit amet in purus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Suspendisse quam elit, facilisis sit amet libero vitae,
          congue rutrum nisi. Ut non aliquet ex.
        </Paragraph>
      </Box>
      <Box my={1}>
        <Paragraph variant="body">
          Aenean bibendum leo sit amet nisi pellentesque, vitae semper nunc
          interdum. Nullam in felis porta, aliquam neque ut, viverra sapien.
          Proin gravida diam sit amet bibendum viverra. Duis ligula erat,
          pretium vel faucibus ac, vestibulum nec ligula. Nullam eleifend leo
          non mauris facilisis, sed placerat lectus consectetur. Curabitur
          rutrum elementum lobortis. Donec risus enim, tempus rutrum venenatis
          et, mattis vel sem. Vivamus sed tempus justo, quis ultricies metus.
          Etiam vitae ante interdum, tempor quam in, auctor sem. Pellentesque
          blandit sem lorem, ut imperdiet velit lobortis sed. Cras aliquam
          finibus suscipit. Vestibulum tempus, est at egestas scelerisque, ante
          quam interdum risus, a ultricies mi nibh eget est.
        </Paragraph>
      </Box>
      <Box my={1}>
        <Paragraph variant="body">
          Nulla et malesuada ligula, at euismod turpis. Curabitur ut tempus
          ante. Nulla sit amet tellus eu neque volutpat volutpat. Mauris vitae
          fermentum eros. Aliquam semper nisl ac turpis vestibulum mattis.
          Curabitur ultrices pellentesque sapien, vitae vulputate ipsum. In
          imperdiet dapibus magna, non ultricies lorem dictum non. Mauris
          pretium erat eu elit laoreet, ac egestas ipsum aliquet. Nullam cursus
          massa felis, et luctus felis semper elementum. Nulla facilisi. In hac
          habitasse platea dictumst. Curabitur urna nibh, tincidunt nec
          facilisis sit amet, finibus nec lorem. Morbi hendrerit volutpat augue
          eget condimentum. Ut a fringilla augue, quis finibus dui.
        </Paragraph>
      </Box>
      <Box my={1}>
        <Paragraph variant="body">
          Etiam fermentum cursus massa non fermentum. Proin quis pharetra enim.
          Phasellus fringilla sollicitudin auctor. Nunc tempor orci ac nunc
          convallis dictum vel eget est. Sed eget placerat ante, quis venenatis
          felis. Nulla varius varius lacus, quis consequat ex placerat et. In
          consequat vestibulum tincidunt. Vivamus nibh leo, mollis nec venenatis
          ac, pharetra id dui. Cras ullamcorper ante a neque sodales, non tempus
          nisl sagittis. Etiam in odio sagittis, hendrerit arcu et, rutrum
          metus.
        </Paragraph>
      </Box>
      <Box>
        <Paragraph variant="body">
          Morbi eu mollis mauris, eleifend convallis nisi. Quisque malesuada
          nisi ut leo tincidunt sodales. Nulla in accumsan diam. Nullam egestas
          sed eros at luctus. Fusce eget elit quis nunc viverra efficitur at et
          sem. Sed eget nisi et orci commodo hendrerit nec in quam. Suspendisse
          condimentum tristique dignissim. Nunc sit amet tortor efficitur,
          pellentesque ex at, placerat risus. Cras elit ex, venenatis sit amet
          purus eget, mollis viverra justo. Quisque sollicitudin ipsum non mi
          rutrum, feugiat hendrerit enim malesuada. Ut massa enim, commodo non
          dapibus pharetra, viverra sed erat.
        </Paragraph>
      </Box>
    </Box>
  </OffsetPadding>
)
DefaultNoSecondary.storyName = "Default (no secondary actions)"

export const DefaultOnlyPrimary: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryAction={{
        label: "Primary link",
        icon: addIcon,
        href: "#",
      }}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
  </OffsetPadding>
)
DefaultOnlyPrimary.storyName = "Default (only primary action)"

export const DefaultWithReportSwitcher: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
  </OffsetPadding>
)
DefaultWithReportSwitcher.storyName = "Default with report switcher"
DefaultWithReportSwitcher.parameters = { chromatic: { disable: false } }

export const DefaultNoLink: Story = () => (
  <OffsetPadding>
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
          action: () => alert("test"),
          label: "Overflow action 1",
          icon: starIcon,
        },
        {
          action: "#",
          label: "Overflow link 1",
          icon: starIcon,
        },
      ]}
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
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
    <Skirt titleBlockHasNavigation={false}>
      <SkirtCard>
        <Box p={1}>
          <Paragraph variant="body">
            I am a card that should feel nicely butted up
          </Paragraph>
        </Box>
      </SkirtCard>
    </Skirt>
  </OffsetPadding>
)
DefaultNoLink.storyName = "Default (no link in breadcrumb)"

export const DefaultOnlyLongTitle: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      subtitle="Subtitle goes here"
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
    />
  </OffsetPadding>
)
DefaultOnlyLongTitle.storyName = "Default (only long title)"

export const DefaultCollapsedNavigation: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Page title"
      subtitle="Subtitle goes here"
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      collapseNavigationAreaWhenPossible
    />
    <Container>
      <Content>
        <Paragraph variant="body">
          I am some text that should feel tightly butted up
        </Paragraph>
      </Content>
    </Container>
  </OffsetPadding>
)
DefaultCollapsedNavigation.storyName = "Default (collapsed navigation)"
DefaultCollapsedNavigation.parameters = { chromatic: { disable: false } }

export const DefaultCollapsedNavigationCard: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      title="Page title"
      subtitle="Subtitle goes here"
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      collapseNavigationAreaWhenPossible
    />
    <Skirt titleBlockHasNavigation={false}>
      <SkirtCard>
        <Box p={1}>
          <Paragraph variant="body">
            I am a card that should feel nicely butted up
          </Paragraph>
        </Box>
      </SkirtCard>
    </Skirt>
  </OffsetPadding>
)
DefaultCollapsedNavigationCard.storyName =
  "Default (collapsed navigation with card)"

export const AdminVariantNavigation: Story = () => (
  <OffsetPadding>
    <TitleBlockZen
      variant="admin"
      title="Page title"
      subtitle="Subtitle goes here"
      handleHamburgerClick={(): void => alert("Hamburger clicked")}
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: () => alert("breadcrumb clicked!"),
      }}
      collapseNavigationAreaWhenPossible
    />
    <Container>
      <Content>
        <Paragraph variant="body">
          I am some text that should feel tightly butted up to the nav space.
          The responsibility for the admin variant is to move things down
          yourself if you need to.
        </Paragraph>
      </Content>
    </Container>
  </OffsetPadding>
)
AdminVariantNavigation.storyName = "Admin (collapsed navigation)"

export const RenderProps: Story = () => {
  const CustomTab = (props: {
    href: string
    className: string
    text: string
  }): JSX.Element => (
    // In real life, you'll likely use this to insert a router Link component
    <a href={props.href} className={props.className}>
      {props.text}
    </a>
  )
  return (
    <OffsetPadding>
      <TitleBlockZen
        title="Page title"
        primaryAction={{
          label: "Click Me",
          icon: arrowForwardIcon,
          iconPosition: "end",
          href: "#",
          component: props => (
            // In real life, you'll likely use this to insert a router Link component
            <a href={props.href} className={props.className}>
              {props.children}
            </a>
          ),
        }}
        breadcrumb={{
          path: "#",
          text: "Back to home",
          render: props => (
            // In real life, you'll likely use this to insert a router Link component
            <a href={props.breadcrumb.path} className={props.className}>
              {props.children}
            </a>
          ),
        }}
        navigationTabs={[
          <NavigationTab text="Label" href="#" active render={CustomTab} />,
          <NavigationTab text="Label" href="#" render={CustomTab} />,
          <NavigationTab text="Label" href="#" render={CustomTab} />,
        ]}
      />
    </OffsetPadding>
  )
}
