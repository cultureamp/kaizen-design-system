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
var Radio_1 = require("../Radio");
var RadioGroup_1 = __importDefault(require("./RadioGroup"));
afterEach(react_1.cleanup);
var defaultRadioGroupProps = {
    automationId: "RadioAutomationId",
    labelText: "Label"
};
var renderRadioGroup = function (props) {
    var mergedRadioGroupProps = __assign(__assign({}, defaultRadioGroupProps), props);
    return react_1.render(React.createElement(RadioGroup_1["default"], __assign({}, mergedRadioGroupProps)));
};
describe("<RadioGroup /> ", function () {
    describe("snapshots", function () {
        test("renders RadioGroup in a column and with a label", function () {
            var container = react_1.render(React.createElement(RadioGroup_1["default"], { labelText: "Label", children: null })).container;
            expect(container.firstChild).toMatchSnapshot();
        });
        test("renders RadioGroup in a row and with a label", function () {
            var container = react_1.render(React.createElement(RadioGroup_1["default"], { labelText: "Label", children: null })).container;
            expect(container.firstChild).toMatchSnapshot();
        });
        test("renders RadioGroup with radios", function () {
            var container = react_1.render(React.createElement(RadioGroup_1["default"], { labelText: "Label" },
                React.createElement(Radio_1.Radio, { name: "radio", id: "radio-1", labelText: "Label 1", selectedStatus: false, disabled: false, value: "radio-1" }),
                React.createElement(Radio_1.Radio, { name: "radio", id: "radio-2", labelText: "Label 2", selectedStatus: false, disabled: false, value: "radio-2" }))).container;
            expect(container.firstChild).toMatchSnapshot();
        });
        test("renders RadioGroup in a column and with a label", function () {
            var container = react_1.render(React.createElement(RadioGroup_1["default"], { labelText: "Label", children: null })).container;
            expect(container.firstChild).toMatchSnapshot();
        });
    });
    describe("presentational", function () {
        it("should render a title", function () {
            var title = "Label";
            var queryByText = react_1.render(React.createElement(RadioGroup_1["default"], { labelText: title, children: null })).queryByText;
            expect(queryByText(title)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=RadioGroup.spec.js.map