import { standalone } from "@kaizen/storybook/standalone"
import { CommandModule } from "yargs"

const commandModule: CommandModule = {
  command: "storybook",
  describe: "Develop components in storybook.",
  handler: ({ port = 9009, build = false }) => {
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
  },
}

const { command, describe, handler } = commandModule
export { command, describe, handler }
