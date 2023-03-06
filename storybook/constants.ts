export const CATEGORIES = {
  introduction: "Introduction",
  components: "Components",
  helpers: "Helpers",
  designTokens: "Design Tokens",
  deprecated: "Deprecated",
  tailwind: "Systems/Tailwind",
  systems: "Systems",
  stickersheets: "Stickersheets",
}

export const SUB_CATEGORIES = {
  a11y: "Accessibility",
  button: "Button",
  form: "Form",
  illustration: "Illustration",
  notification: "Notification",
  typography: "Typography",
  responsive: "Responsive",
  richTextEditor: "Rich Text Editor",
  loadingSkeleton: "Loading Skeleton",
  datePicker: "Date Picker",
  select: "Select",
  menu: "Menu",
}

export const SORT_ORDER = {
  systems: [
    CATEGORIES.systems,
    [
      "*",
      "Tailwind",
      [
        "Overview",
        "Getting Started",
        "Configuration",
        "Working with Tailwind",
        "*",
        "Utility Class References",
        ["Overview", "*"],
      ],
    ],
  ],
}

export const SUB_COMPONENTS_FOLDER_NAME = "Subcomponents"
