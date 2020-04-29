"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var component_library_1 = require("@kaizen/component-library");
var React = __importStar(require("react"));
var styles = require("./VerticalProgressStep.module.scss");
var VerticalProgressIndicator_1 = require("./VerticalProgressIndicator");
var CompletedStep = function (props) {
    return (React.createElement("div", { className: styles.step },
        React.createElement(VerticalProgressIndicator_1.VerticalProgressIndicator, { position: props.position, completion: "completed" }),
        React.createElement("div", { className: styles.content },
            React.createElement(component_library_1.Text, { tag: "h3", style: "label" }, props.name),
            props.children)));
};
var CurrentStep = function (props) {
    var toCompletion = function (status) {
        switch (status) {
            case "inactionable":
                return "current-inactionable";
            case "actionable":
                return "current-actionable";
            case "started":
                return "current-started";
        }
    };
    var step = (React.createElement("div", { className: styles.step },
        React.createElement(VerticalProgressIndicator_1.VerticalProgressIndicator, { position: props.position, completion: toCompletion(props.status) }),
        React.createElement("div", { className: styles.content },
            React.createElement(component_library_1.Text, { tag: "h3", style: "label" }, props.name),
            props.children)));
    if (props.status === "actionable") {
        return (React.createElement("button", { className: styles.button, type: "button", onClick: function () {
                props.onClick && props.onClick();
            } },
            React.createElement("div", { className: styles.step },
                React.createElement(VerticalProgressIndicator_1.VerticalProgressIndicator, { position: props.position, completion: toCompletion(props.status) }),
                React.createElement("div", { className: styles.content },
                    React.createElement(component_library_1.Text, { tag: "h3", style: "label" },
                        React.createElement("span", { className: styles.actionable }, props.name)),
                    props.children))));
    }
    else {
        return (React.createElement("div", { className: styles.step },
            React.createElement(VerticalProgressIndicator_1.VerticalProgressIndicator, { position: props.position, completion: toCompletion(props.status) }),
            React.createElement("div", { className: styles.content },
                React.createElement(component_library_1.Text, { tag: "h3", style: "label" }, props.name),
                props.children)));
    }
};
var UpcomingStep = function (props) {
    return (React.createElement("div", { className: styles.step },
        React.createElement(VerticalProgressIndicator_1.VerticalProgressIndicator, { position: props.position, completion: "upcoming" }),
        React.createElement("div", { className: styles.content },
            React.createElement(component_library_1.Text, { tag: "h3", style: "label" }, props.name),
            props.children)));
};
exports["default"] = { CompletedStep: CompletedStep, CurrentStep: CurrentStep, UpcomingStep: UpcomingStep };
//# sourceMappingURL=VerticalProgressStep.js.map