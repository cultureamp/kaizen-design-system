import { message, fail, danger } from "danger"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

const containsNpmLockFile = danger.git.modified_files.find(curr =>
  curr.includes("package-lock.json")
)
if (containsNpmLockFile !== undefined) {
  fail("Committed NPM lockfile")
}
