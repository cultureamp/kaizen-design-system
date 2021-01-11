import * as React from "react"
import { Box, Paragraph } from "@kaizen/component-library"
import { NavigationTab, TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { Container, Content, Skirt, SkirtCard } from ".."
import styles from "./PageLayout.stories.scss"

export default {
  title: "PageLayout (React)",
  component: Container,
  parameters: {
    info: {
      text: `
        import { Container, Content } from "@kaizen/draft-page-layout";
      `,
    },
  },
}

const OffsetPadding = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "-1rem" }}>{children}</div>
)

export const DefaultStory = () => (
  <OffsetPadding>
    <TitleBlockZen title="Page title" collapseNavigationAreaWhenPossible />
    <Container>
      <Content>
        <Paragraph variant="body">
          This content should sit with the same width as the TitleBlockZen. Call
          me Ishmael. Some years ago - never mind how long precisely - having
          little or no money in my purse, and nothing particular to interest me
          on shore, I thought I would sail about a little and see the watery
          part of the world. It is a way I have of driving off the spleen, and
          regulating the circulation. Whenever I find myself growing grim about
          the mouth; whenever it is a damp, drizzly November in my soul;
          whenever I find myself involuntarily pausing before coffin warehouses,
          and bringing up the rear of every funeral I meet; and especially
          whenever my hypos get such an upper hand of me, that it requires a
          strong moral principle to prevent me from deliberately stepping into
          the street, and methodically knocking people's hats off - then, I
          account it high time to get to sea as soon as I can. This is my
          substitute for pistol and ball. With a philosophical flourish Cato
          throws himself upon his sword; I quietly take to the ship.
        </Paragraph>
      </Content>
    </Container>
  </OffsetPadding>
)

DefaultStory.storyName = "Container/Content (default)"

export const FullBleedBackgroundStory = () => (
  <OffsetPadding>
    <Container classNameAndIHaveSpokenToDST={styles.pink}>
      <Content classNameAndIHaveSpokenToDST={styles.white}>
        <Paragraph variant="body">
          Call me Ishmael. Some years ago - never mind how long precisely -
          having little or no money in my purse, and nothing particular to
          interest me on shore, I thought I would sail about a little and see
          the watery part of the world. It is a way I have of driving off the
          spleen, and regulating the circulation. Whenever I find myself growing
          grim about the mouth; whenever it is a damp, drizzly November in my
          soul; whenever I find myself involuntarily pausing before coffin
          warehouses, and bringing up the rear of every funeral I meet; and
          especially whenever my hypos get such an upper hand of me, that it
          requires a strong moral principle to prevent me from deliberately
          stepping into the street, and methodically knocking people's hats off
          - then, I account it high time to get to sea as soon as I can. This is
          my substitute for pistol and ball. With a philosophical flourish Cato
          throws himself upon his sword; I quietly take to the ship.
        </Paragraph>
      </Content>
    </Container>
  </OffsetPadding>
)

FullBleedBackgroundStory.storyName = "Container/Content (Full-bleed background)"

export const SkirtStory = () => (
  <>
    <TitleBlockZen
      title="Skirt"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[<NavigationTab text="Label" href="#" active />]}
    />
    <Skirt>
      <SkirtCard>
        <Box p={1}>
          <Box mb={1}>
            <Paragraph variant="body">
              The Skirt component extends the background color from the Title
              Block into the content area.
            </Paragraph>
          </Box>
          <Box mb={1}>
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
  </>
)

SkirtStory.storyName = "Skirt (default)"

export const SkirtEducationVariant = () => (
  <>
    <TitleBlockZen
      variant="education"
      title="Education variant"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      navigationTabs={[
        <NavigationTab variant="education" text="Label" href="#" active />,
      ]}
    />
    <Skirt variant="education">
      <SkirtCard>
        <Box p={1}>
          <Paragraph variant="body">
            The Skirt component extends the background color from the Title
            Block into the content area.
          </Paragraph>
        </Box>
      </SkirtCard>
    </Skirt>
  </>
)

SkirtEducationVariant.storyName = "Skirt (Education variant)"

export const SkirtWithoutTitleBlockNavigation = () => (
  <>
    <TitleBlockZen
      title="Without Title Block navigation"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      collapseNavigationAreaWhenPossible={true}
    />
    <Skirt titleBlockHasNavigation={false}>
      <SkirtCard>
        <Box p={1}>
          <Box mb={1}>
            <Box mb={1}>
              <Paragraph variant="body">
                When the navigation area for the Title Block is collapsed,
                there’s an additional prop to ensure the maximum height of the
                skirt is consistent when it moves up. If you navigate to the
                default Skirt story (which has navigation) you should see the
                bottom level of the Skirt in both that story and this one match.
              </Paragraph>
            </Box>
            <Box mb={1}>
              <Paragraph variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                semper odio vitae sem gravida rutrum. Praesent vel sapien eget
                eros dictum luctus scelerisque eu nibh. Etiam ullamcorper
                lobortis gravida. Suspendisse massa tortor, ultricies et ipsum
                at, iaculis bibendum est. Mauris vestibulum interdum ultricies.
                Proin sed elit lacinia, malesuada leo in, auctor enim.
                Suspendisse venenatis, tortor vel eleifend cursus, metus sem
                luctus nunc, at maximus magna metus at mi. Curabitur porttitor
                dignissim ante, sit amet tincidunt nibh elementum convallis.
                Morbi accumsan rutrum elit eget sagittis. Pellentesque id quam
                at enim dictum placerat sit amet in purus. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Suspendisse quam elit, facilisis sit amet libero vitae,
                congue rutrum nisi. Ut non aliquet ex.
              </Paragraph>
            </Box>
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
        </Box>
      </SkirtCard>
    </Skirt>
  </>
)

SkirtWithoutTitleBlockNavigation.storyName =
  "Skirt (Title Block without navigation)"

export const WithoutSkirtCard = () => (
  <>
    <TitleBlockZen
      title="Without Skirt Card"
      breadcrumb={{
        path: "#",
        text: "Back to home",
        handleClick: event => {
          alert("breadcrumb clicked!")
        },
      }}
      collapseNavigationAreaWhenPossible
    />
    <Skirt titleBlockHasNavigation={false}>
      <Box mb={1}>
        <Paragraph variant="body" color="white">
          The SkirtCard component is provided as a convenience for the most
          common design case, but it not required.
        </Paragraph>
      </Box>
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
        odio vitae sem gravida rutrum. Praesent vel sapien eget eros dictum
        luctus scelerisque eu nibh. Etiam ullamcorper lobortis gravida.
        Suspendisse massa tortor, ultricies et ipsum at, iaculis bibendum est.
        Mauris vestibulum interdum ultricies. Proin sed elit lacinia, malesuada
        leo in, auctor enim. Suspendisse venenatis, tortor vel eleifend cursus,
        metus sem luctus nunc, at maximus magna metus at mi. Curabitur porttitor
        dignissim ante, sit amet tincidunt nibh elementum convallis. Morbi
        accumsan rutrum elit eget sagittis. Pellentesque id quam at enim dictum
        placerat sit amet in purus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse quam
        elit, facilisis sit amet libero vitae, congue rutrum nisi. Ut non
        aliquet ex.
      </Paragraph>
    </Skirt>
  </>
)

WithoutSkirtCard.storyName = "Skirt (without SkirtCard)"
