import { Button } from '@cultureamp/kaizen-component-library/components/Button';
import { TitleBlock } from '@cultureamp/kaizen-component-library/draft';
import * as React from 'react';

require('./TitleBlock.stories.scss');

const navigationButtons = [
  {
    buttonText: 'Dashboard',
    path: '#',
    active: true,
  },
  {
    buttonText: 'Tasks',
    path: '#',
    active: false,
  },
];

const reversedContainerStyle = {
  width: '100%',
  height: '600px',
  background: 'lightgrey',
};

const stickyContainerStyle = {
  width: '100%',
  height: '2000px',
  background: 'lightgrey',
};

export default {
  title: 'TitleBlock',
};

export const withTitle = () => <TitleBlock title="Reports" />;

withTitle.story = {
  name: 'with Title',
};

export const withSubtitle = () => <TitleBlock title="Home" subtitle="Subtitle goes here" />;

withSubtitle.story = {
  name: 'with subtitle',
};

export const withBreadcrumb = () => (
  <TitleBlock
    title="Home"
    subtitle="Subtitle goes here"
    breadcrumb={{ path: '#', text: 'Back to reports' }}
  />
);

withBreadcrumb.story = {
  name: 'with breadcrumb',
};

export const withActionButtons = () => (
  <TitleBlock title="Home">
    <Button label="Action" secondary />
    <Button label="Action 2" secondary />
  </TitleBlock>
);

withActionButtons.story = {
  name: 'with action buttons',
};

export const withNavigationButtons = () => (
  <TitleBlock title="Home" navigationButtons={navigationButtons} />
);

withNavigationButtons.story = {
  name: 'with navigation buttons',
};

export const withTag = () => (
  <TitleBlock
    title="Home"
    subtitle="Subtitle goes here"
    surveyStatus={{ status: 'live', text: 'Live' }}
  />
);

withTag.story = {
  name: 'with tag',
};

export const reversedStory = () => (
  <div style={reversedContainerStyle}>
    <TitleBlock
      title="Home"
      breadcrumb={{ path: '#', text: 'Back to reports' }}
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Peach"
    />
  </div>
);

reversedStory.story = {
  name: 'reversed',
};

export const stickyStory = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock title="Home" navigationButtons={navigationButtons} sticky>
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
);

stickyStory.story = {
  name: 'sticky',
};

export const stickyReversed = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Ocean"
      sticky
    >
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
);

stickyReversed.story = {
  name: 'sticky reversed',
};

export const stickyTransparent = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Transparent"
      sticky
    >
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
);

stickyTransparent.story = {
  name: 'sticky transparent',
};

export const stickyTransparentInitially = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Transparent"
      sticky
      stickyColor="Ocean"
    >
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
);

stickyTransparentInitially.story = {
  name: 'sticky transparent initially',
};
