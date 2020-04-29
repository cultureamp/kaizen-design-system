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
var component_library_1 = require("@kaizen/component-library");
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var clearIcon = require("@kaizen/component-library/icons/clear.icon.svg")["default"];
var exclamationIcon = require("@kaizen/component-library/icons/exclamation.icon.svg")["default"];
var informationIcon = require("@kaizen/component-library/icons/information.icon.svg")["default"];
var successIcon = require("@kaizen/component-library/icons/success.icon.svg")["default"];
var styles = require("./Tag.scss");
var successIconVariants = ["validationPositive"];
var exclamationIconVariants = [
    "validationNegative",
    "validationCautionary",
];
var Tag = function (props) {
    var _a, _b;
    var children = props.children, _c = props.variant, variant = _c === void 0 ? "default" : _c, _d = props.size, size = _d === void 0 ? "medium" : _d, _e = props.inline, inline = _e === void 0 ? false : _e, _f = props.dismissible, dismissible = _f === void 0 ? false : _f, onDismiss = props.onDismiss, onMouseDown = props.onMouseDown, onMouseLeave = props.onMouseLeave, truncateWidth = props.truncateWidth;
    var isTruncated = truncateWidth && truncateWidth > 0;
    var canShowIcon = size === "medium";
    return (React.createElement("div", { className: classnames_1["default"](styles.root, (_a = {},
            _a[styles["default"]] = variant === "default",
            _a[styles.sentimentPositive] = variant === "sentimentPositive",
            _a[styles.sentimentNeutral] = variant === "sentimentNeutral",
            _a[styles.sentimentNegative] = variant === "sentimentNegative",
            _a[styles.sentimentNone] = variant === "sentimentNone",
            _a[styles.validationPositive] = variant === "validationPositive",
            _a[styles.validationInformative] = variant === "validationInformative",
            _a[styles.validationNegative] = variant === "validationNegative",
            _a[styles.validationCautionary] = variant === "validationCautionary",
            _a[styles.statusLive] = variant === "statusLive",
            _a[styles.statusDraft] = variant === "statusDraft",
            _a[styles.statusClosed] = variant === "statusClosed",
            _a[styles.statusAction] = variant === "statusAction",
            _a[styles.medium] = size === "medium",
            _a[styles.small] = size === "small",
            _a[styles.inline] = inline,
            _a[styles.dismissible] = dismissible,
            _a)) },
        React.createElement("div", { className: styles.layoutContainer },
            canShowIcon &&
                (function () {
                    if (successIconVariants.includes(variant)) {
                        return (React.createElement("span", { className: styles.validationIcon },
                            React.createElement(component_library_1.Icon, { icon: successIcon, role: "presentation" })));
                    }
                    if (exclamationIconVariants.includes(variant)) {
                        return (React.createElement("span", { className: styles.validationIcon },
                            React.createElement(component_library_1.Icon, { icon: exclamationIcon, role: "presentation" })));
                    }
                    if (variant === "validationInformative") {
                        return (React.createElement("span", { className: styles.validationIcon },
                            React.createElement(component_library_1.Icon, { icon: informationIcon, role: "presentation" })));
                    }
                })(),
            React.createElement("span", { className: classnames_1["default"](styles.textContent, (_b = {},
                    _b[styles.truncate] = isTruncated,
                    _b)), style: {
                    maxWidth: isTruncated ? truncateWidth : undefined
                } }, children),
            dismissible && (React.createElement("span", { className: styles.dismissIcon, onClick: onDismiss, onMouseDown: onMouseDown, onMouseLeave: onMouseLeave },
                React.createElement(component_library_1.Icon, { icon: clearIcon, inheritSize: true, role: "img", title: "Dismiss" }))),
            variant === "statusLive" && (React.createElement("span", { className: styles.pulse },
                React.createElement("span", { className: styles.pulseRing }))))));
};
exports["default"] = Tag;
//# sourceMappingURL=Tag.js.map