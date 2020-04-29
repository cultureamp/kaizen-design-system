"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var styles = require("./GenericModalSection.scss");
var GenericModalSection = function (_a) {
    var _b = _a.unpadded, unpadded = _b === void 0 ? false : _b, children = _a.children;
    return React.createElement("div", { className: unpadded ? null : styles.padded }, children);
};
exports["default"] = GenericModalSection;
//# sourceMappingURL=GenericModalSection.js.map