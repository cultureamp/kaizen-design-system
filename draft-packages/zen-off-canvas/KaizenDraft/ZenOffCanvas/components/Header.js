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
var closeIcon = require("@kaizen/component-library/icons/close.icon.svg")["default"];
var IconButton_1 = __importDefault(require("@kaizen/component-library/components/Button/IconButton"));
var styles = require("./Header.module.scss");
var Header = function (_a) {
    var leftComponent = _a.leftComponent, onClose = _a.onClose, heading = _a.heading;
    return (React.createElement("div", { className: styles.root },
        leftComponent,
        React.createElement("span", { className: styles.heading }, heading),
        React.createElement(IconButton_1["default"], { label: "Close", icon: closeIcon, onClick: onClose, reversed: true })));
};
exports["default"] = Header;
//# sourceMappingURL=Header.js.map