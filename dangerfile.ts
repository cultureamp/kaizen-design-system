import { danger, fail, schedule } from "danger"
import path from "path"
import pkgUp from "pkg-up"
import matchAll from "string.prototype.matchall"

const modifiedSassFiles = danger.git.modified_files.filter(curr =>
  curr.includes(".scss")
)
const modifiedJsonFiles = danger.git.modified_files.filter(curr =>
  curr.includes("package.json")
)

schedule(async () => {
  const jsonChanges = await Promise.all(
    modifiedJsonFiles.map(getAllModifiedJson)
  )

  modifiedSassFiles.forEach(async startingDirectory => {
    const sassChanges = await danger.git.structuredDiffForFile(
      startingDirectory
    )
    let nearestPackage = await pkgUp({
      cwd: path.join(process.cwd(), startingDirectory),
    })
    if (!nearestPackage) return
    nearestPackage = nearestPackage.replace(process.cwd(), "").slice(1)

    const matchedChangesInPackage = jsonChanges.find(
      curr => curr?.packageName === nearestPackage
    )

    sassChanges?.chunks.forEach(async diffChunk => {
      const sassChangesContainingImports = getFilteredDiff(diffChunk.changes)
        .filter(curr => curr.includes("@import"))
        .map(stripImportString)

      if (sassChangesContainingImports.length === 0) return

      sassChangesContainingImports.forEach(curr => {
        if (!matchedChangesInPackage?.changes.includes(curr)) {
          fail(
            `This pull request is missing a dependency for ${curr} in ${nearestPackage}`
          )
        }
      })
    })
  })
})

/**
 * This whole function sucks and requires us to add matchAll to our config
 * @param curr
 */
const stripImportString = (importString: string): string => {
  const regexp = /(?:.*)"(?:~)?(.*)"/g
  const allMatches = [...matchAll(importString, regexp)]
  const stringResult = allMatches.map((curr): string => {
    const [, returnObj] = curr // pick the first matched group

    return returnObj
  })

  return stringResult[0]
}

/**
 * Filter out any changes that aren't additions
 * @param chunk
 */
const getFilteredDiff = (chunk): string[] => {
  if (!chunk) return []
  return chunk
    .filter(curr => curr.type === "add")
    .reduce((acc, curr) => {
      if (curr.content) {
        acc.push(curr.content)
      }
      return acc
    }, [])
}

type PackageChunks = {
  changes: string[]
  packageName: string
}

/**
 * Get all additions from the provided file
 * @param fileName
 */
const getAllModifiedJson = async (
  fileName
): Promise<PackageChunks | undefined> => {
  const packageDiff = await danger.git.structuredDiffForFile(fileName)

  if (packageDiff && packageDiff.chunks) {
    const changes = packageDiff.chunks
      .map(({ curr }) => getFilteredDiff(curr))
      .reduce((acc, curr) => {
        acc.push(...curr)
        return acc
      }, [])

    return { changes, packageName: fileName }
  }
}
