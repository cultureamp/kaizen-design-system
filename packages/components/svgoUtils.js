// Certain attributes work in html, but not React.
// If an attribute needs to be converted to its React counterpart,
// it can be added here.
const attrKeysToReplace = [
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

const replaceAttrKeys = child => {
  attrKeysToReplace.forEach(({ original, replacement }) => {
    if (child.attributes.hasOwnProperty(original)) {
      child.attributes[replacement] = child.attributes[original]
      delete child.attributes[original]
    }
  })
}

// Figma/ Sketch don't allow us to set 'currentColor' when exporting SVGs.
// We have a convention to export the color as #000 or #0000000, then change it here.
const replaceColor = child => {
  if (child.attributes.fill === "#000" || child.attributes.fill === "#000000") {
    child.attributes.fill = "currentColor"
  }
}

// Ids aren't necessarily unique when coming from figma, causing
// Icon components to reference different, already-rendered Icons
// with duplicate ids. This function allows us to set unique ids.
const replaceId = (child, newId) => {
  if (child.attributes.id) {
    child.attributes.id = newId
  }
  if (child.attributes.href) {
    child.attributes.href = `#${newId}`
  }
}

// We remove the outermost <svg> element here, because we wrap its children in
// our custom SVG component later
const removeRootSVGElement = item => {
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
const recurse = (item, fileName) => {
  item.children.forEach(child => {
    replaceAttrKeys(child)
    replaceColor(child)
    replaceId(child, fileName)

    recurse(child, fileName)
  })
}

module.exports = {
  recurse,
  removeRootSVGElement,
  replaceAttrKeys,
  replaceColor,
  replaceId,
}
