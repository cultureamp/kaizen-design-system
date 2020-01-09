import { loadElmStories } from '@cultureamp/elm-storybook';
import * as React from 'react';

import { InlineNotification } from '@cultureamp/kaizen-component-library';

export default {
  title: 'InlineNotification',
};

export const affirmative = () => (
  <InlineNotification type="affirmative" title="Success!" automationId="notification1">
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
);

export const affirmativeAutohide = () => (
  <InlineNotification type="affirmative" title="Success!" autohide automationId="notification1">
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
);

affirmativeAutohide.story = {
  name: 'Affirmative, Autohide',
};

export const affirmativeAutohideHideCloseIcon = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    autohide
    hideCloseIcon
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
);

affirmativeAutohideHideCloseIcon.story = {
  name: 'Affirmative, Autohide, Hide Close Icon',
};

export const informative = () => (
  <InlineNotification type="informative" title="Informative" automationId="notification1">
    New user data is currently being processed. We'll let you know when the process is completed.{' '}
    <a href="/">Manage users</a>
  </InlineNotification>
);

export const cautionary = () => (
  <InlineNotification type="cautionary" title="Warning" automationId="notification1">
    New user data, imported by mackenzie@hooli.com has uploaded with some minor issues.{' '}
    <a href="/">View issues</a>
  </InlineNotification>
);

export const negative = () => (
  <InlineNotification type="negative" title="No network connection" automationId="notification1">
    Check your connection and try again. <a href="/">Refresh</a>.
  </InlineNotification>
);

export const persistentAffirmative = () => (
  <InlineNotification type="affirmative" title="Success!" persistent automationId="notification1">
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
);

persistentAffirmative.story = {
  name: 'Persistent, Affirmative',
};

export const persistentInformative = () => (
  <InlineNotification
    type="informative"
    title="Informative"
    persistent
    automationId="notification1"
  >
    New user data is currently being processed. We'll let you know when the process is completed.{' '}
    <a href="/">Manage users</a>
  </InlineNotification>
);

persistentInformative.story = {
  name: 'Persistent, Informative',
};

export const persistentCautionary = () => (
  <InlineNotification type="cautionary" title="Warning" persistent automationId="notification1">
    New user data, imported by mackenzie@hooli.com has uploaded with some minor issues.{' '}
    <a href="/">View issues</a>
  </InlineNotification>
);

persistentCautionary.story = {
  name: 'Persistent, Cautionary',
};

export const persistentNegative = () => (
  <InlineNotification type="negative" title="No network connection" automationId="notification1">
    Check your connection and try again. <a href="/">Refresh</a>.
  </InlineNotification>
);

persistentNegative.story = {
  name: 'Persistent, Negative',
};

export const multiline = () => (
  <InlineNotification type="negative" title="Error" automationId="notification1">
    There’s a problem connecting to your HRIS. Check your HRIS is working and check your{' '}
    <a href="/">integration settings</a>, or if you require more assistance please{' '}
    <a href="/">contact support</a>.
  </InlineNotification>
);

export const persistentMultiline = () => (
  <InlineNotification type="negative" title="Error" persistent automationId="notification1">
    There’s a problem connecting to your HRIS. Check your HRIS is working and check your{' '}
    <a href="/">integration settings</a>, or if you require more assistance please{' '}
    <a href="/">contact support</a>.
  </InlineNotification>
);

persistentMultiline.story = {
  name: 'Persistent, Multiline',
};

export const slim = () => (
  <InlineNotification type="affirmative" title="Success!" automationId="notification1">
    <a href="/">Manage users is now available</a>
  </InlineNotification>
);

export const persistentSlim = () => (
  <InlineNotification type="affirmative" title="Success!" persistent automationId="notification1">
    <a href="/">Manage users is now available</a>
  </InlineNotification>
);

persistentSlim.story = {
  name: 'Persistent, Slim',
};

export const multipleNotification = () => (
  <div
    style={{
      width: '100%',
    }}
  >
    <InlineNotification type="affirmative" title="Success!" automationId="notification1">
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
      <a href="/">Manage users is now available</a>
    </InlineNotification>
    <InlineNotification type="informative" title="Informative" automationId="notification2">
      New user data is currently being processed. We'll let you know when the process is completed.{' '}
      <a href="/">Manage users</a>
    </InlineNotification>
    <InlineNotification type="cautionary" title="Warning" automationId="notification3">
      New user data, imported by mackenzie@hooli.com has uploaded with some minor issues.{' '}
      <a href="/">View issues</a>
    </InlineNotification>
    <InlineNotification type="negative" title="No network connection" automationId="notification4">
      Check your connection and try again. <a href="/">Refresh</a>.
    </InlineNotification>
  </div>
);

loadElmStories('InlineNotification (Elm)', module, require('./InlineNotification.stories.elm'), [
  'Affirmative',
  'Informative',
  'Cautionary',
  'Negative',
  'Persistent, Affirmative',
  'Persistent, Informative',
  'Persistent, Cautionary',
  'Persistent, Negative',
  'Multiline',
  'Persistent, Multiline',
  'Slim',
  'Persistent, Slim',
  'Multiple Notification',
]);
