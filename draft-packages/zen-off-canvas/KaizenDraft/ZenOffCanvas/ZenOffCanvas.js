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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var classnames_1 = __importDefault(require("classnames"));
var Header_1 = __importDefault(require("./components/Header"));
var Menu_1 = __importDefault(require("./components/Menu"));
var styles = require("./OffCanvas.module.scss");
exports.OffCanvasContext = React.createContext({
    visibleMenus: [],
    toggleVisibleMenu: function (menuId) { return undefined; },
    resetVisibleMenus: function () { return undefined; }
});
var ZenOffCanvas = /** @class */ (function (_super) {
    __extends(ZenOffCanvas, _super);
    function ZenOffCanvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZenOffCanvas.prototype.render = function () {
        var _a = this.props, menuId = _a.menuId, headerComponent = _a.headerComponent, heading = _a.heading, links = _a.links, footerComponent = _a.footerComponent;
        return (React.createElement(exports.OffCanvasContext.Consumer, null, function (_a) {
            var _b;
            var visibleMenus = _a.visibleMenus, resetVisibleMenus = _a.resetVisibleMenus;
            return (React.createElement("div", { className: classnames_1["default"](styles.root, (_b = {},
                    _b[styles.active] = visibleMenus.includes(menuId),
                    _b)) },
                React.createElement(Header_1["default"], { onClose: resetVisibleMenus, leftComponent: headerComponent, heading: heading }),
                React.createElement("nav", { className: styles.links }, links &&
                    Object.keys(links).map(function (section) { return (React.createElement(Menu_1["default"], { section: section, link: links[section] })); })),
                footerComponent));
        }));
    };
    ZenOffCanvas.defaultProps = {
        withTrigger: false
    };
    return ZenOffCanvas;
}(React.Component));
exports.ZenOffCanvas = ZenOffCanvas;
var withContextProvider = function (Component) {
    // tslint:disable-next-line: max-classes-per-file
    return /** @class */ (function (_super) {
        __extends(OffCanvasWithContextProvider, _super);
        function OffCanvasWithContextProvider(props) {
            var _this = _super.call(this, props) || this;
            _this.toggleMenu = function (menuId) {
                return _this.setState({
                    visibleMenus: _this.state.visibleMenus.includes(menuId)
                        ? _this.state.visibleMenus.filter(function (item) { return item !== menuId; })
                        : __spreadArrays(_this.state.visibleMenus, [menuId])
                });
            };
            _this.resetMenu = function () { return _this.setState({ visibleMenus: [] }); };
            _this.state = {
                visibleMenus: []
            };
            return _this;
        }
        OffCanvasWithContextProvider.prototype.render = function () {
            return (React.createElement(exports.OffCanvasContext.Provider, { value: __assign(__assign({}, this.state), { toggleVisibleMenu: this.toggleMenu, resetVisibleMenus: this.resetMenu }) },
                React.createElement(Component, __assign({}, this.props))));
        };
        return OffCanvasWithContextProvider;
    }(React.Component));
};
var withTrigger = function (Component) {
    // tslint:disable-next-line: max-classes-per-file
    return /** @class */ (function (_super) {
        __extends(OffCanvasWithTrigger, _super);
        function OffCanvasWithTrigger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OffCanvasWithTrigger.prototype.render = function () {
            var _this = this;
            return (React.createElement(exports.OffCanvasContext.Consumer, null, function (_a) {
                var toggleVisibleMenu = _a.toggleVisibleMenu;
                return (React.createElement(React.Fragment, null,
                    React.createElement("button", { className: styles.trigger, onClick: function () { return toggleVisibleMenu(_this.props.menuId); } },
                        React.createElement("span", { className: styles.hamburger })),
                    React.createElement(Component, __assign({}, _this.props))));
            }));
        };
        return OffCanvasWithTrigger;
    }(React.Component));
};
exports["default"] = withContextProvider(withTrigger(ZenOffCanvas));
//# sourceMappingURL=ZenOffCanvas.js.map