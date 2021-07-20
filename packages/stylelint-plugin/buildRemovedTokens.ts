#!/usr/bin/env yarn ts-node

import path from "path"
import fs from "fs"
import fetch from "node-fetch"
import merge from "lodash.merge"

// Changing this version will change which unsupported/non-existent tokens the stylelint plugin knows about
const version = "2.9.3"

const fetchDesignTokensJsonFile = (fileName: string) =>
  fetch(
    `https://unpkg.com/@kaizen/design-tokens@${version}/${fileName}`
  ).then(r => r.json())

const run = async () => {
  const removedTokens = merge(
    await fetchDesignTokensJsonFile("tokens/color.json"),
    await fetchDesignTokensJsonFile("tokens/color-vars.json"),
    await fetchDesignTokensJsonFile("tokens/animation.json"),
    await fetchDesignTokensJsonFile("tokens/animation-vars.json"),
    await fetchDesignTokensJsonFile("tokens/border.json"),
    await fetchDesignTokensJsonFile("tokens/border-vars.json"),
    await fetchDesignTokensJsonFile("tokens/layout.json"),
    await fetchDesignTokensJsonFile("tokens/layout-vars.json"),
    await fetchDesignTokensJsonFile("tokens/shadow.json"),
    await fetchDesignTokensJsonFile("tokens/shadow-vars.json"),
    await fetchDesignTokensJsonFile("tokens/spacing.json"),
    await fetchDesignTokensJsonFile("tokens/spacing-vars.json"),
    await fetchDesignTokensJsonFile("tokens/typography.json"),
    await fetchDesignTokensJsonFile("tokens/typography-vars.json"),
    await fetchDesignTokensJsonFile("tokens/variable-identifiers.json")
  )
  fs.writeFileSync(
    path.resolve(__dirname, "generated", "removedTokens.json"),
    JSON.stringify(removedTokens, undefined, 2)
  )
}

run()
