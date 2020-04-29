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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var addon_actions_1 = require("@storybook/addon-actions");
var react_1 = require("@testing-library/react");
var React = __importStar(require("react"));
var MenuList_1 = require("../../../components/MenuList");
var SplitButton_1 = __importDefault(require("./SplitButton"));
var editIcon = require("../../../icons/edit.icon.svg");
var duplicateIcon = require("../../../icons/duplicate.icon.svg");
afterEach(react_1.cleanup);
var defaultSplitButtonProps = {
    automationId: "SplitButtonAutomationId",
    disabled: false,
    label: "Edit",
    dropdownContent: (React.createElement(MenuList_1.MenuList, null,
        React.createElement(MenuList_1.MenuItem, { action: function (e) {
                e.preventDefault();
                addon_actions_1.action("Menu item 1 pressed")();
            }, icon: editIcon }, "Menu Item 1"),
        React.createElement(MenuList_1.MenuItem, { action: function (e) {
                e.preventDefault();
                addon_actions_1.action("Menu item 2 pressed")();
            }, icon: duplicateIcon }, "Menu Item 2"))),
    dropdownAltText: "Open menu"
};
var renderSplitButton = function (props) {
    var mergedSplitButtonProps = __assign(__assign({}, defaultSplitButtonProps), props);
    return react_1.render(React.createElement(SplitButton_1["default"], __assign({}, mergedSplitButtonProps)));
};
describe("<SplitButton />", function () {
    it("has the disabled attribute applied if the disabled prop is true", function () {
        var container = renderSplitButton(__assign(__assign({}, defaultSplitButtonProps), { disabled: true })).container;
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("should render a `data-automation-id` attribute", function () {
        var container = renderSplitButton().container;
        expect(container.querySelector("[data-automation-id=\"" + defaultSplitButtonProps.automationId + "\"]")).toBeTruthy();
    });
    it("renders a button element when there is no route supplied", function () {
        var container = renderSplitButton().container;
        expect(container.querySelector("button[data-automation-id=\"split-button-button\"]")).toBeTruthy();
    });
    it("renders an anchor element when a route is supplied", function () {
        var container = renderSplitButton(__assign(__assign({}, defaultSplitButtonProps), { href: "//example.com" })).container;
        expect(container.querySelector("a[data-automation-id=\"split-button-button\"]")).toBeTruthy();
    });
});
//# sourceMappingURL=SplitButton.spec.js.map