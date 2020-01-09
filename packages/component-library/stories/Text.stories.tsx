import { loadElmStories } from '@cultureamp/elm-storybook';
import { Text } from '@cultureamp/kaizen-component-library';
import * as React from 'react';

export default {
  title: 'Text',
};

export const h1 = () => <Text tag="h1">This is a Page Title (H1)</Text>;

h1.story = {
  name: 'H1',
};

export const h1InheritBaseline = () => (
  <Text tag="h1" inheritBaseline>
    This is a Page Title (H1) that inherits the baseline
  </Text>
);

h1InheritBaseline.story = {
  name: 'H1 (inherit baseline)',
};

export const h2 = () => <Text tag="h2">This is a Title (H2)</Text>;

h2.story = {
  name: 'H2',
};

export const h2NoBottomMargin = () => (
  <Text tag="h2" inline={true}>
    This is a Title (H2)
  </Text>
);

h2NoBottomMargin.story = {
  name: 'H2 (no bottom margin)',
};

export const h3 = () => <Text tag="h3">This is a Display Heading (H3)</Text>;

h3.story = {
  name: 'H3',
};

export const h4 = () => <Text tag="h4">This is a Heading (H4)</Text>;

h4.story = {
  name: 'H4',
};

export const h5 = () => <Text tag="h5">This is a H5, which uses Heading styles</Text>;

h5.story = {
  name: 'H5',
};

export const h6 = () => <Text tag="h6">This is a H6, which uses Heading styles</Text>;

h6.story = {
  name: 'H6',
};

export const paragraph = () => (
  <Text tag="p">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of
    Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk,
    she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to
    say that after 12 years of research, she has actually determined that vulnerability is “our most
    accurate measurement of courage.”
  </Text>
);

export const paragraphNoMargin = () => (
  <Text tag="p" style="body">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of
    Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk,
    she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to
    say that after 12 years of research, she has actually determined that vulnerability is “our most
    accurate measurement of courage.”
  </Text>
);

paragraphNoMargin.story = {
  name: 'Paragraph (no margin)',
};

export const ledeParagraph = () => (
  <Text tag="p" style="lede">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of
    Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk,
    she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to
    say that after 12 years of research, she has actually determined that vulnerability is “our most
    accurate measurement of courage.”
  </Text>
);

export const div = () => (
  <Text tag="div">
    Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of
    Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk,
    she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to
    say that after 12 years of research, she has actually determined that vulnerability is “our most
    accurate measurement of courage.”
  </Text>
);

export const divWithPageTitleStyles = () => (
  <Text tag="div" style="page-title">
    Div with "Page Title" styles
  </Text>
);

divWithPageTitleStyles.story = {
  name: 'Div with Page Title styles',
};

export const span = () => <Text tag="span">Span text</Text>;

export const bodyBold = () => (
  <Text tag="div" style="body-bold">
    Div with "Body Bold" styles
  </Text>
);

bodyBold.story = {
  name: 'Body-bold',
};

export const small = () => (
  <Text tag="div" style="small">
    Div with "Small" styles
  </Text>
);

export const smallBold = () => (
  <Text tag="div" style="small-bold">
    Div with "Small Bold" styles
  </Text>
);

smallBold.story = {
  name: 'Small-bold',
};

export const notification = () => (
  <Text tag="div" style="notification">
    Div with "Notification" styles
    <br />
    that have a smaller line-height
  </Text>
);

export const label = () => (
  <Text tag="div" style="label">
    Div with "Label" styles
  </Text>
);

export const controlAction = () => (
  <Text tag="div" style="control-action">
    Div with "Control Action" styles
  </Text>
);

controlAction.story = {
  name: 'Control-action',
};

export const button = () => (
  <Text tag="div" style="button">
    Div with "Button" styles
  </Text>
);

loadElmStories('Text (Elm)', module, require('./TextStories.elm'), ['h1', 'h2', 'h3']);
