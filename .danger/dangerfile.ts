import { fail, danger } from "danger"

const checkNewLockfileRule = () => {
  const containsNpmLockFile = danger.git.created_files.find(curr =>
    curr.includes("package-lock.json")
  )
  if (containsNpmLockFile !== undefined) {
    fail("Committed NPM lockfile")
  }
}

checkNewLockfileRule()
