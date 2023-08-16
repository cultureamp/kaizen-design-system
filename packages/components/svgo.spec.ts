const {
  removeRootSVGElement,
  replaceAttrKeys,
  replaceColor,
} = require("./svgoUtils")

type SVGOItem = {
  type: "element"
  name: string
  attributes: { [key: string]: string }
  children: SVGOItem[]
}

describe("removeRootSVGElement", () => {
  const svgChildren: SVGOItem[] = [
    {
      type: "element",
      name: "defs",
      attributes: {},
      children: [],
    },
    {
      type: "element",
      name: "use",
      attributes: {},
      children: [],
    },
  ]
  const svgElement: SVGOItem = {
    type: "element",
    name: "svg",
    attributes: {},
    children: svgChildren,
  }

  it("Replaces the <svg> element with its children", () => {
    const rootItem = {
      type: "root",
      children: [svgElement],
    }

    removeRootSVGElement(rootItem)
    expect(rootItem.children).toStrictEqual(svgChildren)
  })
})

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
