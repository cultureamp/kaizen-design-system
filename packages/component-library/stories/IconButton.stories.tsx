import { IconButton } from '@cultureamp/kaizen-component-library';
const configureIcon = require('@cultureamp/kaizen-component-library/icons/configure.icon.svg')
  .default;
import { action } from '@storybook/addon-actions';
import * as React from 'react';

export default {
  title: 'IconButton',
};

export const defaultStory = () => (
  <IconButton icon={configureIcon} label="Label" automationId="demo-button" />
);

defaultStory.story = {
  name: 'Default',
};

export const hyperlink = () => (
  <IconButton icon={configureIcon} label="Label" href="//example.com" />
);

export const hyperlinkWOnClick = () => (
  <IconButton
    icon={configureIcon}
    label="Label"
    href="//example.com"
    onClick={action('I am an onClick handler')}
  />
);

hyperlinkWOnClick.story = {
  name: 'Hyperlink w/ onClick',
};

export const disabledStory = () => (
  <IconButton icon={configureIcon} label="Label" disabled={true} />
);

disabledStory.story = {
  name: 'Disabled',
};

export const formStory = () => <IconButton icon={configureIcon} label="Label" form={true} />;

formStory.story = {
  name: 'Form',
};

export const destructiveStory = () => (
  <IconButton icon={configureIcon} label="Label" destructive={true} />
);

destructiveStory.story = {
  name: 'Destructive',
};

export const destructiveDisabled = () => (
  <IconButton icon={configureIcon} label="Label" destructive={true} disabled={true} />
);

export const reversedStory = () => <IconButton icon={configureIcon} label="Label" reversed />;

reversedStory.story = {
  name: 'Reversed',
};

export const reversedDisabled = () => (
  <IconButton icon={configureIcon} label="Label" reversed={true} disabled={true} />
);
