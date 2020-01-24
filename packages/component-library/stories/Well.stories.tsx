import { loadElmStories } from "@cultureamp/elm-storybook"
import { Text } from "@kaizen/component-library"
import { TextField } from "@kaizen/component-library/draft"
import { Well } from "@kaizen/component-library/draft"
import { boolean, radios, withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const ExampleContent = () => (
  <div style={{ padding: "1em 2em", maxWidth: "400px" }}>
    <Text tag="h3">Heading</Text>
    <Text tag="p">
      This is just a sentence to fill the content area so that you have
      something to look at.
    </Text>
    <TextField
      id="blerg"
      labelText="Example text field"
      inputValue=""
      onChange={() => {}}
    />
  </div>
)

storiesOf("Well (React)", module)
  .addDecorator(withKnobs)
  .add("with Knobs", () => {
    const variants = [
      "positive",
      "negative",
      "informative",
      "cautionary",
      "default",
    ]
    // @ts-ignore
    const variantKnob = radios("variant", variants, "default")

    const borders = ["solid", "dashed", "none"]
    // @ts-ignore
    const borderStyleKnob = radios("borderStyle", borders, "solid")

    const noMarginKnob = boolean("noMargin", false)

    return (
      <Well
        variant={variantKnob}
        borderStyle={borderStyleKnob}
        noMargin={noMarginKnob}
      >
        <ExampleContent />
      </Well>
    )
  })
  .add("Default with solid border", () => (
    <Well>
      <ExampleContent />
    </Well>
  ))
  .add("Default with dashed border", () => (
    <Well borderStyle="dashed">
      <ExampleContent />
    </Well>
  ))
  .add("Default without border", () => (
    <Well borderStyle="none">
      <ExampleContent />
    </Well>
  ))
  .add("Default with no margin", () => (
    <Well noMargin>
      <ExampleContent />
    </Well>
  ))
  .add("Positive", () => (
    <Well variant="positive">
      <ExampleContent />
    </Well>
  ))
  .add("Negative", () => (
    <Well variant="negative">
      <ExampleContent />
    </Well>
  ))
  .add("Informative", () => (
    <Well variant="informative">
      <ExampleContent />
    </Well>
  ))
  .add("Cautionary", () => (
    <Well variant="cautionary">
      <ExampleContent />
    </Well>
  ))
  .add("Informative with dashed border", () => (
    <Well variant="informative" borderStyle="dashed">
      <ExampleContent />
    </Well>
  ))

loadElmStories("Well (Elm)", module, require("./Well.stories.elm"), [
  "Default with solid border",
  "Default with dashed border",
  "Default without border",
  "Default with no margin",
  "Positive",
  "Negative",
  "Informative",
  "Cautionary",
  "Informative with dashed border",
])
