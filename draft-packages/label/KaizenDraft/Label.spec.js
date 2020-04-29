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
var Label_1 = __importDefault(require("./Label"));
afterEach(react_1.cleanup);
var defaultLabelProps = {
    id: "someLabelId",
    labelText: "Some field label"
};
var renderLabel = function (props) {
    var mergedLabelProps = __assign(__assign({}, defaultLabelProps), props);
    return react_1.render(React.createElement(Label_1["default"], __assign({}, mergedLabelProps)));
};
describe("<Label />", function () {
    it("should render a label", function () {
        var queryByText = renderLabel().queryByText;
        expect(queryByText(defaultLabelProps.labelText)).toBeTruthy();
    });
    it("should render a `for` attribute", function () {
        var htmlFor = "someFieldId";
        var container = renderLabel({ htmlFor: htmlFor }).container;
        expect(container.querySelector("[for=\"" + htmlFor + "\"]")).toBeTruthy();
    });
    it("should render an `data-automation-id` attribute", function () {
        var automationId = "someLabelAutomationId";
        var container = renderLabel({ automationId: automationId }).container;
        expect(container.querySelector("[data-automation-id=\"" + automationId + "\"]")).toBeTruthy();
    });
    it("should render an `id` attribute", function () {
        var container = renderLabel().container;
        expect(container.querySelector("[id=\"" + defaultLabelProps.id + "\"]")).toBeTruthy();
    });
    it("should render a reversed label", function () {
        var container = renderLabel({ reversed: true }).container;
        expect(container.querySelector(".reversed")).toBeTruthy();
    });
    describe("label type", function () {
        it("should render a checkbox label", function () {
            var container = renderLabel({ labelType: "checkbox" }).container;
            expect(container.querySelector(".checkbox")).toBeTruthy();
        });
        it("should render a toggle label", function () {
            var container = renderLabel({ labelType: "toggle" }).container;
            expect(container.querySelector(".toggle")).toBeTruthy();
        });
        it("should render a text label", function () {
            var container = renderLabel({ labelType: "text" }).container;
            expect(container.querySelector(".text")).toBeTruthy();
        });
        it("should render a radio label", function () {
            var container = renderLabel({ labelType: "radio" }).container;
            expect(container.querySelector(".radio")).toBeTruthy();
        });
    });
});
//# sourceMappingURL=Label.spec.js.map