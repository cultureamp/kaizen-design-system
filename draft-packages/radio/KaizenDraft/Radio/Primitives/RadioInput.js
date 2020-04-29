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
var renderSelected = function (selectedStatus) {
    if (selectedStatus) {
        return React.createElement("div", { className: styles.icon });
    }
    return;
};
var RadioInput = function (_a) {
    var id = _a.id, automationId = _a.automationId, name = _a.name, value = _a.value, _b = _a.selectedStatus, selectedStatus = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    return (React.createElement("div", null,
        React.createElement("input", { type: "radio", id: id, name: name, value: value, checked: selectedStatus, "data-automation-id": automationId, 
            // TODO - needsclick class disables fastclick on this element to prevent double tap on mobile.
            // Remove when fastclick is removed from consuming repos
            className: classnames_1["default"](styles.radioInput, "needsclick"), onChange: onChange, disabled: disabled }),
        React.createElement("div", { className: styles.box }, renderSelected(selectedStatus))));
};
exports["default"] = RadioInput;
//# sourceMappingURL=RadioInput.js.map