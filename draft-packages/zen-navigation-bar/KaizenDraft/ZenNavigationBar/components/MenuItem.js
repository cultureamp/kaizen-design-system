"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_library_1 = require("@kaizen/component-library");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var context_1 = require("../context");
var arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")["default"];
var styles = require("./MenuItem.module.scss");
var MenuItem = function (_a) {
    var _b;
    var label = _a.label, url = _a.url, method = _a.method, onClick = _a.onClick, _c = _a.showArrowIcon, showArrowIcon = _c === void 0 ? false : _c, _d = _a.active, active = _d === void 0 ? false : _d;
    var handleNavigationChange = react_1["default"].useContext(context_1.LinkClickContext).handleNavigationChange;
    var handleItemClick = function (event) {
        onClick && onClick(event);
        handleNavigationChange && handleNavigationChange(event);
    };
    var renderArrowIcon = function () { return (react_1["default"].createElement("span", { className: styles.arrowIcon },
        react_1["default"].createElement(component_library_1.Icon, { icon: arrowForwardIcon, role: "presentation" }))); };
    var renderForm = function () { return (
    // HTML forms only accept POST. We use a hidden `_method` input as a convention for emulating other HTTP verbs.
    // This behaviour is the same as what is implemented by UJS and supported by Rails:
    // https://github.com/rails/jquery-ujs
    react_1["default"].createElement("form", { method: "post", action: url },
        react_1["default"].createElement("input", { name: "_method", value: method, type: "hidden" }),
        react_1["default"].createElement("button", { type: "submit", className: styles.itemBtn },
            label,
            showArrowIcon && renderArrowIcon()))); };
    var renderLink = function () { return (react_1["default"].createElement("a", { href: url, className: styles.item, tabIndex: 0, onClick: handleItemClick },
        label,
        showArrowIcon && renderArrowIcon())); };
    return (react_1["default"].createElement("li", { className: classnames_1["default"](styles.container, (_b = {},
            _b[styles.active] = active,
            _b)) }, method && method !== "get" ? renderForm() : renderLink()));
};
exports["default"] = MenuItem;
//# sourceMappingURL=MenuItem.js.map