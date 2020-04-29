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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styles = require("./styles.scss");
exports.calculateMenuTop = function (buttonsBoundingRect, menuBoundingRect, viewportHeight) {
    // Used to hide the border of the buttonsContainer class
    var borderRadiusBuffer = 2;
    // If there's not enough room to show the menu below the split buttons,
    // but enough room to show it above...
    if (buttonsBoundingRect.bottom + menuBoundingRect.height > viewportHeight &&
        menuBoundingRect.height <= buttonsBoundingRect.top) {
        // Show menu above the split buttons
        return -menuBoundingRect.height + borderRadiusBuffer;
    }
    // Regular behaviour, show menu below the split buttons
    return buttonsBoundingRect.height - borderRadiusBuffer;
};
var DropdownMenu = /** @class */ (function (_super) {
    __extends(DropdownMenu, _super);
    function DropdownMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDocumentClick = function (e) {
            if (_this.menuRef &&
                _this.menuRef.current &&
                e.target instanceof Node &&
                !_this.menuRef.current.contains(e.target)) {
                _this.props.hideDropdownMenu();
            }
        };
        _this.handleDocumentResize = function () {
            _this.props.hideDropdownMenu();
        };
        _this.menuRef = react_1["default"].createRef();
        return _this;
    }
    DropdownMenu.prototype.componentDidMount = function () {
        document.addEventListener("click", this.handleDocumentClick, false);
        window.addEventListener("resize", this.handleDocumentResize, false);
        this.positionMenu();
    };
    DropdownMenu.prototype.componentWillUnmount = function () {
        document.removeEventListener("click", this.handleDocumentClick, false);
        window.removeEventListener("resize", this.handleDocumentResize, false);
    };
    DropdownMenu.prototype.positionMenu = function () {
        var buttonsBoundingRect = this.props.buttonsBoundingRect;
        var menu = this.menuRef && this.menuRef.current;
        if (!buttonsBoundingRect || !menu) {
            return;
        }
        var menuBoundingRect = menu.getBoundingClientRect();
        menu.style.top = exports.calculateMenuTop(buttonsBoundingRect, menuBoundingRect, window.innerHeight) + "px";
    };
    DropdownMenu.prototype.render = function () {
        var props = this.props;
        return (react_1["default"].createElement("div", { className: styles.menuContainer, ref: this.menuRef, onClick: function () { return props.hideDropdownMenu(); } }, props.children));
    };
    DropdownMenu.displayName = "DropdownMenu";
    DropdownMenu.defaultProps = {
        dir: "ltr"
    };
    return DropdownMenu;
}(react_1["default"].Component));
exports["default"] = DropdownMenu;
//# sourceMappingURL=DropdownMenu.js.map