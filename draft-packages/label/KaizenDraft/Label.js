"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./styles.scss");
var Label = function (_a) {
    var _b;
    var id = _a.id, automationId = _a.automationId, htmlFor = _a.htmlFor, _c = _a.labelText, labelText = _c === void 0 ? "" : _c, _d = _a.labelType, labelType = _d === void 0 ? "text" : _d, _e = _a.reversed, reversed = _e === void 0 ? false : _e, children = _a.children;
    return (React.createElement("label", { id: id, "data-automation-id": automationId, htmlFor: htmlFor, className: classnames_1["default"](styles.label, (_b = {},
            _b[styles.reversed] = reversed,
            _b[styles.text] = labelType === "text",
            _b[styles.checkbox] = labelType === "checkbox",
            _b[styles.toggle] = labelType === "toggle",
            _b[styles.radio] = labelType === "radio",
            _b)) },
        children,
        React.createElement("span", { className: styles.labelText }, labelText)));
};
exports["default"] = Label;
//# sourceMappingURL=Label.js.map