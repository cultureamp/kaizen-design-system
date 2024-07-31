import { processDirectory } from "./transformWell"
/** This is here as a script runner that  */
const init = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running Well transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  processDirectory(targetDir)
}

init()
