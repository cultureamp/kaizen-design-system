"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var emptyIcon = require("@kaizen/component-library/icons/empty.icon.svg")["default"];
var printIcon = require("@kaizen/component-library/icons/print.icon.svg")["default"];
var successIcon = require("@kaizen/component-library/icons/success.icon.svg")["default"];
var component_library_1 = require("@kaizen/component-library");
var styles = require("./VerticalProgressIndicator.module.scss");
/**
 * For showing a step in a list of steps.
 * Needs to be inside a position:relative element for absolute positioning to work properly.
 *
 * @param position - The position of this step in a list of steps i.e. is it at the start, middle or end
 * @param completion - Whether the step is completed, upcoming or a shade inbetween, current, or to-do
 */
exports.VerticalProgressIndicator = function (_a) {
    var position = _a.position, completion = _a.completion;
    var iconMap = {
        upcoming: emptyIcon,
        current: printIcon,
        completed: successIcon
    };
    var getIconClassName = function () {
        if (completion == "upcoming") {
            return styles.upcomingIcon;
        }
        else if (completion == "current-inactionable") {
            return styles.currentInactionableIcon;
        }
        else if (completion == "current-actionable") {
            return styles.currentActionableIcon;
        }
        else if (completion == "current-started") {
            return styles.currentStartedIcon;
        }
        else if (completion == "completed") {
            return styles.completedIcon;
        }
        else {
            return "";
        }
    };
    var renderTopLine = function (lineConfig) {
        if (lineConfig == "none") {
            return null;
        }
        else if (lineConfig == "grey") {
            return React.createElement("div", { className: styles.greyTopLine });
        }
        else if (lineConfig == "green") {
            return React.createElement("div", { className: styles.greenTopLine });
        }
    };
    var renderBottomLine = function (lineConfig) {
        if (lineConfig == "none") {
            return null;
        }
        else if (lineConfig == "grey") {
            return React.createElement("div", { className: styles.greyBottomLine });
        }
        else if (lineConfig == "green") {
            return React.createElement("div", { className: styles.greenBottomLine });
        }
    };
    var renderLines = function (_a) {
        var 
        // tslint:disable-next-line: no-shadowed-variable
        completion = _a.completion, 
        // tslint:disable-next-line: no-shadowed-variable
        position = _a.position;
        var top = "none";
        var bottom = "none";
        if (completion === "upcoming") {
            top = "grey";
            bottom = "grey";
        }
        else if (completion.match(/^current-/)) {
            top = "green";
            bottom = "grey";
        }
        else if (completion === "completed") {
            top = "green";
            bottom = "green";
        }
        if (position === "start") {
            top = "none";
        }
        else if (position === "end") {
            bottom = "none";
        }
        return (React.createElement(React.Fragment, null,
            renderTopLine(top),
            renderBottomLine(bottom)));
    };
    return (React.createElement("div", { className: styles.step },
        React.createElement("div", { className: styles.topLine }),
        React.createElement("div", { className: styles.bottomLine }),
        renderLines({ completion: completion, position: position }),
        React.createElement("div", { className: getIconClassName() },
            completion === "upcoming" && (React.createElement(component_library_1.Icon, { icon: emptyIcon, title: "Upcoming step", inheritSize: true })),
            completion === "current-inactionable" && (React.createElement(component_library_1.Icon, { icon: emptyIcon, title: "Next step", inheritSize: true })),
            completion === "current-actionable" && (React.createElement(component_library_1.Icon, { icon: emptyIcon, title: "This step", inheritSize: true })),
            completion === "current-started" && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: styles.dot }),
                React.createElement(component_library_1.Icon, { icon: emptyIcon, title: "This step", inheritSize: true }))),
            completion === "completed" && (React.createElement(component_library_1.Icon, { icon: successIcon, title: "Completed step", inheritSize: true })))));
};
//# sourceMappingURL=VerticalProgressIndicator.js.map