export const classNameOverrideArgType = {
  classNameOverride: {
    type: "string",
    description:
      "Add extra classnames to the component. Try out some Tailwind classes (eg. `!mb-48`) to see!",
  },
} as const

export const classNameOverrideFilterArgType = {
  classNameOverride: {
    type: "string",
    description:
      "Add extra classnames to the contents within the popover. Try out some Tailwind classes (eg. `!mb-48`) to see!",
  },
} as const
