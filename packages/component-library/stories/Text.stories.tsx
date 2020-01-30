import { loadElmStories } from "@cultureamp/elm-storybook"
import { Text } from "@kaizen/component-library"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("Text (React)", module)
  .add("H1", () => <Text tag="h1">This is a Page Title (H1)</Text>)

  .add("H1 (inherit baseline)", () => (
    <Text tag="h1" inheritBaseline>
      This is a Page Title (H1) that inherits the baseline
    </Text>
  ))

  .add("H2", () => <Text tag="h2">This is a Title (H2)</Text>)
  .add("H2 (no bottom margin)", () => (
    <Text tag="h2" inline={true}>
      This is a Title (H2)
    </Text>
  ))

  .add("H3", () => <Text tag="h3">This is a Display Heading (H3)</Text>)

  .add("H4", () => <Text tag="h4">This is a Heading (H4)</Text>)

  .add("H5", () => (
    <Text tag="h5">This is a H5, which uses Heading styles</Text>
  ))

  .add("H6", () => (
    <Text tag="h6">This is a H6, which uses Heading styles</Text>
  ))

  .add("Paragraph", () => (
    <Text tag="p">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Text>
  ))

  .add("Paragraph (no margin)", () => (
    <Text tag="p" style="body">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Text>
  ))

  .add("Lede Paragraph", () => (
    <Text tag="p" style="lede">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Text>
  ))

  .add("Div", () => (
    <Text tag="div">
      Dr. Brené Brown, author of Daring Greatly, is a research professor from
      the University of Houston who studies human emotions, including shame and
      vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not
      weakness, and that myth is profoundly dangerous.” She went on to say that
      after 12 years of research, she has actually determined that vulnerability
      is “our most accurate measurement of courage.”
    </Text>
  ))

  .add("Div with Page Title styles", () => (
    <Text tag="div" style="page-title">
      Div with "Page Title" styles
    </Text>
  ))

  .add("Span", () => <Text tag="span">Span text</Text>)

  .add("Body-bold", () => (
    <Text tag="div" style="body-bold">
      Div with "Body Bold" styles
    </Text>
  ))

  .add("Small", () => (
    <Text tag="div" style="small">
      Div with "Small" styles
    </Text>
  ))

  .add("Small-bold", () => (
    <Text tag="div" style="small-bold">
      Div with "Small Bold" styles
    </Text>
  ))

  .add("Notification", () => (
    <Text tag="div" style="notification">
      Div with "Notification" styles
      <br />
      that have a smaller line-height
    </Text>
  ))

  .add("Label", () => (
    <Text tag="div" style="label">
      Div with "Label" styles
    </Text>
  ))

  .add("Control-action", () => (
    <Text tag="div" style="control-action">
      Div with "Control Action" styles
    </Text>
  ))

  .add("Button", () => (
    <Text tag="div" style="button">
      Div with "Button" styles
    </Text>
  ))

loadElmStories("Text (Elm)", module, require("./TextStories.elm"), [
  "h1",
  "h2",
  "h3",
])
