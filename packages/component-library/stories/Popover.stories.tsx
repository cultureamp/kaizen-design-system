import { loadElmStories } from "@cultureamp/elm-storybook"
import { Popover } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("Popover", module)
  .add("Default", () => (
    <Popover heading="Default">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Informative", () => (
    <Popover heading="Informative" variant="informative">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Informative with singleLine", () => (
    <Popover
      heading="Informative-default-with-single-line"
      variant="informative"
      singleLine
    >
      http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
    </Popover>
  ))
  .add("Informative Large", () => (
    <Popover
      heading="Informative-large-with-multi-line"
      variant="informative"
      size="large"
    >
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Informative Large with singleLine", () => (
    <Popover
      heading="Informative-large-with-single-line"
      variant="informative"
      size="large"
      singleLine
    >
      http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
    </Popover>
  ))
  .add("Positive", () => (
    <Popover heading="Positive" variant="positive">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Negative", () => (
    <Popover heading="Negative" variant="negative">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Cautionary", () => (
    <Popover heading="Cautionary" variant="cautionary">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Dismissible", () => (
    <Popover heading="Dismissible" dismissible>
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  ))
  .add("Arrow above", () => (
    <div style={{ marginTop: "1.5rem" }}>
      <Popover heading="Arrow above" side="top">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </div>
  ))
  .add("Arrow start", () => (
    <div style={{ marginTop: "1.5rem" }}>
      <Popover heading="Arrow start" position="start">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </div>
  ))
  .add("Arrow end", () => (
    <div style={{ marginTop: "1.5rem" }}>
      <Popover heading="Arrow end" position="end" side="top">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </div>
  ))
  .add("Box offset", () => (
    <>
      <div style={{ marginTop: "1.5rem", height: 200 }}>
        <Popover heading="Box offset" position="center" side="top" boxOffset={-50}>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
      <div style={{ marginTop: "1.5rem", height: 200 }}>
        <Popover heading="Box offset" position="end" side="bottom" boxOffset={20}>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </>
  ))

loadElmStories("Popover (Elm)", module, require("./PopoverStories.elm"), [
  "Default",
  "Informative",
  "Positive",
  "Negative",
  "Cautionary",
  "Dismissible",
  "Arrow above",
  "Arrow start",
  "Arrow end",
])
