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
var actionIllustration = require("./illustrations/action.png");
var informativeIllustration = require("./illustrations/informative.png");
var negativeIllustration = require("./illustrations/negative.png");
var neutralIllustration = require("./illustrations/neutral.png");
var positiveIllustration = require("./illustrations/positive.png");
var styles = require("./styles.scss");
var illustrations = {
    positive: positiveIllustration,
    neutral: neutralIllustration,
    negative: negativeIllustration,
    informative: informativeIllustration,
    action: actionIllustration
};
var EmptyState = function (_a) {
    var _b, _c;
    var id = _a.id, automationId = _a.automationId, _d = _a.illustrationType, illustrationType = _d === void 0 ? "informative" : _d, _e = _a.layoutContext, layoutContext = _e === void 0 ? "sidebarAndContent" : _e, headingText = _a.headingText, bodyText = _a.bodyText, children = _a.children, straightCorners = _a.straightCorners, useZenStyles = _a.useZenStyles;
    return (React.createElement("div", { className: classnames_1["default"]([
            styles.container,
            styles[layoutContext],
            (_b = {}, _b[styles.straightCorners] = straightCorners, _b),
        ]), id: id, "data-automation-id": automationId },
        React.createElement("div", { className: styles.illustrationSide },
            React.createElement("img", { src: illustrations[illustrationType], className: styles.illustration })),
        React.createElement("div", { className: classnames_1["default"]([styles.textSide, (_c = {}, _c[styles.zen] = useZenStyles, _c)]) },
            React.createElement("div", { className: styles.textSideInner },
                React.createElement("div", { className: styles.heading }, headingText),
                React.createElement("div", { className: styles.description }, bodyText),
                children))));
};
exports["default"] = EmptyState;
//# sourceMappingURL=EmptyState.js.map