// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/

// Note that order determines tab order in addons panel.
// tslint:disable:ordered-imports
import "@storybook/addon-storysource/register"
import "@storybook/addon-a11y/register"
import "@storybook/addon-actions/register"

// The following do not use the addons panel:
import "@storybook/addon-options/register"
import "@storybook/addon-backgrounds/register"
import "@storybook/addon-viewport/register"
