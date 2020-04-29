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
var FieldMessage_1 = __importDefault(require("./FieldMessage"));
afterEach(react_1.cleanup);
var defaultFieldMessageProps = {
    id: "someFieldMessageId",
    message: "Some FieldMessage."
};
var renderFieldMessage = function (props) {
    var mergedFieldMessageProps = __assign(__assign({}, defaultFieldMessageProps), props);
    return react_1.render(React.createElement(FieldMessage_1["default"], __assign({}, mergedFieldMessageProps)));
};
describe("<FieldMessage />", function () {
    it("should render a message", function () {
        var queryByText = renderFieldMessage().queryByText;
        expect(queryByText(defaultFieldMessageProps.message)).toBeTruthy();
    });
    it("should render an `id` attribute", function () {
        var container = renderFieldMessage().container;
        expect(container.querySelector("[id=\"" + defaultFieldMessageProps.id + "\"]")).toBeTruthy();
    });
    it("should render an `data-automation-id` attribute", function () {
        var automationId = "someFieldMessageAutomationId";
        var container = renderFieldMessage({ automationId: automationId }).container;
        expect(container.querySelector("[data-automation-id=\"" + automationId + "\"]")).toBeTruthy();
    });
    it("should render a `reversed` field message", function () {
        var container = renderFieldMessage({ reversed: true }).container;
        expect(container.querySelector(".reversed")).toBeTruthy();
    });
    it("should render an `error` field message", function () {
        var container = renderFieldMessage({ status: "error" }).container;
        expect(container.querySelector(".error")).toBeTruthy();
    });
});
//# sourceMappingURL=FieldMessage.spec.js.map