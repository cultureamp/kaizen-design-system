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
var Dropdown_1 = __importDefault(require("./Dropdown"));
var DropdownMenu_1 = __importDefault(require("./DropdownMenu"));
var styles = require("./styles.scss");
var SplitButton = function (_a) {
    var _b;
    var automationId = _a.automationId, href = _a.href, disabled = _a.disabled, onClick = _a.onClick, dropdownContent = _a.dropdownContent, label = _a.label, _c = _a.dir, dir = _c === void 0 ? "ltr" : _c, dropdownAltText = _a.dropdownAltText, _d = _a.variant, variant = _d === void 0 ? "default" : _d;
    // If the button has a route, it should be an `a` tag, since it is better
    // accessibility and routing. Otherwise, it should be a `button`.
    var btnProps = {
        className: classnames_1["default"]((_b = {},
            _b[styles["default"]] = variant === "default",
            _b[styles.primary] = variant === "primary",
            _b[styles.disabled] = disabled,
            _b)),
        tabIndex: disabled ? -1 : 0,
        "data-automation-id": "split-button-button",
        disabled: disabled
    };
    var dropdownButtonsContainerRef = React.useRef(null);
    var _e = React.useState(false), isMenuVisible = _e[0], setIsMenuVisible = _e[1];
    var toggleDropdownMenu = function () {
        setIsMenuVisible(!isMenuVisible);
    };
    var getButtonsBoundingRect = function () {
        return dropdownButtonsContainerRef.current
            ? dropdownButtonsContainerRef.current.getBoundingClientRect()
            : null;
    };
    return (React.createElement("div", { className: styles.root, dir: dir, "data-automation-id": automationId },
        React.createElement("div", { className: styles.buttonsContainer, ref: dropdownButtonsContainerRef },
            href ? (React.createElement("a", __assign({ href: disabled ? undefined : href, onClick: disabled ? undefined : onClick }, btnProps), label)) : (React.createElement("button", __assign({ type: "button", onClick: disabled ? undefined : onClick }, btnProps), label)),
            React.createElement(Dropdown_1["default"], { automationId: "split-button-dropdown", dir: dir, variant: variant, dropdownAltText: dropdownAltText, onOpenDropdown: toggleDropdownMenu })),
        isMenuVisible && (React.createElement(DropdownMenu_1["default"], { hideDropdownMenu: toggleDropdownMenu, dir: dir, buttonsBoundingRect: getButtonsBoundingRect() }, dropdownContent))));
};
exports["default"] = SplitButton;
//# sourceMappingURL=SplitButton.js.map