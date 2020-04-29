"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_select_1 = __importStar(require("react-select"));
var async_1 = __importDefault(require("react-select/async"));
var component_library_1 = require("@kaizen/component-library");
var chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")["default"];
var styles = require("./styles.react.scss");
exports.Select = function (props) {
    return (React.createElement(react_select_1["default"], __assign({}, props, { components: {
            Control: Control,
            Placeholder: Placeholder,
            DropdownIndicator: DropdownIndicator,
            Menu: Menu,
            Option: Option,
            NoOptionsMessage: NoOptionsMessage,
            SingleValue: SingleValue,
            MultiValue: MultiValue,
            ClearIndicator: null,
            IndicatorSeparator: null
        }, className: classnames_1["default"](styles.container, props.className) })));
};
exports.AsyncSelect = function (props) {
    return (React.createElement(async_1["default"], __assign({}, props, { components: {
            Control: Control,
            Placeholder: Placeholder,
            DropdownIndicator: DropdownIndicator,
            Menu: Menu,
            Option: Option,
            NoOptionsMessage: NoOptionsMessage,
            SingleValue: SingleValue,
            MultiValue: MultiValue,
            ClearIndicator: null,
            IndicatorSeparator: null
        }, className: classnames_1["default"](styles.container, props.className) })));
};
var Control = function (props) {
    var _a;
    return (React.createElement(react_select_1.components.Control, __assign({}, props, { className: classnames_1["default"](styles.control, (_a = {},
            _a[styles.focusedControl] = props.isFocused,
            _a)) })));
};
var Placeholder = function (props) { return (React.createElement(react_select_1.components.Placeholder, __assign({}, props),
    React.createElement("span", { className: styles.placeholder }, props.children))); };
var DropdownIndicator = function (props) { return (
// Suppress typing issue - looks like the type defs are incorrect
// @ts-ignore
React.createElement(react_select_1.components.DropdownIndicator, __assign({}, props),
    React.createElement(component_library_1.Icon, { icon: chevronDownIcon, role: "presentation" }))); };
var Menu = function (props) { return (React.createElement(react_select_1.components.Menu, __assign({}, props, { className: styles.menu }))); };
// TODO - needsclick class disables fastclick on this element. Remove when fastclick is removed from consuming repos
var Option = function (props) {
    var _a;
    return (React.createElement(react_select_1.components.Option, __assign({}, props, { className: classnames_1["default"]("needsclick", styles.option, (_a = {},
            _a[styles.focusedOption] = props.isFocused,
            _a[styles.selectedOption] = props.isSelected,
            _a)) })));
};
var NoOptionsMessage = function (props) { return (React.createElement(react_select_1.components.NoOptionsMessage, __assign({}, props),
    React.createElement("span", { className: styles.noOptionsMessage }, props.children))); };
var SingleValue = function (props) { return (React.createElement(react_select_1.components.SingleValue, __assign({}, props),
    React.createElement("span", { className: styles.singleValue }, props.children))); };
var MultiValue = function (props) { return (React.createElement(react_select_1.components.MultiValue, __assign({}, props, { className: styles.multiValue }))); };
//# sourceMappingURL=Select.js.map