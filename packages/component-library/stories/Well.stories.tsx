import { loadElmStories } from '@cultureamp/elm-storybook';
import { Text } from '@cultureamp/kaizen-component-library';
import { TextField } from '@cultureamp/kaizen-component-library/draft';
import { Well } from '@cultureamp/kaizen-component-library/draft';
import * as React from 'react';

const ExampleContent = () => (
  <div style={{ padding: '1em 2em', maxWidth: '400px' }}>
    <Text tag="h3">Heading</Text>
    <Text tag="p">
      This is just a sentence to fill the content area so that you have something to look at.
    </Text>
    <TextField id="blerg" labelText="Example text field" inputValue="" onChange={() => {}} />
  </div>
);

export default {
  title: 'Well',
};

export const defaultWithSolidBorder = () => (
  <Well>
    <ExampleContent />
  </Well>
);

defaultWithSolidBorder.story = {
  name: 'Default with solid border',
};

export const defaultWithDashedBorder = () => (
  <Well borderStyle="dashed">
    <ExampleContent />
  </Well>
);

defaultWithDashedBorder.story = {
  name: 'Default with dashed border',
};

export const defaultWithoutBorder = () => (
  <Well borderStyle="none">
    <ExampleContent />
  </Well>
);

defaultWithoutBorder.story = {
  name: 'Default without border',
};

export const defaultWithNoMargin = () => (
  <Well noMargin>
    <ExampleContent />
  </Well>
);

defaultWithNoMargin.story = {
  name: 'Default with no margin',
};

export const positive = () => (
  <Well variant="positive">
    <ExampleContent />
  </Well>
);

export const negative = () => (
  <Well variant="negative">
    <ExampleContent />
  </Well>
);

export const informative = () => (
  <Well variant="informative">
    <ExampleContent />
  </Well>
);

export const cautionary = () => (
  <Well variant="cautionary">
    <ExampleContent />
  </Well>
);

export const informativeWithDashedBorder = () => (
  <Well variant="informative" borderStyle="dashed">
    <ExampleContent />
  </Well>
);

informativeWithDashedBorder.story = {
  name: 'Informative with dashed border',
};

loadElmStories('Well(Elm)', module, require('./Well.stories.elm'), [
  'Default with solid border',
  'Default with dashed border',
  'Default without border',
  'Default with no margin',
  'Positive',
  'Negative',
  'Informative',
  'Cautionary',
  'Informative with dashed border',
]);
