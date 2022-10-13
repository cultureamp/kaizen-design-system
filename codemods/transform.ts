import fs from "fs"
import postcss, { AcceptedPlugin } from "postcss"
import glob from "glob"

import { transformCaGrid, transformKzTypography } from "./plugins"

// Define a helper function to execute the transform.
const transform = async () => {
  const plugins: AcceptedPlugin[] = [transformKzTypography]
  // Initializes a PostCSS processor, passing plugins to be included.
  // Plugins in this instance are all the transforms we're goign to be passing in
  const processor = postcss(plugins)
  // Gets all files from specified folder as a glob
  const files = glob.sync(
    `${process.env.ROOT_FOLDER}/**/*.scss` || "./src/**/*.scss"
  )

  const filePromises = files.map(async file => {
    // Read the file and convert it to a string.
    const contents = fs.readFileSync(file).toString()

    // `contents` is the stringified css
    const result = await processor.process(contents, { from: undefined })

    // Write the result back to the original file, completing
    // the transformation for this file.
    fs.writeFileSync(file, result.css)
  })

  // Wait for the array of promises to all resolve.
  await Promise.all(filePromises)
}

transform()
