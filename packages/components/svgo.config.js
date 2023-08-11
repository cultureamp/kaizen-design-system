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

// Recursively replace attributes found in svg and it's child elements
const replaceAttrs = item => {
  // Note: first item is not an element, it's children are the elements.
  item.children.forEach(child => {
    attrKeysToReplace.forEach(({ original, replacement }) => {
      if (child.attributes.hasOwnProperty(original)) {
        child.attributes[replacement] = child.attributes[original]
        delete child.attributes[original]
      }
    })

    // Recurse
    replaceAttrs(child)
  })
}

module.exports = {
  plugins: [
    "preset-default",
    {
      name: "Replace attributes",
      params: {},
      type: "perItem",
      fn: replaceAttrs,
    },
  ],
}
