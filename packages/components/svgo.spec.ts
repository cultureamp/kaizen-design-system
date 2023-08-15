const { replaceAttrKeys, replaceColor } = require("./svgoUtils")

type SVGOItem = {
  type: string
  name: string
  attributes: { [key: string]: string }
  children: SVGOItem[]
}

describe("replaceAttrKeys", () => {
  it("Replaces 'xlink:href' keys with 'href'", () => {
    const dummyHref = "#dummy"
    const dummyItem: SVGOItem = {
      type: "element",
      name: "use",
      attributes: {
        "xlink:href": dummyHref,
      },
      children: [],
    }

    replaceAttrKeys(dummyItem)
    expect(dummyItem.attributes.href).toEqual(dummyHref)
    expect(dummyItem.attributes).not.toHaveProperty("xlink:href")
  })
})

describe("replaceColor", () => {
  it("Replaces fill: '#000' with fill: 'currentColor'", () => {
    const dummyItem: SVGOItem = {
      type: "element",
      name: "use",
      attributes: {
        fill: "#000",
      },
      children: [],
    }

    replaceColor(dummyItem)
    expect(dummyItem.attributes.fill).toEqual("currentColor")
  })

  it("Replaces fill: '#000000' with fill: 'currentColor'", () => {
    const dummyItem: SVGOItem = {
      type: "element",
      name: "use",
      attributes: {
        fill: "#000000",
      },
      children: [],
    }

    replaceColor(dummyItem)
    expect(dummyItem.attributes.fill).toEqual("currentColor")
  })
})
