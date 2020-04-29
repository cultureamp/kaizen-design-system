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
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = require("lodash");
var React = __importStar(require("react"));
var react_media_1 = __importDefault(require("react-media"));
var Icon_1 = __importDefault(require("@kaizen/component-library/components/Icon/Icon"));
var constants_1 = require("@kaizen/component-library/components/NavigationBar/constants");
var draft_1 = require("@kaizen/component-library/draft");
var backIcon = require("@kaizen/component-library/icons/arrow-backward.icon.svg")["default"];
var forwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")["default"];
var NavigationButtons_1 = __importDefault(require("./NavigationButtons"));
var styles = require("./TitleBlock.scss");
var COMPACT_NAVIGATION_SCROLL_THRESHOLD = 5;
var meetsCompactThreshold = function () {
    return (window.scrollY || window.pageYOffset) >= COMPACT_NAVIGATION_SCROLL_THRESHOLD;
};
var TitleBlock = /** @class */ (function (_super) {
    __extends(TitleBlock, _super);
    function TitleBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            useCompactSize: meetsCompactThreshold()
        };
        _this.updateScrollPosition = lodash_1.throttle(function () {
            _this.setState({ useCompactSize: meetsCompactThreshold() });
        }, 50);
        _this.renderTitle = function () {
            var title = _this.props.title;
            if (title !== undefined) {
                return (React.createElement("div", { "data-automation-id": "TitleBlock__Heading", className: styles.title }, title));
            }
        };
        _this.renderTag = function () {
            var surveyStatus = _this.props.surveyStatus;
            if (surveyStatus == undefined)
                return;
            var variant;
            if (surveyStatus.status === "draft") {
                variant = "statusDraft";
            }
            if (surveyStatus.status === "live") {
                variant = "statusLive";
            }
            return (React.createElement("div", { className: styles.tag },
                React.createElement(draft_1.Tag, { variant: variant }, surveyStatus.text)));
        };
        _this.renderSubtitle = function () {
            var subtitle = _this.props.subtitle;
            if (subtitle == undefined)
                return;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: styles.subtitle, "data-automation-id": "TitleBlock__Subtitle" }, subtitle),
                _this.renderTag()));
        };
        _this.renderBreadcrumb = function () {
            var _a = _this.props, breadcrumb = _a.breadcrumb, textDirection = _a.textDirection;
            if (breadcrumb == undefined)
                return;
            var icon = textDirection === "rtl" ? forwardIcon : backIcon;
            return (React.createElement("a", { href: breadcrumb.path, className: styles.breadcrumb, "data-automation-id": "TitleBlock__Breadcrumb" },
                React.createElement("div", { className: styles.circle },
                    React.createElement(Icon_1["default"], { icon: icon, role: "presentation" })),
                React.createElement("span", { className: styles.breadcrumbText }, breadcrumb.text)));
        };
        _this.renderNavigation = function () {
            var _a = _this.props, navigationButtons = _a.navigationButtons, reversed = _a.reversed;
            if (navigationButtons == undefined)
                return;
            return (React.createElement("div", { className: styles.navContainer, "data-automation-id": "TitleBlock__Navigation" },
                React.createElement("div", { className: styles.navButtonsContainer },
                    React.createElement(NavigationButtons_1["default"], { navigationButtons: navigationButtons, reversed: reversed }))));
        };
        return _this;
    }
    TitleBlock.prototype.componentDidMount = function () {
        if (this.props.sticky) {
            document.addEventListener("scroll", this.updateScrollPosition);
        }
    };
    TitleBlock.prototype.componentWillUnmount = function () {
        if (this.props.sticky) {
            document.removeEventListener("scroll", this.updateScrollPosition);
        }
    };
    TitleBlock.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, reversed = _b.reversed, reverseColor = _b.reverseColor, sticky = _b.sticky, stickyColor = _b.stickyColor, children = _b.children;
        var useCompactSize = this.state.useCompactSize;
        return (React.createElement("div", { className: classnames_1["default"](styles.titleBlockContainer, (_a = {},
                _a[styles.reversed] = reversed,
                _a[styles["reverseColor" + reverseColor]] = reverseColor,
                _a[styles.sticky] = sticky,
                _a[styles.compact] = useCompactSize,
                _a[styles["stickyColor" + stickyColor]] = useCompactSize && stickyColor,
                _a)) },
            React.createElement("div", { className: classnames_1["default"](styles.titleBlock), "data-automation-id": "TitleBlock__TitleBlock" },
                React.createElement("div", { className: styles.titleBlockInner },
                    this.renderBreadcrumb(),
                    React.createElement("div", { className: styles.leftContent },
                        React.createElement("div", { className: styles.titleContainer },
                            React.createElement("div", { className: styles.textContainer, "data-automation-id": "TitleBlock__Text" },
                                this.renderTitle(),
                                this.renderSubtitle())),
                        React.createElement(react_media_1["default"], { query: constants_1.MOBILE_QUERY }, function (matches) {
                            return !matches && (React.createElement(React.Fragment, null, _this.renderNavigation()));
                        })),
                    React.createElement("div", { className: styles.actionsContainer, "data-automation-id": "title-block--actions" }, children))),
            React.createElement(react_media_1["default"], { query: constants_1.MOBILE_QUERY }, function (matches) {
                return matches && (React.createElement(React.Fragment, null, _this.renderNavigation()));
            })));
    };
    TitleBlock.defaultProps = {
        textDirection: "ltr"
    };
    return TitleBlock;
}(React.Component));
exports["default"] = TitleBlock;
//# sourceMappingURL=TitleBlock.js.map