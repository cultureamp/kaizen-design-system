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
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var component_library_1 = require("@kaizen/component-library");
var information = require("@kaizen/component-library/icons/information.icon.svg")["default"];
var success = require("@kaizen/component-library/icons/success.icon.svg")["default"];
var exclamation = require("@kaizen/component-library/icons/exclamation.icon.svg")["default"];
var __1 = require("../");
var styles = require("./ConfirmationModal.scss");
var getIcon = function (type) {
    switch (type) {
        case "positive":
            return success;
        case "cautionary":
            return exclamation;
        default:
            return information;
    }
};
var ConfirmationModal = function (_a) {
    var _b;
    var isOpen = _a.isOpen, type = _a.type, title = _a.title, onConfirm = _a.onConfirm, onDismiss = _a.onDismiss, _c = _a.confirmLabel, confirmLabel = _c === void 0 ? "Confirm" : _c, _d = _a.dismissLabel, dismissLabel = _d === void 0 ? "Cancel" : _d, children = _a.children;
    return (React.createElement(__1.GenericModal, { isOpen: isOpen, onEscapeKeyup: onDismiss, onOutsideModalClick: onDismiss },
        React.createElement("div", { className: styles.modal },
            React.createElement(__1.ModalHeader, { unpadded: true, reversed: true, onDismiss: onDismiss },
                React.createElement("div", { className: classnames_1["default"](styles.header, (_b = {},
                        _b[styles.positiveHeader] = type === "positive",
                        _b[styles.informativeHeader] = type === "informative",
                        _b[styles.negativeHeader] = type === "negative",
                        _b[styles.cautionaryHeader] = type === "cautionary",
                        _b)) },
                    React.createElement("div", { className: styles.iconContainer },
                        React.createElement("svg", { className: styles.iconBackground },
                            React.createElement("circle", { cx: "75", cy: "75", r: "75" })),
                        React.createElement("div", { className: styles.icon },
                            React.createElement(component_library_1.Icon, { icon: getIcon(type), role: "presentation" }))),
                    React.createElement(__1.ModalAccessibleLabel, null,
                        React.createElement(component_library_1.Text, { tag: "h1", style: "zen-heading-1", inline: true }, title)))),
            React.createElement(__1.ModalBody, null,
                React.createElement(__1.ModalAccessibleDescription, null, children)),
            React.createElement(__1.ModalFooter, { actions: [
                    { label: confirmLabel, action: onConfirm },
                    { label: dismissLabel, action: onDismiss },
                ], appearance: type === "negative" ? "destructive" : "primary" }))));
};
exports["default"] = ConfirmationModal;
//# sourceMappingURL=ConfirmationModal.js.map