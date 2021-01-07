import * as React from "react"
import { Skirt, SkirtCard } from "@kaizen/draft-skirt"
import { Box, Paragraph } from "@kaizen/component-library"
import {
  NavigationTab,
  TitleBlockZen,
} from "../title-block-zen/KaizenDraft/TitleBlockZen"

export default {
  title: "Skirt (React)",
  component: Skirt,
  parameters: {
    info: {
      text: `
        import { Skirt } from "@kaizen/draft-Skirt";
      `,
    },
  },
}

export const DefaultStory = () => (
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

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const EducationVariant = () => (
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

EducationVariant.storyName = "Education variant"

export const WithoutTitleBlockNavigation = () => (
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

WithoutTitleBlockNavigation.storyName = "Title Block without navigation"

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

WithoutSkirtCard.storyName = "Without SkirtCard"
