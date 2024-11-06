export const globalA11yRules = [
  {
    // we're not creating real pages so we don't care about heading structure here
    id: 'heading-order',
    enabled: false,
  },
  {
    // not convinced on this rule, had to undo one of these "fixes" in the last a11y audit
    id: 'scrollable-region-focusable',
    enabled: false,
  },
  {
    // not convinced on this rule, haven't heard anything about this from Intopia
    id: 'landmark-unique',
    enabled: false,
  },
  {
    // add a data-attribute for exceptions such as pseudo states
    id: 'color-contrast',
    selector: ':not([data-sb-a11y-color-contrast-disable])',
  },
  {
    // Incorrect accessibility from react-day-picker
    // https://github.com/gpbl/react-day-picker/issues/1688
    id: 'aria-allowed-role',
    selector: ':not(button[name="day"][role="gridcell"])',
  },
  {
    // In some edgecases like Select we want to be able to disable the rule and hide the button from screen readers
    id: 'aria-hidden-focus',
    selector:
      '[aria-hidden="true"]:not([data-a11y-ignore="aria-hidden-focus"])',
  },
]
