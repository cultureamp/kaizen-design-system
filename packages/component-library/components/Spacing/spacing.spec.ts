import { GridFractions } from "../types"
import { mb, ml, mr, mt, mx, my, responsiveMarginClasses } from "./margin"
import { pb, pl, pr, pt, px, py, responsivePaddingClasses } from "./padding"

type TestObject = {
  unit: GridFractions
  translation: string
}

const allowableUnits: TestObject[] = [
  { unit: "1/8", translation: "eighth" },
  { unit: "1/4", translation: "quarter" },
  { unit: "1/2", translation: "half" },
  { unit: "0", translation: "0" },
  { unit: "1", translation: "1" },
  { unit: "2", translation: "2" },
  { unit: "3", translation: "3" },
  { unit: "4", translation: "4" },
]

describe("padding", () => {
  describe("pt", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding top for the ${unit} unit`, () => {
        expect(pt(unit)).toMatchSnapshot()
      })
    })
  })
  describe("pr", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding right for the ${unit} unit`, () => {
        expect(pr(unit)).toMatchSnapshot()
      })
    })
  })
  describe("pb", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding bottom for the ${unit} unit`, () => {
        expect(pb(unit)).toMatchSnapshot()
      })
    })
  })
  describe("pl", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding left for the ${unit} unit`, () => {
        expect(pl(unit)).toMatchSnapshot()
      })
    })
  })
  describe("px", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding x axis for the ${unit} unit`, () => {
        expect(px(unit)).toMatchSnapshot()
      })
    })
  })
  describe("py", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for padding y axis for the ${unit} unit`, () => {
        expect(py(unit)).toMatchSnapshot()
      })
    })
  })
  describe("responsivePaddingClasses", () => {
    it(`generates a single padding class`, () => {
      expect(responsivePaddingClasses({ p: "1/4" })).toContain(`p-quarter`)
      expect(responsivePaddingClasses({ p: "1/4" })).toHaveLength(1)
    })
    it(`generates multiple padding classes`, () => {
      const classes = responsivePaddingClasses({ px: "1/4", pt: "1/8" })
      expect(classes).toContain("px-quarter")
      expect(classes).toContain("pt-eighth")
      expect(classes).toHaveLength(2)
    })
  })
})

describe("margin", () => {
  describe("mt", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin top for the ${unit} unit`, () => {
        expect(mt(unit)).toMatchSnapshot()
      })
    })
  })
  describe("mr", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin right for the ${unit} unit`, () => {
        expect(mr(unit)).toMatchSnapshot()
      })
    })
  })
  describe("mb", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin bottom for the ${unit} unit`, () => {
        expect(mb(unit)).toMatchSnapshot()
      })
    })
  })
  describe("ml", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin left for the ${unit} unit`, () => {
        expect(ml(unit)).toMatchSnapshot()
      })
    })
  })
  describe("mx", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin x axis for the ${unit} unit`, () => {
        expect(mx(unit)).toMatchSnapshot()
      })
    })
  })
  describe("my", () => {
    allowableUnits.forEach(({ unit, translation }) => {
      it(`Generates the correct classes for margin y axis for the ${unit} unit`, () => {
        expect(my(unit)).toMatchSnapshot()
      })
    })
  })
  describe("responsiveMarginClasses", () => {
    it(`generates a single margin class`, () => {
      expect(responsiveMarginClasses({ m: "1/4" })).toContain(`m-quarter`)
      expect(responsiveMarginClasses({ m: "1/4" })).toHaveLength(1)
    })
    it(`generates multimle margin classes`, () => {
      const classes = responsiveMarginClasses({ mx: "1/4", mt: "1/8" })
      expect(classes).toContain("mx-quarter")
      expect(classes).toContain("mt-eighth")
      expect(classes).toHaveLength(2)
    })
  })
})
