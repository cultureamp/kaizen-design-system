import { loadElmStories } from '@cultureamp/elm-storybook';
import * as React from 'react';

import { Tag } from '@cultureamp/kaizen-component-library/draft';
import { Tooltip } from '@cultureamp/kaizen-component-library/draft';

export default {
  title: 'Tooltip',
};

export const defaultBelow = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Tooltip position="below" text="This is below the tooltip">
      <Tag>Below</Tag>
    </Tooltip>
  </div>
);

defaultBelow.story = {
  name: 'Default - Below',
};

export const defaultAbove = () => (
  <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <Tooltip position="above" text="This is above the tooltip">
        <Tag>Above</Tag>
      </Tooltip>
    </div>
  </div>
);

defaultAbove.story = {
  name: 'Default - Above',
};

loadElmStories('Tooltip (Elm)', module, require('./TooltipStories.elm'), [
  'Default - Below',
  'Default - Above',
]);
