// type item: {
// type:  'element' | ?
// name: 'defs' | g | use etc..
// attributes: {'xlink:href': '#a', fill: '#000', 'fill-rule': 'nonzero'}
// children: [more-of-these]
// }

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

// Recurses through all elements and child elements of root item
const recurse = item => {
  // Note: first item is not an element, it's children are the elements.
  item.children.forEach(child => {
    replaceAttrKeys(child)

    recurse(child)
  })
}

module.exports = {
  plugins: [
    "preset-default",
    {
      name: "Recurse",
      params: {},
      type: "perItem",
      fn: recurse,
    },
  ],
}
