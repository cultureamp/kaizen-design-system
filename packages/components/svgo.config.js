// type item: {
// type:  'element' | ?
// name: 'defs' | g | use etc..
// attributes: {'xlink:href': '#a', fill: '#000', 'fill-rule': 'nonzero'}
// children: [more-of-these]
// }

const stripXLinks = item => {
  // Note: first item is not an element, it's children are the elements.
  item.children.forEach(child => {
    // Replace attrs
    if (child.attributes.hasOwnProperty("xlink:href")) {
      child.attributes.href = child.attributes["xlink:href"]
      delete child.attributes["xlink:href"]
    }

    // Recurse
    stripXLinks(child)
  })
}

module.exports = {
  plugins: [
    "preset-default",
    {
      name: "customPluginName",
      params: {
        optionName: "optionValue",
      },
      type: "perItem",
      fn: child => stripXLinks(child),
    },
  ],
}
