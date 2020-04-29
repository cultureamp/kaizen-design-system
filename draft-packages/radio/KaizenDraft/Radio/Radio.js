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
var RadioInput_1 = __importDefault(require("./Primitives/RadioInput"));
var styles = require("./styles.scss");
var Radio = function (_a) {
    var _b;
    var _c = _a.id, id = _c === void 0 ? "" : _c, automationId = _a.automationId, _d = _a.name, name = _d === void 0 ? "" : _d, _e = _a.value, value = _e === void 0 ? "" : _e, labelText = _a.labelText, _f = _a.selectedStatus, selectedStatus = _f === void 0 ? false : _f, onChange = _a.onChange, _g = _a.inline, inline = _g === void 0 ? false : _g, _h = _a.disabled, disabled = _h === void 0 ? false : _h;
    return (React.createElement("div", { "data-automation-id": automationId, className: classnames_1["default"](styles.container, (_b = {},
            _b[styles.selected] = selectedStatus,
            _b[styles.disabled] = disabled,
            _b[styles.inline] = inline,
            _b)) },
        React.createElement(draft_1.Label, { id: id + "-field-label", htmlFor: id, automationId: id + "-field-label", labelText: labelText, labelType: "radio" },
            React.createElement(RadioInput_1["default"], { id: id, automationId: id + "-radio-input", disabled: disabled, selectedStatus: selectedStatus, value: value, name: name, onChange: onChange }))));
};
exports["default"] = Radio;
//# sourceMappingURL=Radio.js.map