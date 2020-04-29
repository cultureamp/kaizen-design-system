"use strict";
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
var _1 = require(".");
var styles = require("./styles.scss");
afterEach(react_1.cleanup);
describe("Tabs", function () {
    it("renders basic tabs", function () {
        var tabs = [{ label: "One" }, { label: "Two" }];
        var container = react_1.render(React.createElement(_1.Tabs, { tabs: tabs })).container;
        expect(container.firstChild).toMatchSnapshot();
    });
    it("renders an active tab", function () {
        var tabs = [{ label: "One", active: true }, { label: "Two" }];
        var _a = react_1.render(React.createElement(_1.Tabs, { tabs: tabs })), container = _a.container, getByText = _a.getByText;
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("One").classList.contains(styles.activeTab)).toBe(true);
    });
    it("renders a disabled tab", function () {
        var tabs = [{ label: "One", disabled: true }, { label: "Two" }];
        var _a = react_1.render(React.createElement(_1.Tabs, { tabs: tabs })), container = _a.container, getByText = _a.getByText;
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("One").classList.contains(styles.disabledTab)).toBe(true);
    });
    it("renders a tab with an onClick", function () {
        var onClick = jest.fn();
        var tabs = [{ label: "One", onClick: onClick }, { label: "Two" }];
        var _a = react_1.render(React.createElement(_1.Tabs, { tabs: tabs })), container = _a.container, getByText = _a.getByText;
        expect(container.firstChild).toMatchSnapshot();
        react_1.fireEvent.click(getByText("One"));
        expect(onClick).toHaveBeenCalled();
    });
    it("renders a tab with a href", function () {
        var href = "//example";
        var tabs = [{ label: "One", href: href }, { label: "Two" }];
        var _a = react_1.render(React.createElement(_1.Tabs, { tabs: tabs })), container = _a.container, getByText = _a.getByText;
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("One").getAttribute("href")).toBe(href);
    });
    describe("when using a custom tab renderer", function () {
        it("passes in the right arguments to the a custom tab renderer", function () {
            var tabs = [{ label: "One" }];
            var baseElement = react_1.render(React.createElement(_1.Tabs, { tabs: tabs, renderTab: function (_a) {
                    var 
                    // tslint:disable-next-line: no-shadowed-variable
                    tab = _a.tab, tabClassName = _a.tabClassName, activeTabClassName = _a.activeTabClassName, disabledTabClassName = _a.disabledTabClassName;
                    return (React.createElement("div", { key: tab.label },
                        React.createElement("span", null, tab.label),
                        React.createElement("span", null, tabClassName),
                        React.createElement("span", null, activeTabClassName),
                        React.createElement("span", null, disabledTabClassName)));
                } })).baseElement;
            var tab = baseElement.firstChild;
            var spans = tab.querySelectorAll("span");
            expect(spans[0].innerHTML).toBe("One");
            expect(spans[1].innerHTML).toBe(styles.tab);
            expect(spans[2].innerHTML).toBe(styles.activeTab);
            expect(spans[3].innerHTML).toBe(styles.disabledTab);
        });
    });
});
//# sourceMappingURL=Tabs.spec.js.map