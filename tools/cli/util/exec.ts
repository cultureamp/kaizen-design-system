import execa from "execa"
import { resolve } from "path"
import { getPath } from "./paths"

/** Run something from the root `node_modules/.bin` directory with `ts-node`. */
export const execNodeBin = async (
  bin: string,
  options: { args?: string[]; cwd?: string }
) => {
  await execa(
    resolve(getPath("node-bin"), "ts-node"),
    [
      "--transpile-only",
      "--project",
      resolve(getPath("root"), "tsconfig.json"),
      resolve(getPath("node-bin"), bin),
      ...(options.args || []),
    ],
    {
      cwd: options.cwd,
      stdio: "inherit",
    }
  ).catch(error => {
    console.error(error)
    process.exit(1)
  })
}
