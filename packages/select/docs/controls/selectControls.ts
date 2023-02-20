export const selectControls = {
  status: {
    options: ["error", "caution"],
    control: {
      type: "select",
    },
  },
  validationMessage: {
    control: "text",
  },
  label: {
    description: "The text label for the select.",
    table: {
      defaultValue: {
        summary: "label",
      },
      type: {
        summary: "text",
      },
    },
  },
  description: {
    description:
      "A description for the field. Provides a hint such as specific requirements for what to choose.",
    table: {
      type: {
        summary: "text",
      },
    },
  },
  items: {
    description: "Item objects in the collection.",
    table: {
      type: {
        summary: "Iterable<T>",
      },
    },
  },
  selectedKey: {
    description: "The currently selected key in the collection (controlled).",
    table: {
      type: {
        summary: "Key | null",
      },
    },
  },
  defaultSelectedKey: {
    description: "The initial selected key in the collection (uncontrolled).",
    table: {
      type: {
        summary: "Key",
      },
    },
  },
  onSelectionChange: {
    description: "Handler that is called when the selection changes.",
    table: {
      type: {
        summary: "(key: Key) => any",
      },
    },
  },
  defaultOpen: {
    description: "Sets the default open state of the menu.",
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "boolean",
      },
    },
  },
  isOpen: {
    description: "Sets the open state of the menu.",
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "boolean",
      },
    },
  },
  onOpenChange: {
    description:
      "Method that is called when the open state of the menu changes.",
    table: {
      type: {
        summary: "(isOpen: boolean) => void",
      },
    },
  },
  isDisabled: {
    description: "Whether the button is disabled.",
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "boolean",
      },
    },
  },
}
