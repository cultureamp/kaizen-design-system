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
afterEach(react_1.cleanup);
var TestId;
(function (TestId) {
    TestId["tableContainer"] = "table-container";
    TestId["tableHeader"] = "table-header";
    TestId["tableHeaderRow"] = "table-header-row";
    TestId["tableHeaderRowCell"] = "table-header-row-cell";
    TestId["tableCard"] = "table-card";
    TestId["tableRow"] = "table-row";
    TestId["tableRowCell"] = "table-row-cell";
})(TestId || (TestId = {}));
var AriaRoles;
(function (AriaRoles) {
    AriaRoles["table"] = "table";
    AriaRoles["row"] = "row";
    AriaRoles["cell"] = "cell";
    AriaRoles["columnheader"] = "columnheader";
    AriaRoles["rowgroup"] = "rowgroup";
    AriaRoles["rowheader"] = "rowheader";
})(AriaRoles || (AriaRoles = {}));
/**
 * Simple Wrapper with absolute bare basics.
 * Although we use data-automation-id in practice,
 * I have opted with data-testid for quick validation.
 * I will leave it up to team DS if they want to
 * change the config if they wish.
 *
 * @see https://testing-library.com/docs/dom-testing-library/api-helpers#custom-queries
 */
var Wrapper = function () { return (React.createElement(_1.TableContainer, { "data-testid": TestId.tableContainer },
    React.createElement(_1.TableHeader, { "data-testid": TestId.tableHeader },
        React.createElement(_1.TableHeaderRow, { "data-testid": TestId.tableHeaderRow },
            React.createElement(_1.TableHeaderRowCell, { checkable: true, checkedStatus: "on", onCheck: function (_) { return true; }, active: true, onClick: function (_) { return true; }, labelText: "Resource name", width: 12 / 12, "data-testid": TestId.tableHeaderRowCell }))),
    React.createElement(_1.TableCard, { "data-testid": TestId.tableCard, onClick: function () { return alert("clicked!"); } },
        React.createElement(_1.TableRow, { "data-testid": TestId.tableRow },
            React.createElement(_1.TableRowCell, { width: 12 / 12, "data-testid": TestId.tableRowCell },
                React.createElement("div", null)))))); };
describe("Table", function () {
    describe("Custom HTML props", function () {
        var _loop_1 = function (key, value) {
            it(key + " accepts custom data-* attributes", function () {
                var getByTestId = react_1.render(React.createElement(Wrapper, null)).getByTestId;
                expect(getByTestId(value)).toBeTruthy();
            });
        };
        for (var _i = 0, _a = Object.entries(TestId); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            _loop_1(key, value);
        }
    });
    describe("Accessibility", function () {
        var _loop_2 = function (role) {
            it("contains ARIA compliant table role " + role, function () {
                var queryByRole = react_1.render(React.createElement(Wrapper, null)).queryByRole;
                expect(queryByRole(role)).toBeTruthy();
            });
        };
        // simple check for roles
        for (var _i = 0, _a = Object.entries(AriaRoles); _i < _a.length; _i++) {
            var role = _a[_i][0];
            _loop_2(role);
        }
    });
});
//# sourceMappingURL=Table.spec.js.map