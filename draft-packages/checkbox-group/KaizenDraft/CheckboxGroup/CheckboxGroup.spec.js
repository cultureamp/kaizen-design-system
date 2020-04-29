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
var react_1 = require("@testing-library/react");
var React = __importStar(require("react"));
var CheckboxGroup_1 = __importDefault(require("./CheckboxGroup"));
afterEach(react_1.cleanup);
var defaultCheckboxGroupProps = {
    automationId: "CheckboxGroupAutomationId",
    labelText: "Label",
    noBottomMargin: true
};
var renderCheckboxGroupProps = function (props) {
    var mergedCheckboxGroupProps = __assign(__assign({}, defaultCheckboxGroupProps), props);
    return react_1.render(React.createElement(CheckboxGroup_1["default"], __assign({}, mergedCheckboxGroupProps)));
};
describe("<CheckboxGroup /> ", function () {
    it("should render a `data-automation-id` attribute", function () {
        var container = renderCheckboxGroupProps().container;
        expect(container.querySelector("[data-automation-id=\"" + defaultCheckboxGroupProps.automationId + "-field-checkbox-group\"]")).toBeTruthy();
    });
    it("should render a title", function () {
        var title = "Label";
        var queryByText = react_1.render(React.createElement(CheckboxGroup_1["default"], { labelText: title, children: null })).queryByText;
        expect(queryByText(title)).toBeTruthy();
    });
    test("renders Checkbox Group with noBottomMargin attribute", function () {
        var container = react_1.render(React.createElement(CheckboxGroup_1["default"], { automationId: "CheckboxGroupAutomationId", labelText: "CheckboxGroup Label", noBottomMargin: true })).container;
        expect(container.firstChild).toMatchSnapshot();
    });
    test("renders Checkbox Group without noBottomMargin attribute", function () {
        var container = react_1.render(React.createElement(CheckboxGroup_1["default"], { automationId: "CheckboxGroupAutomationId", labelText: "CheckboxGroup Label" })).container;
        expect(container.firstChild).toMatchSnapshot();
    });
});
//# sourceMappingURL=CheckboxGroup.spec.js.map