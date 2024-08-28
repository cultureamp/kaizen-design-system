// Certain attributes work in html, but not React.
// If an attribute needs to be converted to its React counterpart,

import { RootItem, SVGOItem } from "./svgo.spec"

// it can be added here.
export const attrKeysToReplace = [
  {
    original: "xlink:href",
    replacement: "href",
  },
  {
    original: "fill-rule",
    replacement: "fillRule",
  },
  {
    original: "stroke-width",
    replacement: "strokeWidth",
  },
  {
    original: "stroke-linejoin",
    replacement: "strokeLinejoin",
  },
  {
    original: "stroke-linecap",
    replacement: "strokeLinecap",
  },
  {
    original: "clip-rule",
    replacement: "clipRule",
  },
  {
    original: "class",
    replacement: "className",
  },
]

export const replaceAttrKeys = (child: SVGOItem): void => {
  attrKeysToReplace.forEach(({ original, replacement }) => {
    if (child.attributes.hasOwnProperty(original)) {
      child.attributes[replacement] = child.attributes[original]
      delete child.attributes[original]
    }
  })
}

// Figma/ Sketch don't allow us to set 'currentColor' when exporting SVGs.
// We have a convention to export the color as #000 or #0000000, then change it here.
export const replaceColor = (child: SVGOItem): void => {
  const hexCodesToReplace = [
    "#000",
    "#000000",
    "#2F2438", // Purple-800 from Figma export
  ]

  if (hexCodesToReplace.includes(child.attributes.fill)) {
    child.attributes.fill = "currentColor"
  }

  if (hexCodesToReplace.includes(child.attributes.stroke)) {
    child.attributes.stroke = "currentColor"
  }
}

// Ids aren't necessarily unique when coming from figma, causing
// Icon components to reference different, already-rendered Icons
// with duplicate ids. This function allows us to set unique ids.
export const replaceId = (child: SVGOItem): void => {
  if (child.attributes.id) {
    child.attributes.id = "UNIQUE_ID"
  }
  if (child.attributes.href) {
    child.attributes.href = "#UNIQUE_ID"
  }
}

// We remove the outermost <svg> element here, because we wrap its children in
// our custom SVG component later
export const removeRootSVGElement = (item: RootItem): void => {
  if (item.type !== "root") return

  const hasSingleSVGChild =
    item.children.length === 1 && item.children[0].name === "svg"
  if (hasSingleSVGChild) {
    const SVGChildren = item.children[0].children
    item.children = SVGChildren
  }
}

// Recurses through all elements and child elements of root item
// Note: first item is not an element, it's children are the elements.
export const recurse = (item: RootItem): void => {
  item.children.forEach(child => {
    replaceAttrKeys(child)
    replaceColor(child)
    replaceId(child)

    recurse(child)
  })
}
