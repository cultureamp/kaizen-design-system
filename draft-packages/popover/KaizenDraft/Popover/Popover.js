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
var closeIcon = require("@kaizen/component-library/icons/close.icon.svg")["default"];
var negativeIcon = require("@kaizen/component-library/icons/exclamation.icon.svg")["default"];
var informativeIcon = require("@kaizen/component-library/icons/information.icon.svg")["default"];
var positiveIcon = require("@kaizen/component-library/icons/success.icon.svg")["default"];
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./styles.scss");
var Popover = React.forwardRef(function (_a, ref) {
    var id = _a.id, automationId = _a.automationId, children = _a.children, _b = _a.variant, variant = _b === void 0 ? "default" : _b, _c = _a.side, side = _c === void 0 ? "bottom" : _c, _d = _a.size, size = _d === void 0 ? "small" : _d, _e = _a.position, position = _e === void 0 ? "center" : _e, heading = _a.heading, _f = _a.dismissible, dismissible = _f === void 0 ? false : _f, onClose = _a.onClose, _g = _a.singleLine, singleLine = _g === void 0 ? false : _g, boxOffset = _a.boxOffset;
    return (React.createElement("div", { className: classnames_1["default"](styles.root, mapSizeToClass(size)), style: getRootStyle(boxOffset), ref: ref },
        React.createElement("div", { className: mapVariantToBoxClass(variant) },
            heading && (React.createElement("div", { className: styles.header },
                variant !== "default" && (React.createElement("span", { className: classnames_1["default"](styles.icon, mapVariantToIconClass(variant)) },
                    React.createElement(component_library_1.Icon, { role: "presentation", icon: mapVariantToIcon(variant) }))),
                React.createElement("div", { className: styles.singleLine }, heading),
                dismissible && (React.createElement("button", { className: styles.close, onClick: onClose },
                    React.createElement(component_library_1.Icon, { role: "presentation", icon: closeIcon }))))),
            React.createElement("div", { className: classnames_1["default"](styles.container, mapLineVariant(singleLine)) }, children)),
        React.createElement("div", { className: classnames_1["default"](mapArrowVariantToClass(variant), mapArrowSideToClass(side), mapArrowPositionToClass(position)), style: getArrowStyle(boxOffset, side) })));
});
var getRootStyle = function (boxOffset) { return ({
    transform: boxOffset == null
        ? "translateX(-50%)"
        : "translateX(calc(-50% + " + boxOffset + "px)"
}); };
var mapVariantToBoxClass = function (variant) {
    switch (variant) {
        case "informative":
            return styles.informativeBox;
        case "positive":
            return styles.positiveBox;
        case "negative":
            return styles.negativeBox;
        case "cautionary":
            return styles.cautionaryBox;
        default:
            return styles.defaultBox;
    }
};
var getArrowStyle = function (boxOffset, side) {
    var rotate = side === "top" ? "rotate(180deg)" : "";
    var translate = boxOffset == null
        ? ""
        : // Because we shifted the popover in the parent, we need to readjust the
            // arrow back to where it was.
            "translateX(" + boxOffset * -1 + "px)";
    return rotate || translate
        ? {
            transform: "" + translate + rotate
        }
        : undefined;
};
var mapVariantToIconClass = function (variant) {
    switch (variant) {
        case "informative":
            return styles.informativeIcon;
        case "positive":
            return styles.positiveIcon;
        case "negative":
            return styles.negativeIcon;
        case "cautionary":
            return styles.cautionaryIcon;
        default:
            return undefined;
    }
};
var mapVariantToIcon = function (variant) {
    switch (variant) {
        case "informative":
            return informativeIcon;
        case "positive":
            return positiveIcon;
        case "negative":
            return negativeIcon;
        case "cautionary":
            return negativeIcon;
        default:
            return informativeIcon;
    }
};
var mapArrowVariantToClass = function (variant) {
    switch (variant) {
        case "informative":
            return styles.informativeArrow;
        case "positive":
            return styles.positiveArrow;
        case "negative":
            return styles.negativeArrow;
        case "cautionary":
            return styles.cautionaryArrow;
        default:
            return styles.defaultArrow;
    }
};
var mapArrowPositionToClass = function (position) {
    switch (position) {
        case "start":
            return styles.arrowPositionStart;
        case "end":
            return styles.arrowPositionEnd;
        case "center":
            return styles.arrowPositionCenter;
        default:
            return "";
    }
};
var mapArrowSideToClass = function (side) {
    switch (side) {
        case "top":
            return styles.arrowSideTop;
        default:
            return styles.arrowSideBottom;
    }
};
var mapSizeToClass = function (size) {
    switch (size) {
        case "large":
            return styles.large;
        default:
            return "";
    }
};
var mapLineVariant = function (singleLine) {
    if (singleLine === true) {
        return styles.singleLine;
    }
    else {
        return "";
    }
};
exports["default"] = Popover;
//# sourceMappingURL=Popover.js.map