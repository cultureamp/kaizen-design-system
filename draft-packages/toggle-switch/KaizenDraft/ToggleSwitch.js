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
var ToggledStatus;
(function (ToggledStatus) {
    ToggledStatus["ON"] = "on";
    ToggledStatus["OFF"] = "off";
})(ToggledStatus = exports.ToggledStatus || (exports.ToggledStatus = {}));
var ToggleTheme;
(function (ToggleTheme) {
    ToggleTheme["DEFAULT"] = "default";
    ToggleTheme["FREEMIUM"] = "freemium";
})(ToggleTheme = exports.ToggleTheme || (exports.ToggleTheme = {}));
var ToggleSwitch = function (_a) {
    var _b, _c;
    var id = _a.id, automationId = _a.automationId, name = _a.name, toggledStatus = _a.toggledStatus, onToggle = _a.onToggle, disabled = _a.disabled, theme = _a.theme;
    var isOn = toggledStatus === ToggledStatus.ON;
    return (React.createElement("div", { className: classnames_1["default"]((_b = {},
            _b[styles.on] = isOn,
            _b[styles.off] = !isOn,
            _b[styles.disabled] = disabled,
            _b)) },
        React.createElement("input", { type: "checkbox", id: id, name: name, "data-automation-id": automationId, className: styles.checkbox, checked: isOn ? true : false, onChange: onToggle, disabled: disabled }),
        React.createElement("div", { className: classnames_1["default"](styles.track, (_c = {},
                _c[styles.freemium] = theme === ToggleTheme.FREEMIUM,
                _c)) },
            React.createElement("div", { className: styles.thumb }))));
};
exports["default"] = ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.js.map