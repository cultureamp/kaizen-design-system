import { loadElmStories } from "@cultureamp/elm-storybook"
import { Text } from "@kaizen/component-library"
import { TextField } from "@kaizen/component-library/draft"
import { Well } from "@kaizen/component-library/draft"
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

export default {
  title: 'Well (React)',
};

export const DefaultWithSolidBorderKaizenSiteDemo = () => (
    <Well>
      <ExampleContent />
    </Well>
  );

DefaultWithSolidBorderKaizenSiteDemo.story = {
  name: 'Default with solid border (Kaizen Site Demo)',
};

export const DefaultWithDashedBorder = () => (
    <Well borderStyle="dashed">
      <ExampleContent />
    </Well>
  );

DefaultWithDashedBorder.story = {
  name: 'Default with dashed border',
};

export const DefaultWithoutBorder = () => (
    <Well borderStyle="none">
      <ExampleContent />
    </Well>
  );

DefaultWithoutBorder.story = {
  name: 'Default without border',
};

export const DefaultWithNoMargin = () => (
    <Well noMargin>
      <ExampleContent />
    </Well>
  );

DefaultWithNoMargin.story = {
  name: 'Default with no margin',
};

export const Positive = () => (
    <Well variant="positive">
      <ExampleContent />
    </Well>
  );

export const Negative = () => (
    <Well variant="negative">
      <ExampleContent />
    </Well>
  );

export const Informative = () => (
    <Well variant="informative">
      <ExampleContent />
    </Well>
  );

export const Cautionary = () => (
    <Well variant="cautionary">
      <ExampleContent />
    </Well>
  );

export const InformativeWithDashedBorder = () => (
    <Well variant="informative" borderStyle="dashed">
      <ExampleContent />
    </Well>
  );

InformativeWithDashedBorder.story = {
  name: 'Informative with dashed border',
};

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
