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
var Checkbox_1 = __importDefault(require("./Checkbox"));
afterEach(react_1.cleanup);
var defaultProps = {
    id: "someCheckboxId",
    automationId: "someCheckboxAutomationId",
    checkedStatus: "off",
    disabled: false,
    name: "someCheckboxName",
    onCheck: jest.fn()
};
var renderCheckbox = function (props) {
    var mergedInputProps = __assign(__assign({}, defaultProps), props);
    return react_1.render(React.createElement(Checkbox_1["default"], __assign({}, mergedInputProps)));
};
describe("<Checkbox />", function () {
    it("should call the `onCheck` event when clicked", function () {
        var container = react_1.render(React.createElement(Checkbox_1["default"], __assign({}, defaultProps))).container;
        var checkbox = container.querySelector("[data-automation-id=\"" + defaultProps.automationId + "\"]");
        if (checkbox) {
            react_1.fireEvent.click(checkbox);
            expect(defaultProps.onCheck).toBeCalledTimes(1);
        }
    });
    it("should render a disabled checkbox", function () {
        var container = renderCheckbox({ disabled: true }).container;
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("should render a `checked` checkbox", function () {
        var container = renderCheckbox({ checkedStatus: "on" }).container;
        expect(container.querySelector("[checked]")).toBeTruthy();
    });
    it("should render a `mixed` checkbox", function () {
        var container = renderCheckbox({ checkedStatus: "mixed" }).container;
        expect(container.querySelector("[data-indeterminate]")).toBeTruthy();
    });
    it("should render an `id` attribute", function () {
        var container = renderCheckbox().container;
        expect(container.querySelector("[id=\"" + defaultProps.id + "\"]")).toBeTruthy();
    });
    it("should render a `name` attribute", function () {
        var container = renderCheckbox().container;
        expect(container.querySelector("[name=\"" + defaultProps.name + "\"]")).toBeTruthy();
    });
    it("should render a `data-automation-id` attribute", function () {
        var container = renderCheckbox().container;
        expect(container.querySelector("[data-automation-id=\"" + defaultProps.automationId + "\"]")).toBeTruthy();
    });
});
//# sourceMappingURL=Checkbox.spec.js.map