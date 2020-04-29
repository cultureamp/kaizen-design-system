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
var ToggleSwitchField = function (_a) {
    var _b;
    var _c = _a.id, id = _c === void 0 ? "" : _c, _d = _a.name, name = _d === void 0 ? "" : _d, labelText = _a.labelText, toggledStatus = _a.toggledStatus, onToggle = _a.onToggle, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.inline, inline = _f === void 0 ? false : _f, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g, _h = _a.theme, theme = _h === void 0 ? draft_1.ToggleTheme.DEFAULT : _h;
    return (React.createElement(draft_1.FieldGroup, { id: id + "-field-group", inline: inline, automationId: id + "-field-group", className: classnames_1["default"](styles.container, (_b = {},
            _b[styles.disabled] = disabled,
            _b[styles.fullWidth] = fullWidth,
            _b)) },
        React.createElement("div", { className: styles.inner },
            React.createElement(draft_1.Label, { id: id + "-field-label", htmlFor: id + "-field-toggle", automationId: id + "-field-label", labelText: labelText, labelType: "toggle" },
                React.createElement(draft_1.ToggleSwitch, { id: id + "-field-toggle", automationId: id + "-field-toggle", disabled: disabled, toggledStatus: toggledStatus, name: name, onToggle: onToggle, theme: theme })))));
};
exports["default"] = ToggleSwitchField;
//# sourceMappingURL=ToggleSwitchField.js.map