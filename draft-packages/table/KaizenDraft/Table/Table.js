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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var draft_1 = require("@kaizen/component-library/draft");
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./styles.scss");
var sortDescendingIcon = require("@kaizen/component-library/icons/sort-descending.icon.svg")["default"];
exports.TableContainer = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ className: styles.container, role: "table" }, otherProps), children));
};
exports.TableHeader = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ className: styles.header, role: "rowgroup" }, otherProps), children));
};
exports.TableHeaderRow = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ className: styles.headerRow, role: "rowheader" }, otherProps), children));
};
var ratioToPercent = function (width) {
    return width != null ? width * 100 + "%" : width;
};
exports.TableHeaderRowCell = function (_a) {
    var _b;
    var onClick = _a.onClick, width = _a.width, flex = _a.flex, labelText = _a.labelText, icon = _a.icon, checkable = _a.checkable, checkedStatus = _a.checkedStatus, onCheck = _a.onCheck, active = _a.active, otherProps = __rest(_a, ["onClick", "width", "flex", "labelText", "icon", "checkable", "checkedStatus", "onCheck", "active"]);
    var label = icon ? (React.createElement("span", { className: styles.headerRowCellIcon },
        React.createElement(component_library_1.Icon, { icon: icon, title: labelText }))) : (React.createElement("div", { className: styles.headerRowCellCheckboxContainer },
        checkable && (React.createElement("div", { className: styles.headerRowCellCheckbox },
            React.createElement(draft_1.Checkbox, { checkedStatus: checkedStatus, onCheck: onCheck }))),
        React.createElement(component_library_1.Text, { tag: "div", style: "label", inheritBaseline: true }, labelText)));
    var style = {
        width: ratioToPercent(width),
        flex: flex
    };
    return onClick ? (React.createElement("button", __assign({ style: style, className: classnames_1["default"](styles.headerRowCell, (_b = {}, _b[styles.active] = active, _b)), onClick: onClick, role: "columnheader" }, otherProps),
        label,
        active && React.createElement(component_library_1.Icon, { icon: sortDescendingIcon, role: "presentation" }))) : (React.createElement("div", __assign({ style: style, className: styles.headerRowCell, role: "columnheader" }, otherProps), label));
};
exports.TableCard = function (_a) {
    var _b;
    var children = _a.children, expanded = _a.expanded, _c = _a.expandedStyle, expandedStyle = _c === void 0 ? "well" : _c, onClick = _a.onClick, href = _a.href, _d = _a.forceHoverState, forceHoverState = _d === void 0 ? false : _d, otherProps = __rest(_a, ["children", "expanded", "expandedStyle", "onClick", "href", "forceHoverState"]);
    var className = classnames_1["default"](styles.card, (_b = {},
        _b[styles.expanded] = expanded,
        _b[styles[expandedStyle]] = expanded,
        _b[styles.hasHoverState] = forceHoverState || onClick != null || href != null,
        _b));
    return href != null ? (React.createElement("a", __assign({ href: href, className: className, onClick: onClick }, otherProps), children)) : onClick ? (React.createElement("button", __assign({ className: className, onClick: onClick }, otherProps), children)) : (React.createElement("div", __assign({ className: className }, otherProps), children));
};
exports.TableRow = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ className: styles.row, role: "row" }, otherProps), children));
};
exports.TableRowCell = function (_a) {
    var children = _a.children, width = _a.width, flex = _a.flex, href = _a.href, otherProps = __rest(_a, ["children", "width", "flex", "href"]);
    return href != null ? (React.createElement("a", __assign({ role: "cell", style: {
            width: ratioToPercent(width),
            flex: flex
        }, className: styles.rowCell, href: href }, otherProps), children)) : (React.createElement("div", __assign({ role: "cell", style: {
            width: ratioToPercent(width),
            flex: flex
        }, className: styles.rowCell }, otherProps), children));
};
//# sourceMappingURL=Table.js.map