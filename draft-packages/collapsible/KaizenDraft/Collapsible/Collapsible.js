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
var react_animate_height_1 = __importDefault(require("react-animate-height"));
var styles = require("./styles.scss");
var chevronUp = require("@kaizen/component-library/icons/chevron-up.icon.svg")["default"];
var chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")["default"];
var Collapsible = /** @class */ (function (_super) {
    __extends(Collapsible, _super);
    function Collapsible() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: !!_this.props.open
        };
        _this.getOpen = function () {
            return _this.props.controlled ? _this.props.open : _this.state.open;
        };
        _this.handleClick = function () {
            var _a = _this.props, onToggle = _a.onToggle, id = _a.id, controlled = _a.controlled;
            var open = _this.getOpen();
            onToggle && onToggle(!open, id);
            if (!controlled) {
                _this.setState({
                    open: !open
                });
            }
        };
        return _this;
    }
    Collapsible.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, id = _d.id, group = _d.group, separated = _d.separated, sticky = _d.sticky, noSectionPadding = _d.noSectionPadding, title = _d.title, renderHeader = _d.renderHeader, automationId = _d.automationId, children = _d.children, lazyLoad = _d.lazyLoad;
        var buttonId = this.props.id + "-button";
        var sectionId = this.props.id + "-section";
        var open = this.getOpen();
        return (React.createElement("div", { className: classnames_1["default"]((_a = {},
                _a[styles.container] = !group || separated,
                _a[styles.groupItem] = group && !separated,
                _a[styles.separated] = separated,
                _a)), "data-automation-id": automationId || "collapsible-container-" + id },
            React.createElement("button", { id: buttonId, className: classnames_1["default"](styles.button, (_b = {},
                    _b[styles.open] = open,
                    _b[styles.sticky] = sticky,
                    _b)), style: sticky && { top: sticky.top }, onClick: this.handleClick, "aria-expanded": open, "aria-controls": sectionId, "data-automation-id": "collapsible-button-" + id },
                renderHeader && renderHeader(title),
                !renderHeader && (React.createElement("div", { className: styles.title, "data-automation-id": "collapsible-button-title-" + id },
                    React.createElement(component_library_1.Text, { tag: "span", style: "heading", inheritBaseline: true }, title))),
                React.createElement("div", null,
                    React.createElement(component_library_1.Icon, { icon: open ? chevronUp : chevronDown, role: "presentation" }))),
            (!lazyLoad || open) && (React.createElement(react_animate_height_1["default"], { height: open ? "auto" : 0, "data-automation-id": "collapsible-section-" + id },
                React.createElement("div", { className: classnames_1["default"](styles.section, (_c = {},
                        _c[styles.noPadding] = noSectionPadding,
                        _c)), role: "region", "aria-labelledby": buttonId }, children)))));
    };
    return Collapsible;
}(React.Component));
exports["default"] = Collapsible;
//# sourceMappingURL=Collapsible.js.map