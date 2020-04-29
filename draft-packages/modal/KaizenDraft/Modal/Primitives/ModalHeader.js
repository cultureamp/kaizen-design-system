"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var close = require("@kaizen/component-library/icons/close.icon.svg")["default"];
var GenericModalSection_1 = __importDefault(require("./GenericModalSection"));
var styles = require("./ModalHeader.scss");
var ModalHeader = /** @class */ (function (_super) {
    __extends(ModalHeader, _super);
    function ModalHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasRendered: false };
        return _this;
    }
    ModalHeader.prototype.componentDidMount = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.setState({ hasRendered: true }); });
    };
    ModalHeader.prototype.render = function () {
        var _a = this.props, unpadded = _a.unpadded, reversed = _a.reversed, onDismiss = _a.onDismiss, children = _a.children;
        var hasRendered = this.state.hasRendered;
        // The dismiss button in the header is the first focusable element in
        // the modal DOM so it would typically receive keyboard focus automatically
        // when the modal opens
        // For more natural behaviour, the keyboard focus shouldn't be moved
        // immediately to the dismiss button over other focusable elements in the
        // modal like the primary and secondary actions
        // So, remove the dismiss button from the tab ordering when the modal first
        // opens then restore it to the native tab ordering after rendering
        var disableDismissButtonFocus = !hasRendered;
        return (React.createElement(GenericModalSection_1["default"], { unpadded: unpadded },
            React.createElement("div", { className: styles.dismissButton },
                React.createElement(component_library_1.IconButton, { label: "Dismiss", icon: close, reversed: reversed, onClick: onDismiss, disableTabFocusAndIUnderstandTheAccessibilityImplications: disableDismissButtonFocus })),
            children));
    };
    return ModalHeader;
}(React.Component));
exports["default"] = ModalHeader;
//# sourceMappingURL=ModalHeader.js.map