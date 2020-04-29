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
var draft_1 = require("@kaizen/component-library/draft");
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./styles.scss");
var CheckboxField = function (_a) {
    var _b;
    var _c = _a.id, id = _c === void 0 ? "" : _c, automationId = _a.automationId, _d = _a.name, name = _d === void 0 ? "" : _d, labelText = _a.labelText, checkedStatus = _a.checkedStatus, onCheck = _a.onCheck, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.noBottomMargin, noBottomMargin = _f === void 0 ? false : _f, tabIndex = _a.tabIndex;
    return (React.createElement("div", { "data-automation-id": automationId, className: classnames_1["default"](styles.container, (_b = {},
            _b[styles.checked] = checkedStatus === "on",
            _b[styles.mixed] = checkedStatus === "mixed",
            _b[styles.disabled] = disabled,
            _b[styles.noBottomMargin] = noBottomMargin,
            _b)) },
        React.createElement(draft_1.Label, { id: id + "-field-label", htmlFor: id + "-field-checkbox", automationId: id + "-field-label", labelText: labelText, labelType: "checkbox" },
            React.createElement(draft_1.Checkbox, { id: id + "-field-checkbox", automationId: id + "-field-checkbox", disabled: disabled, checkedStatus: checkedStatus, name: name, onCheck: onCheck, tabIndex: tabIndex }))));
};
exports["default"] = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map