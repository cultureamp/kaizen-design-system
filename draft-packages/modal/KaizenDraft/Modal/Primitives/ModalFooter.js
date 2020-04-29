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
var component_library_1 = require("@kaizen/component-library");
var GenericModalSection_1 = __importDefault(require("./GenericModalSection"));
var styles = require("./ModalFooter.scss");
var ModalFooter = function (props) {
    var unpadded = props.unpadded, actions = props.actions, _a = props.appearance, appearance = _a === void 0 ? "primary" : _a;
    return (React.createElement(GenericModalSection_1["default"], { unpadded: unpadded },
        React.createElement("div", { className: styles.actions }, actions.map(function (a, index) { return (React.createElement("div", { className: styles.actionButton, key: a.label },
            React.createElement(component_library_1.Button, { type: "button", icon: a.icon, label: a.label, onClick: a.action, primary: index === 0 && appearance === "primary", destructive: index === 0 && appearance === "destructive", secondary: index > 0, disabled: a.disabled }))); }))));
};
exports["default"] = ModalFooter;
//# sourceMappingURL=ModalFooter.js.map