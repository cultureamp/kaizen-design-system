import { standalone } from "@kaizen/storybook/standalone"

export const command = "storybook [--build]"
export const describe = "Render all component stories in Storybook."

export const handler = ({ port = 9009, build = false }) => {
  try {
    standalone({
      mode: build ? "static" : "dev",
      port: port,
      configDir: "tools/storybook",
      frameworkPresets: [],
    })
  } catch (e) {
    throw new Error(e)
  }
}
