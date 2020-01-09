import { loadElmStories } from '@cultureamp/elm-storybook';
import * as React from 'react';

import { Icon } from '@cultureamp/kaizen-component-library';
const configureIcon = require('@cultureamp/kaizen-component-library/icons/configure.icon.svg')
  .default;

export default {
  title: 'Icon',
};

export const meaningful = () => (
  <Icon icon={configureIcon} title="Warning" desc="Aliens approaching!" role="img" />
);

export const presentational = () => <Icon icon={configureIcon} role="presentation" />;

export const inheritSizeStory = () => (
  <div style={{ width: '100%' }}>
    <Icon icon={configureIcon} role="presentation" inheritSize={true} />
  </div>
);

inheritSizeStory.story = {
  name: 'Inherit Size',
};

loadElmStories('Icon(Elm)', module, require('./Icon.stories.elm'), [
  'Meaningful',
  'Presentational',
  'Inherit Size',
]);
