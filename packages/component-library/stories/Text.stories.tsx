import { Text } from "@kaizen/component-library"
import * as React from "react"

export default {
  title: "Text (React)",
}

export const H1 = () => <Text tag="h1">This is a Page Title (H1)</Text>

H1.story = {
  name: "H1",
}

export const H1InheritBaseline = () => (
  <Text tag="h1" inheritBaseline>
    This is a Page Title (H1) that inherits the baseline
  </Text>
)

H1InheritBaseline.story = {
  name: "H1 (inherit baseline)",
}

export const H2 = () => <Text tag="h2">This is a Title (H2)</Text>

H2.story = {
  name: "H2",
}

export const H2NoBottomMargin = () => (
  <Text tag="h2" inline={true}>
    This is a Title (H2)
  </Text>
)

H2NoBottomMargin.story = {
  name: "H2 (no bottom margin)",
}

export const H3 = () => <Text tag="h3">This is a Display Heading (H3)</Text>

H3.story = {
  name: "H3",
}

export const H4 = () => <Text tag="h4">This is a Heading (H4)</Text>

H4.story = {
  name: "H4",
}

export const H5 = () => (
  <Text tag="h5">This is a H5, which uses Heading styles</Text>
)

H5.story = {
  name: "H5",
}

export const H6 = () => (
  <Text tag="h6">This is a H6, which uses Heading styles</Text>
)

H6.story = {
  name: "H6",
}

export const Paragraph = () => (
  <Text tag="p">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

export const ParagraphNoMargin = () => (
  <Text tag="p" style="body">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

ParagraphNoMargin.story = {
  name: "Paragraph (no margin)",
}

export const LedeParagraph = () => (
  <Text tag="p" style="lede">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

export const Div = () => (
  <Text tag="div">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the
    University of Houston who studies human emotions, including shame and
    vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
    weakness, and that myth is profoundly dangerous.” She went on to say that
    after 12 years of research, she has actually determined that vulnerability
    is “our most accurate measurement of courage.”
  </Text>
)

export const DivWithPageTitleStyles = () => (
  <Text tag="div" style="page-title">
    Div with "Page Title" styles
  </Text>
)

DivWithPageTitleStyles.story = {
  name: "Div with Page Title styles",
}

export const Span = () => <Text tag="span">Span text</Text>

export const BodyBold = () => (
  <Text tag="div" style="body-bold">
    Div with "Body Bold" styles
  </Text>
)

BodyBold.story = {
  name: "Body-bold",
}

export const Small = () => (
  <Text tag="div" style="small">
    Div with "Small" styles
  </Text>
)

export const SmallBold = () => (
  <Text tag="div" style="small-bold">
    Div with "Small Bold" styles
  </Text>
)

SmallBold.story = {
  name: "Small-bold",
}

export const Notification = () => (
  <Text tag="div" style="notification">
    Div with "Notification" styles
    <br />
    that have a smaller line-height
  </Text>
)

export const Label = () => (
  <Text tag="div" style="label">
    Div with "Label" styles
  </Text>
)

export const ControlAction = () => (
  <Text tag="div" style="control-action">
    Div with "Control Action" styles
  </Text>
)

ControlAction.story = {
  name: "Control-action",
}

export const Button = () => (
  <Text tag="div" style="button">
    Div with "Button" styles
  </Text>
)

export const ZenDisplay0 = () => (
  <Text style="zen-display-0" tag="p">
    This is a Zen Display 0, which uses Heading styles
  </Text>
)

export const ZenHeading1 = () => (
  <Text style="zen-heading-1" tag="h1">
    This is a Zen Heading 1, which uses Heading styles
  </Text>
)

export const ZenHeading2 = () => (
  <Text style="zen-heading-2" tag="h2">
    This is a Zen Heading 2, which uses Heading styles
  </Text>
)

export const ZenHeading3 = () => (
  <Text style="zen-heading-3" tag="h3">
    This is a Zen Heading 3, which uses Heading styles
  </Text>
)

export const ZenDataLarge = () => (
  <Text style="zen-data-large" tag="span">
    42
  </Text>
)

export const ZenDataLargeUnits = () => (
  <Text style="zen-data-large-units" tag="span">
    %
  </Text>
)

export const ZenDataMedium = () => (
  <Text style="zen-data-medium" tag="span">
    42
  </Text>
)

export const ZenDataMediumUnits = () => (
  <Text style="zen-data-medium-units" tag="span">
    %
  </Text>
)

export const ZenDataSmall = () => (
  <Text style="zen-data-small" tag="span">
    42
  </Text>
)

export const ZenDataSmallUnits = () => (
  <Text style="zen-data-small-units" tag="span">
    %
  </Text>
)
