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
var RadioGroup = function (_a) {
    var _b;
    var _c = _a.automationId, automationId = _c === void 0 ? "" : _c, children = _a.children, _d = _a.labelText, labelText = _d === void 0 ? "" : _d, _e = _a.noBottomMargin, noBottomMargin = _e === void 0 ? false : _e;
    return (React.createElement("div", { "data-automation-id": automationId, className: classnames_1["default"](styles.radioGroupContainer, (_b = {},
            _b[styles.noBottomMargin] = noBottomMargin,
            _b)) },
        React.createElement("div", { className: styles.radioGroupLabel },
            React.createElement(draft_1.Label, { automationId: automationId + "-field-label", labelText: labelText, labelType: "text" })),
        children));
};
exports["default"] = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map