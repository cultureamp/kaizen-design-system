"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var styles = require("./Tooltip.scss");
var classnames_1 = __importDefault(require("classnames"));
var Tooltip = function (props) {
    var _a, _b, _c;
    return (React.createElement("div", { className: styles.tooltipWrap },
        props.children,
        React.createElement("div", { className: classnames_1["default"](styles.contentWrap, (_a = {},
                _a[styles.above] = props.position == "above",
                _a)) },
            React.createElement("div", { className: classnames_1["default"](styles.root, (_b = {},
                    _b[styles.below] = props.position == "below",
                    _b[styles.above] = props.position == "above",
                    _b), styles["default"]) },
                React.createElement("span", { className: styles.tooltipContent }, props.text)),
            React.createElement("div", { className: classnames_1["default"](styles.root, styles.shadow, (_c = {},
                    _c[styles.below] = props.position == "below",
                    _c[styles.above] = props.position == "above",
                    _c), styles["default"]) },
                React.createElement("span", { className: styles.tooltipContent }, props.text)))));
};
Tooltip.defaultProps = {
    position: "above"
};
exports["default"] = Tooltip;
//# sourceMappingURL=Tooltip.js.map