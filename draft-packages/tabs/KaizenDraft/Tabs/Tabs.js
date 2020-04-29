"use strict";
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
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./styles.scss");
var Tabs = function (props) {
    var tabs = props.tabs, renderTab = props.renderTab;
    return (React.createElement("div", { className: styles.container }, tabs.map(function (t) {
        var _a;
        return renderTab ? (renderTab({
            tab: t,
            tabClassName: styles.tab,
            activeTabClassName: styles.activeTab,
            disabledTabClassName: styles.disabledTab
        })) : (React.createElement("a", { key: t.label, onClick: t.onClick, href: t.href, className: classnames_1["default"]((_a = {},
                _a[styles.tab] = !t.active && !t.disabled,
                _a[styles.activeTab] = t.active,
                _a[styles.disabledTab] = t.disabled,
                _a)) }, t.label));
    })));
};
exports["default"] = Tabs;
//# sourceMappingURL=Tabs.js.map