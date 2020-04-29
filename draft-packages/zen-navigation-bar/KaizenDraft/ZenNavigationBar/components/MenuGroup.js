"use strict";
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
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Link_1 = __importDefault(require("./Link"));
var MenuItem_1 = __importDefault(require("./MenuItem"));
var styles = require("./MenuGroup.module.scss");
var MenuGroup = function (_a) {
    var title = _a.title, items = _a.items, _b = _a.first, first = _b === void 0 ? false : _b, offCanvas = _a.offCanvas, onLinkClick = _a.onLinkClick;
    var renderOffCanvasMenuItem = function (item) { return (react_1["default"].createElement(Link_1["default"], { key: item.url, text: item.label, href: item.url, onClick: onLinkClick })); };
    var renderOffCanvasMenuGroup = function () {
        var _a;
        return (react_1["default"].createElement("ul", { className: classnames_1["default"](styles.container, (_a = {},
                _a[styles.offCanvas] = true,
                _a[styles.firstMenuItem] = first,
                _a)) },
            react_1["default"].createElement("h4", { className: styles.title }, title),
            items.map(renderOffCanvasMenuItem)));
    };
    var renderMenuGroup = function () { return (react_1["default"].createElement("li", { className: styles.container },
        react_1["default"].createElement("h4", { className: styles.title }, title),
        items.map(function (item) { return (react_1["default"].createElement(MenuItem_1["default"], __assign({}, item, { onLinkClick: onLinkClick }))); }))); };
    return offCanvas ? renderOffCanvasMenuGroup() : renderMenuGroup();
};
exports["default"] = MenuGroup;
//# sourceMappingURL=MenuGroup.js.map