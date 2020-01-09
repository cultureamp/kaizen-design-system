import { loadElmStories } from '@cultureamp/elm-storybook';
import { Popover } from '@cultureamp/kaizen-component-library/draft';
import * as React from 'react';

export default {
  title: 'Popover',
};

export const defaultStory = () => (
  <Popover heading="Default">
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

defaultStory.story = {
  name: 'Default',
};

export const informative = () => (
  <Popover heading="Informative" variant="informative">
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

export const informativeWithSingleLine = () => (
  <Popover heading="Informative-default-with-single-line" variant="informative" singleLine>
    http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
  </Popover>
);

informativeWithSingleLine.story = {
  name: 'Informative with singleLine',
};

export const informativeLarge = () => (
  <Popover heading="Informative-large-with-multi-line" variant="informative" size="large">
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

export const informativeLargeWithSingleLine = () => (
  <Popover
    heading="Informative-large-with-single-line"
    variant="informative"
    size="large"
    singleLine
  >
    http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
  </Popover>
);

informativeLargeWithSingleLine.story = {
  name: 'Informative Large with singleLine',
};

export const positive = () => (
  <Popover heading="Positive" variant="positive">
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

export const negative = () => (
  <Popover heading="Negative" variant="negative">
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

export const cautionary = () => (
  <Popover heading="Cautionary" variant="cautionary">
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

export const dismissibleStory = () => (
  <Popover heading="Dismissible" dismissible>
    Popover body that explains something useful, is optional, and not critical to completing a task.
  </Popover>
);

dismissibleStory.story = {
  name: 'Dismissible',
};

export const arrowAbove = () => (
  <div style={{ marginTop: '1.5rem' }}>
    <Popover heading="Arrow above" side="top">
      Popover body that explains something useful, is optional, and not critical to completing a
      task.
    </Popover>
  </div>
);

arrowAbove.story = {
  name: 'Arrow above',
};

export const arrowStart = () => (
  <div style={{ marginTop: '1.5rem' }}>
    <Popover heading="Arrow start" position="start">
      Popover body that explains something useful, is optional, and not critical to completing a
      task.
    </Popover>
  </div>
);

arrowStart.story = {
  name: 'Arrow start',
};

export const arrowEnd = () => (
  <div style={{ marginTop: '1.5rem' }}>
    <Popover heading="Arrow end" position="end" side="top">
      Popover body that explains something useful, is optional, and not critical to completing a
      task.
    </Popover>
  </div>
);

arrowEnd.story = {
  name: 'Arrow end',
};

export const boxOffsetStory = () => (
  <>
    <div style={{ marginTop: '1.5rem', height: 200 }}>
      <Popover heading="Box offset" position="center" side="top" boxOffset={-50}>
        Popover body that explains something useful, is optional, and not critical to completing a
        task.
      </Popover>
    </div>
    <div style={{ marginTop: '1.5rem', height: 200 }}>
      <Popover heading="Box offset" position="center" side="bottom" boxOffset={50}>
        Popover body that explains something useful, is optional, and not critical to completing a
        task.
      </Popover>
    </div>
  </>
);

boxOffsetStory.story = {
  name: 'Box offset',
};

loadElmStories('Popover (Elm)', module, require('./PopoverStories.elm'), [
  'Default',
  'Informative',
  'Positive',
  'Negative',
  'Cautionary',
  'Dismissible',
  'Arrow above',
  'Arrow start',
  'Arrow end',
]);
