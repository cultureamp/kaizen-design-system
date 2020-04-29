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
var react_dom_1 = require("react-dom");
var react_focus_lock_1 = __importDefault(require("react-focus-lock"));
var CSSTransition = require("react-transition-group").CSSTransition;
var console_1 = require("@kaizen/component-library/util/console");
var constants_1 = require("./constants");
var styles = require("./GenericModal.scss");
var MODAL_TRANSITION_TIMEOUT = 350;
var GenericModal = /** @class */ (function (_super) {
    __extends(GenericModal, _super);
    function GenericModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollLayer = null;
        _this.modalLayer = null;
        _this.escapeKeyHandler = function (event) {
            if (event.key === "Escape" ||
                event.key === "Esc" // IE11
            )
                _this.props.onEscapeKeyup && _this.props.onEscapeKeyup(event);
        };
        _this.outsideModalClickHandler = function (event) {
            if (event.target === _this.scrollLayer || event.target === _this.modalLayer) {
                _this.props.onOutsideModalClick && _this.props.onOutsideModalClick(event);
            }
        };
        return _this;
    }
    GenericModal.prototype.componentDidMount = function () {
        if (this.props.isOpen)
            this.onOpen();
    };
    GenericModal.prototype.componentDidUpdate = function (prevProps) {
        var hasJustOpened = !prevProps.isOpen && this.props.isOpen;
        var hasJustClosed = prevProps.isOpen && !this.props.isOpen;
        if (hasJustOpened)
            this.onOpen();
        if (hasJustClosed)
            this.onClose();
    };
    GenericModal.prototype.componentWillUnmount = function () {
        this.onClose();
    };
    GenericModal.prototype.onOpen = function () {
        this.addEventHandlers();
        this.preventBodyScroll();
        this.ensureAccessiblityIsMet();
        this.scrollModalToTop();
    };
    GenericModal.prototype.onClose = function () {
        this.removeEventHandlers();
        this.restoreBodyScroll();
    };
    GenericModal.prototype.addEventHandlers = function () {
        this.props.onEscapeKeyup &&
            document.addEventListener("keyup", this.escapeKeyHandler);
    };
    GenericModal.prototype.removeEventHandlers = function () {
        this.props.onEscapeKeyup &&
            document.removeEventListener("keyup", this.escapeKeyHandler);
    };
    GenericModal.prototype.preventBodyScroll = function () {
        var _a;
        var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
        (_a = document.documentElement.classList).add.apply(_a, [styles.unscrollable, hasScrollbar && styles.pseudoScrollbar]);
    };
    GenericModal.prototype.restoreBodyScroll = function () {
        document.documentElement.classList.remove(styles.unscrollable, styles.pseudoScrollbar);
    };
    GenericModal.prototype.ensureAccessiblityIsMet = function () {
        if (!this.modalLayer)
            return;
        // Ensure that consumers have provided an element that labels the modal
        // to meet ARIA accessibility guidelines.
        if (!document.getElementById(constants_1.ID_LABELLEDBY)) {
            console_1.warn("When using the Modal component, you must provide a label for the modal.\n        Make sure you have a <ModalAccessibleLabel /> component with content that labels the modal.");
        }
    };
    GenericModal.prototype.scrollModalToTop = function () {
        var _this = this;
        // If we have a really long modal, the autofocus could land on an element down below
        // causing the modal to scroll down and skipping over the content near the modal's top.
        // Ensure that when the modal opens, we are at the top of its content.
        requestAnimationFrame(function () {
            if (!_this.scrollLayer)
                return;
            _this.scrollLayer.scrollTop = 0;
        });
    };
    GenericModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, children = _a.children, _b = _a.focusLockDisabled, focusLockDisabled = _b === void 0 ? false : _b;
        return react_dom_1.createPortal(React.createElement(CSSTransition, { "in": isOpen, timeout: MODAL_TRANSITION_TIMEOUT, classNames: "animating", appear: true, unmountOnExit: true },
            React.createElement("div", null,
                React.createElement(react_focus_lock_1["default"], { disabled: focusLockDisabled, returnFocus: true },
                    React.createElement("div", { className: styles.backdropLayer }),
                    React.createElement("div", { className: styles.scrollLayer, ref: function (scrollLayer) { return (_this.scrollLayer = scrollLayer); }, onClick: this.props.onOutsideModalClick && this.outsideModalClickHandler },
                        React.createElement("div", { role: "dialog", "aria-labelledby": constants_1.ID_LABELLEDBY, "aria-describedby": constants_1.ID_DESCRIBEDBY, className: styles.modalLayer, ref: function (modalLayer) { return (_this.modalLayer = modalLayer); } }, children))))), document.body);
    };
    return GenericModal;
}(React.Component));
exports["default"] = GenericModal;
//# sourceMappingURL=GenericModal.js.map