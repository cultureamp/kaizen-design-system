import React from "react"
import { ComponentStory } from "@storybook/react"
import { Text } from "@kaizen/component-library"

export default {
  title: "Deprecated/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          "⛔️ This component is deprecated. Use the `@kaizen/typography` package instead.",
      },
    },
  },
}

export const H1: ComponentStory<typeof Text> = () => (
  <Text tag="h1">This is a Page Title (H1)</Text>
)
H1.storyName = "H1"

export const H1InheritBaseline: ComponentStory<typeof Text> = () => (
  <Text tag="h1" inheritBaseline>
    This is a Page Title (H1) that inherits the baseline
  </Text>
)
H1InheritBaseline.storyName = "H1 (inherit baseline)"

export const H2: ComponentStory<typeof Text> = () => (
  <Text tag="h2">This is a Title (H2)</Text>
)
H2.storyName = "H2"

export const H2NoBottomMargin: ComponentStory<typeof Text> = () => (
  <Text tag="h2" inline={true}>
    This is a Title (H2)
  </Text>
)
H2NoBottomMargin.storyName = "H2 (no bottom margin)"

export const H3: ComponentStory<typeof Text> = () => (
  <Text tag="h3">This is a Display Heading (H3)</Text>
)
H3.storyName = "H3"

export const H4: ComponentStory<typeof Text> = () => (
  <Text tag="h4">This is a Heading (H4)</Text>
)
H4.storyName = "H4"

export const H5: ComponentStory<typeof Text> = () => (
  <Text tag="h5">This is a H5, which uses Heading styles</Text>
)
H5.storyName = "H5"

export const H6: ComponentStory<typeof Text> = () => (
  <Text tag="h6">This is a H6, which uses Heading styles</Text>
)
H6.storyName = "H6"

export const Paragraph: ComponentStory<typeof Text> = () => (
  <Text tag="p">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

export const ParagraphNoMargin: ComponentStory<typeof Text> = () => (
  <Text tag="p" style="body">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

ParagraphNoMargin.storyName = "Paragraph (no margin)"

export const LedeParagraph: ComponentStory<typeof Text> = () => (
  <Text tag="p" style="lede">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

export const Div: ComponentStory<typeof Text> = () => (
  <Text tag="div">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

export const DivWithPageTitleStyles: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="page-title">
    Div with "Page Title" styles
  </Text>
)
DivWithPageTitleStyles.storyName = "Div with Page Title styles"

export const Span: ComponentStory<typeof Text> = () => (
  <Text tag="span">Span text</Text>
)

export const BodyBold: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="body-bold">
    Div with "Body Bold" styles
  </Text>
)
BodyBold.storyName = "Body-bold"

export const Small: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="small">
    Div with "Small" styles
  </Text>
)

export const SmallBold: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="small-bold">
    Div with "Small Bold" styles
  </Text>
)
SmallBold.storyName = "Small-bold"

export const Notification: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="notification">
    Div with "Notification" styles
    <br />
    that have a smaller line-height
  </Text>
)

export const Label: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="label">
    Div with "Label" styles
  </Text>
)

export const ControlAction: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="control-action">
    Div with "Control Action" styles
  </Text>
)
ControlAction.storyName = "Control-action"

export const Button: ComponentStory<typeof Text> = () => (
  <Text tag="div" style="button">
    Div with "Button" styles
  </Text>
)

export const ZenDisplay0: ComponentStory<typeof Text> = () => (
  <Text style="zen-display-0" tag="p">
    This is a Zen Display 0, which uses Heading styles
  </Text>
)

export const ZenHeading1: ComponentStory<typeof Text> = () => (
  <Text style="zen-heading-1" tag="h1">
    This is a Zen Heading 1, which uses Heading styles
  </Text>
)

export const ZenHeading2: ComponentStory<typeof Text> = () => (
  <Text style="zen-heading-2" tag="h2">
    This is a Zen Heading 2, which uses Heading styles
  </Text>
)

export const ZenHeading3: ComponentStory<typeof Text> = () => (
  <Text style="zen-heading-3" tag="h3">
    This is a Zen Heading 3, which uses Heading styles
  </Text>
)

export const ZenDataLarge: ComponentStory<typeof Text> = () => (
  <Text style="zen-data-large" tag="span">
    42
  </Text>
)

export const ZenDataLargeUnits: ComponentStory<typeof Text> = () => (
  <Text style="zen-data-large-units" tag="span">
    %
  </Text>
)

export const ZenDataMedium: ComponentStory<typeof Text> = () => (
  <Text style="zen-data-medium" tag="span">
    42
  </Text>
)

export const ZenDataMediumUnits: ComponentStory<typeof Text> = () => (
  <Text style="zen-data-medium-units" tag="span">
    %
  </Text>
)

export const ZenDataSmall: ComponentStory<typeof Text> = () => (
  <Text style="zen-data-small" tag="span">
    42
  </Text>
)

export const ZenDataSmallUnits: ComponentStory<typeof Text> = () => (
  <Text style="zen-data-small-units" tag="span">
    %
  </Text>
)
