import { Box, Dropdown, Heading, Paragraph } from "@kaizen/component-library"
import * as React from "react"
import { Button } from "../button"
import {
  NavigationTab,
  TitleBlockZen,
} from "../title-block-zen/KaizenDraft/TitleBlockZen"
const addIcon = require("@kaizen/component-library/icons/add.icon.svg").default
  .default
const visibleIcon = require("@kaizen/component-library/icons/visible.icon.svg")
  .default
const commentIcon = require("@kaizen/component-library/icons/comment.icon.svg")
  .default
const starIcon = require("@kaizen/component-library/icons/star-on.icon.svg")
  .default
const reportSharingIcon = require("@kaizen/component-library/icons/report-sharing.icon.svg")
  .default
import { assetUrl } from "@kaizen/hosted-assets"

const styles = require("./TitleBlockZen.stories.scss")

export default {
  title: "TitleBlockZen (React)",
}

export const Default = () => (
  <TitleBlockZen
    title="Page title"
    surveyStatus={{ text: "Live", status: "live" }}
    primaryActions={[
      <Button label="Label" reversed icon={addIcon} />,
      <Button label="Label" primary reversed icon={addIcon} />,
    ]}
    secondaryActions={[
      <Button label="Label" secondary reversed icon={visibleIcon} />,
      <Button label="Label" secondary reversed icon={visibleIcon} />,
      <Dropdown reversedColor />,
    ]}
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
)

Default.story = {
  name: "Default",
}

export const AdminVariant = () => (
  <TitleBlockZen
    title="Page title"
    variant="admin"
    sectionTitle="Section title"
    sectionTitleDescription="Description of section can go here"
    primaryActions={[
      <Button label="Label" icon={addIcon} />,
      <Button label="Label" primary icon={addIcon} />,
    ]}
    secondaryActions={[
      <Button label="Label" secondary icon={visibleIcon} />,
      <Button label="Label" secondary icon={visibleIcon} />,
      <Dropdown />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
  />
)

AdminVariant.story = {
  name: "Admin variant",
}

export const EducationVariant = () => (
  <TitleBlockZen
    title="Page title"
    variant="education"
    sectionTitle="Section title"
    sectionTitleDescription="Description of section can go here"
    primaryActions={[<Button label="Label" primary icon={addIcon} />]}
    secondaryActions={[
      <Button label="Label" secondary icon={visibleIcon} />,
      <Button label="Label" secondary icon={visibleIcon} />,
      <Dropdown />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
  />
)

EducationVariant.story = {
  name: "Education variant",
}

export const Engagement = () => (
  <TitleBlockZen
    title="Baseline Engagement Survey"
    surveyStatus={{ text: "Live", status: "live" }}
    primaryActions={[
      <Button label="Label" reversed />,
      <Button label="Label" primary reversed />,
    ]}
    secondaryActions={[
      <Button
        label="Share report"
        secondary
        reversed
        icon={reportSharingIcon}
      />,
      <Dropdown label="Export" reversedColor controlAction />,
    ]}
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
)

Engagement.story = {
  name: "Engagement",
}

export const Performance = () => (
  <TitleBlockZen
    title="Blanca Wheeler"
    primaryActions={[
      <Button label="Request feedback" reversed />,
      <Button label="Give feedback" primary reversed />,
    ]}
    secondaryActions={[
      <Button label="Quick comment" secondary reversed icon={commentIcon} />,
      <Button label="Review skills" secondary reversed icon={starIcon} />,
    ]}
    breadcrumb={{
      path: "#",
      text: "Back to home",
      handleClick: event => {
        alert("breadcrumb clicked!")
      },
    }}
    avatar={<img alt="avatar image" src={assetUrl("site/empty-state.png")} />}
    subtitle="Marketing Associate"
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
)

Performance.story = {
  name: "Performance",
}

export const LongLabels = () => (
  <TitleBlockZen
    title="Hubert Blaine Wolfeschlegelsteinhausenbergerdorff"
    primaryActions={[
      <Button label="Feedback anfordern" reversed />,
      <Button label="Feedback geben" primary reversed />,
    ]}
    secondaryActions={[
      <Button
        label="Schneller Kommentar"
        secondary
        reversed
        icon={commentIcon}
      />,
      <Button
        label="Fähigkeiten überprüfen"
        secondary
        reversed
        icon={starIcon}
      />,
    ]}
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
)

export const DefaultWithContent = () => (
  <div>
    <TitleBlockZen
      title="Page title"
      surveyStatus={{ text: "Live", status: "live" }}
      primaryActions={[
        <Button label="Label" reversed icon={addIcon} />,
        <Button label="Label" primary reversed icon={addIcon} />,
      ]}
      secondaryActions={[
        <Button label="Label" secondary reversed icon={visibleIcon} />,
        <Button label="Label" secondary reversed icon={visibleIcon} />,
        <Dropdown reversedColor />,
      ]}
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
      </div>
    </div>
  </div>
)

DefaultWithContent.story = {
  name: "Default with content",
}
