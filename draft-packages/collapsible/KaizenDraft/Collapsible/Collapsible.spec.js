"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var React = __importStar(require("react"));
var _1 = require("./");
react_1.configure({ testIdAttribute: "data-automation-id" });
afterEach(react_1.cleanup);
it("matches snapshot with everything enabled", function () {
    var container = react_1.render(React.createElement(_1.CollapsibleGroup, { separated: true, sticky: { top: "20px" }, noSectionPadding: true, automationId: "some-bogus-test-id" },
        React.createElement(_1.Collapsible, { id: "1", title: "First panel w/ custom header", renderHeader: function (title) { return React.createElement("div", null, title); } }, "First panel content"),
        React.createElement(_1.Collapsible, { id: "2", open: true, title: "Second panel", automationId: "another-bogus-test-id" }, "Second panel content"))).container;
    expect(container).toMatchSnapshot();
});
it("renders closed by default", function () {
    var getByTestId = react_1.render(React.createElement(_1.Collapsible, { id: "1", title: "First panel" }, "First panel content")).getByTestId;
    var section = getByTestId("collapsible-section-1");
    expect(section.style.height).toEqual("0px");
});
it("renders open when the open prop is specified", function () {
    var getByTestId = react_1.render(React.createElement(_1.Collapsible, { id: "1", open: true, title: "First panel" }, "First panel content")).getByTestId;
    var section = getByTestId("collapsible-section-1");
    expect(section.style.height).toEqual("auto");
});
it("includes the 'separated' class on containers when the 'separated' prop is specified", function () {
    var getByTestId = react_1.render(React.createElement(_1.CollapsibleGroup, { separated: true },
        React.createElement(_1.Collapsible, { id: "1", title: "First panel" }, "First panel content"),
        React.createElement(_1.Collapsible, { id: "2", title: "Second panel" }, "Second panel content"))).getByTestId;
    var collapsibleContainer = getByTestId("collapsible-container-2");
    expect(collapsibleContainer.classList.contains("separated")).toBeTruthy();
});
it("includes the 'sticky' class on buttons when the 'sticky' prop is specified", function () {
    var getByTestId = react_1.render(React.createElement(_1.CollapsibleGroup, { sticky: { top: "20px" } },
        React.createElement(_1.Collapsible, { id: "1", title: "First panel" }, "First panel content"),
        React.createElement(_1.Collapsible, { id: "2", title: "Second panel" }, "Second panel content"))).getByTestId;
    var collapsibleContainer = getByTestId("collapsible-button-1");
    expect(collapsibleContainer.classList.contains("sticky")).toBeTruthy();
});
it("toggles the height of the section on click of the button", function () { return __awaiter(void 0, void 0, void 0, function () {
    var getByTestId, button, section;
    return __generator(this, function (_a) {
        getByTestId = react_1.render(React.createElement(_1.Collapsible, { id: "1", open: true, title: "First panel" }, "First panel content")).getByTestId;
        button = getByTestId("collapsible-button-1");
        section = getByTestId("collapsible-section-1");
        react_1.fireEvent.click(button);
        expect(section.style.height).toEqual("0px");
        return [2 /*return*/];
    });
}); });
it("only toggles the height of the clicked panel in a group", function () {
    var getByTestId = react_1.render(React.createElement(_1.CollapsibleGroup, null,
        React.createElement(_1.Collapsible, { id: "1", open: true, title: "First panel" }, "First panel content"),
        React.createElement(_1.Collapsible, { id: "2", open: true, title: "Second panel" }, "Second panel content"))).getByTestId;
    var button = getByTestId("collapsible-button-1");
    var section = getByTestId("collapsible-section-2");
    react_1.fireEvent.click(button);
    expect(section.style.height).toEqual("auto");
});
it("gives precedence to renderHeader over title", function () {
    var _a = react_1.render(React.createElement(_1.Collapsible, { id: "1", open: true, title: "Should not be rendered", renderHeader: function () { return React.createElement("div", null, "This title should be rendered"); } }, "First panel content")), container = _a.container, getByTestId = _a.getByTestId;
    var titleText = getByTestId("collapsible-button-1").querySelector("div");
    expect(titleText && react_1.getNodeText(titleText)).toEqual("This title should be rendered");
    expect(react_1.queryByTestId(container, "collapsible-button-title-1")).toBeNull();
});
it("doesn't render section content when lazyLoad is enabled", function () {
    var container = react_1.render(React.createElement(_1.Collapsible, { id: "1", title: "Title", lazyLoad: true },
        React.createElement("div", { "data-automation-id": "lazy-load-content" }, "First panel content"))).container;
    expect(react_1.queryByTestId(container, "lazy-load-content")).toBeNull();
});
it("runs the onToggle callback", function () {
    var onToggle = jest.fn();
    var getByTestId = react_1.render(React.createElement(_1.Collapsible, { id: "1", open: true, title: "First panel", onToggle: onToggle }, "First panel content")).getByTestId;
    var button = getByTestId("collapsible-button-1");
    react_1.fireEvent.click(button);
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(false, "1");
    react_1.fireEvent.click(button);
    expect(onToggle).toHaveBeenCalledTimes(2);
    expect(onToggle).toHaveBeenCalledWith(true, "1");
});
it("respects controlled mode (stays open after click)", function () {
    var getByTestId = react_1.render(React.createElement(_1.Collapsible, { id: "1", open: true, title: "First panel", controlled: true }, "First panel content")).getByTestId;
    var button = getByTestId("collapsible-button-1");
    var section = getByTestId("collapsible-section-1");
    react_1.fireEvent.click(button);
    expect(section.style.height).toEqual("auto");
});
//# sourceMappingURL=Collapsible.spec.js.map