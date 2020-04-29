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
exports.CollapsibleGroup = function (_a) {
    var _b;
    var children = _a.children, separated = _a.separated, sticky = _a.sticky, noSectionPadding = _a.noSectionPadding, automationId = _a.automationId, lazyLoad = _a.lazyLoad, onToggle = _a.onToggle;
    return (React.createElement("div", { className: classnames_1["default"]((_b = {}, _b[styles.container] = !separated, _b)), "data-automation-id": automationId }, React.Children.map(children, function (collapsible) {
        return React.cloneElement(collapsible, {
            group: true,
            separated: separated,
            sticky: sticky,
            noSectionPadding: noSectionPadding,
            lazyLoad: lazyLoad,
            onToggle: onToggle
        });
    })));
};
exports["default"] = exports.CollapsibleGroup;
//# sourceMappingURL=CollapsibleGroup.js.map