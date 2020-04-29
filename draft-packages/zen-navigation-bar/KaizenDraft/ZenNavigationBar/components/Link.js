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
var component_library_1 = require("@kaizen/component-library");
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var context_1 = require("../context");
var arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")["default"];
var styles = require("./Link.module.scss");
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            var _a, _b;
            var handleNavigationChange = _this.context.handleNavigationChange;
            var _c = _this.props, badge = _c.badge, icon = _c.icon, text = _c.text, href = _c.href, active = _c.active, id = _c.id, iconOnly = _c.iconOnly, target = _c.target, hasMenu = _c.hasMenu, opaque = _c.opaque, onClick = _c.onClick, small = _c.small, menuOpen = _c.menuOpen;
            return (React.createElement("a", __assign({ className: classnames_1["default"](styles.link, (_a = {},
                    _a[styles.active] = active,
                    _a[styles.containsText] = !!text,
                    _a[styles.opaque] = opaque,
                    _a[styles.small] = small,
                    _a[styles.menuOpen] = hasMenu && menuOpen,
                    _a)), tabIndex: 0, onClick: function (event) {
                    onClick && onClick(event);
                    handleNavigationChange && handleNavigationChange(event);
                } }, { href: href, id: id, target: target }),
                icon && (React.createElement("span", { className: styles.linkIcon },
                    React.createElement(component_library_1.Icon, { icon: icon, role: iconOnly ? "img" : "presentation", title: iconOnly ? text : undefined }))),
                text && !(icon && iconOnly) && (React.createElement("span", { className: styles.linkText },
                    text,
                    badge && (React.createElement("span", { className: classnames_1["default"](styles.badge, (_b = {},
                            _b[styles.badgeNotification] = badge.kind === "notification",
                            _b[styles.badgeNew] = badge.kind === "new",
                            _b)) }, badge.text)))),
                hasMenu && (React.createElement("span", { className: styles.menuIcon },
                    React.createElement(component_library_1.Icon, { icon: arrowForwardIcon, role: "presentation" })))));
        };
        return _this;
    }
    Link.displayName = "Link";
    Link.contextType = context_1.LinkClickContext;
    Link.defaultProps = {
        iconOnly: false,
        active: false,
        opaque: false,
        small: false,
        "new": false,
        target: "_self"
    };
    return Link;
}(React.PureComponent));
exports["default"] = Link;
//# sourceMappingURL=Link.js.map