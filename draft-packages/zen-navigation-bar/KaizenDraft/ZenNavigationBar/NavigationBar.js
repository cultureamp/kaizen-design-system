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
var ZenOffCanvas_1 = require("@kaizen/component-library/draft/Kaizen/ZenOffCanvas");
var classnames_1 = __importDefault(require("classnames"));
var react_media_1 = __importDefault(require("react-media"));
var v4_1 = __importDefault(require("uuid/v4"));
var Badge_1 = require("./components/Badge");
var Link_1 = __importDefault(require("./components/Link"));
var Menu_1 = __importDefault(require("./components/Menu"));
var styles = require("./NavigationBar.module.scss");
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, _b = _a.colorScheme, colorScheme = _b === void 0 ? "cultureamp" : _b, headerComponent = _a.headerComponent, mobileMaxWidth = _a.mobileMaxWidth;
        return (React.createElement(react_media_1["default"], { query: "(max-width: " + mobileMaxWidth + "px)" }, function (matches) {
            return matches ? (React.createElement(ZenOffCanvas_1.ZenControlledOffCanvas, { headerComponent: headerComponent ? headerComponent.mobile : _this.renderBadge(), footerComponent: _this.props.footerComponent, links: children, heading: "Menu", menuId: "menu" })) : (React.createElement("header", { className: classnames_1["default"](styles.navigationBar, styles[colorScheme]) },
                headerComponent ? (React.createElement("span", { className: styles.headerSlot }, headerComponent.desktop)) : (_this.renderBadge()),
                _this.renderNav(children)));
        }));
    };
    NavigationBar.prototype.renderNav = function (children) {
        var _this = this;
        if (!children)
            return null;
        return (React.createElement("nav", { className: styles.links }, Object.keys(children).map(function (key) {
            return _this.renderNavSection(key, children[key]);
        })));
    };
    NavigationBar.prototype.renderNavSection = function (section, items) {
        var _a;
        var _this = this;
        return items.length > 0 ? (React.createElement("ul", { key: section + "-" + v4_1["default"](), className: classnames_1["default"]((_a = {},
                _a[styles.primary] = section === "primary",
                _a[styles.secondary] = section === "secondary",
                _a[styles.final] = section === "final",
                _a)) }, items.map(function (item) { return _this.renderNavItem(item, section); }))) : null;
    };
    NavigationBar.prototype.renderNavItem = function (link, section) {
        var _a;
        var linkProps = link.props;
        var isFinal = section === "final";
        var linkWithProps = __assign(__assign({}, link), { props: __assign(__assign({}, linkProps), { opaque: isFinal, small: isFinal }) });
        var key = "href" in linkProps ? linkProps.href : linkProps.heading;
        return (React.createElement("li", { key: key + "-" + v4_1["default"](), className: classnames_1["default"](styles.child, (_a = {},
                _a[styles.active] = linkProps.active,
                _a)) }, linkWithProps));
    };
    NavigationBar.prototype.renderBadge = function () {
        var _a = this.props, _b = _a.environment, environment = _b === void 0 ? "production" : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, _d = _a.badgeHref, badgeHref = _d === void 0 ? "/" : _d, _e = _a.colorScheme, colorScheme = _e === void 0 ? "kaizen" : _e;
        var badges = {
            production: Badge_1.ProductionBadge,
            staging: Badge_1.StagingBadge,
            test: Badge_1.TestBadge,
            local: Badge_1.LocalBadge
        };
        var Badge = badges[environment] || Badge_1.namedBadge(environment);
        return (React.createElement(Badge, { loading: loading, href: badgeHref, colorScheme: colorScheme }));
    };
    NavigationBar.displayName = "NavigationBar";
    NavigationBar.Link = Link_1["default"];
    NavigationBar.Menu = Menu_1["default"];
    NavigationBar.defaultProps = {
        environment: "production",
        loading: false,
        colorScheme: "cultureamp",
        badgeHref: "/",
        mobileMaxWidth: 767
    };
    return NavigationBar;
}(React.Component));
exports["default"] = NavigationBar;
//# sourceMappingURL=NavigationBar.js.map