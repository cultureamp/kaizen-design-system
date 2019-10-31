/*!
 * Based on 'gatsby-remark-autolink-headers'
 * Original Author: Kyle Mathews <mathews.kyle@gmail.com>
 * Copyright (c) 2015 Gatsbyjs
 */
const toString = require("mdast-util-to-string")
const visit = require("unist-util-visit")

// TODO: it would be great if this used link.svg in src/components/images, but it doesn't appear to be easy to import an svg into this file
const svgIcon = `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`

module.exports = ({ markdownAST }) => {
  const headingOccurrences = {
    "need-to-know": 1, // There's a 'Need to know' heading on most pages - register one occurrence of it by default
  }

  visit(markdownAST, "heading", node => {
    let id

    // Support custom IDs, eg. `### My Great Heading {#custom-id}`
    if (node.children.length > 0) {
      const last = node.children[node.children.length - 1]
      // This regex matches to preceding spaces and {#custom-id} at the end of a string.
      // Also, checks the text of node won't be empty after the removal of {#custom-id}.
      const match = /^(.*?)\s*\{#([\w-]+)\}$/.exec(toString(last))
      if (match && (match[1] || node.children.length > 1)) {
        id = match[2]
        // Remove the custom ID from the original text.
        if (match[1]) {
          last.value = match[1]
        } else {
          node.children.pop()
        }

        // Register this as a heading used.
        // We're not preventing a duplicate here if there's an auto generated ID with the same name *above* this,
        // but we are handling duplicates of any auto generated IDs *below* this
        headingOccurrences[id] =
          headingOccurrences[id] !== undefined ? headingOccurrences[id] + 1 : 1
      }
    }

    // No custom ID found? Create one from the heading content
    if (!id) {
      const slug = toString(node)
        .replace(/[^A-Za-z0-9_ -&/]/g, "") // remove anything that isn't alphanumeric, with a few exceptions
        .trim()
        .replace(/\s+/g, "-") // replace white spaces with hyphens
        .toLowerCase()

      // Check if this heading has been used before on this page, and append a number to it if so
      if (headingOccurrences[slug] !== undefined) {
        id = `${slug}-${headingOccurrences[slug]}`
        headingOccurrences[slug]++
      } else {
        id = slug
        headingOccurrences[slug] = 1
      }
    }

    // Create a couple new elements inside the heading element
    // The first is a span that will act as the anchor, which has an offset for our fixed heading
    // The second is the icon link that appears when you hover the heading
    node.children.unshift(
      {
        type: "span",
        title: null,
        data: {
          hProperties: {
            id,
            class: "md-anchor-offset",
          },
        },
      },
      {
        type: "link",
        url: `#${id}`,
        title: null,
        data: {
          hProperties: {
            class: "md-heading-link",
            "aria-label": "Anchor",
          },
          hChildren: [
            {
              type: "raw",
              value: svgIcon,
            },
          ],
        },
      }
    )
  })

  return markdownAST
}
