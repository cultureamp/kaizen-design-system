import { describe } from 'vitest'

// Svgo only works in CommonJS so we need to use require here.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { removeRootSVGElement, replaceAttrKeys, replaceColor, replaceId } = require('./svgoUtils')

type SVGOItem = {
  type: 'element'
  name: string
  attributes: Record<string, string>
  children: SVGOItem[]
}

describe('removeRootSVGElement', () => {
  const svgChildren: SVGOItem[] = [
    {
      type: 'element',
      name: 'defs',
      attributes: {},
      children: [],
    },
    {
      type: 'element',
      name: 'use',
      attributes: {},
      children: [],
    },
  ]
  const svgElement: SVGOItem = {
    type: 'element',
    name: 'svg',
    attributes: {},
    children: svgChildren,
  }

  it('Replaces the <svg> element with its children', () => {
    const rootItem = {
      type: 'root',
      children: [svgElement],
    }

    removeRootSVGElement(rootItem)
    expect(rootItem.children).toStrictEqual(svgChildren)
  })
})

describe('replaceAttrKeys', () => {
  const dummyHref = '#dummy'
  const dummyFillRule = 'evenodd'
  const dummyStrokeWidth = '3'
  const dummyLinejoin = 'bevel'
  const dummyLinecap = 'round'
  const dummyClipRule = 'evenodd'
  const dummyClass = 'my-cool-class'
  const dummyItem: SVGOItem = {
    type: 'element',
    name: 'use',
    attributes: {
      'xlink:href': dummyHref,
      'fill-rule': dummyFillRule,
      'stroke-width': dummyStrokeWidth,
      'stroke-linejoin': dummyLinejoin,
      'stroke-linecap': dummyLinecap,
      'clip-rule': dummyClipRule,
      'class': dummyClass,
    },
    children: [],
  }
  replaceAttrKeys(dummyItem)

  it("Replaces 'xlink:href' keys with 'href'", () => {
    expect(dummyItem.attributes.href).toEqual(dummyHref)
    expect(dummyItem.attributes).not.toHaveProperty('xlink:href')
  })
  it("Replaces 'fill-rule' keys with 'fillRule'", () => {
    expect(dummyItem.attributes.fillRule).toEqual(dummyFillRule)
    expect(dummyItem.attributes).not.toHaveProperty('fill-rule')
  })
  it("Replaces 'stroke-width' keys with 'strokeWidth'", () => {
    expect(dummyItem.attributes.strokeWidth).toEqual(dummyStrokeWidth)
    expect(dummyItem.attributes).not.toHaveProperty('stroke-width')
  })
  it("Replaces 'stroke-linejoin' keys with 'strokeLinejoin'", () => {
    expect(dummyItem.attributes.strokeLinejoin).toEqual(dummyLinejoin)
    expect(dummyItem.attributes).not.toHaveProperty('stroke-linejoin')
  })
  it("Replaces 'stroke-linecap' keys with 'strokeLinecap'", () => {
    expect(dummyItem.attributes.strokeLinecap).toEqual(dummyLinecap)
    expect(dummyItem.attributes).not.toHaveProperty('stroke-linecap')
  })
  it("Replaces 'clip-rule' keys with 'clipRule'", () => {
    expect(dummyItem.attributes.clipRule).toEqual(dummyClipRule)
    expect(dummyItem.attributes).not.toHaveProperty('clip-rule')
  })
  it("Replaces 'class' keys with 'className'", () => {
    expect(dummyItem.attributes.className).toEqual(dummyClass)
    expect(dummyItem.attributes).not.toHaveProperty('class')
  })
})

describe('replaceColor', () => {
  it("Replaces fill: '#000' with fill: 'currentColor'", () => {
    const dummyItem: SVGOItem = {
      type: 'element',
      name: 'use',
      attributes: {
        fill: '#000',
      },
      children: [],
    }

    replaceColor(dummyItem)
    expect(dummyItem.attributes.fill).toEqual('currentColor')
  })

  it("Replaces fill: '#000000' with fill: 'currentColor'", () => {
    const dummyItem: SVGOItem = {
      type: 'element',
      name: 'use',
      attributes: {
        fill: '#000000',
      },
      children: [],
    }

    replaceColor(dummyItem)
    expect(dummyItem.attributes.fill).toEqual('currentColor')
  })
})

describe('replaceId', () => {
  it('replaces id attributes with UNIQUE_ID', () => {
    const dummyItem: SVGOItem = {
      type: 'element',
      name: 'path',
      attributes: {
        id: 'a',
      },
      children: [],
    }

    replaceId(dummyItem)

    expect(dummyItem.attributes.id).toEqual('UNIQUE_ID')
  })

  it('replaces href attributes with `#UNIQUE_ID`', () => {
    const dummyItem: SVGOItem = {
      type: 'element',
      name: 'use',
      attributes: {
        href: '#a',
      },
      children: [],
    }

    replaceId(dummyItem)

    expect(dummyItem.attributes.href).toEqual('#UNIQUE_ID')
  })
})
