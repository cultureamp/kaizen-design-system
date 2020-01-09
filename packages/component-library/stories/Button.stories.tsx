import { loadElmStories } from '@cultureamp/elm-storybook';
import { Button } from '@cultureamp/kaizen-component-library';
const configureIcon = require('@cultureamp/kaizen-component-library/icons/configure.icon.svg')
  .default;
import { action } from '@storybook/addon-actions';
import * as React from 'react';

export default {
  title: 'Button',
};

export const defaultStory = () => <Button label="Label" />;

defaultStory.story = {
  name: 'Default',
};

export const fullWidthStory = () => <Button label="Label" fullWidth={true} />;

fullWidthStory.story = {
  name: 'Full Width',
};

export const fullWidthIcon = () => <Button label="Label" fullWidth={true} icon={configureIcon} />;

fullWidthIcon.story = {
  name: 'Full Width + Icon',
};

export const hyperlink = () => <Button label="Label" href="//example.com" />;

export const hyperlinkWOnClick = () => (
  <Button label="Label" href="//example.com" onClick={action('I am an onClick handler')} />
);

hyperlinkWOnClick.story = {
  name: 'Hyperlink w/ onClick',
};

export const iconLabel = () => <Button label="Configure" icon={configureIcon} />;

iconLabel.story = {
  name: 'Icon + Label',
};

export const labelIcon = () => <Button label="Configure" icon={configureIcon} iconPosition="end" />;

labelIcon.story = {
  name: 'Label + Icon',
};

export const overflowingText = () => (
  <div style={{ width: 120 }}>
    <Button icon={configureIcon} label="Passez au rapport de synthèse" automationId="demo-button" />
  </div>
);

overflowingText.story = {
  name: 'Overflowing text',
};

export const formOverflowingText = () => (
  <div style={{ width: 120 }}>
    <Button
      form
      icon={configureIcon}
      label="Passez au rapport de synthèse"
      automationId="demo-button"
    />
  </div>
);

formOverflowingText.story = {
  name: 'Form (Overflowing text)',
};

export const disabledStory = () => <Button label="Label" disabled={true} />;

disabledStory.story = {
  name: 'Disabled',
};

export const formStory = () => <Button label="Label" form={true} />;

formStory.story = {
  name: 'Form',
};

export const primaryStory = () => <Button label="Label" primary={true} />;

primaryStory.story = {
  name: 'Primary',
};

export const primaryDisabled = () => <Button label="Label" primary={true} disabled={true} />;

export const secondaryStory = () => <Button label="Label" secondary={true} />;

secondaryStory.story = {
  name: 'Secondary',
};

export const secondaryDisabled = () => <Button label="Label" secondary={true} disabled={true} />;

export const secondaryWIcon = () => (
  <Button label="Configure" icon={configureIcon} secondary={true} />
);

secondaryWIcon.story = {
  name: 'Secondary w/ Icon',
};

export const secondaryDisabledWIcon = () => (
  <Button label="Configure" icon={configureIcon} secondary={true} disabled={true} />
);

secondaryDisabledWIcon.story = {
  name: 'Secondary Disabled w/ Icon',
};

export const destructiveStory = () => <Button label="Label" destructive={true} />;

destructiveStory.story = {
  name: 'Destructive',
};

export const destructiveDisabled = () => (
  <Button label="Label" destructive={true} disabled={true} />
);

export const reversedStory = () => <Button label="Label" reversed={true} />;

reversedStory.story = {
  name: 'Reversed',
};

export const reversedDisabled = () => <Button label="Label" reversed={true} disabled={true} />;

export const primaryReversed = () => (
  <Button label="Label" primary={true} disabled={true} reverseColor="ocean" />
);

export const primaryReversedDisabled = () => (
  <Button label="Label" primary={true} reversed={true} disabled={true} />
);

export const secondaryReversed = () => <Button label="Label" secondary={true} reversed={true} />;

export const secondaryReversedDisabled = () => (
  <Button label="Label" secondary={true} reversed={true} disabled={true} />
);

export const secondaryReversedWIcon = () => (
  <Button label="Configure" secondary={true} reversed={true} icon={configureIcon} />
);

secondaryReversedWIcon.story = {
  name: 'Secondary Reversed w/ Icon',
};

export const secondaryReversedDisabledWIcon = () => (
  <Button label="Configure" secondary={true} reversed={true} disabled={true} icon={configureIcon} />
);

secondaryReversedDisabledWIcon.story = {
  name: 'Secondary Reversed Disabled w/ Icon',
};

export const typeSubmit = () => <Button label="Label" type="submit" />;
export const typeReset = () => <Button label="Label" type="reset" />;

export const multipleButtons = () => (
  <div>
    <Button label="Save" primary automationId="demo-button-1" />
    <Button label="Exit" automationId="demo-button-2" />
  </div>
);

loadElmStories('Button (Elm)', module, require('./Button.stories.elm'), [
  'Default',
  'Primary',
  'Secondary',
  'Destructive',
  'Destructive w/ Icon',
  'Secondary Destructive w/ Icon',
]);
