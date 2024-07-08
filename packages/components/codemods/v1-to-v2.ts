import fs from "fs/promises"
import path from "path"

// This is still a WIP, but it should give you a good starting point
// Currently this can take a directory, component and logical group and create a v1 and v2 directory with the v1 contents
// The v2 side of this works with the future directory but reexporting from v1 into v2 for unchanged files is not yet finished
// The intention is to only use this locally for our own repo and not used past that so it does need to be perfect

async function copyContentsToTargetDir(
  source: string,
  targetDir: string
): Promise<void> {
  try {
    try {
      await fs.access(targetDir)
    } catch {
      await fs.mkdir(targetDir)
    }

    const items = await fs.readdir(source, { withFileTypes: true })

    for (const item of items) {
      const sourcePath = path.join(source, item.name)
      const destPath = path.join(targetDir, item.name)

      if (item.isDirectory()) {
        await copyContentsToTargetDir(sourcePath, destPath)
      } else {
        await fs.copyFile(sourcePath, destPath)
      }
    }
  } catch (error) {
    console.error("Failed to copy directory contents:", error)
  }
}

const updateKAIOInstallationProps = async (
  filePath: string,
  family: string,
  version: number
): Promise<void> => {
  try {
    // Read the content of the .mdx file
    const content = await fs.readFile(filePath, "utf8")

    // Define a regular expression to find the KAIOInstallation component and update it
    const regex = /<KAIOInstallation([^>]*)\/>/g
    const updatedContent = content.replace(regex, (match, props) => {
      // Avoid adding duplicate props
      if (!props.includes("family=") && !props.includes("version=")) {
        return `<KAIOInstallation${props} family="${family}" version="${version}" />`
      }
      return match
    })

    // Write the updated content back to the file
    await fs.writeFile(filePath, updatedContent, "utf8")
    console.log("The .mdx docs has been updated successfully.")
  } catch (error) {
    console.error("Failed to update the .mdx file:", error)
  }
}

const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1)

const updateMetaTitleInDirectory = async (
  directoryPath: string,
  family: string,
  componentName: string,
  version: number
): Promise<void> => {
  try {
    const files = await fs.readdir(directoryPath)
    const storiesFiles = files.filter(file => file.endsWith(".stories.tsx"))

    // Apply the update to each file
    for (const file of storiesFiles) {
      const filePath = path.join(directoryPath, file)
      try {
        // Read the content of the .tsx file
        const content = await fs.readFile(filePath, "utf8")

        // Define a regular expression to find the meta constant's title and update it
        const regex =
          /(const meta = {\s*title: "|export default {\s*title: ")([^"]+)(",)/

        const newTitle = `${capitalize(family)}/${componentName}/v${version}`
        const updatedContent = content.replace(regex, `$1${newTitle}$3`)

        // Write the updated content back to the file
        await fs.writeFile(filePath, updatedContent, "utf8")
        console.log(`${componentName} docs meta has been updated successfully.`)
      } catch (error) {
        console.error(`Failed to update the file: ${filePath}`, error)
      }
    }
  } catch (error) {
    console.error(`Failed to read the directory: ${directoryPath}`, error)
  }
}

/** This is a bit of a jumble that codepilot spat out, it kind of works but its pretty gnarly - refactor this up when/if you come back to it */
const updateV2Exports = async (
  sourceDir: string,
  targetDir: string
): Promise<void> => {
  async function processDirectory(directory): Promise<void> {
    const items = await fs.readdir(directory, { withFileTypes: true })
    for (const item of items) {
      const fullPath = path.join(directory, item.name)
      if (item.isDirectory()) {
        await processDirectory(fullPath)
      } else if (item.isFile() && item.name === "index.ts") {
        await updateExportPath(fullPath)
      }
    }
  }
  async function updateExportPath(filePath): Promise<void> {
    const data = await fs.readFile(filePath, "utf8")
    const updatedContent = data.replace(
      /export \* from "\.\/(.*?)"/g,
      `export * from "${sourceDir}/$1"`
    )
    await fs.writeFile(filePath, updatedContent, "utf8")
    console.log(`Updated export paths in ${filePath}`)
  }

  await processDirectory(targetDir)
}

const createV2StructureWithDocs = async (
  baseDir: string,
  componentName: string,
  family: string
): Promise<void> => {
  const futureComponents = ["Select", "Workflow"]
  const hasFuture = futureComponents.includes(componentName)
  const v1Dir = path.resolve(baseDir, `../__${family}__/${componentName}/v1`)
  const v2Dir = path.resolve(baseDir, `../__${family}__/${componentName}/v2`)

  await fs.mkdir(v1Dir, { recursive: true })
  await fs.mkdir(v2Dir, { recursive: true })

  // Currently only v1 duplication
  await copyContentsToTargetDir(baseDir, v1Dir)
  // Updates Story title and the KAIOInstallation component
  // Should still check these since they rely on REGEX heavily but this should speed up the process
  // This will not add the (v3) in the h1 of the story
  await updateKAIOInstallationProps(
    path.join(v1Dir, `_docs/${componentName}.mdx`),
    family,
    1
  )
  await updateMetaTitleInDirectory(
    path.join(v1Dir, "_docs"),
    family,
    componentName,
    1
  )

  // TODO: check if there is a future then copy that over as well
  if (hasFuture) {
    // This will need to point to the future directory
    const futureDir = path.resolve(baseDir, "../__future__", componentName)
    await copyContentsToTargetDir(futureDir, v2Dir)

    await updateKAIOInstallationProps(
      path.join(v2Dir, `_docs/${componentName}.mdx`),
      family,
      2
    )
    await updateMetaTitleInDirectory(
      path.join(v2Dir, "_docs"),
      family,
      componentName,
      2
    )
  } else {
    // TODO: re-export things from v1 in v2
    await copyContentsToTargetDir(baseDir, v2Dir)
    await updateKAIOInstallationProps(
      path.join(v1Dir, `_docs/${componentName}.mdx`),
      family,
      2
    )
    await updateMetaTitleInDirectory(
      path.join(v1Dir, "_docs"),
      family,
      componentName,
      2
    )

    await updateV2Exports(v1Dir, v2Dir, "index")
  }
}

createV2StructureWithDocs(
  path.resolve(__dirname, "../src/Avatar"),
  "Avatar",
  "content"
)
