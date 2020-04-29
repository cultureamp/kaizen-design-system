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
var Input_1 = __importDefault(require("./Input"));
afterEach(react_1.cleanup);
var defaultInputProps = {
    id: "someInputId",
    inputValue: "someInputValue",
    onChange: jest.fn()
};
var renderInput = function (props) {
    var mergedInputProps = __assign(__assign({}, defaultInputProps), props);
    return react_1.render(React.createElement(Input_1["default"], __assign({}, mergedInputProps)));
};
describe("<Input />", function () {
    it("should render a value inside of input", function () {
        var container = renderInput().container;
        expect(container.querySelector("[value=\"" + defaultInputProps.inputValue + "\"]")).toBeTruthy();
    });
    it("should call the `onChange` event when text value is updated", function () {
        var placeholder = "someInputPlaceholder";
        var utils = renderInput({ inputValue: "", placeholder: placeholder });
        var input = utils.getByPlaceholderText(placeholder);
        react_1.fireEvent.change(input, {
            target: { value: defaultInputProps.inputValue }
        });
        expect(defaultInputProps.onChange).toBeCalledTimes(1);
    });
    it("should render a disabled inside of input", function () {
        var container = renderInput({ disabled: true }).container;
        expect(container.querySelector("[disabled]")).toBeTruthy();
    });
    it("should render an `id` attribute", function () {
        var container = renderInput().container;
        expect(container.querySelector("[id=\"" + defaultInputProps.id + "\"]")).toBeTruthy();
    });
    it("should render an `ariaDescribedBy` attribute", function () {
        var ariaDescribedBy = "someInputMessageId";
        var container = renderInput({ ariaDescribedBy: ariaDescribedBy }).container;
        expect(container.querySelector("[aria-describedby=\"" + ariaDescribedBy + "\"]")).toBeTruthy();
    });
    it("should render an `data-automation-id` attribute", function () {
        var automationId = "someInputAutomationId";
        var container = renderInput({ automationId: automationId }).container;
        expect(container.querySelector("[data-automation-id=\"" + automationId + "\"]")).toBeTruthy();
    });
    it("should render a reversed input", function () {
        var container = renderInput({ reversed: true }).container;
        expect(container.querySelector(".reversed")).toBeTruthy();
    });
    it("should render a `success` input", function () {
        var container = renderInput({ status: "success" }).container;
        expect(container.querySelector(".success")).toBeTruthy();
    });
    it("should render an `error` input", function () {
        var container = renderInput({ status: "error" }).container;
        expect(container.querySelector(".error")).toBeTruthy();
    });
});
//# sourceMappingURL=Input.spec.js.map