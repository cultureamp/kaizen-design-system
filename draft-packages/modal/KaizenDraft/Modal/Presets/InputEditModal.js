"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var component_library_1 = require("@kaizen/component-library");
var __1 = require("../");
var styles = require("./InputEditModal.scss");
var InputEditModal = function (_a) {
    var isOpen = _a.isOpen, type = _a.type, title = _a.title, onSubmit = _a.onSubmit, onDismiss = _a.onDismiss, _b = _a.localeDirection, localeDirection = _b === void 0 ? "ltr" : _b, _c = _a.submitLabel, submitLabel = _c === void 0 ? "Submit" : _c, _d = _a.dismissLabel, dismissLabel = _d === void 0 ? "Cancel" : _d, children = _a.children, _e = _a.submitDisabled, submitDisabled = _e === void 0 ? false : _e;
    return (React.createElement(__1.GenericModal, { isOpen: isOpen, onEscapeKeyup: onDismiss, onOutsideModalClick: onDismiss },
        React.createElement("div", { className: styles.modal, dir: localeDirection },
            React.createElement(__1.ModalHeader, { unpadded: true, onDismiss: onDismiss },
                React.createElement("div", { className: styles.header },
                    React.createElement(__1.ModalAccessibleLabel, null,
                        React.createElement(component_library_1.Text, { tag: "h1", style: "zen-heading-3", inline: true }, title)))),
            React.createElement(__1.ModalBody, { unpadded: true },
                React.createElement("div", { className: styles.body, dir: localeDirection }, children)),
            React.createElement(__1.ModalFooter, { actions: [
                    { label: submitLabel, action: onSubmit, disabled: submitDisabled },
                    { label: dismissLabel, action: onDismiss },
                ], appearance: type === "negative" ? "destructive" : "primary" }))));
};
exports["default"] = InputEditModal;
//# sourceMappingURL=InputEditModal.js.map