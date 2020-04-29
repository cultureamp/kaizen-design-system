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
var styles = require("./NavigationButton.scss");
var titleblockStyles = require("./TitleBlock.scss");
var classnames_1 = __importDefault(require("classnames"));
var NavigationButtons = function (props) {
    return (React.createElement(React.Fragment, null, props.navigationButtons.map(function (b) {
        var _a;
        return (React.createElement("a", { className: classnames_1["default"]((_a = {},
                _a[styles.reversed] = props.reversed,
                _a[styles.button] = !b.active,
                _a[styles.activeButton] = b.active,
                _a)), href: b.path, key: b.buttonText }, b.buttonText));
    })));
};
NavigationButtons.defaultProps = {
    reversed: false
};
NavigationButtons.displayName = "NavigationButtons";
exports["default"] = NavigationButtons;
//# sourceMappingURL=NavigationButtons.js.map