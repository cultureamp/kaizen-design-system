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
var RadioInput_1 = __importDefault(require("./RadioInput"));
afterEach(react_1.cleanup);
var defaultRadioInputProps = {
    id: "testRadioInputId",
    automationId: "RadioInputAutomationId",
    selectedStatus: false,
    disabled: false,
    name: "RadioInputName",
    onChange: jest.fn(),
    value: "radio-1"
};
var renderRadioInput = function (props) {
    var mergedRadioInputProps = __assign(__assign({}, defaultRadioInputProps), props);
    return react_1.render(React.createElement(RadioInput_1["default"], __assign({}, mergedRadioInputProps)));
};
describe("<RadioInput /> ", function () {
    it("should call the `onChange` event when clicked", function () {
        var container = react_1.render(React.createElement(RadioInput_1["default"], __assign({}, defaultRadioInputProps))).container;
        var radioInput = container.querySelector("[data-automation-id=\"" + defaultRadioInputProps.automationId + "\"]");
        if (radioInput) {
            react_1.fireEvent.click(radioInput);
            expect(defaultRadioInputProps.onChange).toBeCalledTimes(1);
        }
    });
    it("has the disabled attribute applied if the disabled prop is true", function () {
        var container = renderRadioInput({
            id: "testId",
            name: "someRadioName",
            disabled: true,
            value: "radio-1"
        }).container;
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("has a true .checked property when the selectedStatus is true", function () {
        var container = renderRadioInput({
            id: "testId",
            name: "someRadioName",
            selectedStatus: true,
            value: "radio-1"
        }).container;
        expect(container.querySelector("input").checked).toBeTruthy();
    });
    it("can be both checked and disabled at the same time", function () {
        var container = renderRadioInput({
            id: "testId",
            name: "someRadioName",
            selectedStatus: true,
            disabled: true,
            value: "radio-1"
        }).container;
        expect(container.querySelector("input").checked).toBeTruthy();
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("doesnt have the `.checked` property if the selectedStatus prop is not present", function () {
        var container = renderRadioInput({
            id: "testId",
            name: "someRadioName",
            value: "radio-1"
        }).container;
        expect(container.querySelector("input").checked).toBeFalsy();
    });
    it("should render an `id` attribute", function () {
        var container = renderRadioInput().container;
        expect(container.querySelector("[id=\"" + defaultRadioInputProps.id + "\"]")).toBeTruthy();
    });
    it("should render a `name` attribute", function () {
        var container = renderRadioInput().container;
        expect(container.querySelector("[name=\"" + defaultRadioInputProps.name + "\"]")).toBeTruthy();
    });
    it("should render a `data-automation-id` attribute", function () {
        var container = renderRadioInput().container;
        expect(container.querySelector("[data-automation-id=\"" + defaultRadioInputProps.automationId + "\"]")).toBeTruthy();
    });
    it("should render a `value` attribute", function () {
        var container = renderRadioInput().container;
        expect(container.querySelector("[value=\"" + defaultRadioInputProps.value + "\"]")).toBeTruthy();
    });
});
//# sourceMappingURL=RadioInput.spec.js.map