// Certain attributes work in html, but not React.
// If an attribute needs to be converted to its React counterpart,
// it can be added here.
const attrKeysToReplace = [
  {
    original: "xlink:href",
    replacement: "href",
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

// We remove the outermost <svg> element here, because we wrap its children in
// our custom SVG component later
const removeRootSVGElement = item => {
  const rootAndHasSingleSVGChild =
    item.type === "root" &&
    item.children.length === 1 &&
    item.children[0].name === "svg"
  if (rootAndHasSingleSVGChild) {
    const SVGChildren = item.children[0].children
    item.children = SVGChildren
  }
}

// Recurses through all elements and child elements of root item
// Note: first item is not an element, it's children are the elements.
const recurse = item => {
  removeRootSVGElement(item)

  item.children.forEach(child => {
    replaceAttrKeys(child)
    replaceColor(child)

    recurse(child)
  })
}

module.exports = {
  replaceAttrKeys,
  replaceColor,
  recurse,
}
