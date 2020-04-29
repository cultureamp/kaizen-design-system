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
var Radio_1 = __importDefault(require("./Radio"));
afterEach(react_1.cleanup);
var defaultRadioProps = {
    id: "testRadioId",
    automationId: "RadioAutomationId",
    selectedStatus: false,
    labelText: "Label",
    disabled: false,
    name: "RadioName",
    onChange: jest.fn(),
    inline: false,
    value: "radio-1"
};
var renderRadio = function (props) {
    var mergedRadioProps = __assign(__assign({}, defaultRadioProps), props);
    return react_1.render(React.createElement(Radio_1["default"], __assign({}, mergedRadioProps)));
};
describe("<Radio /> ", function () {
    it("has the disabled attribute applied if the disabled prop is true", function () {
        var container = renderRadio({
            id: "testId",
            name: "someRadioName",
            labelText: "Label",
            disabled: true,
            value: "radio-1"
        }).container;
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("has a true .checked property when the selectedStatus is true", function () {
        var container = renderRadio({
            id: "testId",
            name: "RadioName",
            labelText: "Label",
            selectedStatus: true,
            value: "radio-1"
        }).container;
        expect(container.querySelector("input").checked).toBeTruthy();
    });
    it("can be both checked and disabled at the same time", function () {
        var container = renderRadio({
            id: "testId",
            name: "RadioName",
            labelText: "Label",
            selectedStatus: true,
            disabled: true,
            value: "radio-1"
        }).container;
        expect(container.querySelector("input").checked).toBeTruthy();
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("doesnt have the `.checked` property if the selectedStatus prop is not present", function () {
        var container = renderRadio({
            id: "testId",
            name: "RadioName",
            labelText: "Label",
            value: "radio-1"
        }).container;
        expect(container.querySelector("input").checked).toBeFalsy();
    });
    it("should render an `id` attribute", function () {
        var container = renderRadio().container;
        expect(container.querySelector("[id=\"" + defaultRadioProps.id + "\"]")).toBeTruthy();
    });
    it("should render a `name` attribute", function () {
        var container = renderRadio().container;
        expect(container.querySelector("[name=\"" + defaultRadioProps.name + "\"]")).toBeTruthy();
    });
    it("should render a `data-automation-id` attribute", function () {
        var container = renderRadio().container;
        expect(container.querySelector("[data-automation-id=\"" + defaultRadioProps.automationId + "\"]")).toBeTruthy();
    });
    it("should render a `value` attribute", function () {
        var container = renderRadio().container;
        expect(container.querySelector("[value=\"" + defaultRadioProps.value + "\"]")).toBeTruthy();
    });
});
//# sourceMappingURL=Radio.spec.js.map