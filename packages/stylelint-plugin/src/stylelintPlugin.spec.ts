import { lint } from "stylelint"
import {
  containsDeprecatedKaizenTokenWithNoReplacement,
  cssVariableUsedWithinUnsupportedFunction,
  invalidEquationContainingKaizenTokenMessage,
  kaizenVariableUsedNextToOperatorMessage,
  negatedKaizenVariableMessage,
  replacementCssVariableUsedWithinUnsupportedFunction,
  deprecatedTokenInVariableMessage,
} from "./messages"
import { Language } from "./types"
jest.setTimeout(10000)

const baseConfig = require("../dev-config")
const testStylelintConfig = {
  ...baseConfig,
  rules: {
    "kaizen/no-tokens-in-variables": [
      true,
      { severity: "warning", disableFixing: false },
    ],
    ...baseConfig.rules,
  },
}

type TestExample = {
  language: Language
  testName: string

  input: string
  expectedOutput: string
  only?: boolean
} & (
  | {
      expectedWarningMessages: string[]
    }
  | { expectedWarnings: number }
)

const testExamples: TestExample[] = [
  {
    language: "scss",
    testName: "asserts that missing imports are added",
    input:
      "@media (min-width: $kz-layout-breakpoints-large) { .test { color: $kz-color-wisteria-800 } }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $layout-breakpoints-large) { .test { color: $color-purple-800 } }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "asserts that missing imports are added",
    input:
      "@media (min-width: @kz-layout-breakpoints-large) { .test { color: @kz-color-wisteria-800 } }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; @import "~@kaizen/design-tokens/less/layout"; @media (min-width: @layout-breakpoints-large) { .test { color: @color-purple-800 } }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "asserts that unnecessary imports are removed",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $layout-breakpoints-large) { .test { color: red; } }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "asserts that unnecessary imports are removed",
    input:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @media (min-width: @layout-breakpoints-large) { .test { color: red; } }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "doesn't fix variables within @media queries, but still fixes imports for variables in AtRule parameters",
    input: "@media (min-width: $kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $layout-breakpoints-large) {}',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName:
      "doesn't fix variables within @media queries, but still fixes imports for variables in AtRule parameters",
    input: "@media (min-width: @kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @media (min-width: @layout-breakpoints-large) {}',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "doesn't fix variables when used as equation terms",
    input: ".foo { padding: $kz-spacing-md * 2; }",
    expectedOutput: `
      .foo { padding: $kz-spacing-md * 2; }
    `,
    expectedWarningMessages: [invalidEquationContainingKaizenTokenMessage],
  },
  {
    language: "less",
    testName: "doesn't fix variables when used as equation terms",
    input: ".foo { padding: @kz-spacing-md * 2; }",
    expectedOutput: `
      .foo { padding: @kz-spacing-md * 2; }
    `,
    expectedWarningMessages: [invalidEquationContainingKaizenTokenMessage],
  },
  {
    language: "scss",
    testName: "fixes variables when used next to an equation",
    input: ".foo { padding: 0 1px 5 * 10px $kz-spacing-md; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 0 1px 5 * 10px $spacing-md; }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "fixes variables when used next to an equation",
    input: ".foo { padding: 0 1px 5 * 10px @kz-spacing-md; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: 0 1px 5 * 10px @spacing-md; }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "fixes tokens in other cases",
    input: ".foo { padding: $kz-spacing-md; color: $kz-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $spacing-md; color: $color-purple-800; }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "fixes tokens in other cases",
    input: ".foo { padding: @kz-spacing-md; color: @kz-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; @import "~@kaizen/design-tokens/less/spacing"; .foo { padding: @spacing-md; color: @color-purple-800; }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "fixes add-alpha, rgba, and rgb functions to use -rgb",
    input:
      ".foo { color: add-alpha($kz-color-wisteria-800, 80); background-color: rgba($kz-color-cluny-600, 0.5); border-color: rgb($kz-color-yuzu-600) }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: rgba($color-purple-800-rgb, 0.8); background-color: rgba($color-blue-600-rgb, 0.5); border-color: rgb($color-yellow-600-rgb) }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "fixes add-alpha, rgba, and rgb functions to use -rgb",
    input:
      ".foo { color: add-alpha(@kz-color-wisteria-800, 80%); background-color: rgba(@kz-color-cluny-600, 0.5); border-color: rgb(@kz-color-yuzu-600) }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; .foo { color: rgba(@color-purple-800-rgb, 0.8); background-color: rgba(@color-blue-600-rgb, 0.5); border-color: rgb(@color-yellow-600-rgb) }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "fixes basic usages of tokens",
    input:
      ".foo { color: $kz-color-wisteria-800; background-color: $kz-color-cluny-600; border-color: $kz-color-yuzu-600 } @media (min-width: $kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @import "~@kaizen/design-tokens/sass/color"; .foo { color: $color-purple-800; background-color: $color-blue-600; border-color: $color-yellow-600 } @media (min-width: $layout-breakpoints-large) {}',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "fixes basic usages of tokens",
    input:
      ".foo { color: @kz-color-wisteria-800; background-color: @kz-color-cluny-600; border-color: @kz-color-yuzu-600 } @media (min-width: @kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @import "~@kaizen/design-tokens/less/color"; .foo { color: @color-purple-800; background-color: @color-blue-600; border-color: @color-yellow-600 } @media (min-width: @layout-breakpoints-large) {}',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "knows not to change a token to a CSS variable within a function that doesn't support them",
    input: `
      .foo {
        background-color: darken($kz-color-cluny-700, 0.8);
      }`,
    expectedOutput: `
      .foo {
        background-color: darken($kz-color-cluny-700, 0.8);
      }`,
    expectedWarningMessages: [
      replacementCssVariableUsedWithinUnsupportedFunction(
        "kz-color-cluny-700",
        "color-blue-700",
        "darken"
      ),
    ],
  },
  {
    language: "scss",
    testName:
      "migrates tokens within rgba, rgb, add-alpha, and other functions we don't know about",
    input: `
      @import "~@kaizen/design-tokens/sass/color";
      .foo {
        color: rgba($kz-color-wisteria-800, 0.4);
        test: something-else($kz-color-yuzu-400);
        another: rgb($kz-color-cluny-200);
        foo: add-alpha($kz-color-wisteria-700, 90);
      }`,
    expectedOutput: `
      @import "~@kaizen/design-tokens/sass/color";
      .foo {
        color: rgba($color-purple-800-rgb, 0.4);
        test: something-else($color-yellow-400);
        another: rgb($color-blue-200-rgb);
        foo: rgba($color-purple-700-rgb, 0.9);
      }`,
    expectedWarningMessages: [],
  },
  {
    language: "less",
    testName: "doesn't fix functions other than rgba, rgb, or add-alpha",
    input: `@import "~@kaizen/design-tokens/less/color";
       @import "~@kaizen/design-tokens/less/color-vars";
      .foo {
        color: rgba(@kz-color-wisteria-800, 0.4);
        background-color: darken(@kz-color-cluny-700, 0.8);
        test: something-else(@kz-color-yuzu-400);
        another: rgb(@kz-color-cluny-200);
        foo: add-alpha(@kz-color-wisteria-700, 90%);
      }`,
    expectedOutput: `@import "~@kaizen/design-tokens/less/color";
      .foo {
        color: rgba(@color-purple-800-rgb, 0.4);
        background-color: darken(@kz-color-cluny-700, 0.8);
        test: something-else(@color-yellow-400);
        another: rgb(@color-blue-200-rgb);
        foo: rgba(@color-purple-700-rgb, 0.9);
      }`,
    expectedWarningMessages: [
      replacementCssVariableUsedWithinUnsupportedFunction(
        "kz-color-cluny-700",
        "color-blue-700",
        "darken"
      ),
    ],
  },
  {
    language: "scss",
    testName: "doesn't fix tokens within variables",
    input: "$foo: $kz-color-wisteria-800;",
    expectedOutput: "$foo: $kz-color-wisteria-800;",
    expectedWarningMessages: [
      // Note that this warning message may change when breaking design tokens, and `kz-color-wisteria-800` ceases to exist.
      deprecatedTokenInVariableMessage(
        "kz-color-wisteria-800",
        "color-purple-800"
      ),
    ],
  },
  {
    language: "scss",
    testName:
      "fixes new kaizen css variable tokens when used incorrectly in rgba|rgb|add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: rgba($color-purple-800, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: rgba($color-purple-800-rgb, 80%) }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName:
      "fixes new kaizen css variable tokens when used incorrectly in rgba|rgb|add-alpha",
    input:
      '@import "~@kaizen/design-tokens/less/color"; .foo { color: rgba(@color-purple-800, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; .foo { color: rgba(@color-purple-800-rgb, 80%) }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "fixes tokens used in calc() without string interpolations",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: calc(5px + $kz-spacing-md) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: calc(5px + #{$spacing-md}) }',
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName: "nothing unfixable showing up for valid use cases",
    input:
      '@import "~@kaizen/design-tokens/less/color"; .foo { color: rgba(@color-purple-800-rgb, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; .foo { color: rgba(@color-purple-800-rgb, 80%) }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "interpolated tokens are still fixed",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: #{$kz-spacing-lg} }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: #{$spacing-lg} }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then fixed with a calc()",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: -$kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: calc(-1 * #{$spacing-lg}); }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then fixed with a calc(), but not if it's already within one",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: calc(-$kz-spacing-lg); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: calc((-1 * #{$spacing-lg})); }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then fixed with a calc(), even when it's part of a value with multiple 'sides' ",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px -$kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px calc(-1 * #{$spacing-lg}); }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then fixed with a calc(), even when it's part of a value with multiple 'sides', and with another kaizen token next to it ",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $kz-spacing-md -$kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $spacing-md calc(-1 * #{$spacing-lg}); }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "doesn't fix ambiguous case of negation (knows if it's an equation and not a negation - all it takes is a space)",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px - $spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px - $spacing-lg; }',
    expectedWarningMessages: [
      invalidEquationContainingKaizenTokenMessage,
      kaizenVariableUsedNextToOperatorMessage,
    ],
  },
  {
    language: "less",
    testName:
      "negation of CSS var token is detected as an equation, but not fixed in LESS",
    input:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: -@spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: -@spacing-lg; }',
    expectedWarningMessages: [
      invalidEquationContainingKaizenTokenMessage,
      negatedKaizenVariableMessage,
    ],
  },
  {
    language: "scss",
    testName:
      "fixes variables even though next to an operator but separated by a comma",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: rgba(+, $kz-spacing-md) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: rgba(+, $spacing-md) }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "warns about usage of variable tokens in color mixing functions mix() shade() tint() darken() lighten() adjust-hue() saturate() desaturate()",
    input: `
      @import "~@kaizen/design-tokens/sass/color";
      $white: white;
      $amount: 80%;
      .mix {
        color: mix($color-purple-800, $white, 80%);
      }
      .shade {
        color: shade($color-purple-800, $amount);
      }
      .tint {
        color: tint($color-purple-800, $amount);
      }
      .darken {
        color: darken($color-purple-800, $amount);
      }
      .lighten {
        color: lighten($color-purple-800, $amount);
      }
      .adjust-hue {
        color: adjust-hue($color-purple-800, $amount);
      }
      .saturate {
        color: saturate($color-purple-800, $amount);
      }
      .desaturate {
        color: desaturate($color-purple-800, $amount);
      }
    `,
    expectedOutput: `
    @import "~@kaizen/design-tokens/sass/color";
    $white: white;
    $amount: 80%;
    .mix {
      color: mix($color-purple-800, $white, 80%);
    }
    .shade {
      color: shade($color-purple-800, $amount);
    }
    .tint {
      color: tint($color-purple-800, $amount);
    }
    .darken {
      color: darken($color-purple-800, $amount);
    }
    .lighten {
      color: lighten($color-purple-800, $amount);
    }
    .adjust-hue {
      color: adjust-hue($color-purple-800, $amount);
    }
    .saturate {
      color: saturate($color-purple-800, $amount);
    }
    .desaturate {
      color: desaturate($color-purple-800, $amount);
    }
  `,
    expectedWarningMessages: [
      cssVariableUsedWithinUnsupportedFunction("color-purple-800", "mix"),
      cssVariableUsedWithinUnsupportedFunction("color-purple-800", "shade"),
      cssVariableUsedWithinUnsupportedFunction("color-purple-800", "tint"),
      cssVariableUsedWithinUnsupportedFunction("color-purple-800", "darken"),
      cssVariableUsedWithinUnsupportedFunction("color-purple-800", "lighten"),
      cssVariableUsedWithinUnsupportedFunction(
        "color-purple-800",
        "adjust-hue"
      ),
      cssVariableUsedWithinUnsupportedFunction("color-purple-800", "saturate"),
      cssVariableUsedWithinUnsupportedFunction(
        "color-purple-800",
        "desaturate"
      ),
    ],
  },
  {
    language: "scss",
    testName: "also warns about deprecated tokens in color mixing functions",
    input: `
      $white: white;
      $amount: 80%;
      .mix {
        color: mix($kz-color-wisteria-800, $white, 80%);
      }
      .shade {
        color: shade($kz-color-wisteria-800, $amount);
      }
      .tint {
        color: tint($kz-color-wisteria-800, $amount);
      }
      .darken {
        color: darken($kz-color-wisteria-800, $amount);
      }
      .lighten {
        color: lighten($kz-color-wisteria-800, $amount);
      }
      .adjust-hue {
        color: adjust-hue($kz-color-wisteria-800, $amount);
      }
      .saturate {
        color: saturate($kz-color-wisteria-800, $amount);
      }
      .desaturate {
        color: desaturate($kz-color-wisteria-800, $amount);
      }
    `,
    expectedOutput: `
    $white: white;
    $amount: 80%;
    .mix {
      color: mix($kz-color-wisteria-800, $white, 80%);
    }
    .shade {
      color: shade($kz-color-wisteria-800, $amount);
    }
    .tint {
      color: tint($kz-color-wisteria-800, $amount);
    }
    .darken {
      color: darken($kz-color-wisteria-800, $amount);
    }
    .lighten {
      color: lighten($kz-color-wisteria-800, $amount);
    }
    .adjust-hue {
      color: adjust-hue($kz-color-wisteria-800, $amount);
    }
    .saturate {
      color: saturate($kz-color-wisteria-800, $amount);
    }
    .desaturate {
      color: desaturate($kz-color-wisteria-800, $amount);
    }
  `,
    expectedWarnings: 8,
  },
  {
    language: "scss",
    testName: "does not warn about color mix functions that don't have tokens",
    input: `
      $white: white;
      $blue: blue;
      $amount: 80%;
      .mix {
        color: mix(blue, $white, 80%);
      }
      .shade {
        color: shade(blue, $amount);
      }
      .tint {
        color: tint(blue, $amount);
      }
      .darken {
        color: darken(blue, $amount);
      }
      .lighten {
        color: lighten(blue, $amount);
      }
      .adjust-hue {
        color: adjust-hue(blue, $amount);
      }
      .saturate {
        color: saturate(blue, $amount);
      }
      .desaturate {
        color: desaturate(blue, $amount);
      }
    `,
    expectedOutput: `
    $white: white;
    $blue: blue;
    $amount: 80%;
    .mix {
      color: mix(blue, $white, 80%);
    }
    .shade {
      color: shade(blue, $amount);
    }
    .tint {
      color: tint(blue, $amount);
    }
    .darken {
      color: darken(blue, $amount);
    }
    .lighten {
      color: lighten(blue, $amount);
    }
    .adjust-hue {
      color: adjust-hue(blue, $amount);
    }
    .saturate {
      color: saturate(blue, $amount);
    }
    .desaturate {
      color: desaturate(blue, $amount);
    }
  `,
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "add-alpha percentage parameter is normalised",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: add-alpha($color-purple-800, 70) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: rgba($color-purple-800-rgb, 0.7) }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "add-alpha percentage parameter is normalised and supports floats",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: add-alpha($color-purple-800, 70.1234) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: rgba($color-purple-800-rgb, 0.701234) }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "transitive kaizen tokens are fixed",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $color-purple-800; .foo { color: $foo; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $color-purple-800; .foo { color: $color-purple-800; }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName: "transitive kaizen tokens containing multiple values are fixed",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $color-purple-800 $color-purple-700 $color-purple-800; .foo { color: $foo; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $color-purple-800 $color-purple-700 $color-purple-800; .foo { color: $color-purple-800 $color-purple-700 $color-purple-800; }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "color manipulation functions are not warned about (SASS compiler is responsible for them), even when a transitive kaizen token is used",
    input: `
      @import "~@kaizen/design-tokens/sass/color";
      $foo: $color-purple-800;
      .foo {
        color: mix($foo, $white, 80%);
      }`,
    expectedOutput: `
      @import "~@kaizen/design-tokens/sass/color";
      $foo: $color-purple-800;
      .foo {
        color: mix($color-purple-800, $white, 80%);
      }`,
    expectedWarnings: 1,
  },
  {
    language: "scss",
    testName:
      "color manipulation functions are not warned about (SASS compiler is responsible for them), even when a transitive kaizen token defined in the same block is used",
    input: `
      @import "~@kaizen/design-tokens/sass/color";
      $foo: $color-purple-600;
      .foo {
        $foo: $color-purple-800;
        color: mix($foo, $white, 80%);
      }`,
    expectedOutput: `
      @import "~@kaizen/design-tokens/sass/color";
      $foo: $color-purple-600;
      .foo {
        $foo: $color-purple-800;
        color: mix($color-purple-800, $white, 80%);
      }`,
    expectedWarnings: 1,
  },
  {
    language: "scss",
    testName:
      "transitive tokens are fixed correctly when their usages are negated, and their replacements are simple",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; $foo: $spacing-md; .foo { top: -$foo; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; $foo: $spacing-md; .foo { top: calc(-1 * #{$spacing-md}); }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "transitive tokens are fixed correctly when their usages are interpolated",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; $foo: $spacing-md; .foo { top: #{$foo}; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; $foo: $spacing-md; .foo { top: #{$spacing-md}; }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "transparentize functions are fixed and decimals are parsed and converted correctly",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: transparentize($color-purple-800, 0.654); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: rgba($color-purple-800-rgb, 0.346); }',
    expectedWarningMessages: [],
  },
  {
    language: "scss",
    testName: "no errors are reported for a valid calc function",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { transform: translateX(calc(-1 * #{$kz-var-spacing-md})); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { transform: translateX(calc(-1 * #{$spacing-md})); }',
    expectedWarnings: 0,
  },
  {
    testName:
      "deprecated kaizen tokens are migrated and interpolated, when within a calc function",
    language: "scss",
    input: ".test { border-radius: calc(2 * $kz-border-solid-border-radius); }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/border"; .test { border-radius: calc(2 * #{$border-solid-border-radius}); }',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-wisteria-100 $kz-var-color-wisteria-200 $kz-var-color-wisteria-300 $kz-var-color-wisteria-400 $kz-var-color-wisteria-500 $kz-var-color-wisteria-600 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-purple-100 $color-purple-200 $color-purple-300 $color-purple-400 $color-purple-500 $color-purple-600 $color-purple-700 $color-purple-800; }',
    testName: "wisteria is renamed to purple in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-cluny-100 $kz-var-color-cluny-200 $kz-var-color-cluny-300 $kz-var-color-cluny-400 $kz-var-color-cluny-500 $kz-var-color-cluny-600 $kz-var-color-cluny-700; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-blue-100 $color-blue-200 $color-blue-300 $color-blue-400 $color-blue-500 $color-blue-600 $color-blue-700; }',
    testName: "cluny is renamed to blue in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-yuzu-100 $kz-var-color-yuzu-200 $kz-var-color-yuzu-300 $kz-var-color-yuzu-400 $kz-var-color-yuzu-500 $kz-var-color-yuzu-600 $kz-var-color-yuzu-700; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-yellow-100 $color-yellow-200 $color-yellow-300 $color-yellow-400 $color-yellow-500 $color-yellow-600 $color-yellow-700; }',
    testName: "yuzu is renamed to yellow in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-coral-100 $kz-var-color-coral-200 $kz-var-color-coral-300 $kz-var-color-coral-400 $kz-var-color-coral-500 $kz-var-color-coral-600 $kz-var-color-coral-700; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-red-100 $color-red-200 $color-red-300 $color-red-400 $color-red-500 $color-red-600 $color-red-700; }',
    testName: "coral is renamed to red in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-coral-800 $kz-var-color-coral-700 $kz-var-blah;}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $kz-var-color-coral-800 $color-red-700 $kz-var-blah;}',
    testName:
      "doesn't rename anything that would result in a non-existent kaizen-token",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-seedling-100 $kz-var-color-seedling-200 $kz-var-color-seedling-300 $kz-var-color-seedling-400 $kz-var-color-seedling-500 $kz-var-color-seedling-600 $kz-var-color-seedling-700; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-green-100 $color-green-200 $color-green-300 $color-green-400 $color-green-500 $color-green-600 $color-green-700; }',
    testName: "seedling is renamed to green in declarations",
    expectedWarnings: 0,
  },
  {
    // The input contains a kaizen var `$border-dashed-border-style;` that has `ash` as a substring, which should not be replaced.
    language: "scss",
    input: ".foo { test-prop: $border-dashed-border-style; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/border"; .foo { test-prop: $border-dashed-border-style; }',
    testName: "accidental renames don't occur",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-peach-100 $kz-var-color-peach-200 $kz-var-color-peach-300 $kz-var-color-peach-400 $kz-var-color-peach-500 $kz-var-color-peach-600 $kz-var-color-peach-700; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-orange-100 $color-orange-200 $color-orange-300 $color-orange-400 $color-orange-500 $color-orange-600 $color-orange-700; }',
    testName: "peach is renamed to orange in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-white $kz-var-color-stone $kz-var-color-ash $kz-var-color-iron $kz-var-color-slate; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-white $color-gray-100 $color-gray-300 $color-gray-500 $color-gray-600; }',
    testName: "grays are renamed in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      ".foo { test-prop: $kz-var-color-cluny-100, $kz-var-spacing-md $kz-var-shadow-large-box-shadow; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/shadow"; @import "~@kaizen/design-tokens/sass/spacing"; @import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-blue-100, $spacing-md $shadow-large-box-shadow; }',
    testName: "kz-var prefix is removed in declarations",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input: ".foo { test-prop: $kz-var-id-color-cluny-100; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-blue-100-id; }',
    testName: "kz-var-id-* is replaced with *-id ",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input: ".foo { test-prop: ($kz-var-id-color-cluny-100); }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: ($color-blue-100-id); }',
    testName: "kz-var-id-* is replaced with *-id and handles brackets",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input: ".foo { test-prop: #{$kz-var-id-color-cluny-100}; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: #{$color-blue-100-id}; }',
    testName: "kz-var-id-* is replaced with *-id and handles interpolation",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input: ".foo { test-prop: $kz-var-color-cluny-100-rgb-params; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { test-prop: $color-blue-100-rgb; }',
    testName: "-rgb-params is replaced with -rgb",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-wisteria-100 $kz-var-color-wisteria-200 $kz-var-color-wisteria-300 $kz-var-color-wisteria-400 $kz-var-color-wisteria-500 $kz-var-color-wisteria-600 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-purple-100 $color-purple-200 $color-purple-300 $color-purple-400 $color-purple-500 $color-purple-600 $color-purple-700 $color-purple-800)',
    testName: "wisteria is renamed to purple in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-cluny-100 $kz-var-color-cluny-200 $kz-var-color-cluny-300 $kz-var-color-cluny-400 $kz-var-color-cluny-500 $kz-var-color-cluny-600 $kz-var-color-cluny-700)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-blue-100 $color-blue-200 $color-blue-300 $color-blue-400 $color-blue-500 $color-blue-600 $color-blue-700)',
    testName: "cluny is renamed to blue in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-yuzu-100 $kz-var-color-yuzu-200 $kz-var-color-yuzu-300 $kz-var-color-yuzu-400 $kz-var-color-yuzu-500 $kz-var-color-yuzu-600 $kz-var-color-yuzu-700)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-yellow-100 $color-yellow-200 $color-yellow-300 $color-yellow-400 $color-yellow-500 $color-yellow-600 $color-yellow-700)',
    testName: "yuzu is renamed to yellow in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-coral-100 $kz-var-color-coral-200 $kz-var-color-coral-300 $kz-var-color-coral-400 $kz-var-color-coral-500 $kz-var-color-coral-600 $kz-var-color-coral-700)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-red-100 $color-red-200 $color-red-300 $color-red-400 $color-red-500 $color-red-600 $color-red-700)',
    testName: "coral is renamed to red in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-peach-100 $kz-var-color-peach-200 $kz-var-color-peach-300 $kz-var-color-peach-400 $kz-var-color-peach-500 $kz-var-color-peach-600 $kz-var-color-peach-700)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-orange-100 $color-orange-200 $color-orange-300 $color-orange-400 $color-orange-500 $color-orange-600 $color-orange-700)',
    testName: "peach is renamed to orange in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-seedling-100 $kz-var-color-seedling-200 $kz-var-color-seedling-300 $kz-var-color-seedling-400 $kz-var-color-seedling-500 $kz-var-color-seedling-600 $kz-var-color-seedling-700)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-green-100 $color-green-200 $color-green-300 $color-green-400 $color-green-500 $color-green-600 $color-green-700)',
    testName: "seedling is renamed to green in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule(test-prop: $kz-var-color-white $kz-var-color-stone $kz-var-color-ash $kz-var-color-iron $kz-var-color-slate)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @testrule(test-prop: $color-white $color-gray-100 $color-gray-300 $color-gray-500 $color-gray-600)',
    testName: "grays are renamed in at-rules",
    expectedWarnings: 0,
  },
  {
    language: "scss",
    input:
      "@testrule($kz-var-color-cluny-100, $kz-var-spacing-md $kz-var-shadow-large-box-shadow)",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/shadow"; @import "~@kaizen/design-tokens/sass/spacing"; @import "~@kaizen/design-tokens/sass/color"; @testrule($color-blue-100, $spacing-md $shadow-large-box-shadow)',
    testName: "kz-var prefix is removed in at-rules",
    expectedWarnings: 0,
  },
  {
    testName: "benign usage of color mixing functions don't cause any warnings",
    language: "scss",
    input: ".test { color: mix($test, $white, 0.6) }",
    expectedOutput: ".test { color: mix($test, $white, 0.6) }",
    expectedWarnings: 0,
  },
  {
    testName:
      "usage of non-deprecated tokens in other functions is allowed and not warned of",
    language: "scss",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .test { padding: @include ca-margin($start: $spacing-md) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .test { padding: @include ca-margin($start: $spacing-md) }',
    expectedWarnings: 0,
  },
  {
    testName:
      "removed tokens are warned about within variables but not replaced",
    language: "scss",
    input: "$foo: $kz-var-color-wisteria-100",
    expectedOutput: "$foo: $kz-var-color-wisteria-100",
    expectedWarnings: 1,
  },
  {
    testName:
      "tokens within variable definitions can be replaced when the replacement is not a CSS variable",
    language: "scss",
    input:
      '@import "~@kaizen/design-tokens/sass/layout-vars"; $foo: $kz-var-layout-breakpoints-large @media (max-width: $foo){}',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; $foo: $layout-breakpoints-large @media (max-width: $foo){}',
    expectedWarnings: 0,
  },
  {
    testName:
      "tokens within functions can be safely replaced when the current/existing token is a CSS variable",
    language: "scss",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .test { padding: ca-padding($kz-var-spacing-md) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .test { padding: ca-padding($spacing-md) }',
    expectedWarnings: 0,
  },
  {
    testName: "tokens are migrated within compiler at-rules (@include ...)",
    language: "scss",
    input: `
    .test {
      @include ca-margin($start: $kz-var-spacing-sm);
    }`,
    expectedOutput: `
    @import "~@kaizen/design-tokens/sass/spacing";
    .test {
      @include ca-margin($start: $spacing-sm);
    }`,
    expectedWarnings: 0,
  },
  {
    testName:
      "custom atrules with functions and non-deprecated tokens are not warned about",
    language: "scss",
    input: `
    @import "~@kaizen/design-tokens/sass/spacing";
    .test {
      @include ca-margin($start: $spacing-sm);
    }`,
    expectedOutput: `
    @import "~@kaizen/design-tokens/sass/spacing";
    .test {
      @include ca-margin($start: $spacing-sm);
    }`,
    expectedWarnings: 0,
  },
  {
    testName: "reports on deprecated tokens in CSS variable identifiers",
    language: "scss",
    input: `
      .test {
        color: var(--kz-var-color-wisteria-100);
      }
    `,
    expectedOutput: `
      .test {
        color: var(--kz-var-color-wisteria-100);
      }
    `,
    expectedWarningMessages: [
      containsDeprecatedKaizenTokenWithNoReplacement(
        "kz-var-color-wisteria-100"
      ),
    ],
  },
  {
    language: "scss",
    testName:
      "use-deprecated-component-library-helpers-scss-imports: replaces styles/type",

    input: `
      @import "~@kaizen/some-other-import";
      @import "~@kaizen/component-library/styles/type";
      @import "~@kaizen/some-other-import-2";
    `,

    expectedOutput: `
      @import "~@kaizen/some-other-import";
      @import "~@kaizen/deprecated-component-library-helpers/styles/type";
      @import "~@kaizen/some-other-import-2";
    `,
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "use-deprecated-component-library-helpers-scss-imports: replaces styles/color",
    input: '@import "~@kaizen/component-library/styles/color"',
    expectedOutput:
      '@import "~@kaizen/deprecated-component-library-helpers/styles/color"',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "use-deprecated-component-library-helpers-scss-imports: replaces styles/layout",
    input: '@import "~@kaizen/component-library/styles/layout"',
    expectedOutput:
      '@import "~@kaizen/deprecated-component-library-helpers/styles/layout"',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "use-deprecated-component-library-helpers-scss-imports: preserves single quotes",
    input: "@import '~@kaizen/component-library/styles/type'",
    expectedOutput:
      "@import '~@kaizen/deprecated-component-library-helpers/styles/type'",
    expectedWarnings: 0,
  },
  {
    language: "less",
    testName:
      "use-deprecated-component-library-helpers-scss-imports: also works in less",
    input: '@import "~@kaizen/component-library/styles/color"',
    expectedOutput:
      '@import "~@kaizen/deprecated-component-library-helpers/styles/color"',
    expectedWarnings: 0,
  },
  {
    language: "scss",
    testName:
      "use-deprecated-component-library-helpers-scss-imports: does not leave duplicates, and keeps the last import if there are duplicates",

    input: `
      @import "some-other-import";
      @import "~@kaizen/component-library/styles/color";
      @import "another-import";
      @import "~@kaizen/deprecated-component-library-helpers/styles/color";
    `,
    expectedOutput: `
      @import "some-other-import";
      @import "another-import";
      @import "~@kaizen/deprecated-component-library-helpers/styles/color";
    `,
    expectedWarnings: 0,
  },
]

describe("Codemod", () => {
  const testExample = ({
    language,
    testName,
    input,
    expectedOutput,
    only,
    ...warnings
  }: TestExample): void => {
    const testFn = only ? test.only : test
    testFn(`${language}: ${testName}`, async () => {
      const result = await lint({
        codeFilename: `input.${language}`,
        config: testStylelintConfig,
        code: input,
        fix: true,
      })
      if ("expectedWarnings" in warnings) {
        if (result.results[0]?.warnings.length !== warnings.expectedWarnings) {
          // eslint-disable-next-line no-console
          console.warn(
            `Unexpected warnings for test: ${language}: ${testName}`,
            result.results[0]?.warnings
          )
        }
        expect(result.results[0]?.warnings.length).toBe(
          warnings.expectedWarnings
        )
      } else {
        expect(new Set(warnings.expectedWarningMessages)).toEqual(
          new Set(result.results[0]?.warnings.map(warning => warning.text))
        )
      }

      expect(result.output.replace(/(\n|\t| )+/g, " ").trim()).toBe(
        expectedOutput.replace(/(\n|\t| )+/g, " ").trim()
      )
    })
  }
  testExamples.forEach(testExample)
  // Test a single example by adding "only" to an example up above
  // OR
  // Test a single example like so:
  /*   testExample({
    language: "scss",
    testName: "test",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: $kz-var-spacing-lg calc(-1 * #{$kz-var-spacing-md}); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $spacing-lg calc(-1 * #{$spacing-md}); }',
    expectedUnmigratableTokens: 0,
  }) */
})
