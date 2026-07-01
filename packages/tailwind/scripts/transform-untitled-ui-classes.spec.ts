import { describe, expect, it } from "vitest"
// @ts-expect-error -- plain .mjs script, no type declarations
import { transformClassToken, transformClassString } from "./transform-untitled-ui-classes.mjs"

describe("transformClassToken", () => {
  describe("bg-bg-* mapping", () => {
    it.each([
      ["bg-bg-primary", "bg-primary"],
      ["bg-bg-brand-solid", "bg-brand-solid"],
      ["bg-bg-primary_hover", "bg-primary_hover"],
    ])("maps %s -> %s", (input, expected) => {
      expect(transformClassToken(input)).toBe(expected)
    })
  })

  describe("text-text-* mapping", () => {
    it.each([
      ["text-text-primary", "text-primary"],
      ["text-text-secondary", "text-secondary"],
    ])("maps %s -> %s", (input, expected) => {
      expect(transformClassToken(input)).toBe(expected)
    })
  })

  describe("border-border-* mapping", () => {
    it.each([
      ["border-border-secondary", "border-secondary"],
      ["border-border-secondary_alt", "border-secondary_alt"],
    ])("maps %s -> %s", (input, expected) => {
      expect(transformClassToken(input)).toBe(expected)
    })
  })

  describe("text-fg-* category shift", () => {
    it.each([
      ["text-fg-primary", "fg-primary"],
      ["text-fg-brand-primary", "fg-brand-primary"],
      ["text-fg-quaternary_hover", "fg-quaternary_hover"],
    ])("maps %s -> %s", (input, expected) => {
      expect(transformClassToken(input)).toBe(expected)
    })
  })

  describe("variant preservation", () => {
    it.each([
      ["hover:bg-bg-primary", "hover:bg-primary"],
      ["md:text-text-secondary", "md:text-secondary"],
      ["group-hover/foo:border-border-primary", "group-hover/foo:border-primary"],
      ["dark:hover:bg-bg-brand-solid", "dark:hover:bg-brand-solid"],
      ["hover:text-fg-primary", "hover:fg-primary"],
    ])("preserves variants in %s", (input, expected) => {
      expect(transformClassToken(input)).toBe(expected)
    })
  })

  describe("important preservation", () => {
    it.each([
      ["bg-bg-primary!", "bg-primary!"],
      ["!bg-bg-primary", "bg-primary!"],
      ["hover:bg-bg-primary!", "hover:bg-primary!"],
    ])("preserves important in %s", (input, expected) => {
      expect(transformClassToken(input)).toBe(expected)
    })
  })

  describe("prefix option", () => {
    it("adds prefix to an unprefixed class", () => {
      expect(transformClassToken("bg-bg-primary", { prefix: "un" })).toBe("un:bg-primary")
    })
    it("re-uses an existing prefix", () => {
      expect(transformClassToken("un:bg-bg-primary", { prefix: "un" })).toBe("un:bg-primary")
    })
    it("keeps variants under the prefix", () => {
      expect(transformClassToken("un:hover:bg-bg-primary", { prefix: "un" })).toBe("un:hover:bg-primary")
    })
  })

  describe("no-ops", () => {
    it.each([
      "bg-primary",
      "bg-brand-solid",
      "text-purple-600",
      "p-4",
      "flex",
      "bg-[var(--x)]",
      "text-fg-[#fff]",
    ])("leaves %s unchanged", (input) => {
      expect(transformClassToken(input)).toBe(input)
    })
  })
})

describe("transformClassString", () => {
  it("transforms every token in a multi-class string", () => {
    expect(transformClassString("bg-bg-primary text-text-secondary border-border-primary")).toBe(
      "bg-primary text-secondary border-primary",
    )
  })

  it("only touches colour classes, leaving layout/spacing/primitives alone", () => {
    expect(transformClassString("flex bg-bg-brand-solid hover:text-fg-primary p-4")).toBe(
      "flex bg-brand-solid hover:fg-primary p-4",
    )
  })
})
