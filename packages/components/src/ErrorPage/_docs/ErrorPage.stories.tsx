import { Meta, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { ErrorPage } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Pages/Error Page",
  component: ErrorPage,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
      canvas: {
        sourceState: "shown",
      },
    },
    installation: [
      "npm install @kaizen/components",
      "import { ErrorPage } from `@kaizen/components`",
    ],
    resourceLinks: {
      /** @todo: Add Github link (adjust as needed) */
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/components/src/ErrorPage",
    },
  },
} satisfies Meta<typeof ErrorPage>

export default meta

export const Error400: StoryObj<typeof meta> = {
  args: {
    code: "400",
  },
}
export const Error401: StoryObj<typeof meta> = {
  args: {
    code: "401",
  },
}
export const Error403: StoryObj<typeof meta> = {
  args: {
    code: "403",
  },
}
export const Error404: StoryObj<typeof meta> = {
  args: {
    code: "404",
  },
}
export const Error422: StoryObj<typeof meta> = {
  args: {
    code: "422",
  },
}
export const Error500: StoryObj<typeof meta> = {
  args: {
    code: "500",
  },
}
export const Error502: StoryObj<typeof meta> = {
  args: {
    code: "502",
  },
}
export const Error503: StoryObj<typeof meta> = {
  args: {
    code: "503",
  },
}
export const Error504: StoryObj<typeof meta> = {
  args: {
    code: "504",
  },
}
export const CustomError: StoryObj<typeof meta> = {
  args: {
    code: 25,
    title: "This is a custom title",
    message: "This is a custom message",
    callToAction: {
      onContactSupport: () => alert("Custom handler"),
      homeHref: "/anewhome",
    },
  },
}
