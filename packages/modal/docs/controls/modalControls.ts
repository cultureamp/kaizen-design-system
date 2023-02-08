/** Export the prop descriptions for the Root props as Modal is using dot notation and not compatible with Storybook */

export const modalControls = {
    isOpen: {
        description: "Sets the open state of the modal.",
        table: {
          defaultValue: {
            summary: false,
          },
          type: {
            summary: "boolean",
          },
        },
        control: {
          type: "boolean",
        },
      },
      size: {
        description: "Supports three sizes",
        table: {
          defaultValue: {
            summary: "md",
          },
          type: {
            summary: '"sm" | "md" | "lg"',
          },
        },
        options: ["sm", "md", "lg"],
        control: {
          type: "radio",
        },
      },
      accessibleLabelId: {
        description:
          "Identifies the element (or elements) that labels the current element.",
        table: {
          type: {
            summary: "string",
          },
        },
        control: {
          type: "text",
        },
      },
      children: {
        description: "The contents of the modal.",
        table: {
          type: {
            summary: "React.ReactNode",
          },
        },
      },
      onDismiss: {
        description: "Handler that is called when the modal should close.",
        table: {
          type: {
            summary: "() => void",
          },
        },
      },
      dismissOnBackdropClick: {
        description:
          "Whether to close the overlay when the user interacts outside it.",
        table: {
          defaultValue: {
            summary: true,
          },
          type: {
            summary: "boolean",
          },
        },
        control: {
          type: "boolean",
        },
      },
      hideCloseButton: {
        description: "Whether to show the close button.",
        table: {
          defaultValue: {
            summary: false,
          },
          type: {
            summary: "boolean",
          },
        },
        control: {
          type: "boolean",
        },
      },
}
