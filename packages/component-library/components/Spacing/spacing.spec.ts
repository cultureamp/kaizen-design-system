import { marginClasses, mb, ml, mr, mt, mx, my } from "./margin"
import { paddingClasses, pb, pl, pr, pt, px, py } from "./padding"
import { GridFractions } from "./types"
import marginStyles from "./Margin.module.scss"
import paddingStyles from "./Padding.module.scss"

type TestObject = {
  unit: GridFractions
  translation: string
}

const allowableUnits: TestObject[] = [
  { unit: 0, translation: "0" },
  { unit: 0.25, translation: "0-point-25" },
  { unit: 0.5, translation: "0-point-5" },
  { unit: 0.75, translation: "0-point-75" },
  { unit: 1, translation: "1" },
  { unit: 2, translation: "2" },
  { unit: 3, translation: "3" },
  { unit: 4, translation: "4" },
]

describe("padding", () => {
  describe("pt", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding top for the ${unit} unit`, () => {
        expect(pt(unit)).toHaveLength(1)
        expect(pt(unit).includes(paddingStyles[`pt-${translation}`])).toBe(true)
      })
    })
  })
  describe("pr", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding right for the ${unit} unit`, () => {
        expect(pr(unit)).toHaveLength(1)
        expect(pr(unit).includes(paddingStyles[`pr-${translation}`])).toBe(true)
      })
    })
  })
  describe("pb", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding bottom for the ${unit} unit`, () => {
        expect(pb(unit)).toHaveLength(1)
        expect(pb(unit).includes(paddingStyles[`pb-${translation}`])).toBe(true)
      })
    })
  })
  describe("pl", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding left for the ${unit} unit`, () => {
        expect(pl(unit)).toHaveLength(1)
        expect(pl(unit).includes(paddingStyles[`pl-${translation}`])).toBe(true)
      })
    })
  })
  describe("px", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding x axis for the ${unit} unit`, () => {
        expect(px(unit)).toHaveLength(2)
        expect(px(unit)).toEqual(
          expect.arrayContaining([
            paddingStyles[`pl-${translation}`],
            paddingStyles[`pr-${translation}`],
          ])
        )
      })
    })
  })
  describe("py", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding y axis for the ${unit} unit`, () => {
        expect(py(unit)).toHaveLength(2)
        expect(py(unit)).toEqual(
          expect.arrayContaining([
            paddingStyles[`pt-${translation}`],
            paddingStyles[`pb-${translation}`],
          ])
        )
      })
    })
  })
  describe("paddingClasses", () => {
    it("generates a single padding class", () => {
      expect(paddingClasses({ p: 0.25 })).toContain(
        paddingStyles["p-0-point-25"]
      )
      expect(paddingClasses({ p: 0.25 })).toHaveLength(1)
    })
    it("generates multiple padding classes", () => {
      const classes = paddingClasses({ px: 0.25, pt: 1 })
      expect(classes).toEqual(
        expect.arrayContaining([
          paddingStyles["pl-0-point-25"],
          paddingStyles["pr-0-point-25"],
          paddingStyles["pt-1"],
        ])
      )
      expect(classes).toHaveLength(3)
    })
  })
})

describe("margin", () => {
  describe("mt", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin top for the ${unit} unit`, () => {
        expect(mt(unit)).toHaveLength(1)
        expect(mt(unit).includes(marginStyles[`mt-${translation}`])).toBe(true)
      })
    })
  })
  describe("mr", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin right for the ${unit} unit`, () => {
        expect(mr(unit)).toHaveLength(1)
        expect(mr(unit).includes(marginStyles[`mr-${translation}`])).toBe(true)
      })
    })
  })
  describe("mb", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin bottom for the ${unit} unit`, () => {
        expect(mb(unit)).toHaveLength(1)
        expect(mb(unit).includes(marginStyles[`mb-${translation}`])).toBe(true)
      })
    })
  })
  describe("ml", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin left for the ${unit} unit`, () => {
        expect(ml(unit)).toHaveLength(1)
        expect(ml(unit).includes(marginStyles[`ml-${translation}`])).toBe(true)
      })
    })
  })
  describe("mx", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin x axis for the ${unit} unit`, () => {
        expect(mx(unit)).toHaveLength(2)
        expect(mx(unit)).toEqual(
          expect.arrayContaining([
            marginStyles[`ml-${translation}`],
            marginStyles[`mr-${translation}`],
          ])
        )
      })
    })
  })
  describe("my", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin y axis for the ${unit} unit`, () => {
        expect(my(unit)).toHaveLength(2)
        expect(my(unit)).toEqual(
          expect.arrayContaining([
            marginStyles[`mt-${translation}`],
            marginStyles[`mb-${translation}`],
          ])
        )
      })
    })
  })
  describe("marginClasses", () => {
    it("generates a single margin class", () => {
      expect(marginClasses({ m: 0.25 })).toContain(marginStyles["m-0-point-25"])
      expect(marginClasses({ m: 0.25 })).toHaveLength(1)
    })
    it("generates multimle margin classes", () => {
      const classes = marginClasses({ mx: 0.25, mt: 1 })
      expect(classes).toHaveLength(3)
      expect(classes).toEqual(
        expect.arrayContaining([
          marginStyles["ml-0-point-25"],
          marginStyles["mr-0-point-25"],
          marginStyles["mt-1"],
        ])
      )
    })
  })
})
