/*!
 * Based on 'gatsby-remark-autolink-headers'
 * Original Author: Kyle Mathews <mathews.kyle@gmail.com>
 * Copyright (c) 2015 Gatsbyjs
 */
const toString = require("mdast-util-to-string")
const visit = require("unist-util-visit")

// TODO: it would be great if this used link.svg in src/components/images, but it doesn't appear to be easy to import an svg into this file
const svgIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.9 10C1.9 8.29 3.29 6.9 5 6.9H9V5H5C2.24 5 0 7.24 0 10C0 12.76 2.24 15 5 15H9V13.1H5C3.29 13.1 1.9 11.71 1.9 10ZM6 11H14V9H6V11ZM15 5H11V6.9H15C16.71 6.9 18.1 8.29 18.1 10C18.1 11.71 16.71 13.1 15 13.1H11V15H15C17.76 15 20 12.76 20 10C20 7.24 17.76 5 15 5Z" fill="black"/>
</svg>`

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
