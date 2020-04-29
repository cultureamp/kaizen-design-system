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
var configureIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")["default"];
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./GuidanceBlock.scss");
var closeIcon = require("@kaizen/component-library/icons/close.icon.svg")["default"];
var GuidanceBlock = /** @class */ (function (_super) {
    __extends(GuidanceBlock, _super);
    function GuidanceBlock(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hidden: false,
            removed: false
        };
        _this.containerRef = React.createRef();
        _this.dismissBanner = _this.dismissBanner.bind(_this);
        _this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
        return _this;
    }
    GuidanceBlock.prototype.dismissBanner = function () {
        this.setState({ hidden: true });
        this.props.onDismiss();
    };
    GuidanceBlock.prototype.onTransitionEnd = function (e) {
        // Be careful: this assumes the final CSS property to be animated is "margin-top".
        if (this.state.hidden && e.propertyName === "margin-top") {
            this.setState({ removed: true });
        }
    };
    GuidanceBlock.prototype.render = function () {
        if (this.state.removed) {
            return null;
        }
        return (React.createElement("div", { className: this.bannerClassName(), style: { marginTop: this.marginTop() }, ref: this.containerRef, onTransitionEnd: this.onTransitionEnd },
            React.createElement("div", { className: styles.iconWrapper },
                React.createElement("img", { src: this.props.img.src, alt: this.props.img.alt, height: "155px", width: "155px" })),
            React.createElement("div", { className: styles.descriptionContainer },
                React.createElement("div", { className: styles.headingWrapper },
                    React.createElement(component_library_1.Text, { inline: true, tag: "h3", style: "display" }, this.props.text.title)),
                React.createElement(component_library_1.Text, { tag: "p", style: "body" }, this.props.text.description)),
            React.createElement("div", { className: styles.buttonContainer },
                React.createElement(component_library_1.Button, { label: this.props.button.label, onClick: this.props.button.onClick, icon: configureIcon, iconPosition: "end" }),
                React.createElement(CancelButton, { onClick: this.dismissBanner }))));
    };
    GuidanceBlock.prototype.bannerClassName = function () {
        var _a;
        return classnames_1["default"](styles.banner, (_a = {},
            _a[styles.hidden] = this.state.hidden,
            _a));
    };
    GuidanceBlock.prototype.marginTop = function () {
        if (this.state.hidden && this.containerRef.current) {
            return -this.containerRef.current.clientHeight + "px";
        }
        return "0";
    };
    return GuidanceBlock;
}(React.Component));
var CancelButton = function (_a) {
    var onClick = _a.onClick;
    return (React.createElement("button", { className: styles.cancel, type: "button", onClick: onClick },
        React.createElement("span", null,
            React.createElement(component_library_1.Icon, { icon: closeIcon, role: "img", title: "close notification" }))));
};
exports["default"] = GuidanceBlock;
//# sourceMappingURL=GuidanceBlock.js.map