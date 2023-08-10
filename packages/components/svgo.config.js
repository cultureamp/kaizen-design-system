// type item: {
// type:  'element' | ?
// name: 'defs' | g | use etc..
// attributes: {'xlink:href': '#a', fill: '#000', 'fill-rule': 'nonzero'}
// children: [more-of-these]
// }

const stripXLinks = item => {
  // TODO: Replace xlink:href etc. with href recursively
  item.children.forEach(item => {
    item.attributes = { foo: "bar" }
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
      fn: item => {
        console.log("ITEM: ", item.children[0].children)
        // stripXLinks(item)
      },
    },
  ],
}
