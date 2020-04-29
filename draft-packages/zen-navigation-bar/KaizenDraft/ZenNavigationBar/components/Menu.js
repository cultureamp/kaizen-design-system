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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ZenOffCanvas_1 = require("@kaizen/component-library/draft/Kaizen/ZenOffCanvas");
var classnames_1 = __importDefault(require("classnames"));
var react_media_1 = __importDefault(require("react-media"));
var constants_1 = require("../constants");
var Dropdown_1 = __importDefault(require("./Dropdown"));
var Link_1 = __importDefault(require("./Link"));
var MenuGroup_1 = __importDefault(require("./MenuGroup"));
var arrowLeftIcon = require("@kaizen/component-library/icons/arrow-left.icon.svg")["default"];
var chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")["default"];
var styles = require("./Menu.module.scss");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootRef = React.createRef();
        _this.state = { open: false };
        _this.toggle = function (e) {
            var open = !_this.state.open;
            _this.setState({ open: open });
        };
        _this.clickDocument = function (e) {
            // We can't just stopPropagation of click events in the menu, because a
            // click in this menu may also need to dismiss another open menu.
            if (_this.state.open &&
                _this.rootRef.current &&
                !(e.target instanceof Node && _this.rootRef.current.contains(e.target))) {
                _this.toggle(e);
            }
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        var _a = this.props, active = _a.active, children = _a.children, automationId = _a.automationId, heading = _a.heading, mobileEnabled = _a.mobileEnabled, opaque = _a.opaque, small = _a.small, icon = _a.icon, items = _a.items, header = _a.header;
        return (React.createElement(react_media_1["default"], { query: constants_1.MOBILE_QUERY }, function (matches) {
            var _a;
            return mobileEnabled && matches ? (React.createElement(React.Fragment, null,
                React.createElement(ZenOffCanvas_1.OffCanvasContext.Consumer, null, function (_a) {
                    var toggleVisibleMenu = _a.toggleVisibleMenu;
                    return (React.createElement(Link_1["default"], { text: heading, href: "#", onClick: function () { return toggleVisibleMenu(heading); }, hasMenu: true, opaque: opaque }));
                }),
                _this.renderOffCanvas())) : (React.createElement("nav", { className: styles.root, ref: _this.rootRef },
                React.createElement("button", { className: classnames_1["default"](styles.button, (_a = {},
                        _a[styles.opaque] = opaque,
                        _a[styles.small] = small,
                        _a[styles.buttonLink] = !children,
                        _a[styles.linkText] = !!heading,
                        _a[styles.menuOpen] = _this.state.open,
                        _a[styles.active] = active,
                        _a)), onClick: _this.toggle, "aria-expanded": _this.state.open, "data-automation-id": automationId, onMouseDown: function (e) { return e.preventDefault(); } }, children ? (children) : (React.createElement(React.Fragment, null,
                    icon && (React.createElement("span", { className: styles.linkIcon },
                        React.createElement(component_library_1.Icon, { icon: icon, role: "presentation", title: heading + " icon" }))),
                    React.createElement("span", { className: styles.linkText }, heading),
                    React.createElement(component_library_1.Icon, { icon: chevronDownIcon, role: "presentation" })))),
                _this.state.open && React.createElement(Dropdown_1["default"], { items: items, header: header })));
        }));
    };
    Menu.prototype.renderOffCanvas = function () {
        var _a = this.props, items = _a.items, heading = _a.heading, onLinkClick = _a.onLinkClick;
        var links = items.map(function (item, index) {
            if ("url" in item) {
                return (React.createElement(Link_1["default"], { key: item.url, text: item.label, href: item.url, onClick: onLinkClick }));
            }
            else if ("title" in item) {
                return (React.createElement(MenuGroup_1["default"], __assign({ first: index === 0 }, item, { onLinkClick: onLinkClick, offCanvas: true })));
            }
        });
        return (React.createElement(ZenOffCanvas_1.ZenOffCanvas, { links: links, heading: heading ? heading : "Menu", headerComponent: this.renderBackButton(), menuId: heading }));
    };
    Menu.prototype.renderBackButton = function () {
        var _this = this;
        return (React.createElement(ZenOffCanvas_1.OffCanvasContext.Consumer, null, function (_a) {
            var toggleVisibleMenu = _a.toggleVisibleMenu;
            return (React.createElement(component_library_1.IconButton, { label: "Back", icon: arrowLeftIcon, onClick: function () { return toggleVisibleMenu(_this.props.heading); }, reversed: true }));
        }));
    };
    Menu.prototype.componentDidMount = function () {
        document.addEventListener("click", this.clickDocument);
    };
    Menu.prototype.componentWillUnmount = function () {
        document.removeEventListener("click", this.clickDocument);
    };
    Menu.displayName = "Menu";
    Menu.defaultProps = {
        items: [],
        active: false,
        mobileEnabled: true,
        small: false,
        opaque: false
    };
    return Menu;
}(React.Component));
exports["default"] = Menu;
//# sourceMappingURL=Menu.js.map