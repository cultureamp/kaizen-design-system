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
var component_library_1 = require("@kaizen/component-library");
var caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")["default"];
var spinnerIcon = require("@kaizen/component-library/icons/spinner.icon.svg")["default"];
var caLogo = require("../illustrations/ca-logo.svg")["default"];
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./Badge.module.scss");
var renderProductionBadge = function (props) {
    if (props.colorScheme === "zen") {
        return React.createElement(component_library_1.Icon, { icon: caLogo, title: "Culture Amp" });
    }
    else {
        return React.createElement(component_library_1.Icon, { icon: caMonogramIcon, title: "Culture Amp" });
    }
};
exports.ProductionBadge = function (props) { return (React.createElement("div", { className: classnames_1["default"](styles.badge, styles[props.colorScheme]) },
    React.createElement("a", { href: props.href }, props.loading ? (React.createElement(component_library_1.Icon, { icon: spinnerIcon, title: "loading\u2026" })) : (renderProductionBadge(props))))); };
exports.ProductionBadge.displayName = "ProductionBadge";
exports.StagingBadge = function (props) { return (React.createElement(MonogramBadge, { envClass: styles.staging, monogram: "staging", loading: props.loading, href: props.href, colorScheme: props.colorScheme })); };
exports.StagingBadge.displayName = "StagingBadge";
exports.TestBadge = function (props) { return (React.createElement(MonogramBadge, { envClass: styles.test, monogram: "test", loading: props.loading, href: props.href, colorScheme: props.colorScheme })); };
exports.TestBadge.displayName = "TestBadge";
exports.LocalBadge = function (props) { return (React.createElement(MonogramBadge, { envClass: styles.local, monogram: "local", loading: props.loading, href: props.href, colorScheme: props.colorScheme })); };
exports.LocalBadge.displayName = "LocalBadge";
exports.namedBadge = function (environment) { return function (props) { return (React.createElement(MonogramBadge, { envClass: styles.named, monogram: environment, loading: props.loading, href: props.href, colorScheme: props.colorScheme })); }; };
exports.namedBadge.displayName = "namedBadge";
var MonogramBadge = function (props) { return (React.createElement("div", { className: classnames_1["default"](styles.badge, props.envClass) },
    React.createElement("a", { href: props.href, "aria-live": "polite" }, props.loading ? (React.createElement(component_library_1.Icon, { icon: spinnerIcon, title: "loading" })) : (React.createElement("span", { "aria-label": props.monogram }, props.monogram.substr(0, 2)))))); };
MonogramBadge.displayName = "MonogramBadge";
//# sourceMappingURL=Badge.js.map