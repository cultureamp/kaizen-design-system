"use strict";
/* eslint import/no-extraneous-dependencies: 0 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.cssVarBackgrounds = exports.backgrounds = void 0;
var colors = __importStar(require("@kaizen/design-tokens/tokens/color.json"));
var design_tokens_1 = require("@kaizen/design-tokens");
exports.backgrounds = [
    { name: "White", value: design_tokens_1.defaultTheme.color.white },
    { name: "Gray 100", value: design_tokens_1.defaultTheme.color.gray["100"] },
    { name: "Gray 300", value: design_tokens_1.defaultTheme.color.gray["300"] },
    { name: "Purple 700", value: design_tokens_1.defaultTheme.color.purple["700"] },
    { name: "Blue 500", value: design_tokens_1.defaultTheme.color.blue["500"] },
    { name: "Green 500", value: design_tokens_1.defaultTheme.color.green["500"] },
    { name: "Yellow 500", value: design_tokens_1.defaultTheme.color.yellow["500"] },
    { name: "Orange 500", value: design_tokens_1.defaultTheme.color.orange["500"] },
    { name: "Red 500", value: design_tokens_1.defaultTheme.color.red["500"] },
];
// This is a temporary duplication until we find a way for storybook to like the above ^^ tokens with css variables rather than concretes.
exports.cssVarBackgrounds = [
    { name: "White", value: colors.color.white },
    { name: "Gray 100", value: colors.color.gray["100"] },
    { name: "Gray 300", value: colors.color.gray["300"] },
    { name: "Purple 700", value: colors.color.purple["700"] },
    { name: "Blue 500", value: colors.color.blue["500"] },
    { name: "Green 500", value: colors.color.green["500"] },
    { name: "Yellow 500", value: colors.color.yellow["500"] },
    { name: "Orange 500", value: colors.color.orange["500"] },
    { name: "Red 500", value: colors.color.red["500"] },
];
//# sourceMappingURL=backgrounds.js.map