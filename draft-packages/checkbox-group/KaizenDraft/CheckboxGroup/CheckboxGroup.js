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
var draft_1 = require("@kaizen/component-library/draft");
var styles = require("./styles.scss");
var CheckboxGroup = function (_a) {
    var _b;
    var automationId = _a.automationId, children = _a.children, labelText = _a.labelText, _c = _a.noBottomMargin, noBottomMargin = _c === void 0 ? false : _c;
    return (React.createElement("div", { "data-automation-id": automationId && automationId + "-field-checkbox-group", className: classnames_1["default"](styles.checkboxGroupContainer, (_b = {},
            _b[styles.noBottomMargin] = noBottomMargin,
            _b)) },
        React.createElement("div", { className: styles.checkboxGroupLabel },
            React.createElement(draft_1.Label, { automationId: automationId + "-field-label", labelText: labelText, labelType: "text" })),
        children));
};
exports["default"] = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map