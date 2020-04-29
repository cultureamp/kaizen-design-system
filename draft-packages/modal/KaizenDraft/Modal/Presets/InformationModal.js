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
var styles = require("./InformationModal.scss");
var InformationModal = function (_a) {
    var isOpen = _a.isOpen, title = _a.title, onConfirm = _a.onConfirm, onDismiss = _a.onDismiss, _b = _a.confirmLabel, confirmLabel = _b === void 0 ? "Confirm" : _b, renderBackground = _a.renderBackground, children = _a.children;
    return (React.createElement(__1.GenericModal, { isOpen: isOpen, onEscapeKeyup: onDismiss, onOutsideModalClick: onDismiss },
        React.createElement("div", { className: styles.modal },
            renderBackground && renderBackground(),
            React.createElement(__1.ModalHeader, { unpadded: true, onDismiss: onDismiss },
                React.createElement("div", { className: styles.header },
                    React.createElement(__1.ModalAccessibleLabel, null,
                        React.createElement(component_library_1.Text, { tag: "h1", style: "zen-heading-2", inline: true }, title)))),
            React.createElement(__1.ModalBody, { unpadded: true },
                React.createElement("div", { className: onConfirm == null ? styles.bodyWithoutFooter : styles.body },
                    React.createElement("div", { className: styles.content }, children))),
            onConfirm != null && (React.createElement(__1.ModalFooter, { actions: [{ label: confirmLabel, action: onConfirm }], appearance: "primary" })))));
};
exports["default"] = InformationModal;
//# sourceMappingURL=InformationModal.js.map