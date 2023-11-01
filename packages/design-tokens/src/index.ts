// These are exposed at the top level because it seems like they are the most useful and relevent to usage of design tokens.

/**
 * @deprecated
 * - Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 * - If you require direct usage of these tokens in js you can `import { tokens } from "@kaizen/design-tokens/js"`
 */
export * from "./themes"

/**
 * @deprecated
 * - Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 * - If necessary, import from `@kaizen/design-tokens/js`
 */
export * from "./types"

/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 *
 * {@link https://cultureamp.design/?path=/docs/guides-app-starter--docs Check App Starter guidance}
 */
export * from "./ThemeManager"

/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 *
 * {@link https://cultureamp.design/?path=/docs/guides-app-starter--docs Check App Starter guidance}
 */
export * from "./react"

/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 */
export { makeCssVariableDefinitionsMap } from "./lib/makeCssVariableDefinitionsMap"

/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 */
export { makeCSSVariableTheme } from "./lib/makeCssVariableTheme"

/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 */
export { mapLeafsOfObject } from "./lib/mapLeafsOfObject"
