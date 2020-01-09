import { loadElmStories } from '@cultureamp/elm-storybook';
import * as React from 'react';

import { ToastNotification } from '@cultureamp/kaizen-component-library';

export default {
  title: 'ToastNotification',
};

export const affirmative = () => (
  <ToastNotification type="affirmative" title="Success!" automationId="notification1">
    New user data, imported by mackenzie@hooli.com has successfully uploaded.
    <a href="/">Manage users is now available</a>
  </ToastNotification>
);

export const affirmativeAutohide = () => (
  <ToastNotification type="affirmative" title="Success!" autohide automationId="notification1">
    New user data, imported by mackenzie@hooli.com has successfully uploaded.
    <a href="/">Manage users is now available</a>
  </ToastNotification>
);

affirmativeAutohide.story = {
  name: 'Affirmative, Autohide',
};

export const affirmativeAutohideHideCloseIcon = () => (
  <ToastNotification
    automationId="notification1"
    type="affirmative"
    title="Success!"
    autohide
    hideCloseIcon
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.
    <a href="/">Manage users is now available</a>
  </ToastNotification>
);

affirmativeAutohideHideCloseIcon.story = {
  name: 'Affirmative, Autohide, Hide Close Icon',
};

export const informative = () => (
  <ToastNotification type="informative" title="Informative" automationId="notification1">
    New user data is currently being processed. We'll let you know when the process is completed.
    <a href="/">Manage users</a>
  </ToastNotification>
);

export const cautionary = () => (
  <ToastNotification type="cautionary" title="Warning" automationId="notification1">
    New user data, imported by mackenzie@hooli.com has uploaded with some minor issues.
    <a href="/">View issues</a>
  </ToastNotification>
);

export const negative = () => (
  <ToastNotification type="negative" title="No network connection" automationId="notification1">
    Check your connection and try again.
    <a href="/">Refresh</a>.
  </ToastNotification>
);

export const multipleNotifications = () => (
  <div>
    <ToastNotification type="affirmative" title="Success!" automationId="notification1">
      New user data, imported by mackenzie@hooli.com has successfully uploaded.
      <a href="/">Manage users is now available</a>
    </ToastNotification>
    <ToastNotification
      type="informative"
      title="Informative"
      automationId="notification2"
      autohide
      hideCloseIcon
    >
      New user data is currently being processed. We'll let you know when the process is completed.
      <a href="/">Manage users</a>
    </ToastNotification>
    <ToastNotification type="cautionary" title="Warning" automationId="notification3" autohide>
      New user data, imported by mackenzie@hooli.com has uploaded with some minor issues.
      <a href="/">View issues</a>
    </ToastNotification>
    <ToastNotification type="negative" title="No network connection" automationId="notification4">
      Check your connection and try again.
      <a href="/">Refresh</a>.
    </ToastNotification>
  </div>
);

multipleNotifications.story = {
  name: 'Multiple notifications',
};

loadElmStories('ToastNotification (Elm)', module, require('./ToastNotification.stories.elm'), [
  'Affirmative',
  'Informative',
  'Cautionary',
  'Negative',
  'Multiple notifications',
]);
