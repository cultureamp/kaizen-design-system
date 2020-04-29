"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var component_library_1 = require("@kaizen/component-library");
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")["default"];
var styles = require("./styles.scss");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleDropdownMenu = function (e) {
            e.stopPropagation();
            var onOpenDropdown = _this.props.onOpenDropdown;
            onOpenDropdown();
        };
        return _this;
    }
    Dropdown.prototype.render = function () {
        var _a;
        var _b = this.props, automationId = _b.automationId, dropdownAltText = _b.dropdownAltText, variant = _b.variant;
        return (React.createElement("div", { className: styles.dropdown },
            React.createElement("button", { className: classnames_1["default"]((_a = {},
                    _a[styles.dropdownButtonDefault] = variant === "default",
                    _a[styles.dropdownButtonPrimary] = variant === "primary",
                    _a)), onClick: this.toggleDropdownMenu, onMouseDown: function (e) { return e.preventDefault(); }, "data-automation-id": automationId },
                React.createElement("span", { className: styles.dropdownIcon },
                    React.createElement(component_library_1.Icon, { icon: chevronDown, role: "img", title: dropdownAltText })))));
    };
    Dropdown.displayName = "Dropdown";
    Dropdown.defaultProps = {
        dir: "ltr",
        variant: "default"
    };
    return Dropdown;
}(React.Component));
exports["default"] = Dropdown;
//# sourceMappingURL=Dropdown.js.map